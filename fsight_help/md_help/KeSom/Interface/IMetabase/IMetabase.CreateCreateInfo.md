# IMetabase.CreateCreateInfo

IMetabase.CreateCreateInfo
-


# IMetabase.CreateCreateInfo


## Синтаксис


CreateCreateInfo: [IMetabaseObjectCreateInfo](../IMetabaseObjectCreateInfo/IMetabaseObjectCreateInfo.htm);


## Описание


Метод CreateCreateInfo создает
 информацию для нового объекта.


## Комментарии


Создание нового объекта осуществляется методом [CreateObject](IMetabase.CreateObject.htm).


## Пример


Добавьте ссылку на системную сборку Metabase.


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


После выполнения примера в корневом каталоге репозитория будет создана
 новая база данных. Данные будут располагаться на сервере Test в схеме
 TestShema. При подключении к БД используется парольная аутентификация.
 Логин и пароль берутся из учётных данных, указанных при входе в репозиторий.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
