# ITableForeignKeys.FindByKey

ITableForeignKeys.FindByKey
-


# ITableForeignKeys.FindByKey


## Синтаксис


FindByKey(Key: Integer): [ITableForeignKey](../ITableForeignKey/ITableForeignKey.htm);


## Параметры


Key. Ключ внешнего ключа.


## Описание


Метод FindByKey выполняет поиск внешнего ключа в коллекции по его ключу.


## Комментарии


Если внешний ключ с указанным ключом не найден, то метод возвращает значение Null.


## Пример


Для выполнения примера в репозитории предполагается наличие таблицы с идентификатором «TABLE_L».


Добавьте ссылки на системные сборки «Metabase», «Db».


			Sub UserProc;

Var

    mb: IMetabase;

    Table: ITable;

    FKeys: ITableForeignKeys;

    Key: ITableForeignKey;

Begin

    mb := MetabaseClass.Active;

    Table := mb.ItemById("TABLE_L").Bind As ITable;

    FKeys := Table.ForeignKeys;

    If FKeys.Count > 0 Then

        Key := FKeys.FindByKey("2");

        If Key <> Null Then

            Debug.WriteLine(Key.Name);

        End If;

    End If;

End Sub UserProc;


После выполнения примера в таблице «TABLE_L» будет выполнен поиск внешнего ключа с ключом «2». Если внешний ключ будет найден, то его наименование будет выведено в окно консоли.


См. также:


[ITableForeignKeys](ITableForeignKeys.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
