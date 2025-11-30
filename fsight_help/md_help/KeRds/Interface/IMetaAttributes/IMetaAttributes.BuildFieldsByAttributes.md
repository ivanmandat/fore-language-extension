# IMetaAttributes.BuildFieldsByAttributes

IMetaAttributes.BuildFieldsByAttributes
-


# IMetaAttributes.BuildFieldsByAttributes


## Синтаксис


BuildFieldsByAttributes;


## Описание


Метод BuildFieldsByAttributes
 создает поля таблицы по определениям атрибутов базы данных временных рядов.


## Пример


Для выполнения примера предполагается наличие системного справочника
 с идентификатором DICT_AT и таблицы с идентификатором OBJ_TABLE.


Добавьте ссылки на системные
 сборки Metabase, Rds, Db.


	Sub UserProc;

	Var

	    Mb: Imetabase;

	    ObjMb: IMetabaseObject;

	    Dict: IMetaDictionary;

	    CrInfo: IMetabaseObjectCreateInfo;

	    Des: IMetabaseObjectDescriptor;

	    Attributes: IMetaAttributes;

	    Table: ITable;

	Begin

	    Mb := MetabaseClass.Active;

	    Dict := Mb.ItemById("DICT_AT").Edit As IMetaDictionary;

	    Attributes := Dict.Attributes;

	    Table := Mb.ItemById("OBJ_TABLE").Edit As ITable;

	    Attributes.AttachTable(Table, False);

	    Attributes.BuildFieldsByAttributes;

	    (Table As IMetabaseObject).Save;

	    (Dict As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера для объекта с идентификатором DICT_AT будет
 установлена таблица для хранения значений с идентификатором OBJ_TABLE.
 Определения полей данной таблицы будут созданы по атрибутам объекта.


См. также:


[IMetaAttributes](IMetaAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
