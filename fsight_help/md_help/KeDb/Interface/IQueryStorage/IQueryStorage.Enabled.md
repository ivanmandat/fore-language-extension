# IQueryStorage.Enabled

IQueryStorage.Enabled
-


# IQueryStorage.Enabled


## Синтаксис


Enabled: Boolean;


## Описание


Свойство Enabled определяет признак наличия возможности сохранения данных.


## Комментарии


Если свойству установлено значение True, то для запроса будет присутствовать возможность сохранения данных. В зависимости от значения свойства [IQuery.AutoDefineStorage](../IQuery/IQuery.AutoDefineStorage.htm) таблица, в которую будет осуществляться сохранение, будет определена из SQL-запроса, либо для ее указания необходимо использовать свойство [Table](IQueryStorage.Table.htm) или [TableName](IQueryStorage.TableName.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории объекта Запрос с идентификатором «Query_1» и таблицы с идентификатором «TestTable».


			Sub UserProc;

Var

    MB: IMetabase;

    Query: IQuery;

    Storage: IQueryStorage;

Begin

    MB := MetabaseClass.Active;

    Query := MB.ItemById("Query_1").Edit As IQuery;

    Storage := Query.Storage;

    Storage.Enabled := True;

    Storage.Table := MB.ItemById("TestTable").Bind As ITable;

    (Query As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера будут изменены настройки указанного запроса. Для запроса будет включена возможность сохранения данных. Данные будут сохраняться в указанную таблицу репозитория.


См. также:


[IQueryStorage](IQueryStorage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
