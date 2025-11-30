# IRubricatorFormulasLookup.WhereParentKey

IRubricatorFormulasLookup.WhereParentKey
-


# IRubricatorFormulasLookup.WhereParentKey


## Синтаксис


WhereParentKey: Integer;


## Описание


Свойство WhereParentKey определяет
 ключ родительской формулы, по которой будет производиться поиск.


## Комментарии


Ключ родительской формулы определяет свойство [IRubricatorFormulaData.ParentKey](../IRubricatorFormulaData/IRubricatorFormulaData.ParentKey.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие база данных
 временных рядов с идентификатором FC_COMM.


Добавьте ссылки на системные сборки: Cubes, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    RubInst: IRubricatorInstance;

	    ForLoo: IRubricatorFormulasLookup;

	    FormulaData: IRubricatorFormulaData;

	Begin

	    Mb := MetabaseClass.Active;

	    RubInst := Mb.ItemById("FC_COMM").Open(Null) As IRubricatorInstance;

	    ForLoo := RubInst.CreateFormulasLookup;

	    ForLoo.WhereParentKey := 452233;

	    FormulaData := ForLoo.LookupData;

	    If FormulaData <> Null Then

	        Debug.WriteLine("Формула найдена. Тип: " + FormulaData.Kind.ToString);

	    Else

	        Debug.WriteLine("Формула не найдена");

	    End If;

	End Sub UserProc;


После выполнения примера будет создан объект, осуществляющий поиск в
 базе данных временных рядов формулы, родительская формула которой имеет
 ключ 452233. Если формула будет найдена, то в окно консоли будет выведено
 значение типа найденной формулы.


См. также:


[IRubricatorFormulasLookup](IRubricatorFormulasLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
