using System.ComponentModel.DataAnnotations;

namespace _932305.savchuk.roman.lab13.Models;

public class Quiz
{
    public List<QuizItem> History { get; set; } = new List<QuizItem>();
    private Random random = new Random();

    public void Reset()
    {
        History.Clear();
    }

    public string GenerateNewQuestion()
    {
        var expression = GenerateMathExpression();
        History.Add(new QuizItem
        {
            Expression = expression.expression,
            CorrectAnswer = expression.answer
        });
        return expression.expression;
    }

    public void SaveAnswer(int answer)
    {
        var lastItem = History[History.Count - 1];
        lastItem.UserAnswer = answer;
    }

    public int GetCorrectCount()
    {
        return History.Count(item => item.IsCorrect);
    }

    private (string expression, int answer) GenerateMathExpression()
    {
        int a = random.Next(10);
        int b = random.Next(10);
        string[] operators = { "+", "-" };
        string op = operators[random.Next(2)];
        int answer;
        if (op == "+") answer = a + b;
        else answer = a - b;
        return ($"{a} {op} {b}", answer);
    }
}