# IOdbcDataset.Location

IOdbcDataset.Location
-


# IOdbcDataset.Location


## Синтаксис


Location: String;


## Описание


Свойство Location определяет путь к месту расположения источника данных ODBC.


## Пример


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    ODBC: IOdbcDataset;

	    s: String;

	Begin

	    Mb:=MetabaseClass.Active;

	    ODBC:=MB.ItemById("ODBC_SOURCE").Bind As IOdbcDataset;

	    s:=ODBC.Location;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться путь к месту расположения источника данных ODBC с идентификатором «ODBC_SOURCE».


См.также:


[IOdbcDataset](IOdbcDataset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
