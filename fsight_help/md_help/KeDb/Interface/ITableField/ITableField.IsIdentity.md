# ITableField.IsIdentity

ITableField.IsIdentity
-


# ITableField.IsIdentity


## Синтаксис


IsIdentity: Boolean;


## Описание


Свойство IsIdentity указывает, что значения данного поля уникальным образом идентифицируют каждую строку данных.


## Комментарии


Если свойству установлено значение True, то будет установлен признак, что это поле является полем удостоверения данных, уникальным образом идентифицирующим каждую строку данных. Установка свойству IsIdentity значения True не приводит к созданию уникальных индексов. Данное свойство может использоваться только для обозначения полей, которые в дальнейшем могут быть включены в уникальные индексы.


По умолчанию свойству установлено значение False.


## Пример


Для выполнения примера предполагается наличие в репозитории таблицы с идентификатором «Table_1».


			Sub UserProc;

Var

    MB: IMetabase;

    Table: ITable;

    Field: ITableField;

    Index: ITableIndex;

Begin

    MB := MetabaseClass.Active;

    Table := MB.ItemById("Table_1").Edit As ITable;

    //Новое поле, по которому будет создан уникальный индекс
    Field := Table.Fields.Add;

    Field.DataType := DbDataType.Integer;

    Field.Id := "UniqueField";

    Field.IsIdentity := True;

    //Новый уникальный индекс
    Index := Table.Indexes.Add;

    Index.Fields.Add(Field);

    Index.Id := "UniqueIndex";

    Index.Unique := True;

    (Table As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в таблице будет создано новое поле. По этому полю будет создан уникальный индекс. Также для поля будет выставлен признак, что значения по нему уникальным образом идентифицируют каждую строку данных.


См.также:


[ITableField](ITableField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
