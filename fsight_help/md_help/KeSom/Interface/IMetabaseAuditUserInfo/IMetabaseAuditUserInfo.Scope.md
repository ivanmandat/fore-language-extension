# IMetabaseAuditUserInfo.Scope

IMetabaseAuditUserInfo.Scope
-


# IMetabaseAuditUserInfo.Scope


## Синтаксис


Scope: AuditUserCredsScope;


## Описание


Свойство Scope определяет способ
 сохранения учётных данных служебного пользователя.


## Комментарии


При [создании служебного
 пользователя](IMetabaseAuditUserInfo.CreateUser.htm) доступны следующие способы сохранения его учётных данных:


	- только для текущего пользователя.
	 Учётные данные будут храниться в [реестре](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Registry_Key.htm)
	 текущего пользователя и доступны для использования только текущему
	 пользователю на компьютере;


	- для всех пользователей.
	 Учётные данные будут храниться в [реестре](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Registry_Key.htm)
	 локальной машины и доступны для использования всем пользователям на
	 компьютере;


Примечание.
 Сохранение учётных данных в реестр локальной машины выполняется от имени
 пользователя, обладающего правами администратора.


	- в файл settings.xml.
	 Учётные данные будут храниться в файле [settings.xml](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Settings_XML.htm).


Для получения подробной информации обратитесь к разделу «[Создание
 служебного пользователя](Setup.chm::/05_RepoMngr/Setup_RepoMngr_Service_User.htm#service_user)».


## Пример


Использование свойства приведено в примере для [IMetabaseAuditUserInfo.CreateUser](IMetabaseAuditUserInfo.CreateUser.htm).


См. также:


[IMetabaseAuditUserInfo](IMetabaseAuditUserInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
