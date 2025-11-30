# IMsProblemCalculationSettings.FilterLevelsOnLoad

IMsProblemCalculationSettings.FilterLevelsOnLoad
-


# IMsProblemCalculationSettings.FilterLevelsOnLoad


## Синтаксис


FilterLevelsOnLoad: Boolean;


## Описание


Свойство FilterLevelsOnLoad определяет, загружать ли данные только по тем уровням календаря, которые используются в цепочке расчёта задачи.


## Комментарии


Допустимые значения:


True. Значение по умолчанию. Загружаются только данные по тем уровням календаря, которые используются в цепочке расчёта задачи. Это позволяет сократить время расчёта задачи;


False. Загружаются данные по всем календарным уровням.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера моделирования с идентификатором «MS», содержащего задачу моделирования с идентификатором «PROBLEM».


Добавьте ссылки на системные сборки «Metabase», «Ms».


			Sub UserProc;

Var

    Mb: IMetabase;

    MsDescr: IMetabaseObjectDescriptor;

    Problem: IMsProblem;

    CalcSett: IMsProblemCalculationSettings;

    Period: IMsModelPeriod;

    ProblemCalc: IMsProblemCalculation;

Begin

    Mb := MetabaseClass.Active;

    // Получаем контейнер моделирования
    MsDescr := Mb.ItemById("MS");

    // Получаем задачу моделирования
    Problem := Mb.ItemByIdNamespace("PROBLEM", MsDescr.Key).Bind As IMsProblem;

    // Создаем параметры расчёта задачи
    CalcSett := Problem.CreateCalculationSettings;

    // Выполняем расчёт по сценарию «Факт»
    CalcSett.FactIncluded := True;

    // Загружаем только данные по тем уровням календаря,
    // которые используются в цепочке расчёта задачи
    CalcSett.FilterLevelsOnLoad := True;

    // Указываем период расчёта
    Period := CalcSett.Period;

    Period.IdentificationStartDate := DateTime.Parse("01.01.1990");

    Period.IdentificationEndDate := DateTime.Parse("31.12.2009");

    Period.ForecastStartDate := DateTime.Parse("01.01.2010");

    Period.ForecastEndDate := DateTime.Parse("01.01.2015");

    // Выполняем расчёт
    ProblemCalc := Problem.Calculate(CalcSett);

    ProblemCalc.SaveHistory := True;

    ProblemCalc.Run;

End Sub UserProc;


Результат выполнения примера: задача будет рассчитана по сценарию «Факт» с периодами идентификации и прогнозирования, указанными непосредственно перед расчётом. Данные для расчёта будут загружены только по тем уровням календаря, которые используются в цепочке расчёта задачи. История расчёта будет сохранена.


См. также:


[IMsProblemCalculationSettings](IMsProblemCalculationSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
