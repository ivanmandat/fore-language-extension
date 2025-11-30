# IDalCursorField.Value

IDalCursorField.Value
-


# IDalCursorField.Value


## Синтаксис


Value: Variant;


## Описание


Свойство Value возвращает значение
 поля текущей записи в курсоре.


## Комментарии


Данное свойство возвращает значение того типа, который вернет свойство
 [GetDbDataType](IDalCursorField.GetDbDataType.htm). Если поле
 имеет какой-либо пользовательский тип данных, то доступ к его значению
 можно получить через поток. Более подробно работа с полями пользовательского
 типа описана в базе знаний в статье «[Работа
 с полями, имеющими пользовательский тип данных](KnowledgeBase.chm::/01_Fore/KnowledgeBase_KB000031.htm)».


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

	    v: Variant;

	Begin

	    MB := MetabaseClass.Active;

	    DB := MB.ItemById("BD").Open(Null) As IDatabaseInstance;

	    Com := DB.Connection.CreateCommand("Select * From Table_1");

	    Cur := Com.CreateCursor;

	    CurField := Cur.Fields.Item(Cur.Fields.Count - 1);

	    v := CurField.Value;

	    Cur.Close;

	    Com.Close;

	End Sub UserProc;


После выполнения примера произойдет подключение к базе данных «BD»,
 после чего, произойдет выполнение SQL-запроса, который выбирает все записи
 из таблицы «Table_1». В переменной «v» будет содержаться значение последнего
 поля первой записи полученной таблицы.


См. также:


[IDalCursorField](IDalCursorField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
