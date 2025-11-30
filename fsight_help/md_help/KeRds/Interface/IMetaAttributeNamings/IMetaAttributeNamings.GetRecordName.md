# IMetaAttributeNamings.GetRecordName

IMetaAttributeNamings.GetRecordName
-


# IMetaAttributeNamings.GetRecordName


## Синтаксис


GetRecordName(Record: [IMetaDataMemberRecord](../IMetaDataMemberRecord/IMetaDataMemberRecord.htm);
 Dimensions: Array): String;


## Параметры


Record. Элемент базы данных
 временных рядов.


Dimensions. Массив измерений.


## Описание


Метод GetRecordName возвращает
 наименование элемента базы данных временных рядов.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_FC и репозитория НСИ с идентификатором
 RDS_REPO. В репозитории НСИ должен присутствовать справочник с идентификатором
 DICT_CTR. В базе данных временных рядов должен присутствовать атрибут,
 ссылающийся на данный справочник.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Rds.


	Sub UserProc;

	Var

	    Dimensions: Array Of Variant;

	    MetaDic, DicEdit: IMetaDictionary;

	    Nams: IMetaAttributeNamings;

	    Rubricator: IRubricator;

	    Mb: IMetabase;

	    Di: integer;

	    s: String;

	    Loo: IRubricatorFactsLookup;

	    Inst: IRubricatorInstance;

	    RDS: IMetabaseObjectDescriptor;

	    Dim: IDimInstance;

	    RubFD: IRubricatorFactData;

	    k: Integer;

	Begin

	    Mb := MetabaseClass.Active;

	    Rubricator := Mb.ItemById("OBJ_FC").Bind As IRubricator;

	    MetaDic := Rubricator.Facts;

	    DicEdit := (MetaDic As IMetabaseObject).Edit As IMetaDictionary;

	    Inst := ((Rubricator As IMetabaseObject).Open(Null)) As IRubricatorInstance;

	    MetaDic := Rubricator.Facts;

	    Dimensions := New Variant[1];

	    RDS := Mb.ItemById("RDS_REPO");

	    Dim := MB.ItemByIdNamespace("DICT_CTR", RDS.Key).Open(Null) As IDimInstance;

	    Dimensions[0] := Dim;

	    Loo := Inst.CreateFactsLookup;

	    Loo.WhereRevisionBetween(15, 17);

	    Nams := DicEdit.AttributeNamings;

	    For Di := 0 To Loo.GetFactors.Count - 1 Do

	        k := Loo.GetFactors.Item(Di).Key;

	        RubFD := Inst.GetFactData(k);

	        s := Nams.GetRecordName(RubFD.Record, Dimensions);

	        Debug.WriteLine(s);

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены наименования
 элементов из справочника показателей, измененных между 15 и 17 ревизиями.


См. также:


[IMetaAttributeNamings](IMetaAttributeNamings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
