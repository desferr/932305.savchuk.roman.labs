using System.ComponentModel.DataAnnotations;

namespace _932305.savchuk.roman.lab13.Models;

public class QuizItem
{
    required public string Expression { get; set; }
    required public int CorrectAnswer { get; set; }

    [Required(ErrorMessage = "Поле не должно быть пустым!")]
    [Range(-9, 18, ErrorMessage = "Ответ всегда находится в [-9, 18]!")]
    public int? UserAnswer { get; set; }
    public bool IsCorrect => UserAnswer == CorrectAnswer;
}