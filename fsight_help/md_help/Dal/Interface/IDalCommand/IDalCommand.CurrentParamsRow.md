# IDalCommand.CurrentParamsRow

IDalCommand.CurrentParamsRow
-


# IDalCommand.CurrentParamsRow


## Синтаксис


CurrentParamsRow: Integer;


## Описание


Свойство CurrentParamsRow возвращает
 индекс текущего набора параметров.


## Комментарии


Значения параметров указываются в коллекции [Params](IDalCommand.Params.htm).
 Для перехода к следующему набору параметров используйте метод [NextParamsRow](IDalCommand.NextParamsRow.htm).
 При выполнении метода [Execute](IDalCommand.Execute.htm) будут
 обработаны все наборы параметров в диапазоне от нуля до CurrentParamsRow
 включительно. При выполнении метода [ExecuteWithoutLast](IDalCommand.ExecuteWithoutLast.htm)
 будут обработаны все диапазоны в диапазоне от нуля до CurrentParamsRow
 с исключением значений, указанных в наборе CurrentParamsRow.


После выполнения метода [Execute](IDalCommand.Execute.htm)
 или [ExecuteWithoutLast](IDalCommand.ExecuteWithoutLast.htm)
 свойству CurrentParamsRow будет
 установлено значение ноль. Это позволяет вновь задать значения наборов
 параметров и выполнить команду.


## Пример


Для выполнения примера в репозитории должны быть база данных с идентификатором
 «DB» и таблица с идентификатором «MyTable».


Добавьте ссылки на системные сборки: Dal, Db, Metabase.


	Sub UserProc;

	Var

	    Mb : IMetabase;

	    DB_ORCL8 : IDatabaseInstance;

	    Command : IDalCommand;

	    CommandEx : IDalCommandEx;

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

	    paramArraySize := 4;

	    Command.MaxParamsRows := paramArraySize;

	    j := 1;

	    For i := 1 To 10 Do

	        Params.Item(0).Value := "№ "+i.ToString;

	        Params.Item(1).Value := i + 0.1;

	        If (j < paramArraySize) Then

	            Command.NextParamsRow;

	            j := j+1;

	            Else Command.Execute;

	            j:= 1;

	        End If;

	    End For;

	    If j > 1 Then

	        For i := 0 To Command.CurrentParamsRow Do

	            CommandEx := Command As IDalCommandEx;

	            CommandEx.SetCurrentParamsRow(i);

	            Debug.Write(Params.Item(0).Value);

	            Debug.Write(" ");

	            Debug.WriteLine(Params.Item(1).Value);

	        End For;

	        Command.ExecuteWithoutLast;

	    End If;

	End Sub UserProc;


После выполнения примера в таблицу будет вставлено 10 записей. В окно
 консоли будут выведены наборы параметров, которые превысили максимальный
 набор обрабатываемых строк.


См. также:


[IDalCommand](IDalCommand.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
