# IMetabaseDefinitions.Count

IMetabaseDefinitions.Count
-


# IMetabaseDefinitions.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 описаний репозиториев, зарегистрированных на рабочей станции.


## Пример


	Sub UserProc;

	Var

	    Man: IMetabaseManager;

	    Defs: IMetabaseDefinitions;

	    Def: IMetabaseDefinition;

	    i, c: Integer;

	Begin

	    Man := MetabaseManagerFactory.Active;

	    Defs := Man.Definitions;

	    c := Defs.Count;

	    For i := 0 To c - 1 do

	        Def := Defs.Item(i);

	        Debug.Write("Репозиторий: " + Def.Name + '(' + Def.Id + "). Сервер: ");

	        Select Case Def.DriverId

	            Case "MSSQL2012", "MSSQL2012ODBC": Debug.WriteLine((Def.LogonData As IPrimaryMsSqlSPLD).Server);

	            Case "ORCL8": Debug.WriteLine((Def.LogonData As IPrimaryOracleSPLD).Server);

	            Case "POSTGRES": Debug.WriteLine((Def.LogonData As IPrimaryPostgresSPLD).Server);

	            Case "WSF": Debug.WriteLine((Def.LogonData As IPrimaryServiceSPLD).Endpoint);

	            Case "SQLITE": Debug.WriteLine((Def.LogonData As IPrimarySQLiteSPLD).FileName);

	        End Select;

	    End For;

	End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведен список
 описаний репозиториев, зарегистрированных в менеджере репозиториев.


См. также:


[IMetabaseDefinitions](IMetabaseDefinitions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
