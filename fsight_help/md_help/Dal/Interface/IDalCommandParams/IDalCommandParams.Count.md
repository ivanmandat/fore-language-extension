# IDalCommandParams.Count

IDalCommandParams.Count
-


# IDalCommandParams.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 параметров, используемых в SQL-запросе.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором «BD».


Добавьте ссылки на системные сборки: Dal, Db, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DB: IDatabaseInstance;

	    Com: IDalCommand;

	    Params: IDalCommandParams;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    DB := MB.ItemById("BD").Open(Null) As IDatabaseInstance;

	    Com := DB.Connection.CreateCommand("");

	    Com.SQL := "Select * From Table_1 Where Num1 > :Param And Num2 < :Param1";

	    Com.Parse;

	    Params := Com.Params;

	    For i := 0 To Params.Count - 1 Do

	        Params.Item(i).Value := (i + 1) * 10;

	    End For;

	    i := Params.Count;

	    Com.Execute;

	    Com.Close;

	End Sub UserProc;


После выполнения примера произойдет подключение к базе данных «BD»,
 после чего произойдёт выполнение SQL-запроса, который выбирает все записи
 из таблицы «Table_1», для которых значения полей «Num1» и «Num2» удовлетворяют
 введенным параметрам. Значения параметров устанавливаются в цикле. В переменной
 «i» будет содержаться количество параметров, используемых в SQL-запросе.


См. также:


[IDalCommandParams](IDalCommandParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
