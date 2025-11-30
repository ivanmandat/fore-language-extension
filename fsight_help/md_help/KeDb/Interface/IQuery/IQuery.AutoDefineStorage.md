# IQuery.AutoDefineStorage

IQuery.AutoDefineStorage
-


# IQuery.AutoDefineStorage


## Синтаксис


AutoDefineStorage: Boolean;


## Описание


Свойство AutoDefineStorage определяет, будет ли производиться автоматическое определение настроек для сохранения данных при сохранении запроса.


## Комментарии


Данное свойство актуально, если изменяются параметры запроса. При установке значения данному свойству для запроса автоматически будет включена [возможность сохранения данных](../IQueryStorage/IQueryStorage.Enabled.htm).


Если данному свойству установить значение True, то при сохранении запроса будет установлено автоматическое определение таблицы.


Если данному свойству установить значение False, то для указания таблицы необходимо использовать свойство [IQueryStorage.Table](../IQueryStorage/IQueryStorage.Table.htm), либо [IQueryStorage.TableName](../IQueryStorage/IQueryStorage.TableName.htm).


По умолчанию свойству установлено значение False.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта Запрос с идентификатором «Query_1».


			Sub UserProc;

Var

    MB: IMetabase;

    Query: IQuery;

Begin

    MB := MetabaseClass.Active;

    Query := MB.ItemById("Query_1").Edit As IQuery;

    Query.Sql := "Select Value, VData From TestTable";

    Query.AutoDefineStorage := True;

    (Query As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера будет изменен текст указанного запроса. При сохранении запроса будет включена возможность сохранения данных. Таблица, в которую будет осуществляться сохранение, будет определена из текста запроса.


См. также:


[IQuery](IQuery.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
