# ISecurityPackage.CreateCredentials

ISecurityPackage.CreateCredentials
-


# ISecurityPackage.CreateCredentials


## Синтаксис


CreateCredentials(Authentication: [AuthenticationMode](../../Enums/AuthenticationMode.htm)):
 [ICredentials](../ICredentials/ICredentials.htm);


## Параметры


Authentication. Используемый
 тип аутентификации.


## Описание


Метод CreateCredentials создает
 учётные данные репозитория с заданным типом аутентификации.


## Пример


	Sub Main;

	Var

	    Package: ISecurityPackage;

	    OracleSPLD: IPrimaryOracleSPLD;

	    Creds: IPasswordCredentials;

	    Connection: ISecurityConnection;

	    ColCur: IDalColumns;

	    Field: IDalCursorField;

	Begin

	    Package := New StandardSecurityPackage.Create;

	    OracleSPLD := Package.CreateLogonData("ORCL") As IPrimaryOracleSPLD;

	    OracleSPLD.Scheme := "Test_Schema_ORCL";

	    OracleSPLD.Server := "Test_ORCL";

	    Creds := Package.CreateCredentials(AuthenticationMode.Password) As IPasswordCredentials;

	    Creds.UserName := "TestUser";

	    Creds.Password := "TestUser";

	    Connection := Package.PerformLogon(True, OracleSPLD, Creds);

	    ColCur := Connection.Columns("Table_1");

	    While Not ColCur.Eof Do

	        For Each Field In ColCur.Fields Do

	            Debug.WriteLine(Field.Name + " " + Field.Value);

	        End For;

	        Debug.WriteLine("");

	        ColCur.Next;

	    End While;

	    ColCur.Close;

	End Sub Main;


После выполнения примера будет осуществлено новое подключение к схеме
 Test_Schema_ORCL, расположенной на сервере Test_ORCL, с указанными учётными
 данными. Будет получена и выведена в консоль среды разработки системная
 информация о таблице Table_1, если таковая имеется в данной схеме.


См. также:


[ISecurityPackage](ISecurityPackage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
