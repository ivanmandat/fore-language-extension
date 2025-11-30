# IMetaAttributes.BuildAttributesByFields

IMetaAttributes.BuildAttributesByFields
-


# IMetaAttributes.BuildAttributesByFields


## Синтаксис


BuildAttributesByFields;


## Описание


Метод BuildAttributesByFields
 создает определения атрибутов по полям таблицы.


## Пример


Для выполнения примера предполагается наличие
 репозитория НСИ с идентификатором RDS_REPO, базы данных с идентификатором
 DB и таблицы с идентификатором OBJ_TABLE.


Добавьте ссылки на системные
 сборки Metabase, Rds, Db.


	Sub UserProc;

	Var

	    Mb: Imetabase;

	    ObjMb: IMetabaseObject;

	    RDS: IMetabaseObjectDescriptor;

	    Dict: IMetaDictionary;

	    CrInfo: IMetabaseObjectCreateInfo;

	    Des: IMetabaseObjectDescriptor;

	    Attributes: IMetaAttributes;

	    Table: ITable;

	Begin

	    Mb := MetabaseClass.Active;

	    CrInfo := Mb.CreateCreateInfo;

	    CrInfo.Id := "DICT_AT";

	    CrInfo.Name := "Dict_At";

	    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_METADICTIONARY;

	    RDS := Mb.ItemById("RDS_REPO");

	    CrInfo.Parent := RDS;

	    Des := Mb.CreateObject(CrInfo);

	    ObjMb := Des.Edit;

	    Dict := ObjMb.GetExtensionDispatch As IMetaDictionary;

	    Dict.Database := Mb.ItemById("DB").Bind As IDatabase;

	    Attributes := Dict.Attributes;

	    Table := Mb.ItemById("OBJ_TABLE").Bind As ITable;

	    Attributes.AttachTable(Table, False);

	    Attributes.BuildAttributesByFields;

	    ObjMb.Save;

	End Sub Userproc;


После выполнения примера в репозитории НСИ будет создан объект c идентификатором
 DICT_AT, предназначенный для хранения системной информации. Для объекта
 будет установлена таблица с идентификатором OBJ_TABLE для хранения значений.
 Определения атрибутов будут созданы по полям данной таблицы.


См. также:


[IMetaAttributes](IMetaAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
