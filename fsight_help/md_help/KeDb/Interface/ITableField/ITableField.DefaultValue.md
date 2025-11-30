# ITableField.DefaultValue

ITableField.DefaultValue
-


# ITableField.DefaultValue


## Синтаксис


DefaultValue: Variant;


## Описание


Свойство DefaultValue определяет
 значение по умолчанию для поля.


## Пример


Для выполнения примера в репозитории предполагается наличие таблицы
 с идентификатором «TABLE_DEFAULT_VALUE».


Добавьте ссылки на системные сборки: Db, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Table: ITable;

    Fields: ITableFields;

    Field: ITableField;

    DefVal: Variant;

Begin

    MB := MetabaseClass.Active;

    Table := MB.ItemById("TABLE_DEFAULT_VALUE").Bind As ITable;

    Fields := Table.Fields;

    Field := Fields.Item(0);

    DefVal := Field.DefaultValue;

End Sub UserProc;


После выполнения примера в переменной «DefVal» будет содержаться выражение
 по умолчанию, установленное для первого поля.


См. также:


[ITableField](ITableField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
