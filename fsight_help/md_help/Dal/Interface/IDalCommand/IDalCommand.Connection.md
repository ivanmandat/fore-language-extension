# IDalCommand.Connection

IDalCommand.Connection
-


# IDalCommand.Connection


## Синтаксис


		Connection: [IDalConnection](../IDalConnection/IDalConnection.htm);


## Описание


Свойство Connection возвращает
 текущее соединение с базой данных.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором «DB» и процедуры с идентификатором «Procedure».


Добавьте ссылки на системные сборки: Dal, Db, Collections, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DB: IDatabaseInstance;

	    Com: IDalCommand;

	    Conn: IDalConnection;

	    Proc: IDalProcedures;

	    ParamInfo, ValueParam: IArrayList;

	    i: Integer;

	    ProcFields: IDalCursorFields;

	    ProcField: IDalCursorField;

	Begin

	    MB := MetabaseClass.Active;

	    DB := MB.ItemById("DB").Open(Null) As IDatabaseInstance;

	    Com := DB.Connection.CreateCommand("");

	    Conn := Com.Connection;

	    Proc := Conn.Procedures("Procedure");

	    ParamInfo := New ArrayList.Create;

	    ValueParam := New ArrayList.Create;

	    ProcFields := Proc.Fields;

	    While Not Proc.Eof Do

	        For i := 0 To ProcFields.Count - 1 Do

	            ProcField := ProcFields.Item(i);

	            ParamInfo.Add(ProcField.Name);

	            ValueParam.Add(ProcField.Value);

	        End For;

	        Proc.Next;

	    End While;

	    Conn.Close;

	    Com.Close;

	    For i := 0 To ParamInfo.Count - 1 Do

	        Debug.Write(ParamInfo.Item(i));

	        Debug.Write(" = ");

	        Debug.WriteLine(ValueParam.Item(i));

	    End For;

	End Sub UserProc;


После выполнения примера произойдет подключение к указанной базе данных.
 На базе данного соединения будет получен курсор, содержащий информацию
 о процедуре, после чего в массивы ParamInfo и ValueParam будет считана
 эта информация. Полученная информация будет выведена в консоль среды разработки.


См. также:


[IDalCommand](IDalCommand.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
