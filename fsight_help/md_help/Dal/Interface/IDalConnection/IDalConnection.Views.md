# IDalConnection.Views

IDalConnection.Views
-


# IDalConnection.Views


## Синтаксис


Views(ViewName: String): [IDalViews](../IDalViews/IDalViews.htm);


## Параметры


ViewName. Физическое имя представления
 в БД.


## Описание


Свойство Views возвращает курсор,
 содержащий системную информацию об указанном представлении.


## Комментарии


Если в качестве значения параметра ViewName
 указана пустая строка, то свойство вернет курсор с информацией о всех
 представлениях, которые имеются в БД.


## Пример


Добавьте ссылки на системные сборки: Dal.


	Sub UserProc;

	Var

	    Driver: IDalDriver;

	    Connect: IDalConnection;

	    ViewsCur: IDalViews;

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

	    //Параметры представления
	 View_1

	    ViewsCur := Connect.Views("View_1");

	    ColFields := ViewsCur.Fields;

	    //Просмотр параметров и их значений

	    While Not ViewsCur.Eof Do

	        i := i + 1;

	        Debug.WriteLine("Номер параметра: " + i.ToString);

	        Debug.Indent;

	        For Each ColField In ColFields Do

	            Debug.WriteLine(ColField.Name + " = " + ColField.Value);

	        End For;

	        Debug.Unindent;

	        ViewsCur.Next;

	    End While;

	    ViewsCur.Close;

	    Connect.Close;

	End Sub UserProc;


При выполнении примера будет осуществлено подключение к репозиторию
 с указанными параметрами расположения. На базе соединения будет создан
 курсор с параметрами представления «View_1». Информация о параметрах и
 их значениях будет выведена в консоль среды разработки.


См. также:


[IDalConnection](IDalConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
