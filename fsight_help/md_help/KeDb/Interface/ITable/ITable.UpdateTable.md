# ITable.UpdateTable

ITable.UpdateTable
-


# ITable.UpdateTable


## Синтаксис


UpdateTable([Options: Integer = 0]);


## Параметры


Options - зарезервированный параметр.


## Описание


Метод UpdateTable осуществляет обновление структуры таблицы на сервере БД в соответствии со структурой текущей таблицы.


Данный метод является аналогом метода [AlterTable](ITable.AlterTable.htm). При работе метода UpdateTable, в качестве структуры таблицы, которую необходимо обновить, берется структура текущей таблицы в репозитории.


Обновляется информация о следующих элементах таблицы:


-
физическое имя таблицы.


-
информация о списке полей, а также о структуре каждого поля.


-
информация о списке и структуре индексов, ограничений, триггеров таблицы.


Если в таблице OldTable есть элементы, которых нет в текущей таблице - они будут удалены, если в текущей таблице есть элементы, которых нет в таблице OldTable - они будут добавлены.


## Пример


	Sub UserProc;

	Var

	    Mb:IMetabase;

	    MbObj:IMetabaseObject;

	    Table:ITable;

	    Fields:ITableField;

	Begin

	    Mb:=MetaBaseClass.Active;

	    MbObj:=Mb.ItemById("Table_1").Edit;

	    Table:=MbObj As ITable;

	    Fields:=Table.Fields.Add;

	    Fields.Id:="PoleX";

	    Fields.Name:="PoleX";

	    Fields.DataType:=DbDataType.Integer;

	    Fields.Size:=10;

	    Table.UpdateTable;

	End Sub UserProc;


После выполнения примера будет добавлено поле таблицы в базе данных без изменения структуры таблицы в репозитории. Идентификатор таблицы репозитория - «Table_1».


См.также:


[ITable](ITable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
