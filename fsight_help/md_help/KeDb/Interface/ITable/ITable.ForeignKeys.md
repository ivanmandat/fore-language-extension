# ITable.ForeignKeys

ITable.ForeignKeys
-


# ITable.ForeignKeys


## Синтаксис


ForeignKeys: [ITableForeignKeys](../ITableForeignKeys/ITableForeignKeys.htm);


## Описание


Свойство ForeignKeys возвращает
 коллекцию внешних ключей таблицы.


## Комментарии


Для создания внешнего ключа используйте метод [ITableForeignKeys.Add](../ITableForeignKeys/ITableForeignKeys.Add.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие таблиц с
 идентификаторами «TABLE_L» и «TABLE_F». Таблица «TABLE_F» должна содержать
 первичный ключ с идентификатором «ID». Таблица «TABLE_L» должна содержать
 целочисленное поле с идентификатором «FK».


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

    FKeys.Clear;

    Key := FKeys.Add;

    Key.Columns := "FK";

    Key.RTable := "TABLE_F";

    Key.RColumns := "ID";

    Key.IsCascade := True;

    Key.AlterType := DbAlterType.None;

    Key.ComparedWith := 0;

    (Table As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера поле «FK» в таблице «TABLE_L» будет являться
 внешним ключом на поле «ID» в таблице «TABLE_F».


См. также:


[ITable](ITable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
