using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using _932305.savchuk.roman.lab13.Models;

namespace _932305.savchuk.roman.lab13.Controllers;

public class MockupsController : Controller
{
    private static Quiz currentQuiz = new Quiz();
    private readonly ILogger<MockupsController> _logger;

    public MockupsController(ILogger<MockupsController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    [HttpGet]
    public ActionResult Quiz()
    {
        currentQuiz.Reset();
        var expression = currentQuiz.GenerateNewQuestion();
        var quizModel = new QuizViewModel
        {
            Expression = expression
        };
        return View(quizModel);
    }

    [HttpPost]
    public ActionResult Quiz(QuizViewModel quizModel, string action)
    {
        if (!ModelState.IsValid)
        {
            quizModel.Expression = currentQuiz.History.Last().Expression;
            quizModel.History = currentQuiz.History;
            return View(quizModel);
        }
        if (quizModel.UserAnswer.HasValue)
        {
            currentQuiz.SaveAnswer(quizModel.UserAnswer.Value);
        }
        if (action == "Next")
        {
            var expression = currentQuiz.GenerateNewQuestion();
            quizModel.Expression = expression;
            quizModel.History = currentQuiz.History;
            return View(quizModel);
        }
        else if (action == "Finish")
        {
            return RedirectToAction("QuizResult");
        }
        return View(quizModel);
    }

    [HttpGet]
    public ActionResult QuizResult()
    {
        ViewBag.CorrectCount = currentQuiz.GetCorrectCount();
        ViewBag.HistoryLength = currentQuiz.History.Count;
        ViewBag.History = currentQuiz.History;
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
