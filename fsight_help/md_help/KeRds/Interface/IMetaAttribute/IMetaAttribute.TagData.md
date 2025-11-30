# IMetaAttribute.TagData

IMetaAttribute.TagData
-


# IMetaAttribute.TagData


## Синтаксис


TagData: Variant;


## Описание


Свойство TagData определяет
 пользовательский признак атрибута. Данное свойство может использоваться
 для хранения прикладной информации на системном уровне.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC_COMM.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    Rubr: IRubricator;

	    mDict: IMetaDictionary;

	    mAttr: IMetaAttribute;

	Begin

	    mb := MetabaseClass.Active;

	    Rubr := mb.ItemById("FC_COMM").Edit As IRubricator;

	    mDict := Rubr.GetDictionary(RubricatorDictionary.Facts, RubricatorDictionaryOperation.Edit);

	    mAttr := mDict.Attributes.FindByKind(MetaAttributeKind.Factor);

	    mAttr.TagData := "Ключ показателя";

	    Rubr.AlterAndSave;

	End Sub UserProc;


После выполнения примера для атрибута «Показатель»
 будет задан пользовательский признак.


См. также:


[IMetaAttribute](IMetaAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
