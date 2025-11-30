# ISecurityConnection.Procedures

ISecurityConnection.Procedures
-


# ISecurityConnection.Procedures


## Синтаксис


Procedures(ProcedureName: String): [IDalProcedures](Dal.chm::/Interface/IDalProcedures/IDalProcedures.htm);


## Параметры


ProcedureName. Физическое имя процедуры в БД.


## Описание


Свойство Procedures возвращает
 курсор, содержащий системную информацию о процедуре, физическое имя которой,
 передается посредством входного параметра.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором DB. На сервере БД, для работы с которым настроена база
 данных, имеется процедура с физическим именем Procedure_1.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DB: IDatabaseInstance;

	    Cur: IDalProcedures;

	    Field: IDalCursorField;

	Begin

	    MB := MetabaseClass.Active;

	    DB := MB.ItemById("DB").Open(Null) As IDatabaseInstance;

	    Cur := DB.Connection.Procedures("Procedure_1");

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
 системная информация о процедуре.


См. также:


[ISecurityConnection](ISecurityConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
