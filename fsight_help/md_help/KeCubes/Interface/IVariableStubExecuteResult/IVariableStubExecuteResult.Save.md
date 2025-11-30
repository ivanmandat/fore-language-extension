# IVariableStubExecuteResult.Save

IVariableStubExecuteResult.Save
-


# IVariableStubExecuteResult.Save


## Синтаксис


Save([ValueFlag: Integer = -1]): Variant;


## Параметры


ValueFlag. Флаг, которым отмечены
 изменённые данные.


## Описание


Метод Save осуществляет сохранение
 данных.


## Комментарии


После выполнения метода [IVariableStub.Execute](../IVariableStub/IVariableStub.Execute.htm),
 в зависимости от значения параметра EmptyMatrix, в свойстве [IVariableStubExecuteResult.Matrix](IVariableStubExecuteResult.Matrix.htm)
 будет доступна матрица с данными или пустая матрица со структурой источника
 данных. Если в этой матрице изменить какие-либо значения, то с помощью
 метода Save можно сохранить изменения
 в источник данных.


По умолчанию в параметре ValueFlag
 передаётся значение «-1», при этом всем данным в [матрице](IVariableStubExecuteResult.Matrix.htm)
 будет установлен флаг изменившихся значений «1» и осуществлено сохранение
 матрицы с этим флагом. Если в параметре ValueFlag
 передать значение «0», то матрица будет считаться неизменённой и ни какие
 данные сохранены не будут. Если в параметре ValueFlag
 передаётся значение больше нуля, то сохраняются те данные, для которых
 установлен передаваемый флаг изменившихся значений.


Метод возвращает ключ уникальной записи в протоколе доступа, созданной
 после сохранения данных.


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

    Coord: IMatrixCoord;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    Variable := MB.ItemById("STD_CUBE").Bind As IVariableStub;

    Result := Variable.Execute(Null, -1, True);

    //Получение пустой матрицы со структурой куба

    Mat := Result.Matrix;

    Mat.ValueFlag := 1;

    Coord := Mat.CreateCoord;

    For i := 0 To Coord.Count - 1 Do

        Coord.Item(i) := 0;

    End For;

    //Изменение значения по указанной координате

    Mat.Item(Coord) := 1000;

    //Сохранение изменений в куб

    Result.Save(Mat.ValueFlag);

End Sub UserProc;


При выполнении примера будет получена матрица, структура которой соответствует
 структуре куба. В матрице будет изменено значение в ячейке с нулевыми
 координатами. Изменённая матрица будет сохранена обратно в куб.


См. также:


[IVariableStubExecuteResult](IVariableStubExecuteResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
