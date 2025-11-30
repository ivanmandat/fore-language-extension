# IMsModelCalculation.Variable

IMsModelCalculation.Variable
-


# IMsModelCalculation.Variable


## Синтаксис


Variable(Variable: [IMsVariable](../IMsVariable/IMsVariable.htm)):
 [IMatrix](KeMatrix.chm::/Interface/IMatrix/IMatrix.htm);


## Параметры


Variable. Переменная, данные
 которой необходимо получить.


## Описание


Свойство Variable возвращает
 матрицу с данными переменной.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором KONT_MODEL. В данном контейнере создана
 и настроена задача моделирования с идентификатором Problem_1.


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

    Var

        i, j: Integer;

        ModelCalc: IMsModelCalculation;

        Matr: IMatrix;

        MatrIter: IMatrixIterator;

    Begin

        Debug.WriteLine("Расчет модели: " + (Model As IMetabaseObject).Id);

        For i := 0 To Model.Transform.Inputs.Count - 1 Do

            Debug.WriteLine("Данные переменной: " + (Model.Input.Item(i) As IMetabaseObject).Id);

            ModelCalc := Model.CreateCalculation;

            Matr := ModelCalc.Variable(Model.Input.Item(i));

            MatrIter := Matr.CreateIterator;

            MatrIter.Move(IteratorDirection.First);

            j := 0;

            While MatrIter.Valid Do

                Debug.WriteLine("j = " + j.ToString + "  " + (MatrIter.Value As String) + " ");

                MatrIter.Move(IteratorDirection.Next);

                j := j + 1;

            End While;

        End For;

    End Sub OnModelCalculation;

    Public Sub OnStep;

    Begin

        Debug.WriteLine("Выполнено шагов: " + Calculation.PointPassed.ToString + " из " + Calculation.PointCount.ToString);

    End Sub OnStep;

End Class MCallback;


Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Problem: IMsProblem;

    CallBack: MCallback;

    CalcSett: IMsProblemCalculationSettings;

    Calculation: IMsProblemCalculation;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("Problem_1", MB.ItemById("KONT_MODEL").Key).Edit;

    Problem := MObj As IMsProblem;

    CallBack := New MCallback.Create;

    CalcSett := Problem.CreateCalculationSettings;

    CalcSett.Callback := CallBack;

    Calculation := Problem.Calculate(CalcSett);

    CallBack.Calculation := Calculation;

    Calculation.Run;

    MObj.Save;

End Sub UserProc;


После выполнения примера будет осуществлен расчет задачи с идентификатором
 PROBLEM_1. Для отслеживания событий, происходящих во время расчета, используется
 объект пользовательского класса MCallback. При отработке события OnModelCalculation
 в консоль будут выводиться данные всех входных переменных моделей, используемых
 при расчете задачи. При отработке события OnStep в консоль будет выводиться
 количество пройденных шагов расчёта.


См. также:


[IMsModelCalculation](IMsModelCalculation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
