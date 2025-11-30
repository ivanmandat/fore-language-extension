# IMetaAttributesCollection.Add

IMetaAttributesCollection.Add
-


# IMetaAttributesCollection.Add


## Синтаксис


Add(Attrubute: [IMetaAttribute](../IMetaAttribute/IMetaAttribute.htm));


## Параметры


Attribute -
 добавляемый атрибут.


## Описание


Метод Add осуществляет добавление
 атрибута в коллекцию.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 RDS_REPO. В репозитории НСИ должны присутствовать справочники с идентификаторами
 DICT_CTR и DICT_IND.


Добавьте ссылки на системные сборки Metabase, Rds, Cubes.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Inf: IMetabaseObjectCreateInfo;

	    Obj: IMetabaseObjectDescriptor;

	    Cat: IRubricator;

	    RdsDescr: IMetabaseObjectDescriptor;

	    Rds: IRdsDatabase;

	    Facts: IMetaDictionary;

	    Attributes: IMetaAttributes;

	    Attribute: IMetaAttribute;

	    Indexes: IMetaIndexes;

	    Index: IMetaIndex;

	    AttrColl: IMetaAttributesCollection;

	Begin

	    Mb := MetabaseClass.Active;

	    RdsDescr := Mb.ItemById("RDS_REPO");

	    // Определение параметров базы данных временных рядов

	    Inf := Mb.CreateCreateInfo;

	    Inf.Id := Mb.GenerateId("OBJ_FC");

	    Inf.Name := Inf.Id;

	    Inf.ClassId := MetabaseObjectClass.KE_CLASS_RUBRICATOR;

	    Inf.Parent := Mb.Root;

	    Inf.KeepEdit := True;

	    Obj := Mb.CreateObject(Inf);

	    Cat := (Obj As IRubricator);

	    Rds := RdsDescr.Bind As IRdsDatabase;

	    Cat.Database := Rds;

	    Cat.GetDictionary(RubricatorDictionary.AllDictionaries,

	    RubricatorDictionaryOperation.Create Or RubricatorDictionaryOperation.ForEachBasis);

	    // Создание обязательного пользовательского атрибута «COUNTRY»

	    Facts := Cat.Facts;

	    Attributes := Facts.Attributes;

	    Attribute := Attributes.Add;

	    Attribute.Id := "COUNTRY";

	    Attribute.Name := "Country";

	    Attribute.Nullable := False;

	    Attribute.HasMultipleValues := False;

	    Attribute.DataType := DbDataType.Integer;

	    Attribute.ValuesObject := Mb.ItemByIdNamespace("DICT_CTR", RdsDescr.Key).Bind;

	    // Создание обязательного пользовательского атрибута «INDICATOR»

	    Attribute := Attributes.Add;

	    Attribute.Id := "INDICATOR";

	    Attribute.Name := "Indicator";

	    Attribute.Nullable := False;

	    Attribute.HasMultipleValues := False;

	    Attribute.DataType := DbDataType.Integer;

	    Attribute.ValuesObject := Mb.ItemByIdNamespace("DICT_IND", RdsDescr.Key).Bind;

	    // Создание индекса

	    Indexes := Facts.Indexes;

	    Index := Indexes.Add;

	    Index.Name := "Новый индекс";

	    Index.Unique := True;

	    Attributes := Facts.Attributes;

	    AttrColl := Index.Attributes;

	    Attribute := Attributes.FindById("COUNTRY");

	    AttrColl.Add(Attribute);

	    Attribute := Attributes.FindById("INDICATOR");

	    AttrColl.Add(Attribute);

	    Attributes.CreateTable;

	    (Obj As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в репозитории будет создана база данных временных
 рядов с идентификатором OBJ_FC. Для измерения показателей будет создан
 уникальный индекс, состоящий из обязательных пользовательских атрибутов
 с идентификаторами COUNTRY и INDICATOR.


См. также:


[IMetaAttributesCollection](IMetaAttributesCollection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
