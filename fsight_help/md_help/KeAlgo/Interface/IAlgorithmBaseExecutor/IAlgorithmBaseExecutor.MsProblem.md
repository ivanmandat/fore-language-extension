# IAlgorithmBaseExecutor.MsProblem

IAlgorithmBaseExecutor.MsProblem
-


# IAlgorithmBaseExecutor.MsProblem


## Синтаксис


MsProblem: [IMsProblem](KeMs.chm::/Interface/IMsProblem/IMsProblem.htm);


## Описание


Свойство MsProblem возвращает
 [задачу
 моделирования](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_4_Problem/uimodelling_problem.htm), которая используется при расчёте алгоритма.


## Пример


Для выполнения примера предполагается наличие в репозитории готового
 алгоритма расчёта с идентификатором ALGORITHM. В алгоритме расчёта должны
 содержаться настроенные объекты.


Добавьте ссылки на системные сборки: Algo, Metabase, Ms. Также добавьте
 [ссылку на сборку](../../Intro/KeAlgo_Programming.htm), необходимую
 для работы с алгоритмом расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo: ICalcObject;

	    CalcAlgo: ICalcAlgorithm;

	    BaseExecutor: IAlgorithmBaseExecutor;

	    ParamValues: IAlgorithmParameterValues;

	    MsProblem: IMsProblem;

	    ProblemCalculation: IMsProblemCalculation;

	    CalcSettings: IMsProblemCalculationSettings;

	Begin

	    MB := MetabaseClass.Active;

	    // Алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Объект для расчёта задачи моделирования

	    BaseExecutor := CalcAlgo As IAlgorithmBaseExecutor;

	    // Параметры алгоритма расчёта

	    ParamValues := BaseExecutor.ParamValues;

	    ParamValues.StartDate := DateTime.ComposeDay(2000, 1, 1);

	    ParamValues.EndDate := DateTime.ComposeDay(2020, 1, 1);

	    // Способ обработки ошибок, которые могут возникнуть при расчёте

	    BaseExecutor.ErrorState := SkipErrorState.Abort;

	    // Получаем задачу моделирования, на основе которой строится алгоритм.

	    // И рассчитываем её с настройками по умолчанию.

	    MsProblem := BaseExecutor.MsProblem;

	    Debug.WriteLine("Запуск задачи моделирования алгоритма: '" + MObj.Name + "'");

	    CalcSettings := MsProblem.CreateCalculationSettings;

	    ProblemCalculation := MsProblem.Calculate(CalcSettings);

	    ProblemCalculation.Run;

	    Debug.WriteLine("   Расчёт завершён.");

	End Sub UserProc;


При выполнении примера для алгоритма расчёта будут заданы начало и окончание
 периода расчёта. Будет получена и запущена задача моделирования, которая
 используется алгоритмом. При возникновении какой-либо ошибки расчёт будет
 остановлен.


См. также:


[IAlgorithmBaseExecutor](IAlgorithmBaseExecutor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
