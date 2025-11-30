# ILog.UpdateLog

ILog.UpdateLog
-


# ILog.UpdateLog


## Синтаксис


UpdateLog;


## Описание


Метод UpdateLog осуществляет обновление структуры таблицы журнала на сервере БД в соответствии со структурой таблицы текущего журнала.


## Комментарии


Данный метод является аналогом метода [AlterLog](ILog.AlterLog.htm). При работе метода UpdateLog, в качестве структуры таблицы, которую необходимо обновить, берется структура таблицы текущего журнала в репозитории.


## Пример


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    MbObj: IMetabaseObject;

	    Log: ILog;

	    Fields: ITableField;

	Begin

	    Mb:=MetaBaseClass.Active;

	    MbObj:=Mb.ItemById("NewLog").Edit;

	    Log:=MbObj As ILog;

	    Fields:=Log.Fields.Add;

	    Fields.Id:="PoleX";

	    Fields.Name:="PoleX";

	    Fields.DataType:=DbDataType.Integer;

	    Fields.Size:=10;

	    Log.UpdateLog;

	End Sub UserProc;


После выполнения примера будет добавлено поле таблицы журнала в базе данных без изменения структуры журнала в репозитории. Идентификатор журнала - «NewLog».


См.также:


[ILog](ILog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
