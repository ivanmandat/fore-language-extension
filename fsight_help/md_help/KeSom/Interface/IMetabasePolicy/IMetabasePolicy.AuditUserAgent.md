# IMetabasePolicy.AuditUserAgent

IMetabasePolicy.AuditUserAgent
-


# IMetabasePolicy.AuditUserAgent


## Синтаксис


AuditUserAgent: Boolean;


## Описание


Свойство AuditUserAgent определяет
 признак протоколирования информации о браузере (User Agent) при использовании
 веб-приложения.


## Комментарии


Допустимые значения:


	- True. Информация о браузере,
	 в котором открыто веб-приложение, отображается в столбце «Примечание»
	 [протокола
	 доступа](admin.chm::/05_AccessProtocol/Admin_AccessProtocol.htm) при каждом входе в систему;


	- False. По умолчанию.
	 Информация о браузере, в котором открыто веб-приложение, не отображается
	 в протоколе доступа.


Свойство является аналогом флажка «[Производить протоколирование информации
 о User Agent](admin.chm::/03_Admin/Access_control_settings.htm#user_agent)», содержащегося в [настройках
 контроля доступа](admin.chm::/03_Admin/Access_control_settings.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Policy: IMetabasePolicy;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    Policy := MS.Policy;

    // Включим протоколирование информации о User Agent

    Policy.AuditUserAgent := True;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера при каждом входе в систему в протоколе доступа
 будет отображаться информация о браузере, в котором открыто веб-приложение.


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
