# IMetabaseUser.MaxLogonSessions

IMetabaseUser.MaxLogonSessions
-


# IMetabaseUser.MaxLogonSessions


## Синтаксис


MaxLogonSessions: Integer;


## Описание


Свойство MaxLogonSessions определяет
 максимальное количество одновременных подключений пользователя к репозиторию.


## Комментарии


По умолчанию свойство принимает значение «0», количество подключений
 неограничено. При превышении количества разрешенных подключений к репозиторию
 пользователю будет недоступен вход в систему и выдано соответствующее
 сообщение.


Для определения максимального количества одновременных подключений субъекта
 безопасности используйте свойство [IMetabasePolicy.MaxLogonSessions](../IMetabasePolicy/IMetabasePolicy.MaxLogonSessions.htm).


Особенности взаимодействия свойства IMetabaseUser.MaxLogonSessions со
 свойством [IMetabasePolicy.MaxLogonSessions](../IMetabasePolicy/IMetabasePolicy.MaxLogonSessions.htm):


	- если одно из свойств принимает значение «0», а другое - больше
	 нуля, то применяется большее значение;


	- если значения свойств больше нуля и отличаются друг от друга,
	 то применяется меньшее значение.


## Пример


Для выполнения примера убедитесь, что в менеджере безопасности содержится
 пользователь USER.


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Security: IMetabaseSecurity;

    User: IMetabaseUser;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    Security := MB.Security;

    // Зададим максимальное количество одновременных подключений пользователя к репозиторию

    User := Security.ResolveName("USER") As IMetabaseUser;

    User.MaxLogonSessions := 5;

    // Сохраним изменения

    Security.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера для
 пользователя USER будет установлено максимальное количество одновременных
 подключений к текущему репозиторию.


См. также:


[IMetabaseUser](IMetabaseUser.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
