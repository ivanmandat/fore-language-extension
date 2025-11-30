# IMetabaseLink.Credentials

IMetabaseLink.Credentials
-


# IMetabaseLink.Credentials


## Синтаксис


Credentials: [ICredentials](../ICredentials/ICredentials.htm);


## Описание


Свойство Credentials определяет
 учётные данные пользователя, используемые при автоматическом подключении.


## Комментарии


Свойство доступно только для записи.


Данное свойство:


	- актуально для использования, если свойство [IMetabaseLink.LoginPrompt](IMetabaseLink.LoginPrompt.htm) установлено
	 в False.


	- неактуально для использования, если свойство [IMetabaseLink.UseMetabaseCredentials](IMetabaseLink.UseMetabaseCredentials.htm)
	 установлено в True.


Если учетные данные задаются для [описания
 репозитория](../IMetabaseDefinition/IMetabaseDefinition.htm), то при сохранении описания они будут зашифрованы и сохранены
 в реестр операционной системы. Сохраненные учетные данные могут использоваться
 при имперсонации
 пользователей во время подключения к репозиторию в прикладном коде.


## Пример


Для выполнения примера на сервере СУБД, где создан текущий репозиторий,
 предполагается наличие репозитория «TestRepository».


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    Link: IMetabaseLink;

    Package: ISecurityPackage;

    MSSPLD: IPrimaryMsSqlSPLD;

    PswCreds: IPasswordCredentials;

Begin

    MB := MetabaseClass.Active;

    // Создание связи с репозиторием

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_METABASELINK;

    CrInfo.Id := "Link_1";

    CrInfo.Name := "Связь с репозиторием TestRepository";

    CrInfo.Parent := MB.Root;

    // Настройки подключения к репозиторию

    Link := MB.CreateObject(CrInfo).Edit As IMetabaseLink;

    Link.Authentication := AuthenticationMode.Password;

    Link.DriverId := "MSSQL2012";

    MSSPLD := Link.LogonData As IPrimaryMsSqlSPLD;

    MSSPLD.Server := "%METABASE_SERVER%";

    MSSPLD.Database := "TestRepository";

    // Учётные данные

    Package := New StandardSecurityPackage.Create;

    PswCreds := Package.CreateCredentials(AuthenticationMode.Password) As IPasswordCredentials;

    PswCreds.UserName := "User";

    PswCreds.Password := "Password";

    Link.LoginPrompt := False;

    Link.Credentials := PswCreds;

    // Сохранение изменений

    (Link As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан
 новый объект «Связь с репозиторием». При использовании данной связи будет
 осуществляться автоматическое подключение с указанными в примере учётными
 данными.


См. также:


[IMetabaseLink](IMetabaseLink.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
