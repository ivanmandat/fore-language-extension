# IOdbcDataset.UserId

IOdbcDataset.UserId
-


# IOdbcDataset.UserId


## Синтаксис


UserId: String;


## Описание


Свойство UserId определяет имя пользователя, с которым осуществляется подключение к источнику данных ODBC.


## Пример


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    ODBC: IOdbcDataset;

	    s: String;

	Begin

	    Mb:=MetabaseClass.Active;

	    ODBC:=MB.ItemById("ODBC_SOURCE").Bind As IOdbcDataset;

	    s:=ODBC.UserId;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование пользователя источника данных ODBC. Идентификатор источника данных ODBC - «ODBC_SOURCE».


См.также:


[IOdbcDataset](IOdbcDataset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
