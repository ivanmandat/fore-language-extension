# ISecurityConnection.Indexes

ISecurityConnection.Indexes
-


# ISecurityConnection.Indexes


## Синтаксис


Indexes(TableName: String): [IDalIndexses](Dal.chm::/Interface/IDalIndexes/IDalIndexes.htm);


## Параметры


TableName. Физическое имя таблицы
 в БД.


## Описание


Свойство Indexes возвращает
 курсор, содержащий системную информацию об индексах таблицы, физическое
 имя которой, передается посредством входного параметра.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором DB. На сервере БД, для работы с которым настроена база
 данных, имеется таблица с физическим именем Table_1.


	Sub Main;

	Var

	    MB: IMetabase;

	    DB: IDatabaseInstance;

	    Cur: IDalIndexes;

	    Field: IDalCursorField;

	Begin

	    MB := MetabaseClass.Active;

	    DB := MB.ItemById("DB").Open(Null) As IDatabaseInstance;

	    Cur := DB.Connection.Indexes("Table_1");

	    While Not Cur.Eof Do

	        For Each Field In Cur.Fields Do

	            Debug.WriteLine(Field.Name + " " + Field.Value);

	        End For;

	        Debug.WriteLine("");

	        Cur.Next;

	    End While;

	    Cur.Close;

	End Sub Main;


После выполнения примера будет осуществлено подключение к серверу БД,
 на который настроена база данных. В консоль среды разработки будет выведена
 системная информация о индексах указанной таблицы.


См. также:


[ISecurityConnection](ISecurityConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
