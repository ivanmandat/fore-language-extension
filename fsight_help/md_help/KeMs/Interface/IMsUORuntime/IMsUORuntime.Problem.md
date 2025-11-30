# IMsUORuntime.Problem

IMsUORuntime.Problem
-


# IMsUORuntime.Problem


## Синтаксис


Problem: [IMsUserOptimizationProblem](../IMsUserOptimizationProblem/IMsUserOptimizationProblem.htm);


## Описание


Свойство Problem возвращает
 пользовательскую задачу оптимизации, для которой производится расчёт.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования, содержащего пользовательскую задачу оптимизации. В задаче
 должен быть задан модуль, реализующий пользовательский алгоритм. Рассмотрим
 на примере содержимое данного модуля.


Добавьте ссылки на системные сборки: Ms, Xml.


			Public Class UserOptimization: Object, IMsUserOptimizationCallback

    _b: Boolean;


    Public Sub OnLoad(Xml: IXMLDOMElement);

    Begin

        _b := False;

    End Sub OnLoad;


    Public Sub OnSave(Xml: IXMLDOMElement);

    Begin

    End Sub OnSave;


    Public Sub OnBeforeExecute(Calculation: IMsMethodCalculation; Coord: IMsFormulaTransformCoord; Problem: IMsUserOptimizationProblem);

    Begin

    End Sub OnBeforeExecute;


    Public Sub OnExecute(Runtime: IMsUORuntime);

    Var

        UserProblem: IMsUserOptimizationProblem;

        Problem: IMsProblem;

        Period: IMsModelPeriod;

    Begin

        If Not _b Then

            UserProblem := Runtime.Problem;

            Problem := UserProblem.Problem;

            Period := UserProblem.Period;

            Debug.WriteLine("Пользовательская задача оптимизации: " + Problem.Name + '(' + Problem.Id + ')');

            Debug.WriteLine("Периода идентификации: " + Period.IdentificationStartDate.Year.ToString + " - " + Period.IdentificationEndDate.Year.ToString);

            Debug.WriteLine("Периода прогнозирования: " + Period.ForecastStartDate.Year.ToString + " - " + Period.ForecastEndDate.Year.ToString);

            _b := True;

        End If;

        // Расчёт уравнений в текущей точке

        Runtime.Equations.ExecuteAll;

    End Sub OnExecute;


    Public Sub OnAfterExecute(Calculation: IMsMethodCalculation; Coord: IMsFormulaTransformCoord; Problem: IMsUserOptimizationProblem);

    Begin

    End Sub OnAfterExecute;


    Public Sub OnSetupParams(Params: IMsModelParams);

    Begin

    End Sub OnSetupParams;

End Class UserOptimization;


При запуске пользовательской задачи оптимизации в каждой точке расчёта
 будет срабатывать событие OnExecute. В консоль среды разработки один раз
 будет выведена информация о рассчитываемой пользовательской задаче оптимизации.
 После этого будет производиться расчёт всех уравнений в каждой точке расчёта.


См. также:


[IMsUORuntime](IMsUORuntime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
