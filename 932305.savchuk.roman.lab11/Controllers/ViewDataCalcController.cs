using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using _932305.savchuk.roman.lab11.Models;

namespace _932305.savchuk.roman.lab11.Controllers;

public class ViewDataCalcController : Controller
{
        public IActionResult Index()
    {
        CalculationModel calcModel = new CalculationModel();
        ViewData["firstValue"] = calcModel.firstValue;
        ViewData["secondValue"] = calcModel.secondValue;
        return View();
    }
}