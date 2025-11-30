# IValidationExecRun.Matrix

IValidationExecRun.Matrix
-


# IValidationExecRun.Matrix


## Синтаксис


Matrix: [IMatrix](KeMatrix.chm::/Interface/IMatrix/IMatrix.htm);


## Описание


Свойство Matrix возвращает данные
 расчета валидации.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR, содержащей показатели
 с ключами 12195999, 12196000 и расчёт валидации с ключом 1.


			Sub UserProc;

Var

    MB: IMetabase;

    RubInst: IRubricatorInstance;

    ValiRun: IValidationExecRun;

    ValidSel: IValidationExecSelection;

    ValiData: IValidationExecData;

    Mat: IMatrix;

    It: IMatrixIterator;

    Arr: Array[0..1] Of Integer;

Begin

    MB := MetabaseClass.Active;

    RubInst := MB.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    ValiData := RubInst.GetValidationExecData(1, DictionaryGetDataOptions.None);

    Arr[0] := 12195999;

    Arr[1] := 12196000;

    ValidSel := New ValidationExecSelection.CreateFactors(Null, Arr);

    ValiRun := RubInst.LoadValidationRun(ValiData, ValidSel);

    Mat := ValiRun.Matrix;

    It := Mat.CreateIterator;

    It.Move(IteratorDirection.First);

    While It.Valid Do

        Debug.WriteLine(It.Value);

        It.Move(IteratorDirection.Next);

    End While;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены данные расчёта
 валидации с указанным ключом для заданных показателей, если данные существуют.


См. также:


[IValidationExecRun](IValidationExecRun.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
