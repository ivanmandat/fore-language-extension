# IPrimaryODBCSPLD.ODBCParamValue

IPrimaryODBCSPLD.ODBCParamValue
-


# IPrimaryODBCSPLD.ODBCParamValue


## Синтаксис


ODBCParamValue(Name: String): Variant;


## Параметры


Name. Наименование параметра.


## Описание


Свойство ODBCParamValue определяет
 значение для параметра с указанным наименованием.


## Комментарии


Наименования параметров можно получить в документации по ODBC драйверу,
 с помощью которого осуществляется подключение.


## Пример


В операционной системе должен быть установлен ODBC драйвер для Microsoft
 SQL Server. В сети имеется сервер с наименованием «MSSQLServer», на сервере
 создана схема «DataRepository».


Добавьте ссылки на системные сборки: Db, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    DB: IDatabase;

	    LogonData: IPrimaryODBCSPLD;

	    PasswordCreds: IPasswordCredentials;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_DATABASE;

	    CrInfo.Id := "ODBC_DB";

	    CrInfo.Name := "Подключение через ODBC1";

	    CrInfo.Parent := MB.Root;

	    MObj := MB.CreateObject(CrInfo).Edit;

	    DB := MObj As IDatabase;

	    DB.Authentication := AuthenticationMode.Password;

	    DB.DriverId := "ODBC";

	    LogonData := DB.LogonData As IPrimaryODBCSPLD;

	    LogonData.ODBCParamValue("DRIVER") := "{ODBC Driver 13 for SQL Server}";

	    LogonData.ODBCParamValue("SERVER") := "MSSQLServer";

	    LogonData.ODBCParamValue("DATABASE") := "DataRepository";

	    DB.LoginPrompt := False;

	    PasswordCreds := DB.Credentials As IPasswordCredentials;

	    PasswordCreds.UserName := "User";

	    PasswordCreds.Password := "Password";

	    MObj.Save;

	End Sub UserProc;


При выполнение примера в корневой папке репозитория будет создана новая
 база данных, которая позволяет подключаться к источникам данных через
 ODBC драйвер Microsoft SQL Server.


См. также:


[IPrimaryODBCSPLD](IPrimaryODBCSPLD.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
