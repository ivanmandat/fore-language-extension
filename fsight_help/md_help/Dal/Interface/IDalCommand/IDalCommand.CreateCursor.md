# IDalCommand.CreateCursor

IDalCommand.CreateCursor
-


# IDalCommand.CreateCursor


## Синтаксис


CreateCursor: [IDalCursor](../IDalCursor/IDalCursor.htm);


## Описание


Метод CreateCursor создает курсор,
 позволяющий перемещаться по данным, полученным посредством выполнения
 SQL-запроса к базе данных.


## Комментарии


При создании курсора метод [Execute](IDalCommand.Execute.htm)
 выполняется автоматически.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором «DB».


Добавьте ссылки на системные сборки: Dal, Db, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DB: IDatabaseInstance;

	    Com: IDalCommand;

	    Cur: IDalCursor;

	    CurFields: IDalCursorFields;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    DB := MB.ItemById("DB").Open(Null) As IDatabaseInstance;

	    Com := DB.Connection.CreateCommand("");

	    Com.SQL := "Select * From Table_1 Where Num1 > :Item";

	    Com.Parse;

	    Com.Params.Item(0).Value := 1;

	    Cur := Com.CreateCursor;

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

	    Com.Close;

	End Sub UserProc;


После выполнения примера произойдет подключение
 в базе данных "BD", и выполнение SQL-запроса, который выбирает
 все записи из таблицы "Table_1", для которых значение поля "Num1"
 больше 1. При каждом переходе на следующую запись, удовлетворяющую условию,
 в окне консоли выводятся значения всех полей, которые есть у текущей записи.


См. также:


[IDalCommand](IDalCommand.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
