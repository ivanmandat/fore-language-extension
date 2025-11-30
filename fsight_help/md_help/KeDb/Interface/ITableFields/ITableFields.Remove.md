# ITableFields.Remove

ITableFields.Remove
-


# ITableFields.Remove


## Синтаксис


Remove(Index: Integer): Boolean;


## Параметры


Index — индекс поля.


## Описание


Метод Remove осуществляет удаление поля таблицы, индекс которого передается посредством параметра Index.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Object: IMetabaseObject;

	    Table: ITable;

	    Fields: ITableFields;

	Begin

	    MB:=MetabaseClass.Active;

	    Object:=MB.ItemById("TABLE_1").Edit;

	    Table:=Object As ITable;

	    Fields:=Table.Fields;

	    Fields.Remove(0);

	    Object.Save;

	End Sub UserProc;


После выполнения примера будет удалено первое поле таблицы. Идентификатор таблицы «Table_1».


См.также:


[ITableFields](ITableFields.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
