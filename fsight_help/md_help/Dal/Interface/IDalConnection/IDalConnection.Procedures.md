# IDalConnection.Procedures

IDalConnection.Procedures
-


# IDalConnection.Procedures


## Синтаксис


Procedures(ProcedureName: String): [IDalProcedures](../IDalProcedures/IDalProcedures.htm);


## Параметры


ProcedureName. Физическое имя
 процедуры в БД.


## Описание


Свойство Procedures возвращает
 курсор, содержащий системную информацию об указанной процедуре.


## Комментарии


Если в качестве значения параметра ProcedureName
 указана пустая строка, то свойство вернет курсор с информацией о всех
 процедурах, которые имеются в БД.


## Пример


Добавьте ссылки на системные сборки: Dal.


	Sub UserProc;

	Var

	    Driver: IDalDriver;

	    Connect: IDalConnection;

	    ProcCur: IDalProcedures;

	    ConnectDesc: IDalConnectionDescriptor;

	    ConnectDescParams: IDalConnectionDescriptorParams;

	    ColFields: IDalCursorFields;

	    ColField: IDalCursorField;

	    i: Integer;

	Begin

	    Driver := New DalOrcl8Driver.Create;

	    ConnectDesc := Driver.CreateDescriptor;

	    ConnectDescParams := ConnectDesc.Params;

	    ConnectDescParams.Find("User Name").Value := "User";

	    ConnectDescParams.Find("Password").Value := "Password";

	    ConnectDescParams.Find("Host BSTR").Value := "OrclServer";

	    ConnectDescParams.Find("Schema").Value := "Repository";

	    Connect := ConnectDesc.CreateConnection;

	    //Параметры процедуры Proc_1

	    ProcCur := Connect.Procedures("Proc_1");

	    ColFields := ProcCur.Fields;

	    //Просмотр параметров и их значений

	    While Not ProcCur.Eof Do

	        i := i + 1;

	        Debug.WriteLine("Номер параметра: " + i.ToString);

	        Debug.Indent;

	        For Each ColField In ColFields Do

	            Debug.WriteLine(ColField.Name + " = " + ColField.Value);

	        End For;

	        Debug.Unindent;

	        ProcCur.Next;

	    End While;

	    ProcCur.Close;

	    Connect.Close;

	End Sub UserProc;


При выполнении примера будет осуществлено подключение к репозиторию
 с указанными параметрами расположения. На базе соединения будет создан
 курсор с параметрами процедуры «Proc_1». Информация о параметрах и их
 значениях будет выведена в консоль среды разработки.


См. также:


[IDalConnection](IDalConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
