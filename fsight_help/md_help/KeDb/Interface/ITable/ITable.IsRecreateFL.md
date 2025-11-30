# ITable.IsRecreateFL

ITable.IsRecreateFL
-


# ITable.IsRecreateFL


## Синтаксис


IsRecreateFL: Boolean;


## Описание


Свойство IsRecreateFL определяет, пересоздавать ли внешние связи таблицы.


## Комментарии


Допустимые значения:


-
True. Внешние связи пересоздаются;


-
False. Внешние связи не пересоздаются.


## Пример


Для выполнения примера в репозитории предполагается наличие таблицы с идентификатором «TABLE_L».


Добавьте ссылки на системные сборки «Metabase», «Db».


			Sub UserProc;

Var

    mb: IMetabase;

    Table: ITable;

Begin

    mb := MetabaseClass.Active;

    Table := mb.ItemById("TABLE_L").Edit As ITable;

    If Not Table.IsRecreateFL Then

        Table.IsRecreateFL := True;

    End If;

    (Table As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера внешние связи в таблице «TABLE_L» будут пересоздаваться.


См. также:


[ITable](ITable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
