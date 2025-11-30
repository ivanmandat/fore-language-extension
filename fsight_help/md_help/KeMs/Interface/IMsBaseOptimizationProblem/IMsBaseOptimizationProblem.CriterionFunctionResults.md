# IMsBaseOptimizationProblem.CriterionFunctionResults

IMsBaseOptimizationProblem.CriterionFunctionResults
-


# IMsBaseOptimizationProblem.CriterionFunctionResults


## Синтаксис


		CriterionFunctionResults: Array;


## Описание


Свойство CriterionFunctionResults
 возвращает результат расчёта целевой функции.


## Комментарии


Для задания целевой функции используйте свойство [IMsBaseOptimizationProblem.CriterionFunction](IMsBaseOptimizationProblem.CriterionFunction.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего настроенную задачу оптимального
 управления с идентификатором CONTROL_PROBLEM.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    MsObj: IMetabaseObject;

		    Ms: IMsModelSpace;

		    Problem: IMsProblem;

		    CalcSettings: IMsProblemCalculationSettings;

		    Calc: IMsProblemCalculation;

		    ControlProblem: IMsControlProblem;

		    i: Integer;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем контейнер моделирования

		    MsObj := mb.ItemById("MS").Bind;

		    Ms := MsObj As IMsModelSpace;

		    // Получаем задачу оптимального управления

		    Problem := mb.ItemByIdNamespace("CONTROL_PROBLEM", MsObj.Key).Edit
		 As IMsProblem;

		    ControlProblem := Problem.Details As IMsControlProblem;

		    // Создаем настройки расчета задачи

		    CalcSettings := Problem.CreateCalculationSettings;

		    // Создаем объект для расчета задачи

		    Calc := Problem.Calculate(CalcSettings);

		    // Выполняем расчет

		    Calc.Run;

		    // Получаем рассчитанную задачу

		    ControlProblem := Problem.Details As IMsControlProblem;

		    // Выводим в окно консоли результат расчета целевой функции

		    For i := 0 To ControlProblem.CriterionFunctionResults.Length - 1 Do

		        Debug.WriteLine(ControlProblem.CriterionFunctionResults[i]);

		    End For;

		End Sub UserProc;


В результате выполнения примера в окно консоли будет выведен результат
 расчёта целевой функции в задаче оптимального управления.


См. также:


[IMsBaseOptimizationProblem](IMsBaseOptimizationProblem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
