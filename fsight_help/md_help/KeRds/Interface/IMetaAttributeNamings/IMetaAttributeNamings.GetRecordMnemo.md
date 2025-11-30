# IMetaAttributeNamings.GetRecordMnemo

IMetaAttributeNamings.GetRecordMnemo
-


# IMetaAttributeNamings.GetRecordMnemo


## Синтаксис


GetRecordMnemo(Record: [IMetaDataMemberRecord](../IMetaDataMemberRecord/IMetaDataMemberRecord.htm);
 Dimensions: Array): String;


## Параметры


Record. Элемент базы данных
 временных рядов.


Dimensions. Массив измерений.


## Описание


Метод GetRecordMnemo возвращает
 мнемонику элемента базы данных временных рядов.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC_MN.


Добавьте ссылки на системные сборки: Cubes, Metabase, Rds.


	Sub UserProc;

	Var

	    Factors: Array Of Integer;

	    DicEdit: IMetaDictionary;

	    Nams: IMetaAttributeNamings;

	    Rubricator: IRubricator;

	    Mb: IMetabase;

	    Di: integer;

	    s: String;

	    Loo: IRubricatorFactsLookup;

	    Inst: IRubricatorInstance;

	    RubFD: IRubricatorFactData;

	    k: Integer;

	Begin

	    Mb := MetabaseClass.Active;

	    Rubricator := Mb.ItemById("FC_MN").Edit As IRubricator;

	    DicEdit := Rubricator.EditFacts;

	    Inst := ((Rubricator As IMetabaseObject).Open(Null)) As IRubricatorInstance;

	    Loo := Inst.CreateFactsLookup;

	    Nams := DicEdit.AttributeMnemoNamings;

	    Factors := Loo.LookupFactors;

	    For Di := 0 To Factors.Length - 1 Do

	        k := Factors[Di];

	        RubFD := Inst.GetFactData(k);

	        s := Nams.GetRecordMnemo(RubFD.Record, Null);

	        Debug.WriteLine(s);

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены мнемоники всех
 показателей в базе данных временных рядов.


См. также:


[IMetaAttributeNamings](IMetaAttributeNamings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
