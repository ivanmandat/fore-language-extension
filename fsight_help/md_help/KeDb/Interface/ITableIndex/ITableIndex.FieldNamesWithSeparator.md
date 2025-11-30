# ITableIndex.FieldNamesWithSeparator

ITableIndex.FieldNamesWithSeparator
-


# ITableIndex.FieldNamesWithSeparator


## Синтаксис


FieldNamesWithSeparator(Separator: String): String;


## Параметры


Separator. Разделитель, используемый в строке.


## Описание


Свойство FieldNamesWithSeparator возвращает символьную строку, содержащую список полей, отделенных указанным разделителем.


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

    Debug.WriteLine(Index.FieldNamesWithSeparator("/"));

End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведен список полей первичного индекса, разделенный знаком «/».


См. также:


[ITableIndex](ITableIndex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
