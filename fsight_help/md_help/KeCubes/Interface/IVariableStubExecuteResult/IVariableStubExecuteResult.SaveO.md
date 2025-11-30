# IVariableStubExecuteResult.SaveO

IVariableStubExecuteResult.SaveO
-


# IVariableStubExecuteResult.SaveO


## Синтаксис


SaveO(Options: [CubeInstanceStorageOptions](../../Enums/CubeInstanceStorageOptions.htm);
 [ValueFlag: Integer = -1]): Variant;


## Параметры


Options. Режимы сохранения
 данных.


ValueFlag. Флаг, которым отмечены
 изменённые данные.


## Описание


Метод SaveO осуществляет сохранение
 данных в заданном режиме.


## Комментарии


Принцип действия и возвращаемый результат метода SaveO
 совпадают с методом [Save](IVariableStubExecuteResult.Save.htm),
 но при этом также присутствует возможность задать режим сохранения данных.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 «STD_CUBE».


Добавьте ссылки на системные сборки: Cubes, Matrix, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Variable: IVariableStub;

    Result: IVariableStubExecuteResult;

    Mat: IMatrix;

    Ite: IMatrixIterator;

Begin

    MB := MetabaseClass.Active;

    Variable := MB.ItemById("STD_CUBE").Bind As IVariableStub;

    Result := Variable.Execute(Null, -1, True);

    // Получение пустой матрицы со структурой куба

    Mat := Result.Matrix;

    Mat.ValueFlag := 1;

    // Проход по матрице в итераторе и заполнение значениями

    Ite := Mat.CreateIterator;

    Ite.Move(IteratorDirection.First);

    While Ite.Valid Do

        Ite.Value := //...Задание значений по какому-либо критерию

        Ite.Move(IteratorDirection.Next);

    End While;

    // Сохранение изменений в куб

    Debug.WriteLine(Result.SaveO(CubeInstanceStorageOptions.InsertNulls, Mat.ValueFlag));

End Sub UserProc;


При выполнении примера будет получена матрица, структура которой соответствует
 структуре куба. На базе матрицы будет построен итератор, в котором можно
 определить значения отдельных точек по какому-либо критерию. После этого
 изменённая матрица будет сохранена обратно в куб в режиме сохранения пустых
 записей.


См. также:


[IVariableStubExecuteResult](IVariableStubExecuteResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
