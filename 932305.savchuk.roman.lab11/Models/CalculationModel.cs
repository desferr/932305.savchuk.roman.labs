namespace _932305.savchuk.roman.lab11.Models;

public class CalculationModel
{
    public int firstValue;
    public int secondValue;

    public CalculationModel()
    {
        Random rnd = new Random(DateTime.Now.Millisecond);
        firstValue = rnd.Next(10);
        secondValue = rnd.Next(10);
    }
}