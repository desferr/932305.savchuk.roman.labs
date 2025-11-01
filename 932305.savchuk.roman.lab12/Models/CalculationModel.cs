namespace _932305.savchuk.roman.lab12.Models;

public class CalculationModel
{
    public int FirstNumber { get; set; }
    public int SecondNumber { get; set; }
    required public string Operation { get; set; }
    public string? Result { get; set; }

    public CalculationModel() { }

    public void CalculateResult()
    {
        switch (Operation)
        {
            case "+":
                Result = ((double)FirstNumber + SecondNumber).ToString();
                break;
            case "-":
                Result = ((double)FirstNumber - SecondNumber).ToString();
                break;
            case "*":
                Result = ((double)FirstNumber * SecondNumber).ToString();
                break;
            case "/":
                Result = SecondNumber == 0 ? "Деление на ноль" : ((double)FirstNumber / SecondNumber).ToString();
                break;
        }
    }
}