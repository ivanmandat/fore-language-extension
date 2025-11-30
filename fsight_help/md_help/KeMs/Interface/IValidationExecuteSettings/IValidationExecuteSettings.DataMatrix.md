# IValidationExecuteSettings.DataMatrix

IValidationExecuteSettings.DataMatrix
-


# IValidationExecuteSettings.DataMatrix


## Синтаксис


DataMatrix: [IMatrix](KeMatrix.chm::/Interface/IMatrix/IMatrix.htm);


## Описание


Свойство DataMatrix определяет
 матрицу данных, по которой будет рассчитана валидация.


## Комментарии


Если матрица не задана, то валидация будет рассчитана по данным базы
 данных временных рядов, которой она принадлежит.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором «TSDB», содержащей правило валидации
 с идентификатором «NAMBCOMP_VALIDATION».


Добавьте ссылки на системные сборки: Cubes, Matrix, Metabase, Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    TSDBObj: IMetabaseObjectDescriptor;

    Dest: ICubeInstanceDestination;

    DestExec: ICubeInstanceDestinationExecutor;

    DataMatrix: IMatrix;

    Ite: IMatrixIterator;

    ValidFilter: IValidationFilter;

    ExecSett: IValidationExecuteSettings;

    ExecRun: IValidationExecRun;

    i: Integer;

Begin

    Mb := MetabaseClass.Active;

    // Получаем базу данных временных рядов

    TSDBObj := Mb.ItemById("TSDB");

    // Получаем вариант отображения базы данных временных рядов

    Dest := (TSDBObj.Open(Null) As ICubeInstance).Destinations.DefaultDestination;

    DestExec := dest.CreateExecutor;

    DestExec.PrepareExecute(Null);

    DestExec.PerformExecute;

    // Получаем данные

    DataMatrix := DestExec.Matrix;

    // Изменяем данные

    Ite := DataMatrix.CreateIterator;

    Ite.Move(IteratorDirection.First);

    While Ite.Valid Do

        If Ite.Value < 10 Then

            Ite.Value := Ite.Value + 10;

        End If;

        Ite.Move(IteratorDirection.Next);

    End While;

    // Получаем правило валидации

    ValidFilter := Mb.ItemByIdNamespace("NAMBCOMP_VALIDATION", TSDBObj.Key).Bind As IValidationFilter;

    // Создаем параметры выполнения правила валидации

    ExecSett := ValidFilter.CreateExecuteSettings;

    // Задаем данные, на которых валидация будет рассчитываться

    ExecSett.DataMatrix := DataMatrix;

    // Выполняем расчет правила

    ExecRun := ValidFilter.Execute(ExecSett);

    // Выводим количество исключений в окно консоли

    Ite := ExecRun.Matrix.CreateIterator;

    Ite.Move(IteratorDirection.First);

    While Ite.Valid Do

        i := i + 1;

        Ite.Move(IteratorDirection.Next);

    End While;

    Debug.WriteLine("Количество исключений валидации: " + i.ToString);

End Sub UserProc;


В результате выполнения примера правило валидации будет рассчитано на
 измененных данных из базы данных временных рядов. Количество исключений
 валидации будет выведено в окно консоли.


См. также:


[IValidationExecuteSettings](IValidationExecuteSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
