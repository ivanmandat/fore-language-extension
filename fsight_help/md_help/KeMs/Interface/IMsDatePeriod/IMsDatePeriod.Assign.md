# IMsDatePeriod.Assign

IMsDatePeriod.Assign
-


# IMsDatePeriod.Assign


## Синтаксис


		Assign(Preiod: [IMsDatePeriod](IMsDatePeriod.htm));


## Параметры


Preiod. Копируемый период.


## Описание


Метод Assign копирует
 параметры указанного периода в текущий период.


## Комментарии


Данный метод позволяет полностью скопировать параметры периода, включая
 внутренние свойства.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего задачу прогнозирования
 с идентификатором PROBLEM_COPIED.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    MsKey: Integer;

		    CrInfo: IMetabaseObjectCreateInfo;

		    ProblemCopied, ProblemCopy: IMsProblem;

		    i: Integer;

		    CalcSettCopied, CalcSettCopy: IMsProblemCalculationSettings;

		    PeriodCopied, PeriodCopy: IMsModelPeriod;

		    OutputPeriodCopied, OutputPeriodCopy: IMsDatePeriod;

		    ProblemCalc: IMsProblemCalculation;

		Begin

		    mb := metabaseClass.Active;

		    // Получаем ключ контейнера моделирования

		    MsKey := mb.GetObjectKeyById("MS");

		    // Получаем копируемую задачу

		    ProblemCopied := mb.ItemByIdNamespace("PROBLEM_COPIED", MsKey).Edit As IMsProblem;

		    // Создаем объект для задачи-копии

		    CrInfo := MB.CreateCreateInfo;

		    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_MSPROBLEM;

		    CrInfo.Id := MB.GenerateId("PROBLEM_COPY", MsKey);

		    CrInfo.Name := "Задача моделирования (копия)";

		    CrInfo.Parent := ProblemCopied.MetabaseObject.Parent;

		    ProblemCopy := MB.CreateObject(CrInfo).Edit As IMsProblem;

		    // Копируем метамодель

		    ProblemCopy.MetaModel := ProblemCopied.MetaModel;

		    // Копируем параметры задачи

		    ProblemCopy.Details := ProblemCopied.Details;

		    // Копируем сценарии

		    For i := 0 To ProblemCopied.Scenarios.Count - 1 Do

		        ProblemCopy.Scenarios.AddScenario(ProblemCopied.Scenarios.Item(i));

		    End For;

		    // Копируем параметры периода выгрузки данных

		    CalcSettCopied := ProblemCopied.CreateCalculationSettings;

		    OutputPeriodCopied := CalcSettCopied.OutputPeriod As IMsDatePeriod;

		    CalcSettCopy := ProblemCopy.CreateCalculationSettings;

		    OutputPeriodCopy := CalcSettCopy.OutputPeriod As IMsDatePeriod;

		    OutputPeriodCopy.Assign(OutputPeriodCopied);

		    // Копируем периоды расчета задачи

		    PeriodCopied := CalcSettCopied.Period;

		    PeriodCopy := CalcSettCopy.Period;

		    PeriodCopy.Assign(PeriodCopied);

		    // Сохраняем копию

		    (ProblemCopy As IMetabaseObject).Save;

		    // Выполняем расчет задачи-копии

		    ProblemCalc := ProblemCopy.Calculate(CalcSettCopy);

		    ProblemCalc.Run;

		End Sub UserProc;


В результате выполнения примера будет скопирована задача PROBLEM_COPIED.
 Созданная копия будет рассчитана.


См. также:


[IMsDatePeriod](IMsDatePeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
