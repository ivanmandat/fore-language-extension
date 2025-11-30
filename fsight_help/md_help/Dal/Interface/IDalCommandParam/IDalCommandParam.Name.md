# IDalCommandParam.Name

IDalCommandParam.Name
-


# IDalCommandParam.Name


## Синтаксис


Name: String;


## Описание


Свойство Name возвращает наименование
 параметра SQL-запроса, используемого при выполнении команды на сервере
 БД.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором «BD».


Добавьте ссылки на системные сборки: Collection, Dal, Db, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DB: IDatabaseInstance;

	    Com: IDalCommand;

	    Params: IDalCommandParams;

	    Param_List: IStringList;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Param_List := New StringList.Create;

	    DB := MB.ItemById("BD").Open(Null) As IDatabaseInstance;

	    Com := DB.Connection.CreateCommand("");

	    Com.SQL := "Select * From Table_1 Where Num1 > :Param And Num2 < :Param1";

	    Com.Parse;

	    Params := Com.Params;

	    For i := 0 To Params.Count - 1 Do

	        Param_List.Add(Params.Item(i).Name);

	        Params.Item(i).Value := (i + 2) * 10;

	    End For;

	    Com.Execute;

	    Com.Close;

	End Sub UserProc;


После выполнения примера произойдет подключение к базе данных «BD» и
 выполнение SQL-запроса, осуществляющего извлечение всех записей из таблицы
 «Table_1», для которых значения полей «Num1» и «Num2» удовлетворяют введенным
 параметрам. В переменной «Param_List» будет содержаться список параметров
 SQL-запроса, используемых при выполнении команды.


См. также:


[IDalCommandParam](IDalCommandParam.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
