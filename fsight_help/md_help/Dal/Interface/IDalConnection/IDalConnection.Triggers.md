# IDalConnection.Triggers

IDalConnection.Triggers
-


# IDalConnection.Triggers


## Синтаксис


Triggers(TableName: String): [IDalTriggers](../IDalTriggers/IDalTriggers.htm);


## Параметры


TableName. Физическое
 имя таблицы в БД.


## Описание


Свойство Triggers возвращает
 курсор, содержащий системную информацию о триггерах указанной таблицы.


## Комментарии


Если в качестве значения параметра TableName
 указана пустая строка, то свойство вернет курсор с информацией о всех
 триггерах всех таблиц, которые имеются в БД.


## Пример


Добавьте ссылки на системные сборки: Dal.


	Sub UserProc;

	Var

	    Driver: IDalDriver;

	    Connect: IDalConnection;

	    TriggersCur: IDalTriggers;

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

	    //Параметры триггеров таблицы DataTable

	    TriggersCur := Connect.Triggers("DataTable");

	    ColFields := TriggersCur.Fields;

	    //Просмотр параметров и их значений

	    While Not TriggersCur.Eof Do

	        i := i + 1;

	        Debug.WriteLine("Номер параметра: " + i.ToString);

	        Debug.Indent;

	        For Each ColField In ColFields Do

	            Debug.WriteLine(ColField.Name + " = " + ColField.Value);

	        End For;

	        Debug.Unindent;

	        TriggersCur.Next;

	    End While;

	    TriggersCur.Close;

	    Connect.Close;

	End Sub UserProc;


При выполнении примера будет осуществлено подключение к репозиторию
 с указанными параметрами расположения. На базе соединения будет создан
 курсор с параметрами триггеров таблицы «DataTable». Информация о параметрах
 и их значениях будет выведена в консоль среды разработки.


См. также:


[IDalConnection](IDalConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
