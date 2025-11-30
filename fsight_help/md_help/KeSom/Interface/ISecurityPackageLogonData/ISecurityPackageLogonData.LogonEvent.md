# ISecurityPackageLogonData.LogonEvent

ISecurityPackageLogonData.LogonEvent
-


# ISecurityPackageLogonData.LogonEvent


## Синтаксис


LogonEvent: [IMetabaseLogonEvents](../IMetabaseLogonEvents/IMetabaseLogonEvents.htm);


## Описание


Свойство LogonEvent определяет
 использование событий при подключении к репозиторию.


## Пример


Для выполнения примера в настройках описания репозитория должен быть
 установлен драйвер Oracle 12.x\18.х.


	Class MyMetabaseLogonEvents: MetabaseLogonEvents

	    Public Sub OnLogonUserMustChangePassword(Connection: IDalConnectionExt; Var Result: Boolean);

	    Begin

	        Result := True;

	        Connection.ChangeExpiredPassword("12345");

	    End Sub OnLogonUserMustChangePassword;

	End Class MyMetabaseLogonEvents;


	Sub Connect;

	Var

	    Mb: IMetabase;

	    MbManager: IMetabaseManager;

	    MbDef: IMetabaseDefinition;

	    Package: ISecurityPackage;

	    Credentials: IPasswordCredentials;

	    spld: ISecurityPackageLogonData;

	    mle: IMetabaseLogonEvents;

	Begin

	    Try

	        MbManager := MetabaseManagerFactory.Active;

	        MbDef := MbManager.Definitions.FindById("Warehouse");

	        Package := MbManager.Packs.FindById(MbDef.SecurityPackage).Package;

	        Credentials := Package.CreateCredentials(AuthenticationMode.Password) As IPasswordCredentials;

	        Credentials.UserName := "User102";

	        Credentials.Password := "123";

	        mle := New MyMetabaseLogonEvents.Create;

	        spld := MbDef.LogonData;

	        spld.LogonEvent := mle;

	        mb := MbDef.Open(Credentials);

	        Except On E: Exception Do

	            Debug.WriteLine("Ошибка при открытии репозитория");

	            Debug.WriteLine("Текст ошибки: " + E.Message);

	        Raise New Exception.Create(E.Message);

	    End Try;

	End Sub Connect;


При выполнении процедуры Connect будет произведено подключение к репозиторию.
 В случае, если срок действия пароля пользователя истек, то он будет изменен.


См. также:


[ISecurityPackageLogonData](ISecurityPackageLogonData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
