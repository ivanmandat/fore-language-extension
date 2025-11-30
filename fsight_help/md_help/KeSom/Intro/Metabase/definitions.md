# Работа с описанием репозитория и подключение

Работа с описанием репозитория и подключение
-


# Работа с описанием репозитория и подключение


Прежде чем приступить к написанию кода по работе с репозиторием, сам
 репозиторий должен быть физически создан на сервере СУБД. Для этого используется
 приложение «[Менеджер репозитория](Setup.chm::/05_RepoMngr/Setup_RepoMngr_Work_Main.htm)»,
 входящее в состав «Форсайт. Аналитическая платформа».


В ядре Fore для работы с менеджером репозиториев предназначен интерфейс
 [IMetabaseManager](../../Interface/IMetabaseManager/IMetabaseManager.htm).
 Получить доступ к нему можно, используя статическое свойство [Active](../../Interface/IMetabaseManagerFactory/IMetabaseManagerFactory.Active.htm)
 класса [MetabaseManagerFactory](../../Class/MetabaseManagerFactory/MetabaseManagerFactory.htm).
 Для того, чтобы платформа знала где расположен репозиторий, с которым
 будет осуществляться работа, добавьте соответствующее описание в коллекцию
 [Definitions](../../Interface/IMetabaseManager/IMetabaseManager.Definitions.htm)
 менеджера репозитория:


	Sub CreateDefinition;

	Var

	    MbManager: IMetabaseManager;

	    Definition: IMetabaseDefinition;

	    PostgreSPLD: IPrimaryPostgresSPLD;

	Begin

	    // Получение доступа к менеджеру репозитория

	    MbManager := MetabaseManagerFactory.Active;

	    // Создание нового описания репозитория

	    Definition := MbManager.Definitions.Add;

	    // Базовые свойства описания

	    Definition.Id := "TestDefinition";

	    Definition.Name := "TestDefinition";

	    Definition.Authentication := AuthenticationMode.Password;

	    Definition.DriverId := "POSTGRES";

	    Definition.SecurityPackage := "STANDARDSECURITYPACKAGE";

	    Definition.Scope := MetabaseDefinitionScope.LocalMachine;

	    // Дополнительные настройки, содержащие информацию о сервере СУБД

	    // Для сервера на базе PostgreSQL приведите значение свойства LogonData к интерфейсу IPrimaryPostgresSPLD

	    // Для серверов на базе других СУБД также имеются собственные интерфейсы с постфиксом SPLD

	    PostgreSPLD := Definition.LogonData As IPrimaryPostgresSPLD;

	    PostgreSPLD.Server := "Server";

	    PostgreSPLD.Database := "Repository";

	    // Сохранение описания

	    Definition.Save;

	End Sub CreateDefinition;


Имея описание репозитория, можно осуществить подключение к нему. Для
 этого предназначены методы [IMetabaseDefinition.Open](../../Interface/IMetabaseDefinition/IMetabaseDefinition.Open.htm)
 или [IMetabaseDefinition.OpenDefault](../../Interface/IMetabaseDefinition/IMetabaseDefinition.OpenDefault.htm).
 Функция для подключения может выглядеть следующим образом:


	Function ConnectToRepository(DefinitionID: String; User: String; Password: String): IMetabase;

	Var

	    MbManager: IMetabaseManager;

	    Definition: IMetabaseDefinition;

	    Package: ISecurityPackage;

	    Creds: IPasswordCredentials;

	    Mb: IMetabase;

	Begin

	    // Менеджер репозитория

	    MbManager := MetabaseManagerFactory.Active;

	    // Описание репозитория, к которому осуществляется подключение

	    Definition := MbManager.Definitions.FindById(DefinitionID);

	    If Definition <> Null Then

	        Package := MbManager.Packs.FindById(Definition.SecurityPackage).Package;

	        // Учётные данные для подключения

	        Creds := Package.CreateCredentials(AuthenticationMode.Password) As IPasswordCredentials;

	        Creds.UserName := User;

	        Creds.Password := Password;

	        // Подключение

	        Mb := Definition.Open(Creds);

	        If Mb <> Null Then

	            Return Mb;

	        Else

	            Return Null;

	        End If;

	    Else

	        Return Null;

	    End If;

	End Function ConnectToRepository;


Если подключение к репозиторию осуществляется через визуальный интерфейс
 платформы и вся дальнейшая работа предполагается в рамках этого репозитория,
 то доступ к текущему репозиторию из прикладного кода можно получить, используя
 статическое свойство [Active](../../Interface/IMetabaseClass/IMetabaseClass.Active.htm)
 класса [MetabaseClass](../../Class/MetabaseClass/MetabaseClass.htm):


	Function GetCurrentRepository: IMetabase;

	Begin

	    // Текущий репозиторий

	    Return MetabaseClass.Active;

	End Function GetCurrentRepository;


См. также:


[Общие
 принципы программирования с использованием сборки Metabase](../KeSom_Programming.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
