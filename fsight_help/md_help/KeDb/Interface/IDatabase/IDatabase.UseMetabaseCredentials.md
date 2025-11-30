# IDatabase.UseMetabaseCredentials

IDatabase.UseMetabaseCredentials
-


# IDatabase.UseMetabaseCredentials


## Синтаксис


UseMetabaseCredentials: Boolean;


## Описание


Свойство UseMetabaseCredentials определяет, будут ли для подключения к базе данных использоваться учетные данные, указанные при входе в платформу.


## Комментарии


Если свойство установлено в True, будут использоваться учетные данные, указанные при входе, а также будет установлено автоматическое подключении к базе данных при входе в систему.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    DB: IDatabase;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_DATABASE;

	    CrInfo.Id := "NewBD";

	    CrInfo.Name := "Новая база данных";

	    CrInfo.Parent := MB.Root;

	    MObj := MB.CreateObject(CrInfo).Edit;

	    DB := MObj As IDatabase;

	    DB.Authentication := AuthenticationMode.Password;

	    DB.DriverId := "ORCL";

	    DB.LogonData.ParamValue("SERVER") := "Test";

	    DB.LogonData.ParamValue("SCHEME") := "TestShema";

	    DB.UseMetabaseCredentials := True;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создана новая база данных. Данные будут располагаться на сервере "Test" в схеме "TestShema". При подключение к БД будут использоваться учетные данные, указанные при входе в платформу.


См. также:


[IDatabase](IDatabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
