# ILog.PutRecord

ILog.PutRecord
-


# ILog.PutRecord


## Синтаксис


PutRecord(FieldValues: Array);


## Параметры


FieldValues - массив значений, организующих запись, которую необходимо добавить в журнал.


## Описание


Метод PutRecord осуществляет добавление записи в журнал.


## Пример


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Log: ILog;

	    Fields: ITableFields;

	    Arr: Array[0..6] Of variant;

	Begin

	    Mb:=MetabaseClass.Active;

	    Log:=Mb.ItemById("NewLog").Bind As ILog;

	    Fields:=Log.Fields;

	    Arr[0]:=DateTime.Now;

	    Arr[1]:="USER";

	    Arr[2]:="Добавление записи";

	    Arr[3]:=1;

	    Arr[4]:="HELP";

	    Arr[5]:="HELP";

	    Arr[6]:="Тестовая запись";

	    Log.PutRecord(Arr);

	End Sub UserProc;


После выполнения примера в журнал с идентификатором «NewLog» будет добавлена новая запись.


См.также:


[ILog](ILog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
