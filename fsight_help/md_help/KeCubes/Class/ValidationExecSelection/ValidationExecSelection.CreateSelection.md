# ValidationExecSelection.CreateSelection

ValidationExecSelection.CreateSelection
-


# ValidationExecSelection.CreateSelection


## Синтаксис


CreateSelection(Selection: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm));


## Параметры


Selection.
 Отметка, в соответствии с которой должны быть получены данные.


## Описание


Конструктор CreateSelection
 создаёт отметку.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR, в которой должен существовать
 расчет валидации с ключом 1.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubInst: IRubricatorInstance;

	    ValiRun: IValidationExecRun;

	    ValidSel: IValidationExecSelection;

	    ValiData: IValidationExecData;

	    Mat: IMatrix;

	    Iterator: IMatrixIterator;

	Begin

	    MB := MetabaseClass.Active;

	    RubInst := MB.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

	    ValiData := RubInst.GetValidationExecData(1, DictionaryGetDataOptions.None);

	    ValidSel := New ValidationExecSelection.CreateSelection(Null);

	    ValiRun := RubInst.LoadValidationRun(ValiData, ValidSel);

	    Mat := ValiRun.Matrix;

	    Iterator := Mat.CreateIterator;

	    Iterator.Move(IteratorDirection.First);

	    While Iterator.Valid Do

	        Debug.WriteLine(Iterator.Value);

	        Iterator.Move(IteratorDirection.Next);

	    End While;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены данные расчёта
 валидации с указанным ключом, если данные существуют.


См. также:


[ValidationExecSelection](ValidationExecSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
