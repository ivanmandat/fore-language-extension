# IMsUORuntime.Equations

IMsUORuntime.Equations
-


# IMsUORuntime.Equations


## Синтаксис


Equations: [IMsUORuntimeEquations](../IMsUORuntimeEquations/IMsUORuntimeEquations.htm);


## Описание


Свойство Equations возвращает
 коллекцию уравнений, в соответствии с которыми осуществляется расчёт.


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

        Equations: IMsUORuntimeEquations;

        Equation: IMsUORuntimeEquation;

        i, c: Integer;

    Begin

        Equations := Runtime.Equations;

        c := Equations.Count;

        Debug.WriteLine("--------------------------------------");

        For i := 0 To c - 1 Do

            Debug.WriteLine("Уравнение " + i.ToString);

            Equation := Equations.Item(i);

            Equation.Execute;

            Debug.Indent;

            Debug.WriteLine("Method type: " + Equation.Formula.Kind.ToString);

            Debug.WriteLine("Result: " + Equation.Result);

            Debug.Unindent;

        End For;

    End Sub OnExecute;


    Public Sub OnAfterExecute(Calculation: IMsMethodCalculation; Coord: IMsFormulaTransformCoord; Problem: IMsUserOptimizationProblem);

    Begin

    End Sub OnAfterExecute;


    Public Sub OnSetupParams(Params: IMsModelParams);

    Begin

    End Sub OnSetupParams;

End Class UserOptimization;


При запуске пользовательской задачи оптимизации в каждой точке расчёта
 будет срабатывать событие OnExecute. В консоль среды разработки будут
 выводиться рассчитанные в текущей точке значения уравнений.


См. также:


[IMsUORuntime](IMsUORuntime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
