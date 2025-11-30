# ITableForeignKeys.Remove

ITableForeignKeys.Remove
-


# ITableForeignKeys.Remove


## Синтаксис


Remove(ForeignKey: Integer): Boolean;


## Параметры


ForeignKey. Индекс удаляемого внешнего ключа.


## Описание


Метод Remove удаляет из коллекции внешний ключ с указанным индексом.


## Комментарии


Индексация внешних ключей в коллекции сквозная и начинается с нуля. Количество внешних ключей в коллекции возвращает свойство [ITableForeignKeys.Count](ITableForeignKeys.Count.htm).


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

        Debug.WriteLine(FKeys.Remove(0));

    End If;

    (Table As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера из таблицы «TABLE_L» будет удален первый внешний ключ.


См. также:


[ITableForeignKeys](ITableForeignKeys.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
