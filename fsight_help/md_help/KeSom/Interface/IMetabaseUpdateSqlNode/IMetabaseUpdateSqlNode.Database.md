# IMetabaseUpdateSqlNode.Database

IMetabaseUpdateSqlNode.Database
-


# IMetabaseUpdateSqlNode.Database


## Синтаксис


Database: Integer;


## Описание


Свойство Database определяет
 ключ базы данных, для соединения с которой будет выполняться SQL-запрос.


## Комментарии


Если свойство не задано, то SQL-запрос будет выполняться для текущего
 соединения с репозиторием.


## Пример


Для выполнения примера предполагается наличие в репозитории таблицы
 с идентификатором Table_1 и базы данных с идентификатором DB. На сервере
 БД, на который настроена данная база данных, имеется таблица с физическим
 именем LOG_TABLE. В данной таблице ведется история выполнения каких-либо
 действий. Таблица содержит поля ACTION и DATE_ACTION, в которых будут
 указываться описание действия и дата, когда было совершено действие.


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

	    DNode.Object := MB.ItemById("Table_1");

	    DNode.UpdatePart := MetabaseObjectUpdatePart.DataMetadata;

	    SQLNode := Root.Add(MetabaseUpdateNodeType.Sql) As IMetabaseUpdateSQLNode;

	    SQLNode.Label := "SQL";

	    SqlNode.Sql((Db As IDatabase).DriverId) := "Insert Into Log_Table (ACTION,DATE_ACTION) Values('Обновление таблицы Table_1',sysdate)";

	    SqlNode.IgnoreErrors := True;

	    SqlNode.Database := Db.Key;

	    Mu.SaveToFileNF("c:\Update.pefx");

	End Sub UserProc;


После выполнения примера будет создано новое обновление. В обновление
 будут включены данные и метаданные таблицы Table_1. Также в обновление
 будет включен SQL-оператор. При выполнении данного SQL-оператора в таблицу
 Log_Table будет добавляться новая запись, содержащая информацию об обновлении
 таблицы Table_1. Если добавление новых записей в таблицу Log_Table, по
 каким-либо причинам не возможно, то выполнение SQL-оператора будет пропущено.
 Обновление будет продолжено со следующего элемента. SQL-оператор будет
 выполняться в рамках сервера БД, на который настроена база данных DB.


См. также:


[IMetabaseUpdateSqlNode](IMetabaseUpdateSqlNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
