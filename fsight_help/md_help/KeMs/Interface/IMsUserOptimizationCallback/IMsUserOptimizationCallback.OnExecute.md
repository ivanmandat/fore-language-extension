# IMsUserOptimizationCallback.OnExecute

IMsUserOptimizationCallback.OnExecute
-


# IMsUserOptimizationCallback.OnExecute


## Синтаксис


OnExecute(Runtime: IMsUORuntime);


## Параметры


Runtime. Текущий расчёт пользовательской
 задачи оптимизации.


## Описание


Метод OnExecute реализует событие,
 возникающее во время расчёта пользовательской задачи оптимизации на каждой
 календарной точке периода прогнозирования.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования, содержащего пользовательскую задачу оптимизации. В задаче
 должен быть задан модуль, реализующий пользовательский алгоритм. Рассмотрим
 на примере содержимое данного модуля.


Добавьте ссылки на системные сборки: Metabase, Ms, Ui, Xml.


			Public Class UserClass: Object, IMsUserOptimizationCallback

    Private m_iValue: Integer = 0;

    Private m_strLog: String;


    Public Sub OnLoad(Xml: IXMLDOMElement);

    Begin

        m_iValue := xml.getAttribute("CAT");

    End Sub OnLoad;


    Public Sub OnSave(Xml: IXMLDOMElement);

    Begin

    End Sub OnSave;


    Public Sub OnBeforeExecute(Calculation: IMsMethodCalculation; Coord: IMsFormulaTransformCoord; Problem: IMsUserOptimizationProblem);

    Begin

    End Sub OnBeforeExecute;


    Public Sub OnExecute(Runtime: IMsUORuntime);

    Var

        pControl: IMsUORuntimeControlTerm;

        pConstraint: IMsUORuntimeConstraint;

    Begin

        pControl := Runtime.ControlVariables.Item(0);

        pConstraint := Runtime.Constraints.Item(0);

        // Выведем информацию о расчёте задачи в информационном диалоге

        ResetLog;

        LogLine("Дата: " + CultureInfo.Current.FormatShortDate(Runtime.Calculation.CurrentPoint));

        LogLine("Управляющая переменная: " + pControl.GenerateString + " = " + (pControl.Value As String) + " (" + m_iValue.ToString + ")");

        LogLine("Выражение ограничения: " + pConstraint.GenerateStringL + " <= " + pConstraint.GenerateStringM + " <= " + pConstraint.GenerateStringH);

        LogLine("Значение выражения: " + (pConstraint.ExecuteL As String) + " <= " + (pConstraint.ExecuteM As String) + " <= " + (pConstraint.ExecuteH As String));

        LogLine("Целевая функция: " + Runtime.CriterionFunction.GenerateString + " = " + (Runtime.CriterionFunction.Execute As String));

        WinApplication.InformationBox(m_strLog);

    End Sub OnExecute;


    Public Sub OnAfterExecute(Calculation: IMsMethodCalculation; Coord: IMsFormulaTransformCoord; Problem: IMsUserOptimizationProblem);

    Begin

    End Sub OnAfterExecute;


    Public Sub OnSetupParams(Params: IMsModelParams);

    Begin

    End Sub OnSetupParams;


    Private Sub ResetLog;

    Begin

        m_strLog := "";

    End Sub ResetLog;


    Private Sub LogLine(strLine: String);

    Begin

        If Not m_strLog.IsEmpty Then

            m_strLog := m_strLog + #13 + #10;

        End If;

        m_strLog := m_strLog + strLine;

        Debug.WriteLine(strLine);

    End Sub LogLine;

End Class UserClass;


При запуске пользовательской задачи оптимизации и выполнении примера
 на Fore будет выдано информационное окно со значениями параметров расчёта
 на каждой календарной точке периода прогнозирования.


См. также:


[IMsUserOptimizationCallback](IMsUserOptimizationCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
