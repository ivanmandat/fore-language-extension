# IAdoMdCatalog.UseMetabaseCredentials

IAdoMdCatalog.UseMetabaseCredentials
-


# IAdoMdCatalog.UseMetabaseCredentials


## Синтаксис


UseMetabaseCredentials: Boolean;


## Описание


Свойство UseMetabaseCredentials
 определяет, будут ли для подключения к базе данных использоваться учетные
 данные, указанные при входе в репозиторий.


## Комментарии


Если свойству установлено значение True,
 то будут использоваться учетные данные, указанные при входе в репозиторий,
 а также будет установлено автоматическое подключении к базе данных при
 входе в систему.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    CatAdo: IAdoMdCatalog;

	    Creds: IPasswordCredentials;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_ADOMD_CATALOG;

	    CrInfo.Id := "MAS_TEST";

	    CrInfo.Name := "Каталог на базе MSSQL Analysis Services";

	    CrInfo.Parent := MB.Root;

	    CatAdo := MB.CreateObject(CrInfo).Edit As IAdoMdCatalog;

	    CatAdo.Driver := "MSOLAP";

	    CatAdo.Server := "MAS_TEST";

	    CatAdo.Name := "TEST_CUBE";

	    CatAdo.Authentication := AuthenticationMode.Password;

	    CatAdo.UseMetabaseCredentials := False;

	    Creds := Catalog.Credentials As IPasswordCredentials;

	    Creds.UserName := "User1";

	    Creds.Password := "password";

	    CatAdo.Credentials := Creds;

	    (CatAdo As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан
 новый каталог ADOMD. Для данного каталога будет настроено автоматическое
 подключение к базе данных «TEST_CUBE», расположенной на сервере «MAS_TEST».
 При подключении будет использоваться драйвер Microsoft MSSQL Analysis
 Services и указанные учетные данные.


См. также:


[IAdoMdCatalog](IAdoMdCatalog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
