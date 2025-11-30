# IMetaDictionaryLookup.WhereFactorMnemo

IMetaDictionaryLookup.WhereFactorMnemo
-


# IMetaDictionaryLookup.WhereFactorMnemo


## Синтаксис


WhereFactorMnemo: String;


## Описание


Свойство WhereFactorMnemo определяет
 искомое значение атрибута, указанного в свойстве [MnemoAttribute](IMetaDictionaryLookup.MnemoAttribute.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC_MN.


Добавьте ссылки на системные сборки: Metabase, Cube, Rds.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubDesc: IMetabaseObjectDescriptor;

	    RubrIn: IRubricatorInstance;

	    DictInst: IMetaDictionaryInstance;

	    MetaDLookup: IMetaDictionaryLookup;

	    Atts: IMetaAttributes;

	    Mnemo: String;

	    i: Integer;

	    Res: Array Of Integer;

	Begin

	    MB := MetabaseClass.Active;

	    RubDesc := MB.ItemById("FC_MN");

	    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

	    DictInst := RubrIn.Facts;

	    MetaDLookup := DictInst.CreateLookup;

	    Atts := DictInst.Dictionary.Attributes;

	    Mnemo := Atts.FindByKind(MetaAttributeKind.Mnemo).Id;

	    MetaDLookup.WhereFactorMnemo := "Afghanistan|BCA|Годы";

	    If MetaDLookup.LookupKeys("FACTOR") <> Null Then

	        i := MetaDLookup.LookupKeys("FACTOR").Length;

	        Res := New Integer[i];

	        Res := MetaDLookup.LookupKeys("FACTOR");

	        For i := 0 To Res.Length - 1 Do

	            Debug.WriteLine(Res[i].ToString);

	        End For;

	    End If;

	End Sub Userproc;


После выполнения примера в окно консоли будут выведены ключи показателей,
 обладающих мнемоникой «Afghanistan|BCA|Годы».


См. также:


[IMetaDictionaryLookup](IMetaDictionaryLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
