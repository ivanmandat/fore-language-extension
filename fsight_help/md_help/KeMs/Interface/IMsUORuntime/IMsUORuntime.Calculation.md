# IMsUORuntime.Calculation

IMsUORuntime.Calculation
-


# IMsUORuntime.Calculation


## Синтаксис


Calculation: [IMsMethodCalculation](../IMsMethodCalculation/IMsMethodCalculation.htm);


## Описание


Свойство Calculation возвращает
 параметры расчёта пользовательской задачи оптимизации.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования, содержащего пользовательскую задачу оптимизации. В задаче
 должен быть задан модуль, реализующий пользовательский алгоритм. Рассмотрим
 на примере содержимое данного модуля.


Добавьте ссылки на системные сборки: Ms, Xml.


			Public Class UserOptimization: Object, IMsUserOptimizationCallback

    Public Sub OnLoad(Xml: IXMLDOMElement);

    Begin

    End Sub OnLoad;


    Public Sub OnSave(Xml: IXMLDOMElement);

    Begin

    End Sub OnSave;


    Public Sub OnBeforeExecute(Calculation: IMsMethodCalculation; Coord: IMsFormulaTransformCoord; Problem: IMsUserOptimizationProblem);

    Begin

    End Sub OnBeforeExecute;


    Public Sub OnExecute(Runtime: IMsUORuntime);

    Var

        Calc: IMsMethodCalculation;

    Begin

        Calc := Runtime.Calculation;

        Debug.WriteLine("--------------------------------------");

        Debug.WriteLine("Текущая точка: " + Calc.CurrentPoint.ToString);

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
 будет срабатывать событие OnExecute. В консоль среды разработки будет
 выводиться календарная дата, соответствующая точке расчёта. После этого
 будет производиться расчёт всех уравнений в каждой точке расчёта.


См. также:


[IMsUORuntime](IMsUORuntime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
