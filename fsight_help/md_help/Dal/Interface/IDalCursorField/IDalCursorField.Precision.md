# IDalCursorField.Precision

IDalCursorField.Precision
-


# IDalCursorField.Precision


## Синтаксис


Precision: Integer;


## Описание


Свойство Precision возвращает точность поля курсора.


## Комментарии


Свойство возвращает следующие значения:


-
для строковых типов данных свойство возвращает 0;


-
для числовых типов данных с фиксированной точкой свойство возвращает количество знаков после запятой;


-
для числовых типов данных с плавающей точкой свойство возвращает 0;


-
для [Blob](../../Enums/DbDataType.htm) полей свойство возвращает 0.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором «BD».


Добавьте ссылки на системные сборки: Dal, Db, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DB: IDatabaseInstance;

	    sql : string;

	    Com: IDalCommand;

	    Cur: IDalCursor;

	    Field: IDalCursorField;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    DB := MB.ItemById("BD").Open(Null) As IDatabaseInstance;

	    sql := "Select * From Table_1";

	    Com := DB.Connection.CreateCommand(sql);

	    Cur := Com.DescribeCursor;

	    For i:=0 To Cur.Fields.Count-1 Do

	        Field := Cur.Fields.Item(i);

	        Debug.WriteLine("--------------------------------------------");

	        Debug.WriteLine("Поле : "+ Field.Name);

	        Debug.WriteLine("Размер : "+ Field.Size.ToString);

	        Debug.WriteLine("Точность : "+ Field.Precision.ToString);

	        Debug.WriteLine("--------------------------------------------");

	    End For;

	    Cur.Close;

	    Com.Close;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены данные о точности
 и размере полей таблицы.


См. также:


[IDalCursorField](IDalCursorField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
