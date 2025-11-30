# IDalConnection.Columns

IDalConnection.Columns
-


# IDalConnection.Columns


## Синтаксис


Columns(TableName: String): [IDalColumns](../IDalColumns/IDalColumns.htm);


## Параметры


TableName. Физическое имя таблицы
 в БД.


## Описание


Свойство Columns возвращает
 курсор, содержащий системную информацию о полях указанной таблицы.


## Комментарии


Если в качестве значения параметра TableName
 указана пустая строка, то свойство вернет курсор с информацией о полях
 всех таблиц, которые имеются в БД.


В полученном курсоре каждая запись содержит информацию об одном отдельном
 поле таблицы. Коллекция [Fields](../IDalCursor/IDalCursor.Fields.htm)
 будет состоять из определенного количества полей, в каждом из которых
 хранится одна из характеристик поля таблицы. Наименование поля в коллекции
 [Fields](../IDalCursor/IDalCursor.Fields.htm) будет соответствовать
 наименованию характеристики, а значение по этому полю будет соответствовать
 значению характеристики для поля таблицы. Например: в коллекции [Fields](../IDalCursor/IDalCursor.Fields.htm)
 будет иметься поле «COLUMN_NAME», в качестве значения по этому полю будут
 доступны наименования полей таблицы.


## Пример


Добавьте ссылки на системные сборки: Dal.


	Sub UserProc;

	Var

	    Driver: IDalDriver;

	    Connect: IDalConnection;

	    ColCur: IDalColumns;

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

	    //Параметры полей таблицы DataTable

	    ColCur := Connect.Columns("DataTable");

	    ColFields := ColCur.Fields;

	    //Просмотр параметров и их значений

	    While Not ColCur.Eof Do

	        i := i + 1;

	        Debug.WriteLine("Номер поля: " + i.ToString);

	        Debug.Indent;

	        For Each ColField In ColFields Do

	            Debug.WriteLine(ColField.Name + " = " + ColField.Value);

	        End For;

	        Debug.Unindent;

	        ColCur.Next;

	    End While;

	    ColCur.Close;

	    Connect.Close;

	End Sub UserProc;


При выполнении примера будет осуществлено подключение к репозиторию
 с указанными параметрами расположения. На базе соединения будет создан
 курсор с параметрами полей таблицы «DataTable». Информация о параметрах
 и их значениях будет выведена в консоль среды разработки.


См. также:


[IDalConnection](IDalConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
