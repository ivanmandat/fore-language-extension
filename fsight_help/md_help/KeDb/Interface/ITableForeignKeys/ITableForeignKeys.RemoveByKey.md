# ITableForeignKeys.RemoveByKey

ITableForeignKeys.RemoveByKey
-


# ITableForeignKeys.RemoveByKey


## Синтаксис


RemoveByKey(ForeignKeyKey: Integer): Boolean;


## Параметры


ForeignKeyKey. Ключ удаляемого внешнего ключа.


## Описание


Метод RemoveByKey удаляет внешний ключ из коллекции по его ключу.


## Комментарии


Для удаления ключа по его индексу используйте метод [ITableForeignKeys.Remove](ITableForeignKeys.Remove.htm).


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

    Table := mb.ItemById("TABLE_L").Edit As ITable;

    FKeys := Table.ForeignKeys;

    If FKeys.Count > 0 Then

        Key := FKeys.Item(FKeys.Count - 1);

        Debug.WriteLine(Key.Name);

        Debug.WriteLine(FKeys.RemoveByKey(Key.Key));

    End If;

    (Table As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера из таблицы «TABLE_L» будет удален последний внешний ключ.


См. также:


[ITableForeignKeys](ITableForeignKeys.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
