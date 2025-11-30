# IDalCursorFields.Count

IDalCursorFields.Count
-


# IDalCursorFields.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 полей курсора.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором «BD».


Добавьте ссылки на системные сборки: Dal, Db, Metabase.


	Sub Main;

	Var

	    MB: IMetabase;

	    DB: IDatabaseInstance;

	    Com: IDalCommand;

	    Cur: IDalCursor;

	    CurFields: IDalCursorFields;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    DB := MB.ItemById("BD").Open(Null) As IDatabaseInstance;

	    Com := DB.Connection.CreateCommand("Select * From Table_1");

	    Cur := Com.CreateCursor;

	    CurFields := Cur.Fields;

	    For i := 0 To CurFields.Count - 1 Do

	        Debug.WriteLine(CurFields.Item(i).Name);

	    End For;

	    Cur.Close;

	    Com.Close;

	End Sub Main;


После выполнения примера произойдет подключение к базе данных «BD» и
 выполнение SQL-запроса, который выбирает все записи из таблицы «Table_1».
 В консоль среды разработки будут выведены наименования всех полей таблицы.


См. также:


[IDalCursorFields](IDalCursorFields.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
