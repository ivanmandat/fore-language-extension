# IMsUORuntime.CriterionFunction

IMsUORuntime.CriterionFunction
-


# IMsUORuntime.CriterionFunction


## Синтаксис


CriterionFunction: [IMsUORuntimeCriterionFunction](../IMsUORuntimeCriterionFunction/IMsUORuntimeCriterionFunction.htm);


## Описание


Свойство CriterionFunction возвращает
 целевую функцию.


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

        CrFunc: IMsUORuntimeCriterionFunction;

    Begin

        CrFunc := Runtime.CriterionFunction;

        Debug.WriteLine("--------------------------------------");

        Debug.WriteLine("Execute: " + CrFunc.Execute);

        Debug.WriteLine("String: " + CrFunc.GenerateString);

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
 выводиться значение целевой функции в каждой точке расчёта. После этого
 будет производиться расчёт всех уравнений.


См. также:


[IMsUORuntime](IMsUORuntime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
