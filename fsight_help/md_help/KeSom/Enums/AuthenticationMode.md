# AuthenticationMode

AuthenticationMode
-


# AuthenticationMode


## Описание


Перечисление AuthenticationMode
 сдержит типы аутентификации или авторизации, используемые для какого-либо
 подключения.


Используется следующими свойствами и методами:


	- [IDatabase.Authentication](KeDb.chm::/Interface/IDatabase/IDatabase.Authentication.htm);


	- [ICredentials.Authentication](../Interface/ICredentials/ICredentials.Authentication.htm);


	- [ISecurityPackage.SupportsAuthentication](../Interface/ISecurityPackage/ISecurityPackage.SupportsAuthentication.htm);


	- [ISecurityPackage.CreateCredentials](../Interface/ISecurityPackage/ISecurityPackage.CreateCredentials.htm);


	- [ISecurityPackageUserData.Authentication](../Interface/ISecurityPackageUserData/ISecurityPackageUserData.Authentication.htm);


	- [IMetabaseLinkBase.Authentication](../Interface/IMetabaseLinkBase/IMetabaseLinkBase.Authentication.htm);


	- [IAdoMdCatalog.Authentication](KeAdoMd.chm::/Interface/IAdoMdCatalog/IAdoMdCatalog.Authentication.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 AnyAccepted. Любой
		 принятый тип аутентификации.


		 1
		 Password. Парольная
		 аутентификация. Требуется явное указание имени и пароля пользователя.
		 Для обработки учетных данных используется интерфейс [IPasswordCredentials](../Interface/IPasswordCredentials/IPasswordCredentials.htm).


		 2
		 Domain. Интегрированная
		 доменная аутентификация. При подключении будут использоваться
		 те же имя пользователя и пароль, используя которые пользователь
		 подключился к домену. Для обработки учетных данных используется
		 интерфейс [IDomainCredentials](../Interface/IDomainCredentials/IDomainCredentials.htm).


		 3
		 Role. Ролевая аутентификация.
		 При данном типе аутентификации каждый пользователь ассоциируется
		 с определенной ролью.
		Примечание.
		 Ролевой тип аутентификации является устаревшим. Оставлен для совместимости
		 с предыдущими версиями.


		 4
		 DomainExplicit. Доменная
		 аутентификация. Требуется явное указание домена, имени пользователя
		 и пароля. Для обработки учётных данных используется интерфейс
		 [IDomainCredentials](../Interface/IDomainCredentials/IDomainCredentials.htm).
		 Использование доменной аутентификации
		 актуально для СУБД Microsoft SQL Server, Oracle, PostgreSQL.


		 5
		 Certificate. Аутентификация
		 по сертификату. Владелец сертификата может работать в репозитории
		 под любым пользователем.


		 6
		 PasswordEncrypted.
		 Парольная аутентификация с шифрованием. Использование актуально
		 только для сервера приложений.


		 7
		 OAuth. Аутентификация
		 через внешние сервисы с использованием протокола OAuth или OpenID
		 Connect. Используется только в веб-приложении «Форсайт. Аналитическая платформа».


		 8
		 ExtService. Авторизация
		 в репозитории пользователя, прошедшего аутентификацию на внешнем
		 сервисе. Поддерживается авторизация по [JWT-токену](Setup.chm::/UiWebSetup/Authentication/JWT.htm)
		 или [HTTP-заголовкам](Setup.chm::/UiWebSetup/Authentication/HTTPHeaders.htm),
		 содержащим информацию о пользователе внешнего сервиса.


См. также:


[Перечисления сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
