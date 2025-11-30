# ITableForeignKey.RTableObject

ITableForeignKey.RTableObject
-


# ITableForeignKey.RTableObject


## Синтаксис


RTableObject: [ITable](../ITable/ITable.htm);


## Описание


Свойство RTableObject определяет
 таблицу, на которую ссылается внешний ключ.


## Комментарии


Для создания внешнего ключа используйте [ITableForeignKeys.Add](../ITableForeignKeys/ITableForeignKeys.Add.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие двух таблиц
 с идентификаторами «TABLE» и «TABLE_FK». Таблица «TABLE» должна содержать
 первичный ключ с идентификатором «ID». Таблица «TABLE_FK» должна содержать
 целочисленное поле с идентификатором «FK».


Добавьте ссылки на системные сборки: Db, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    Table, TableFK: ITable;

    FKeys: ITableForeignKeys;

    Key: ITableForeignKey;

Begin

    // Получим репозиторий

    mb := MetabaseClass.Active;

    // Получим таблицу

    Table := mb.ItemById("TABLE").Edit As ITable;

    // Получим вторую таблицу

    TableFK := mb.ItemById("TABLE_FK").Edit As ITable;

    // Получим коллекцию внешних ключей таблицы
 «TABLE»

    FKeys := Table.ForeignKeys;

    // Удалим внешние ключи таблицы
 «TABLE»

    FKeys.Clear;

    // Добавим внешний ключ в таблицу
 «TABLE»

    Key := FKeys.Add;

    { Установим поле «FK» таблицы «TABLE_FK» в качестве внешнего ключа

      таблицы «TABLE» }

    Key.Columns := "FK";

    Key.RTableObject := TableFK;

    Key.RColumns := "ID";

    // Сохраним изменения

    (Table As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера поле «FK» таблицы «TABLE_FK» будет являться
 внешним ключом для таблицы «TABLE».


См. также:


[ITableForeignKey](ITableForeignKey.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
