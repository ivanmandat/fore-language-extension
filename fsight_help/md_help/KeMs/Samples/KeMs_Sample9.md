# Расчет задачи моделирования

Расчет задачи моделирования
-


# Расчет задачи моделирования


Для выполнения примеров в репозитории предполагается наличие контейнера
 моделирования с идентификатором «CONT_MODEL». Данный контейнер должен
 содержать задачу с идентификатором «PROBLEM_1».


## Пример


Добавьте ссылки на системные сборки: Metabase, Ms.


	Public Class MCallback: Object, IMsProblemCalculationCallback

	    Public Calculation: IMsProblemCalculation;


	    Public Sub OnError(Message: String);

	    Begin

	        Debug.WriteLine(Message);

	    End Sub OnError;


	    Public Sub OnFinish;

	    Begin

	        Debug.WriteLine("Расчет задачи завершен");

	        Calculation := Null;

	    End Sub OnFinish;


	    Public Sub OnMessage(Message: String);

	    Begin

	        Debug.Write(DateTime.Now);

	        Debug.WriteLine(": " + Message);

	    End Sub OnMessage;


	    Public Sub OnModelCalculation(Model: IMsModel);

	    Begin

	        Debug.WriteLine("Расчет модели: " + (Model As IMetabaseObject).Id);

	    End Sub OnModelCalculation;


	    Public Sub OnStep;

	    Begin

	        Debug.WriteLine("Выполнено шагов: " + Calculation.PointPassed.ToString +

	            " из " + Calculation.PointCount.ToString);

	    End Sub OnStep;


	    Public Sub OnBreak(Breakpoint: IMsBreakpoint);

	    Begin

	        Debug.WriteLine(Breakpoint.Name);

	    End Sub OnBreak;


	    Public Sub OnWarning(Message: string);

	    Begin

	        Debug.WriteLine("Предупреждение: " + Message);

	    End Sub OnWarning;

	End Class MCallback;


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Ms: IMetabaseObjectDescriptor;

	    Problem: IMsProblem;

	    CallBack: MCallback;

	    CalcSett: IMsProblemCalculationSettings;

	    Scens: IMsProblemScenarios;

	    Calculation: IMsProblemCalculation;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Ms := MB.ItemById("CONT_MODEL");

	    Problem := MB.ItemByIdNamespace("PROBLEM_1", Ms.Key).Bind As IMsProblem;

	    CallBack := New MCallback.Create;

	    CalcSett := Problem.CreateCalculationSettings;

	    CalcSett.Callback := CallBack;

	    Scens := Problem.Scenarios;

	    For i := 0 To Scens.Count - 1 Do

	        CalcSett.ScenarioIncluded(Scens.Item(i)) := True;

	    End For;

	    Calculation := Problem.Calculate(CalcSett);

	    Calculation.SaveHistory := True;

	    CallBack.Calculation := Calculation;

	    Calculation.Run;

	End Sub UserProc;


См. также:


[Примеры](KeMs_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
