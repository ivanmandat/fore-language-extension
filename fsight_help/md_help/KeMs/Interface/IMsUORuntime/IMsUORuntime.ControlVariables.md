# IMsUORuntime.ControlVariables

IMsUORuntime.ControlVariables
-


# IMsUORuntime.ControlVariables


## Синтаксис


ControlVariables: [IMsUORuntimeControlTerms](../IMsUORuntimeControlTerms/IMsUORuntimeControlTerms.htm);


## Описание


Свойство ControlVariables возвращает
 коллекцию управляющих переменных.


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

        CtrlVars: IMsUORuntimeControlTerms;

        CtrlVar: IMsUORuntimeControlTerm;

        i, c: Integer;

    Begin

        CtrlVars := Runtime.ControlVariables;

        c := CtrlVars.Count;

        Debug.WriteLine("--------------------------------------");

        For i := 0 To c - 1 Do

            Debug.WriteLine("Управляющая переменная " + i.ToString);

            CtrlVar := CtrlVars.Item(i);

            Debug.Indent;

            Debug.WriteLine("TermToText: " + CtrlVar.Term.TermToText);

            Debug.WriteLine("Value: " + CtrlVar.Value);

            Debug.WriteLine("String: " + CtrlVar.GenerateString);

            Debug.Unindent;

        End For;

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
 будет срабатывать событие OnExecute. В консоль среды разработки будут
 выводиться текстовые представления и значения управляющих переменных в
 каждой точке расчёта. После этого будет производиться расчёт всех уравнений.


См. также:


[IMsUORuntime](IMsUORuntime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
