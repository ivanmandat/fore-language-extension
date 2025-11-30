# Команда выполнения SQL-запросов: Сборка Dal

Команда выполнения SQL-запросов: Сборка Dal
-


# Команда выполнения SQL-запросов


Имея [соединение](Dal_Connection.htm) с сервером БД можно
 производить работу с объектами и их данными. Для выполнения каких-либо
 действий пользователь, под которым производилось подключение, должен обладать
 соответствующими правами. Для работы с объектами БД и управления транзакциями
 к серверу в интерфейсе [IDalConnection](../Interface/IDalConnection/IDalConnection.htm)
 реализован ряд свойств и методов. Чтобы работать с базой данных с помощью
 SQL-запросов используется команда, которую описывает интерфейс [IDalCommand](../Interface/IDalCommand/IDalCommand.htm).
 Для создания команды используется метод [IDalConnection.CreateCommand](../Interface/IDalConnection/IDalConnection.CreateCommand.htm).
 У команды в свойстве [IDalCommand.SQL](../Interface/IDalCommand/IDalCommand.SQL.htm)
 необходимо задать SQL-запрос, который будет выполняться. Выполнение запроса
 происходит при вызове метода [IDalCommand.Execute](../Interface/IDalCommand/IDalCommand.Execute.htm),
 [IDalCommand.ExecuteWithoutLast](../Interface/IDalCommand/IDalCommand.ExecuteWithoutLast.htm)
 или [IDalCommand.CreateCursor](../Interface/IDalCommand/IDalCommand.CreateCursor.htm).
 В зависимости от того, какие действия выполняет SQL-запрос возможны следующие
 варианты:


	- SQL-запрос извлекает данные.
	 Для работы с полученными данными используется курсор. Для выполнения
	 команды и создания курсора используется метод [IDalCommand.CreateCursor](../Interface/IDalCommand/IDalCommand.CreateCursor.htm);


	- SQL-запрос изменяет данные.
	 Метод [IDalCommand.Execute](../Interface/IDalCommand/IDalCommand.Execute.htm)
	 или [IDalCommand.ExecuteWithoutLast](../Interface/IDalCommand/IDalCommand.ExecuteWithoutLast.htm)
	 вернет количество записей, которые были изменены.


	Var

	    //...

	    ORCLConnect: IDalConnection;

	    Command: IDalCommand;

	    Cursor: IDalCursor;

	    //...

	Begin

	    //...

	    Command := ORCLConnect.CreateCommand;

	    //Извлечение данных

	    Command.SQL := "select * from Table1";

	    //Курсор для работы и полученными данными

	    Cursor := Command.CreateCursor;

	    While Not Cursor.Eof Do

	        //...

	        Cursor.Next;

	    End While;

	    Cursor.Close;

	    //Изменение данных

	    Command.SQL := "insert into Table1(Code) values('123')";

	    i := Command.Execute;

	    Command.Close;

	    Debug.WriteLine("Добавлено записей: " + i.ToString);


## Использование параметров в SQL-запросах


Для многократного использования команды с различными наборами значений
 реализована возможность указывать в SQL-запросе параметры. Параметры имеют
 следующий синтаксис: :<Наименование
 параметра>. Анализ SQL-запроса на наличие параметров производится
 при вызове метода [IDalCommand.Parse](../Interface/IDalCommand/IDalCommand.Parse.htm).
 После анализа коллекция параметров будет доступна в свойстве [IDalCommand.Params](../Interface/IDalCommand/IDalCommand.Params.htm).
 В данной коллекции для каждого параметра можно указать значение, которое
 будет подставлено в SQL-запрос при выполнении команды.


	Var

	    //...

	    ORCLConnect: IDalConnection;

	    Command: IDalCommand;

	    //...

	Begin

	    //...

	    Command := ORCLConnect.CreateCommand;

	    //Изменение данных

	    Command.SQL := "insert into Table1(Code) values(:CodeValue)";

	    //Анализ SQL-запроса

	    Command.Parse;

	    //Указание значения найденного параметра

	    Command.Params.Item(0).Value := 124;

	    //Выполнение команды

	    i := Command.Execute;

	    Command.Close;

	    Debug.WriteLine("Добавлено записей: " + i.ToString);


В команде можно указать несколько наборов значений параметров. Количество
 наборов указывается в свойстве [IDalCommand.MaxParamsRows](../Interface/IDalCommand/IDalCommand.MaxParamsRows.htm).


Примечание.
 Перед указанием значения свойства [IDalCommand.MaxParamsRows](../Interface/IDalCommand/IDalCommand.MaxParamsRows.htm)
 для каждого параметра должен быть указан [тип
 данных](../Interface/IDalCommandParam/IDalCommandParam.DataType.htm).


Значения параметров также указываются в коллекции [IDalCommand.Params](../Interface/IDalCommand/IDalCommand.Params.htm).
 Для перехода к следующему набору параметров используется метод [IDalCommand.NextParamsRow](../Interface/IDalCommand/IDalCommand.NextParamsRow.htm).


	Var

	    //...

	    ORCLConnect: IDalConnection;

	    Command: IDalCommand;

	    //...

	Begin

	    //...

	    Command := ORCLConnect.CreateCommand;

	    //Изменение данных

	    Command.SQL := "insert into Table1(Code) values(:ParamArray)";

	    //Анализ SQL-запроса

	    Command.Parse;

	    //Указание коллекции значений параметра

	    Param := Command.Params.Item(0);

	    Param.DataType := DbDataType.Integer;

	    Command.MaxParamsRows := 3;

	    //Первое значение

	    Param.Value := 125;

	    Command.NextParamsRow;

	    //Второе значение

	    Param.Value := 126;

	    Command.NextParamsRow;

	    //Третье значение

	    Param.Value := 127;

	    //Выполнение команды

	    i := Command.Execute;

	    Command.Close;

	    Debug.WriteLine("Добавлено записей: " + i.ToString);


См.
 также:


[Введение](Dal_Intro.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
