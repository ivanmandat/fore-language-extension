# IMetaDictionaryLookup.LookupCompoundKeys

IMetaDictionaryLookup.LookupCompoundKeys
-


# IMetaDictionaryLookup.LookupCompoundKeys


## Синтаксис


LookupCompoundKeys: Array;


## Описание


Свойство LookupCompoundKeys
 возвращает массив составных ключей для временных рядов.


## Комментарии


Признак того, что БД временных рядов использует составные ключи, возвращает
 свойство [IRubricator.CompoundFactorKey](KeCubes.chm::/Interface/IRubricator/IRubricator.CompoundFactorKey.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие БД временных
 рядов с идентификатором RUBRICATOR.


Добавьте ссылки на системные сборки: Metabase, Cubes, Rds.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubDesc: IMetabaseObjectDescriptor;

	    Rub: IRubricator;

	    RubrIn: IRubricatorInstance;

	    DictInst: IMetaDictionaryInstance;

	    MetaDLookup: IMetaDictionaryLookup;

	    Keys, cKey: Array Of Variant;

	    i, j: Integer;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    RubDesc := MB.ItemById("RUBRICATOR");

	    Rub := RubDesc.Bind As IRubricator;

	    If Rub.CompoundFactorKey Then

	        RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

	        DictInst := RubrIn.Facts;

	        MetaDLookup := DictInst.CreateLookup("");

	        Keys := MetaDLookup.LookupCompoundKeys;

	        For i := 0 To Keys.Length - 1 Do

	            cKey := Keys[i] As Array Of Variant;

	            s := "";

	            For j := 0 To cKey.Length - 1 Do

	                s := s + cKey[j] + "; ";

	            End For;

	            Debug.WriteLine(s);

	        End For;

	    End If;

	End Sub UserProc;


Результат выполнения примера: если БД временных рядов использует составные
 ключи, то их значения будут выведены в окно консоли.


См. также:


[IMetaDictionary](../IMetaDictionary/IMetaDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
