# SecurityPackageUserPrivilege

SecurityPackageUserPrivilege
-


# SecurityPackageUserPrivilege


## Описание


Перечисление SecurityPackageUserPrivilege
 содержит привилегии и настройки политики безопасности. Используется следующими
 свойствами:


	- [ISecurityPackageUserData.HasPrivilege](../Interface/ISecurityPackageUserData/ISecurityPackageUserData.HasPrivilege.htm);


	- [IApplicationRole.Privilegies](../Interface/IApplicationRole/IApplicationRole.Privilegies.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Нет привилегий.


		 1
		 ChangeUsers. Привилегия
		 создания, удаления пользователей.


		 2
		 ChangeRights. Привилегия
		 изменения прав пользователей, раздача ролей, изменение политики.


		 4
		 ReadJournal. Привилегия
		 просмотра протокола доступа.


		 8
		 ClearJournal. Привилегия
		 очистки протокола доступа.


		 16
		 LoginDB. Привилегия
		 входа в систему.


		 32
		 ConnectServer. Привилегия
		 установки соединения с сервером.


		 64
		 EnforceApplicationRole.
		 Включена роль приложения.


		 128
		 DerivedPasswords. Включено
		 хеширование пароля.


		 256
		 IsApplicationRole.
		 Признак роли приложения.


		 512
		 DisconnectUsers. Привилегия
		 отключения пользователей, подключенных к схеме.


		 1024
		 DbSecurityAdmin. Привилегия
		 применения прав пользователей на уровне СУБД.


		 2048
		 DbAdmin. Привилегия
		 db_owner в БД MSSQL.


		 4096
		 ProcGrantRevoke. Привилегия
		 на запуск процедуры, которая раздает права на системные таблицы
		 репозитория.


		 16384
		 OpenNavObjects. Привилегия
		 на вход в навигатор объектов репозитория.


		 32768
		 UpdateManager. Привилегия
		 на доступ к менеджеру обновлений.


		 65536
		 SecPolicyAudit. Привилегия
		 на аудит политики безопасности.


См. также:


[Перечисления сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
