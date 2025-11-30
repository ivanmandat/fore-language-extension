# IMsProblemCalculation.VariableStub

IMsProblemCalculation.VariableStub
-


# IMsProblemCalculation.VariableStub


## Синтаксис


VariableStub(Stub: [IVariableStub](KeCubes.chm::/Interface/IVariableStub/IVariableStub.htm)):
 [IMatrixDataSource](KeMatrix.chm::/Interface/IMatrixDataSource/IMatrixDataSource.htm);


## Параметры


Stub.
 Переменная, к данным которой необходимо получить доступ.


## Описание


Свойство VariableStub возвращает
 объект, позволяющий получить доступ к данным переменной контейнера моделирования,
 передаваемой посредством параметра Stub.


Примечание.
 В контейнере моделирования для просмотра данных переменных реализован
 собственный источник данных. Построение матрицы осуществляется по всем
 элементам измерений.


## Пример


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

            Debug.WriteLine("Данные переменной: " + (Model.Transform.Inputs.Item(i) As IMetabaseObject).Id);

            ModelCalc := Model.CreateCalculation;

            Matr := ModelCalc.Variable(Model.Transform.Inputs.Item(i) As IMsVariable);

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

    Public Sub OnBreak(Breakpoint: IMsBreakpoint);

    Begin

        Debug.WriteLine(Breakpoint.Name);

    End Sub OnBreak;

    Public Sub OnWarning(Message: string);

    Begin

        Debug.WriteLine("Предупреждение: " + Message);

    End Sub OnWarning;

    Public Sub OnStageStart(Stage: MsProblemCalculationStage; Data: Variant);

    Begin

        Debug.Write("Начало стадии ");

        Select Case Stage

            Case MsProblemCalculationStage.Init: Debug.WriteLine("'Инициализация'");

            Case MsProblemCalculationStage.DetermIdent: Debug.WriteLine("'Идентификация детерминированных уравнений'");

            Case MsProblemCalculationStage.Vector: Debug.WriteLine("'Идентификация векторных уравнений'");

            Case MsProblemCalculationStage.Ident: Debug.WriteLine("'Идентификация стохастических методов'");

            Case MsProblemCalculationStage.Calc: Debug.WriteLine("'Расчет моделей'");

            Case MsProblemCalculationStage.Save: Debug.WriteLine("'Сохранение данных'");

            Case MsProblemCalculationStage.Finish: Debug.WriteLine("'Окончание расчета'");

            Case MsProblemCalculationStage.Load: Debug.WriteLine("'Загрузка данных'");

        End Select;

    End Sub OnStageStart;

    Public Sub OnStageFinish(Stage: MsProblemCalculationStage; Duration: Integer; Data: Variant);

    Begin

        Debug.WriteLine("Стадия завершена. Потрачено времени в миллисекундах: " + Duration.ToString);

        Debug.WriteLine("");

    End Sub OnStageFinish;

    Public Sub OnBeforeSaveData(Stub: IVariableStub; Matrix: IMatrix; var ValueFlag: Integer; Var Cancel: Boolean);

    Begin

    End Sub OnBeforeSaveData;


    Public Sub OnSaveData(Stub: IVariableStub; Matrix: IMatrix; ValueFlag: Integer; AuditRecordKey: Variant);

    Begin

    End Sub OnSaveData;

    Public Function OnGetActiveEvents: MsProblemCalculationCallbackEvents;

    Begin

        Return MsProblemCalculationCallbackEvents.All

    End Function OnGetActiveEvents;

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
 объект пользовательского класса MCallback. При отработке события OnStep
 в консоль будет выводиться количество пройденных шагов расчета. При расчете
 моделей, входящих в задачу, в консоль будут выводиться данные входных
 переменных, используемые при расчете моделей.


См. также:


[IMsProblemCalculation](IMsProblemCalculation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
