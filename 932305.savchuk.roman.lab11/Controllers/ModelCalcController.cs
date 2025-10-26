using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using _932305.savchuk.roman.lab11.Models;

namespace _932305.savchuk.roman.lab11.Controllers;

public class ModelCalcController : Controller
{
        public IActionResult Index()
    {
        CalculationModel calcModel = new CalculationModel();
        return View(calcModel);
    }
}