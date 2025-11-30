# IMetabaseUpdateSqlNode.SetDefaultSql

IMetabaseUpdateSqlNode.SetDefaultSql
-


# IMetabaseUpdateSqlNode.SetDefaultSql


## Синтаксис


SetDefaultSql(Value: String);


## Параметры


Value. Текст SQL-запроса.


## Описание


Метод SetDefaultSql устанавливает
 текст SQL-запроса, используемый по умолчанию для всех СУБД.


## Комментарии


Для установки отдельного текста SQL-запроса для определенной СУБД используйте
 метод [IMetabaseUpdateSqlNode.Sql](IMetabaseUpdateSqlNode.Sql.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории таблицы
 с идентификатором OBJ_TABLE и БД с идентификатором DB. В схеме, на которую
 настроена данная база данных, имеется таблица с физическим именем LOG_TABLE.
 В данной таблице ведется история выполнения каких-либо действий. Таблица
 содержит поля ACTION и DATE_ACTION, в которых будут указываться описание
 действия и дата, когда было совершено действие.


Добавьте ссылки на системные сборки: Db, Metabase.


	    Sub UserProc;

	    Var

	        Mb: IMetabase;

	        Db: IMetabaseObject;

	        Mu: IMetabaseUpdate;

	        Root: IMetabaseUpdateFolderNode;

	        SQLNode: IMetabaseUpdateSqlNode;

	        DNode: IMetabaseUpdateDataObjectNode;

	    Begin

	        Mb := MetabaseClass.Active;

	        Db := Mb.ItemById("DB").Bind;

	        Mu := Mb.CreateUpdate;

	        Root := Mu.RootFolder;

	        DNode := Root.Add(MetabaseUpdateNodeType.DataObject) As IMetabaseUpdateDataObjectNode;

	        DNode.Object := MB.ItemById("OBJ_TABLE");

	        DNode.UpdatePart := MetabaseObjectUpdatePart.DataMetadata;

	        SQLNode := Root.Add(MetabaseUpdateNodeType.Sql) As IMetabaseUpdateSQLNode;

	        SQLNode.Label := "SQL";

	        SqlNode.ClearSql;

	        SqlNode.SetDefaultSql("Insert Into Log_Table (ACTION,DATE_ACTION) " +

	            "Values('Обновление таблицы Table_1', sysdate) ");

	        SqlNode.Database := Db.Key;

	        Mu.SaveToFileNF("c:\Update.pefx");

	    End Sub UserProc;


После выполнения примера будет создано новое обновление. В обновление
 будут включены данные и метаданные таблицы OBJ_TABLE. Также в обновление
 будет добавлен SQL-оператор. При выполнении данного SQL-оператора в таблицу
 LOG_TABLE будет добавляться новая запись, содержащая информацию об обновлении
 таблицы OBJ_TABLE. SQL-запрос оператора будет выполняться для всех СУБД.


См. также:


[IMetabaseUpdateSqlNode](IMetabaseUpdateSqlNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
