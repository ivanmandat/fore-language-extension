# IDalCursorField.GetDbDataType

IDalCursorField.GetDbDataType
-


# IDalCursorField.GetDbDataType


## Синтаксис


GetDbDataType: [DbDataType](../../Enums/DbDataType.htm);


## Описание


Свойство GetDbDataType возвращает
 тип поля курсора.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором «BD».


Добавьте ссылки на системные сборки: Dal, Db, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DB: IDatabaseInstance;

	    Com: IDalCommand;

	    Cur: IDalCursor;

	    CurField: IDalCursorField;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    DB := MB.ItemById("BD").Open(Null) As IDatabaseInstance;

	    Com := DB.Connection.CreateCommand("Select * From Table_1");

	    Cur := Com.CreateCursor;

	    CurField := Cur.Fields.Item(Cur.Fields.Count - 1);

	    i := CurField.GetDbDataType;

	    Cur.Close;

	    Com.Close;

	End Sub UserProc;


После выполнения примера произойдет подключение к базе данных "BD",
 после чего, произойдет выполнение SQL-запроса, который выбирает все записи
 из таблицы "Table_1". В переменной «i» будет содержаться тип
 данных последнего поля полученной таблицы.


См. также:


[IDalCursorField](IDalCursorField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
