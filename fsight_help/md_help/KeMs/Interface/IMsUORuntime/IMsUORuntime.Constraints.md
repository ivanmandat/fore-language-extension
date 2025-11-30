# IMsUORuntime.Constraints

IMsUORuntime.Constraints
-


# IMsUORuntime.Constraints


## Синтаксис


Constraints: [IMsUORuntimeConstraints](../IMsUORuntimeConstraints/IMsUORuntimeConstraints.htm);


## Описание


Свойство Constraints возвращает
 коллекцию ограничений целевой функции.


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

        Constraints: IMsUORuntimeConstraints;

        Constraint: IMsUORuntimeConstraint;

        i, c: Integer;

    Begin

        If Not _b Then

            Constraints := Runtime.Constraints;

            c := Constraints.Count;

            For i := 0 To c - 1 Do

                Debug.WriteLine("Ограничение " + i.ToString);

                Constraint := Constraints.Item(i);

                Debug.Indent;

                Debug.WriteLine("Expression: " + Constraint.Constraint.Expression.AsString);

                Debug.WriteLine("H: " + Constraint.ExecuteH);

                Debug.WriteLine("M: " + Constraint.ExecuteM);

                Debug.WriteLine("L: " + Constraint.ExecuteL);

                Debug.WriteLine("String H: " + Constraint.GenerateStringH);

                Debug.WriteLine("String M: " + Constraint.GenerateStringM);

                Debug.WriteLine("String L: " + Constraint.GenerateStringL);

                Debug.Unindent;

            End For;

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
 будет выведена информация об имеющихся ограничениях целевой функции. После
 этого будет производиться расчёт всех уравнений в каждой точке расчёта.


См. также:


[IMsUORuntime](IMsUORuntime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
