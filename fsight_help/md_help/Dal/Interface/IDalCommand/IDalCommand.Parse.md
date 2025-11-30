# IDalCommand.Parse

IDalCommand.Parse
-


# IDalCommand.Parse


## Синтаксис


Parse;


## Описание


Метод Parse анализирует запрос
 и выявляет в нём наличие параметров.


## Комментарии


При выполнении метода анализируется запрос, который был указан при создании
 команды или заданный в свойстве [SQL](IDalCommand.SQL.htm).
 Выявленными параметрами будет заполнена коллекция параметров, которая
 доступна в свойстве [Params](IDalCommand.Params.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 с идентификатором DB.


Добавьте ссылки на системные сборки: Dal, Db, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DB: IDatabaseInstance;

	    Com: IDalCommand;

	    Cur: IDalCursor;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    DB := MB.ItemById("DB").Open(Null) As IDatabaseInstance;

	    Com := DB.Connection.CreateCommand("");

	    Com.SQL := "Select * From Table_1 Where (Num1 > :Param) And (F_Date = :Param1)";

	    Com.Parse;

	    Com.Params.Item(0).Value := 40;

	    Com.Params.Item(1).Value := "03.03.2000";

	    Cur := Com.CreateCursor;

	    While Not Cur.Eof Do

	        i := i + 1;

	        Cur.Next;

	    End While;

	    Cur.Close;

	    Com.Close;

	End Sub UserProc;


После выполнения примера произойдет подключение к базе данных и выполнение
 SQL-запроса, который выбирает все записи из таблицы Table_1, для которых
 значения полей Num1 и F_Date удовлетворяют заданным значениям параметров.
 В результате анализа SQL-запроса методом Parse, в нем будет обнаружено
 два параметра.


См. также:


[IDalCommand](IDalCommand.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
