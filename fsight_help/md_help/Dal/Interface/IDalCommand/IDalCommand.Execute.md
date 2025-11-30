# IDalCommand.Execute

IDalCommand.Execute
-


# IDalCommand.Execute


## Синтаксис


Execute: Integer;


## Описание


Метод Execute осуществляет выполнение
 команды на сервере БД и возвращает число обработанных записей.


## Комментарии


Метод выполняет SQL-запрос, указанный в свойстве [IDalCommand.SQL](IDalCommand.SQL.htm).
 Если команда используется для извлечения данных, то рекомендуется вместо
 метода Execute использовать метод
 [CreateCursor](IDalCommand.CreateCursor.htm).


Если SQL-запрос изменяет данные (добавляет или удаляет записи, обновляет
 существующие записи), то метод вернет количество обработанных записей.
 При использовании в запросе параметров их фактические значения будут подставлены
 из коллекции [IDalCommand.Params](IDalCommand.Params.htm).
 Если команда используется для пакетной вставки нескольких наборов значений
 параметров, то при выполнении метода будут обработаны все наборы в диапазоне
 от нуля до [CurrentParamsRow](IDalCommand.CurrentParamsRow.htm).
 После выполнения метода Execute
 свойству [CurrentParamsRow](IDalCommand.CurrentParamsRow.htm)
 будет установлено значение ноль.


Если во время выполнения SQL-запроса произошла какая-либо ошибка, то
 будет сгенерирована исключительная ситуация.


## Пример


Для выполнения примера в репозитории должны быть база данных с идентификатором
 «DB» и таблица с идентификатором «MyTable».


Добавьте ссылки на системные сборки: Dal, Db, Metabase.


	Sub UserProc;

	Var

	    Mb : IMetabase;

	    DB_ORCL8 : IDatabaseInstance;

	    Command : IDalCommand;

	    Params : IDalCommandParams;

	    sql : String;

	    paramArraySize, i, j : Integer;

	Begin

	    MB := MetabaseClass.Active;

	    DB_ORCL8 := MB.ItemById("DB").Open(Null) As IDatabaseInstance;

	    sql := "insert into MyTable (field,field1) values(:1,:2)";

	    Command := DB_ORCL8.Connection.CreateCommand(sql);

	    Command.Type := DalCommandType.Text;

	    Command.Parse;

	    Command.Prepare;

	    Params := Command.Params;

	    Params.Item(0).DataType := DbDataType.String;

	    Params.Item(1).DataType := DbDataType.Float;

	    paramArraySize := 3;

	    Command.MaxParamsRows := paramArraySize;

	    j := 1;

	    For i := 1 To 10 Do

	        Params.Item(0).Value := "№ "+i.ToString;

	        Params.Item(1).Value := i + 0.1;

	        If (j < paramArraySize) Then

	            Command.NextParamsRow;

	            j := j+1;

	            Else

	                Command.Execute;

	                j:= 1;

	        End If;

	    End For;

	    If j > 1 Then

	        Command.ExecuteWithoutLast;

	    End If;

	End Sub UserProc;


После выполнения примера в таблицу будет вставлено 10 записей.


См. также:


[IDalCommand](IDalCommand.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
