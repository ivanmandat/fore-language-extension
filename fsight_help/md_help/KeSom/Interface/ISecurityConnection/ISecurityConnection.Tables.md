# ISecurityConnection.Tables

ISecurityConnection.Tables
-


# ISecurityConnection.Tables


## Синтаксис


Tables(Value: String): [IDalTables](Dal.chm::/Interface/IDalTables/IDalTables.htm);


## Параметры


Value. Физическое имя таблицы
 в БД.


## Описание


Свойство Tables возвращает курсор,
 содержащий системную информацию о таблице, физическое имя которой, передается
 посредством входного параметра.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором DB. На сервере БД, для работы с которым настроена база
 данных, имеется таблица с физическим именем Table_1.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DB: IDatabaseInstance;

	    Cur: IDalTables;

	    Field: IDalCursorField;

	Begin

	    MB := MetabaseClass.Active;

	    DB := MB.ItemById("DB").Open(Null) As IDatabaseInstance;

	    Cur := DB.Connection.Tables("Tablе_1");

	    While Not Cur.Eof Do

	        For Each Field In Cur.Fields Do

	            Debug.WriteLine(Field.Name + " " + Field.Value);

	        End For;

	        Debug.WriteLine("");

	        Cur.Next;

	    End While;

	    Cur.Close;

	End Sub UserProc;


После выполнения примера будет осуществлено подключение к серверу БД,
 на который настроена база. В консоль среды разработки будет выведена системная
 информация об указанной таблице.


См. также:


[ISecurityConnection](ISecurityConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
