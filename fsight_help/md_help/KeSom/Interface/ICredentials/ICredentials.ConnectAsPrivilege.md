# ICredentials.ConnectAsPrivilege

ICredentials.ConnectAsPrivilege
-


# ICredentials.ConnectAsPrivilege


## Синтаксис


ConnectAsPrivilege: [DalConnectAsPrivilegeType](Dal.chm::/Enums/DalConnectAsPrivilegeType.htm);


## Описание


Свойство ConnectAsPrivilege
 определяет подключение к серверу баз данных с заданной привилегией.


Примечание.
 Свойство не предназначено для использования в прикладном коде. Оставлено
 для совместимости с предыдущими версиями.


## Комментарии


Подключение с привилегиями может понадобиться при выполнении операций
 в «Форсайт. Аналитическая платформа»,
 требующих указания параметров учетной записи, обладающей правами администрирования
 в Oracle, например, когда пользователь SYSTEM заблокирован по требованиям
 безопасности и имеется только пользователь SYS.


## Пример


Для выполнения примера убедитесь, что репозиторий находится на сервере
 Oracle (тип СУБД Oracle) и на сервере имеется пользователь SYS с паролем
 «Password».


Добавьте системные сборки: Metabase, Dal.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    MbDef: IMetabaseDefinition;

	    Pack: ISecurityPackage;

	    Creds: ICredentials;

	    Se: IMetabaseSecurity;

	    Us: IMetabaseUser;

	    UsUpd: IMetabaseUsersUpdate;

	    Lic: Object;

	Begin

	    Mb := MetabaseClass.Active;

	    // Получим лицензию для возможности работы с менеджером безопасности

	    Lic := Mb.RequestLicense(UiLicenseFeatureType.Adm);

	    MbDef := Mb.Definition;

	    Pack := MbDef.Manager.Packs.FindById(MbDef.SecurityPackage).Package;

	    // Создадим парольные УД

	    Creds := Pack.CreateCredentials(AuthenticationMode.Password);

	    // Установим способ подключения с привилегией SYSDBA

	    Creds.ConnectAsPrivilege := DalConnectAsPrivilegeType.SYSDBA;

	    (Creds As IPasswordCredentials).UserName := "SYS";

	    (Creds As IPasswordCredentials).Password := "Password";

	    // Поместим УД в кеш для использования при соединении для создания/изменения пользователей СУБД

	    Mb.LogonSession.Credentials("$SYSTEM", True) := Creds;

	    // Обновим пользователей

	    Se := Mb.Security;

	    UsUpd := Se.CreateUsersUpdate;

	    // Выберем всех пользователей для обновления

	    For Each Us In Se.Users Do

	        UsUpd.Add(Us);

	    End for;

	    // Обновим выбранных пользователей

	    Se.UpdateUsers(UsUpd);

	    //
	 Сохраним изменения

	    Se.Apply;

	    // Освободим лицензию

	    Lic := Null;

	End Sub UserProc;


После выполнения примера будут обновлены все пользователи репозитория.
 Для соединения с репозиторием указаны учетные данные пользователя с привилегией
 SYSDBA.


См. также:


[ICredentials](ICredentials.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
