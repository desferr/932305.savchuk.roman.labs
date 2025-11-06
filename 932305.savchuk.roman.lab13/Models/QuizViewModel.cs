using System.ComponentModel.DataAnnotations;

namespace _932305.savchuk.roman.lab13.Models;

public class QuizViewModel
{
    [Required(ErrorMessage = "Поле не должно быть пустым!")]
    [Range(-9, 18, ErrorMessage = "Ответ всегда находится в [-9, 18]!")]
    public int? UserAnswer { get; set; }
    required public string Expression { get; set; }
    public List<QuizItem> History { get; set; } = new List<QuizItem>();
}