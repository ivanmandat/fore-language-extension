# Работа с менеджером безопасности: Сборка Metabase

Работа с менеджером безопасности: Сборка Metabase
-


# Работа с менеджером безопасности


Для работы с менеджером безопасности предназначен интерфейс [IMetabaseSecurity](../../Interface/IMetabaseSecurity/IMetabaseSecurity.htm).
 Доступ к менеджеру безопасности можно получить, используя свойство [IMetabase.Security](../../Interface/IMetabase/IMetabase.Security.htm).


	Var

	    Mb: IMetabase;

	    MbSec: IMetabaseSecurity;

	Begin

	    Mb := MetabaseClass.Active;

	    // Менеджер безопасности

	    MbSec := Mb.Security;

	    // ...

	    // Дальнейшая работа с менеджером безопасности

	    // ...


Для того, чтобы была возможность вносить изменения в настройки менеджера
 безопасности, необходимо в коде с помощью метода [IMetabase.RequestLicense](../../Interface/IMetabase/IMetabase.RequestLicense.htm)
 получить лицензию «Администрирование».
 После внесения необходимых изменений и сохранения настроек менеджера безопасности
 лицензия должна быть освобождена. Для этого соответствующей переменной
 присвойте пустое значения:


	Var

	    Mb: IMetabase;

	    MbSec: IMetabaseSecurity;

	    Lic: Object;

	Begin

	    Mb := MetabaseClass.Active;

	    // Получение лицензии для возможности работы с менеджером безопасности

	    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

	    // Менеджер безопасности

	    MbSec := Mb.Security;

	    // ...

	    // Внесение изменений в настройки менеджера безопасности

	    // ...

	    // Применение изменений

	    MbSec.Apply;

	    // Освобождение лицензии

	    Lic := Null;


При работе с субъектами безопасности или при изменении прав доступа
 требуются учётные данные пользователя, обладающего правами администрирования
 пользователей на сервере СУБД. При работе в веб-приложении/настольном
 приложении для ввода таких учётных данных вызывается диалог «[Авторизация
 в базе данных](UiNavObj.chm::/database/UiDb_database_authorization.htm)». Введённые учётные данные кешируются
 и используются в рамках текущей сессии с репозиторием.


При работе из Fore для указания учётных данных используется свойство
 [ILogonSession.Credentials](../../Interface/ILogonSession/ILogonSession.Credentials.htm).
 Если текущий пользователь репозитория обладает правами администрирования
 на сервере СУБД, то в качестве значения для [ILogonSession.Credentials](../../Interface/ILogonSession/ILogonSession.Credentials.htm)
 можно указать значение свойства [ILogonSession.LogonCredentials](../../Interface/ILogonSession/ILogonSession.LogonCredentials.htm):


	Var

	    Mb: IMetabase;

	    Session: ILogonSession;

	    Package: ISecurityPackage;

	    PswCreds: IPasswordCredentials;

	Begin

	    Mb := MetabaseClass.Active;

	    // Менеджер безопасности

	    Session := Mb.LogonSession;

	    // Если текущий пользователь обладает правами администрирования на уровне СУБД, то указываем его учётные данные:

	    Session.Credentials("$SYSTEM", True) := Session.LogonCredentials;

	    // Или создаём новые учётные данные:

	    Package := New StandardSecurityPackage.Create;

	    PswCreds := Package.CreateCredentials(AuthenticationMode.Password) As IPasswordCredentials;

	    PswCreds.UserName := "Admin";

	    PswCreds.Password := "Password";

	    Session.Credentials("$SYSTEM", True) := PswCreds;

	    //...

	    // Дальнейшая работа с менеджером безопасности

	    //...


Более подробно различные аспекты работы в менеджере безопасности описаны
 в следующих подразделах:


	- [Политика безопасности](Policy.htm)


	- [Субъекты безопасности](CreateMBSubject.htm)


	- [Методы разграничения
	 доступа](AccessControl/AccessControl.htm)


		- [Дискреционный
		 метод](AccessControl/Discretionary.htm)


		- [Мандатный метод](AccessControl/Mandatory.htm)


		- [Разграничения доступа
		 по уровням](AccessControl/Levels.htm)


		- [Атрибутный метод](AccessControl/ABAC.htm)


	- [Аудит доступа и история операций](Audit.htm)


	- [Протокол доступа](AuditLog.htm)


См. также:


[Общие
 принципы программирования с использованием сборки Metabase](../KeSom_Programming.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
