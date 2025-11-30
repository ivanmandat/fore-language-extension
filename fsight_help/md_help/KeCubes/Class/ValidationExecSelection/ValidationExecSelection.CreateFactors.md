# ValidationExecSelection.CreateFactors

ValidationExecSelection.CreateFactors
-


# ValidationExecSelection.CreateFactors


## Синтаксис


CreateFactors(Selection: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);
 Factors: Array);


## Параметры


Selection. Отметка, в соответствии
 с которой должны быть получены данные.


Factors. Целочисленный массив,
 содержащий ключи показателей, данные по которым должны быть получены.


## Описание


Конструктор CreateFactors создаёт
 отметку с учётом показателей.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR, в которой должны существовать
 показатели с ключами 12195999, 12196000 и расчёт валидации с ключом 1.


			Sub UserProc;

Var

    MB: IMetabase;

    RubInst: IRubricatorInstance;

    ValiRun: IValidationExecRun;

    ValidSel: IValidationExecSelection;

    ValiData: IValidationExecData;

    Matr: IMatrix;

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

    Matr := ValiRun.Matrix;

    It := Matr.CreateIterator;

    It.Move(IteratorDirection.First);

    While It.Valid Do

        Debug.WriteLine(It.Value);

        It.Move(IteratorDirection.Next);

    End While;

End Sub UserProc;


После выполнения примера в консоль среды разработки будут выведены данные
 расчёта валидации с указанным ключом для заданных показателей, если данные
 существуют.


См. также:


[ValidationExecSelection](ValidationExecSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
