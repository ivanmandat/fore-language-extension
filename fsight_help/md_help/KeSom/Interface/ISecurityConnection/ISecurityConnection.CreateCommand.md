# ISecurityConnection.CreateCommand

ISecurityConnection.CreateCommand
-


# ISecurityConnection.CreateCommand


## Синтаксис


CreateCommand(Sql: String): [IDalCommand](Dal.chm::/Interface/IDalCommand/IDalCommand.htm);


## Параметры


Sql. SQL-запрос, который необходимо выполнить
 на сервере БД.


## Описание


Метод CreateCommand создает
 новый объект, используемый для работы с БД посредством SQL-запросов.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 с идентификатором DB. На сервере СУБД, на работу с которым настроена база
 данных, имеется таблица Table_1.


Добавьте ссылки на системные сборки: Dal, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DB: IDatabaseInstance;

	    Connect: ISecurityConnection;

	    Command: IDalCommand;

	    Cur: IDalCursor;

	    CurFields: IDalCursorFields;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    DB := MB.ItemById("DB").Open(Null) As IDatabaseInstance;

	    Connect := DB.Connection;

	    Command := Connect.CreateCommand("Select * From Table_1");

	    Cur := Command.CreateCursor;

	    While Not Cur.Eof Do

	        CurFields := Cur.Fields;

	        For i := 0 To CurFields.Count - 1 Do

	            Debug.Write(CurFields.Item(i).Value);

	            Debug.Write(" ");

	        End For;

	        Debug.WriteLine("");

	        Cur.Next;

	    End While;

	    Cur.Close;

	End Sub UserProc;


После выполнения примера будет осуществлено подключение к серверу БД,
 на который настроена указанная база данных. Для данного соединения будет
 создан и выполнен SQL-запрос, осуществляющий извлечение всех данных из
 таблицы. Полученные данные будут выведены в консоль среды разработки.


См. также:


[ISecurityConnection](ISecurityConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
