using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using _932305.savchuk.roman.lab12.Models;
using System.Data;
using System.Collections;

namespace _932305.savchuk.roman.lab12.Controllers;

public class CalcController : Controller
{

    public IActionResult Manual()
    {
        if (Request.Method == "GET")
        {
            ViewData["result"] = null;
            return View("Manual");
        }
        else
        {
            int firstNumber = int.Parse(Request.Form["firstNumber"]);
            int secondNumber = int.Parse(Request.Form["secondNumber"]);
            string? operation = Request.Form["operation"];
            ViewData["firstNumber"] = firstNumber;
            ViewData["secondNumber"] = secondNumber;
            ViewData["operation"] = operation;
            switch (operation)
            {
                case "+":
                    ViewData["result"] = ((double)firstNumber + (double)secondNumber).ToString();
                    break;
                case "-":
                    ViewData["result"] = ((double)firstNumber - (double)secondNumber).ToString();
                    break;
                case "*":
                    ViewData["result"] = ((double)firstNumber * (double)secondNumber).ToString();
                    break;
                case "/":
                    ViewData["result"] = secondNumber == 0 ? "Деление на ноль" : ((double)firstNumber / (double)secondNumber).ToString();
                    break;
            }
            return View("ManualResult");
        }
    }

    [HttpGet]
    public IActionResult ManualWithSeparateHandlers()
    {
        ViewData["result"] = null;
        return View();
    }

    [HttpPost]
    public IActionResult ManualWithSeparateHandlers(string _)
    {
        int firstNumber = int.Parse(Request.Form["firstNumber"]);
        int secondNumber = int.Parse(Request.Form["secondNumber"]);
        string? operation = Request.Form["operation"];
        ViewData["firstNumber"] = firstNumber;
        ViewData["secondNumber"] = secondNumber;
        ViewData["operation"] = operation;
        switch (operation)
        {
            case "+":
                ViewData["result"] = ((double)firstNumber + (double)secondNumber).ToString();
                break;
            case "-":
                ViewData["result"] = ((double)firstNumber - (double)secondNumber).ToString();
                break;
            case "*":
                ViewData["result"] = ((double)firstNumber * (double)secondNumber).ToString();
                break;
            case "/":
                ViewData["result"] = secondNumber == 0 ? "Деление на ноль" : ((double)firstNumber / (double)secondNumber).ToString();
                break;
        }
        return View("ManualWithSeparateHandlersResult");
    }

    [HttpGet]
    public IActionResult ModelBindingInParametrs()
    {
        ViewData["result"] = null;
        return View();
    }

    [HttpPost]
    public IActionResult ModelBindingInParametrs(int firstNumber, int secondNumber, string operation)
    {
        switch (operation)
        {
            case "+":
                ViewData["result"] = ((double)firstNumber + (double)secondNumber).ToString();
                break;
            case "-":
                ViewData["result"] = ((double)firstNumber - (double)secondNumber).ToString();
                break;
            case "*":
                ViewData["result"] = ((double)firstNumber * (double)secondNumber).ToString();
                break;
            case "/":
                ViewData["result"] = secondNumber == 0 ? "Деление на ноль" : ((double)firstNumber / (double)secondNumber).ToString();
                break;
        }
        return View("ModelBindingInParametrsResult");
    }

    [HttpGet]
    public IActionResult ModelBindingInSeparateModel()
    {
        return View();
    }

    [HttpPost]
    public IActionResult ModelBindingInSeparateModel([Bind("FirstNumber", "SecondNumber", "Operation")] CalculationModel calcModel)
    {
        calcModel.CalculateResult();
        return View("ModelBindingInSeparateModelResult", calcModel);
    }
}