# IMetaDictionary.Attributes

IMetaDictionary.Attributes
-


# IMetaDictionary.Attributes


## Синтаксис


Attributes: [IMetaAttributes](../IMetaAttributes/IMetaAttributes.htm);


## Описание


Свойство Attributes возвращает
 коллекцию атрибутов справочника.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 RDS_REPO и базы данных с идентификатором DB.


Добавьте ссылки на системные сборки: Cubes, Metabase, Rds.


	Sub UserProc;

	Var

	    Mb: Imetabase;

	    ObjMb: IMetabaseObject;

	    RDS: IMetabaseObjectDescriptor;

	    Dict: IMetaDictionary;

	    CrInfo: IMetabaseObjectCreateInfo;

	    Des: IMetabaseObjectDescriptor;

	    Attributes: IMetaAttributes;

	    Att: IMetaAttribute;

	    AttrNamings: IMetaAttributeNamings;

	    AttNm: IMetaAttributeNaming;

	Begin

	    Mb := MetabaseClass.Active;

	    CrInfo := Mb.CreateCreateInfo;

	    CrInfo.Id := "DICT1";

	    CrInfo.Name := "Dict";

	    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_METADICTIONARY;

	    RDS := Mb.ItemById("RDS_REPO");

	    CrInfo.Parent := RDS;

	    Des := Mb.CreateObject(CrInfo);

	    ObjMb := Des.Edit;

	    Dict := ObjMb.GetExtensionDispatch As IMetaDictionary;

	    Dict.Database := Mb.ItemById("DB").Bind As IDatabase;

	    Attributes := Dict.Attributes;

	    Attributes.CreateTable;

	    AttrNamings := Dict.AttributeNamings;

	    Att := Attributes.Add;

	    Att.DataType := DbDataType.Integer;

	    Att.Id := "KEY";

	    Att.Name := "Ключ";

	    Att.Nullable := False;

	    AttNm := AttrNamings.Add(Att);

	    ObjMb.Save;

	End Sub UserProc;


После выполнения примера в репозитории НСИ будет создан объект с идентификатором
 DICT1, предназначенный для хранения системной информации, с одним обязательным
 атрибутом «KEY». Также будет создана таблица для хранения значений атрибута.


См. также:


[IMetaDictionary](IMetaDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
