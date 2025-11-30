# IMetabaseAuditUserInfo

IMetabaseAuditUserInfo
-


# IMetabaseAuditUserInfo


## Описание


Интерфейс IMetabaseAuditUserInfo
 используется для работы со [служебным
 пользователем подсистемы безопасности](Setup.chm::/05_RepoMngr/Setup_RepoMngr_Service_User.htm).


## Комментарий


Служебный пользователь подсистемы безопасности обеспечивает:


	- вход в систему;


	- корректную работу аудита и блокировку пользователей;


	- использование [роли
	 приложения](admin.chm::/03_admin/Access_control_settings.htm#role) при работе с СУБД;


	- использование функции [хеширования
	 паролей](admin.chm::/03_admin/Access_control_settings.htm#hash).


Примечание.
 Создание служебного пользователя доступно только в настольном приложении
 администратору или пользователю с [привилегиями](admin.chm::/04_SecurityPolicy/Admin_Priv.htm)
 «Создание и удаление пользователей»
 и «Применение прав на уровне СУБД».


Для получения подробной информации обратитесь к разделу «[Создание
 служебного пользователя](Setup.chm::/05_RepoMngr/Setup_RepoMngr_Service_User.htm)».


Важно. Зарезервированный
 служебный пользователь P4AUDIT является устаревшим. Для обеспечения безопасности и входа в систему создайте
 нового служебного пользователя подсистемы безопасности на каждом компьютере
 пользователя.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [IsReserved](IMetabaseAuditUserInfo.IsReserved.htm)
		 Свойство IsReserved
		 возвращает признак наличия зарезервированного пользователя P4AUDIT
		 в репозитории.


		 ![](../../Property_Image.gif)
		 [IsSupported](IMetabaseAuditUserInfo.IsSupported.htm)
		 Свойство IsSupported
		 возвращает признак наличия нового служебного пользователя в репозитории.


		 ![](../../Property_Image.gif)
		 [Name](IMetabaseAuditUserInfo.Name.htm)
		 Свойство Name определяет
		 имя служебного пользователя.


		 ![](../../Property_Image.gif)
		 [Scope](IMetabaseAuditUserInfo.Scope.htm)
		 Свойство Scope определяет
		 способ сохранения учётных данных служебного пользователя.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ChangePassword](IMetabaseAuditUserInfo.ChangePassword.htm)
		 Метод ChangePassword
		 осуществляет изменение пароля служебного пользователя.


		 ![](../../Sub_Image.gif)
		 [CreateUser](IMetabaseAuditUserInfo.CreateUser.htm)
		 Метод CreateUser осуществляет
		 создание служебного пользователя в базе данных.


См. также:


[Интерфейсы сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
