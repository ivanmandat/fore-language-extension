# IMsProblemCalculationSettings.OutputPeriod

IMsProblemCalculationSettings.OutputPeriod
-


# IMsProblemCalculationSettings.OutputPeriod


## Синтаксис


OutputPeriod: [IMsPeriod](../IMsPeriod/IMsPeriod.htm);


## Описание


Свойство OutputPeriod
 возвращает параметры периода выгрузки данных.


## Комментарии


Для настройки параметров идентификации и прогнозирования задачи используйте
 свойство [IMsProblemCalculationSettings.Period](IMsProblemCalculationSettings.Period.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащего задачу моделирования
 с идентификатором «PROBLEM_TRANSF_OUTPUT».


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    Mb: IMetabase;

    MsDescr: IMetabaseObjectDescriptor;

    Problem: IMsProblem;

    CalcSett: IMsProblemCalculationSettings;

    Period: IMsModelPeriod;

    ProblemCalc: IMsProblemCalculation;

    OutPeriod: IMsDatePeriod;

Begin

    Mb := MetabaseClass.Active;

    // Получаем контейнер моделирования

    MsDescr := Mb.ItemById("MS");

    // Получаем задачу моделирования

    Problem := Mb.ItemByIdNamespace("PROBLEM_TRANSF_OUTPUT", MsDescr.Key).Bind As IMsProblem;

    // Создаем параметры расчёта задачи

    CalcSett := Problem.CreateCalculationSettings;

    // Загружаем только данные по тем уровням календаря,

    // которые используются в цепочке расчёта задачи

    CalcSett.FilterLevelsOnLoad := True;

    // Указываем период расчёта

    Period := CalcSett.Period;

    Period.IdentificationStartDate := DateTime.Parse("01.01.1990");

    Period.IdentificationEndDate := DateTime.Parse("31.12.2009");

    Period.ForecastStartDate := DateTime.Parse("01.01.2010");

    Period.ForecastEndDate := DateTime.Parse("01.01.2015");

    // Получаем параметры периода выгрузки данных

    OutPeriod := CalcSett.OutputPeriod As IMsDatePeriod;

    // Очищаем параметры периода выгрузки данных

    OutPeriod.ClearPeriod;

    // Задаем параметры автопериода: период выгрузки данных определяется

    // периодом выгрузки данных у владельца рассчитываемого объекта

    OutPeriod.AutoPeriod := MsDateAutoPeriodOptions.StartByFact Or MsDateAutoPeriodOptions.EndAsNow;

    // Задаем смещение дат начала и окончания периода выгрузки данных

    OutPeriod.StartOffset := 1;

    OutPeriod.EndOffset := 2;

    // Выполняем расчет

    ProblemCalc := Problem.Calculate(CalcSett);

    ProblemCalc.Run;

End Sub UserProc;


В результате выполнения примера задача будет рассчитана по периодам
 идентификации, прогнозирования и выгрузки данных, указанным непосредственно
 перед расчётом. Данные


См. также:


[IMsProblemCalculationSettings](IMsProblemCalculationSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
