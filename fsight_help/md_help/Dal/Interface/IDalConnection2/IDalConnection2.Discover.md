# IDalConnection2.Discover

IDalConnection2.Discover
-


# IDalConnection2.Discover


## Синтаксис


Discover(SystemDictionary: [DalSystemDictionary](../../Enums/DalSystemDictionary.htm);
 Filter: String): [IDalCursor](../IDalCursor/IDalCursor.htm);


## Параметры


SystemDictionary. Тип курсора,
 полученного в результате выполнения SQL-запроса к БД;


Filter. Фильтр, который применяется
 к курсорам, полученным в результате выполнения SQL-запроса к БД.


## Описание


Метод Discover возвращает соответствующий
 курсор в зависимости от параметра SystemDictionary.


## Комментарии


Если драйвер не поддерживает соответствующий SystemDictionary,
 то будет возвращаться Null.


При выполнении SQL-запроса запрашиваемый курсор возвращается в зависимости
 от схемы, заданной в [свойствах
 базы данных](uinavobj.chm::/database/UiDb_database_master_property.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 с идентификатором BD.


Добавьте ссылки на системные сборки: Metabase, Dal.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DB: IDatabaseInstance;

	    Cur: IDalCursor;

	    Field: IDalCursorField;

	Begin

	    MB := MetabaseClass.Active;

	    DB := MB.ItemById("BD").Open(Null) As IDatabaseInstance;

	    Cur := DB.Connection.Discover(DalSystemDictionary.Tables, "");

	    While Not Cur.Eof Do

	        For Each Field In Cur.Fields Do

	            Debug.WriteLine(Field.Name + " " + Field.Value);

	        End For;

	        Debug.WriteLine("");

	        Cur.Next;

	    End While;

	    Cur.Close;

	End Sub UserProc;


В результате выполнения примера в консоль будет выведена системная информация
 о таблицах, хранящихся в базе данных.


См. также:


[IDalConnection2](IDalConnection2.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
