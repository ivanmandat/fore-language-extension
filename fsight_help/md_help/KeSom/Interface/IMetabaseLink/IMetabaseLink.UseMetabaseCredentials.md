# IMetabaseLink.UseMetabaseCredentials

IMetabaseLink.UseMetabaseCredentials
-


# IMetabaseLink.UseMetabaseCredentials


## Синтаксис


UseMetabaseCredentials: Boolean;


## Описание


Свойство UseMetabaseCredentials
 определяет, будут ли для подключения к базе данных использоваться учетные
 данные, указанные при входе в текущий репозиторий.


## Комментарии


Свойство актуально, если свойству [IMetabaseLink.LoginPrompt](IMetabaseLink.LoginPrompt.htm)
 установлено значение False.


Допустимые значения:


	- True. Используются учётные
	 данные, указанные при подключении к текущему репозиторию;


	- False. Значение по умолчанию.
	 Используются учётные данные, заданные в свойстве [IMetabaseLink.Credentials](IMetabaseLink.Credentials.htm).


## Пример


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    Link: IMetabaseLink;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_METABASELINK;

	    CrInfo.Id := "Link_1";

	    CrInfo.Name := "Связь с репозиторием Test1";

	    CrInfo.Parent := MB.Root;

	    Link := MB.CreateObject(CrInfo).Edit As IMetabaseLink;

	    Link.Authentication := AuthenticationMode.Password;

	    Link.DriverId := "ORCL8";

	    Link.SecurityPackage := "STANDARDSECURITYPACKAGE";

	    Link.LogonData.ParamValue("SERVER") := "%METABASE_SERVER%";

	    Link.LogonData.ParamValue("SCHEME") := "TestShema";

	    Debug.WriteLine(Link.LoginPrompt);

	    Link.LoginPrompt := False;

	    Link.UseMetabaseCredentials := True;

	    (Link As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан
 новый объект - Связь с репозиторием. Данный объект будет осуществляет
 связь с репозиторием, расположенным в схеме TestShema на том же сервере,
 что и текущий репозиторий. При использовании данного объекта будет осуществляться
 автоматическое подключение к схеме с учетными данными, указанными при
 входе в текущий репозиторий.


См. также:


[IMetabaseLink](IMetabaseLink.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
