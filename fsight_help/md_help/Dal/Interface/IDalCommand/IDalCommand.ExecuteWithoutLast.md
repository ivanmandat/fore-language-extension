# IDalCommand.ExecuteWithoutLast

IDalCommand.ExecuteWithoutLast
-


# IDalCommand.ExecuteWithoutLast


## Синтаксис


ExecuteWithoutLast: Integer;


## Описание


Метод ExecuteWithoutLast выполняет
 команду со всеми наборами параметров, кроме последнего, и возвращает число
 обработанных записей.


## Комментарии


Данный метод выполняет такие же функции, как и метод [Execute](IDalCommand.Execute.htm),
 но при его выполнении будет игнорироваться последний набор значений параметров,
 индекс которого возвращает свойство [CurrentParamsRow](IDalCommand.CurrentParamsRow.htm).
 Данный метод необходим, когда возможно превышение [максимального
 количества](IDalCommand.MaxParamsRows.htm) обрабатываемых наборов параметров.


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
