# AuditUserCredsScope

AuditUserCredsScope
-


# AuditUserCredsScope


## Описание


Перечисление AuditUserCredsScope
 используется для определения способа сохранения учётных данных [служебного
 пользователя](Setup.chm::/05_RepoMngr/Setup_RepoMngr_Service_User.htm).


## Комментарии


Используется следующим свойством:


	- [IMetabaseAuditUserInfo.Scope](../Interface/IMetabaseAuditUserInfo/IMetabaseAuditUserInfo.Scope.htm).


Для получения подробной информации о способах сохранения учётных данных
 служебного пользователя обратитесь к разделу «[Создание
 служебного пользователя](Setup.chm::/05_RepoMngr/Setup_RepoMngr_Service_User.htm#service_user)».


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Default. По умолчанию.
		 Учётные данные будут храниться в файле [settings.xml](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Settings_XML.htm).

		Примечание.
		 Значение используется в [PP.Util](Setup.chm::/05_repomngr/service_applications/pp_util.htm)
		 для добавления учётных данных служебного пользователя на каждый
		 компьютер пользователя, если не задан способ сохранения учётных
		 данных в параметре [/SCOPE scope].


		 1
		 CurrentUser. Учётные
		 данные будут храниться в [реестре](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Registry_Key.htm)
		 текущего пользователя и доступны для использования только текущему
		 пользователю на компьютере.


		 2
		 LocalMachine. Учётные
		 данные будут храниться в [реестре](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Registry_Key.htm)
		 локальной машины и доступны для использования всем пользователям
		 на компьютере.


		 3
		 File. Учётные данные
		 будут храниться в файле [settings.xml](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Settings_XML.htm).


		 4
		 Nowhere. Учётные данные
		 сохраняться не будут.


См. также:


[Перечисления сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
