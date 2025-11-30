# IDalConnection.Indexes

IDalConnection.Indexes
-


# IDalConnection.Indexes


## Синтаксис


Indexes(TableName: String): [IDalIndexes](../IDalIndexes/IDalIndexes.htm);


## Параметры


TableName. Физическое имя таблицы
 в БД.


## Описание


Свойство Indexes возвращает
 курсор, содержащий системную информацию об индексах указанной таблицы.


## Комментарии


Если в качестве значения параметра TableName
 указана пустая строка, то свойство вернет курсор с информацией о всех
 индексах всех таблиц, которые имеются в БД.


## Пример


Добавьте ссылки на системные сборки: Dal.


	Sub UserProc;

	Var

	    Driver: IDalDriver;

	    Connect: IDalConnection;

	    IndexCur: IDalIndexes;

	    ConnectDesc: IDalConnectionDescriptor;

	    ConnectDescParams: IDalConnectionDescriptorParams;

	    IndexFields: IDalCursorFields;

	    IndexField: IDalCursorField;

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

	    //Параметры индексов таблицы DataTable

	    IndexCur := Connect.Indexes("DataTable");

	    IndexFields := IndexCur.Fields;

	    //Просмотр параметров и их значений

	    While Not IndexCur.Eof Do

	        i := i + 1;

	        Debug.WriteLine("Номер индекса: " + i.ToString);

	        Debug.Indent;

	        For Each IndexField In IndexFields Do

	            Debug.WriteLine(IndexField.Name + " = " + IndexField.Value);

	        End For;

	        Debug.Unindent;

	        IndexCur.Next;

	    End While;

	    IndexCur.Close;

	    Connect.Close;

	End Sub UserProc;


При выполнении примера будет осуществлено подключение к репозиторию
 с указанными параметрами расположения. На базе соединения будет создан
 курсор с параметрами индексов таблицы «DataTable». Информация о параметрах
 и их значениях будет выведена в консоль среды разработки.


См. также:


[IDalConnection](IDalConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
