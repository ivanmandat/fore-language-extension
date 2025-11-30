# IQueryStorage.TableName

IQueryStorage.TableName
-


# IQueryStorage.TableName


## Синтаксис


TableName: String;


## Описание


Свойство TableName определяет физическое имя таблицы, в которую будет осуществляться сохранение данных.


## Комментарии


Данное свойство актуально, если свойству [Enabled](IQueryStorage.Enabled.htm) установлено значение True. Таблица с указанным физическим именем должна быть создана на сервере, на который настроена база данных, указанная в свойстве [IQuery.Database](../IQuery/IQuery.Database.htm). Если установлено свойство [Table](IQueryStorage.Table.htm), то данное свойство вернет значение свойства [ITable.NativeName](../ITable/ITable.NativeName.htm) для соответствующей таблицы.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта Запрос с идентификатором «Query_1». На сервере, где хранится запрос, должна существовать таблица с физическим именем «TestTable».


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

    Storage.TableName := "TestTable";

    (Query As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера будут изменены настройки указанного запроса. Для запроса будет включена возможность сохранения данных. Данные будут сохраняться в таблицу с указанным физическим именем.


См. также:


[IQueryStorage](IQueryStorage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
