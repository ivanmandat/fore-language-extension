# IRubricatorFormulasLookup.WhereKind

IRubricatorFormulasLookup.WhereKind
-


# IRubricatorFormulasLookup.WhereKind


## Синтаксис


WhereKind: [RubricatorFormulaDataKind](../../Enums/RubricatorFormulaDataKind.htm);


## Описание


Свойство WhereKind определяет
 вид искомой формулы.


## Комментарии


Вид формулы определяется значением [IRubricatorFormulaData.Kind](../IRubricatorFormulaData/IRubricatorFormulaData.Kind.htm).


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

	    ForLoo.WhereKind := RubricatorFormulaDataKind.Params;

	    FormulaData := ForLoo.LookupData;

	    If FormulaData <> Null Then

	        Debug.WriteLine("Формула найдена. Ключ родителя: " + FormulaData.ParentKey.ToString);

	    Else

	        Debug.WriteLine("Формула не найдена");

	    End If;

	End Sub UserProc;


После выполнения примера будет создан объект, осуществляющий поиск в
 базе данных временных рядов параметров формулы. Если параметры будут найдены,
 то в окно консоли будет выведен ключ родительской формулы.


См. также:


[IRubricatorFormulasLookup](IRubricatorFormulasLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
