# ISecurityConnection.CreateCommandO

ISecurityConnection.CreateCommandO
-


# ISecurityConnection.CreateCommandO


## Синтаксис


CreateCommandO(Options: [DalCommandOption](Dal.chm::/Enums/DalCommandOption.htm);
 Sql: String): [IDalCommand](Dal.chm::/Interface/IDalCommand/IDalCommand.htm);


## Параметры


Options. Режим работы SQL-запросов.


Sql. SQL-запрос, который будет
 выполнен при выполнении команды.


## Описание


Метод CreateCommandO новый объект,
 используемый для работы с БД посредством SQL-запросов в заданном режиме.


## Комментарии


В текущей реализации в качестве значения входного параметра Option
 метод поддерживает только два режима: [DalCommandOption.None](Dal.chm::/Enums/DalCommandOption.htm)
 и [DalCommandOption.NoCursorInQuery](Dal.chm::/Enums/DalCommandOption.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие таблицы
 с физическим именем TABLE.


Добавьте ссылки на системные сборки: Dal, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Connection: ISecurityConnection;

	    Command: IDalCommand;

	    Cursor: IDalCursor;

	    Field: IDalCursorField;

	Begin

	    MB := MetabaseClass.Active;

	    Connection := MB.LogonSession.PrimaryConnection;

	    // Создание команды

	    Command := Connection.CreateCommandO(DalCommandOption.NoCursorInQuery, "Select * From Table");

	    // Создание курсора с извлечением данных

	    Cursor := Command.CreateCursor;

	    // Просмотр полученных значений

	    While Not Cursor.Eof Do

	        For Each Field In Cursor.Fields Do

	            Debug.WriteLine(Field.Name + " " + Field.Value);

	        End For;

	        Debug.WriteLine("");

	        Cursor.Next;

	    End While;

	    // Закрытие курсора и команды

	    Cursor.Close;

	    Command.Close;

	End Sub UserProc;


При выполнении примера на базе текущего соединение будет создана команда,
 которая выполняет SQL-запросы без использования курсоров. Будет выполнен
 SQL-запрос и получены его результаты. Результаты будут выведены в консоль
 среды разработки.


См. также:


[ISecurityConnection](ISecurityConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
