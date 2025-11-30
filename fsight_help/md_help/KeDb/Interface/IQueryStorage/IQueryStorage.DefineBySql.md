# IQueryStorage.DefineBySql

IQueryStorage.DefineBySql
-


# IQueryStorage.DefineBySql


## Синтаксис


DefineBySql;


## Описание


Метод DefineBySql определяет настройки для сохранения данных по SQL-запросу, указанному в свойстве [IQuery.Sql](../IQuery/IQuery.Sql.htm).


## Комментарии


При выполнении метода осуществляется разбор SQL-запроса. В качестве таблицы, в которую будет осуществляться сохранение, будет установлена таблица, физическое имя которой встречается первым после ключевого слова From. Также в данной таблице будет осуществлена проверка наличия полей, которые используются в SQL-запросе.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта Запрос с идентификатором «Query_1».


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

    Storage.DefineBySql;

    (Query As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера будут изменены настройки указанного запроса. Для запроса будет включена возможность сохранения данных. Настройки для сохранения данных будут определены по тексту SQL-запроса.


См. также:


[IQueryStorage](IQueryStorage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
