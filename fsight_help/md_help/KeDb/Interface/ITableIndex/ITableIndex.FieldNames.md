# ITableIndex.FieldNames

ITableIndex.FieldNames
-


# ITableIndex.FieldNames


## Синтаксис


FieldNames: String;


## Описание


Свойство FieldNames возвращает символьную строку, содержащую список полей, по которым создан индекс.


## Комментарии


Список состоит из идентификаторов полей, разделенных знаком «;».


## Пример


Для выполнения примера предполагается наличие в репозитории таблицы с идентификатором «Table_1». Для таблицы создан первичный индекс, в который включены несколько полей.


			Sub UserProc;

Var

    MB: IMetabase;

    Table: ITable;

    Index: ITableIndex;

Begin

    MB := MetabaseClass.Active;

    Table := MB.ItemById("Table_1").Bind As ITable;

    Index := Table.Indexes.Primary;

    Debug.WriteLine(Index.FieldNames);

End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведен список полей первичного индекса, разделенный знаком «;».


См. также:


[ITableIndex](ITableIndex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
