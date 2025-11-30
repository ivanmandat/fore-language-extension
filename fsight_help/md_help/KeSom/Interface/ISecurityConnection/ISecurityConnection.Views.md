# ISecurityConnection.Views

ISecurityConnection.Views
-


# ISecurityConnection.Views


## Синтаксис


Views(Value: String): [IDalViews](Dal.chm::/Interface/IDalViews/IDalViews.htm);


## Параметры


ViewName. Физическое имя представления в БД.


## Описание


Свойство Views возвращает курсор,
 содержащий системную информацию о представлении, физическое имя которого,
 передается посредством входного параметра.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором DB. На сервере БД, для работы с которым настроена база
 данных, имеется представление с физическим именем View_1.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DB: IDatabaseInstance;

	    Cur: IDalViews;

	    Field: IDalCursorField;

	Begin

	    MB := MetabaseClass.Active;

	    DB := MB.ItemById("DB").Open(Null) As IDatabaseInstance;

	    Cur := DB.Connection.Views("View_1");

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
 на который настроена база данных. В консоль среды разработки будет выведена
 системная информация об указанном представлении.


См. также:


[ISecurityConnection](ISecurityConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
