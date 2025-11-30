# IAuditLogons.Session

IAuditLogons.Session
-


# IAuditLogons.Session


## Синтаксис


Session: Integer;


## Описание


Свойство Session возвращает
 ключ сессии.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    AL: IAuditLog;

    ALogon: IAuditLogons;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Откроем протокол доступа

    Al := MS.OpenAuditLog;

    ALogon := AL.OpenLogons(False);

    // Выведем в консоль информацию о сессиях текущего репозитория

    While Not ALogon.Eof Do

        Debug.WriteLine("Сессия: " + ALogon.Session.ToString);

        Debug.WriteLine("Пользователь: " + ALogon.UserName + "; Описание: " + ALogon.UserDescription
 + "; Sid: " + ALogon.UserSid);

        Debug.WriteLine("Рабочая станция: " + ALogon.Station + "; Пользователь ОС: " + ALogon.UserOS + "; IP: " + ALogon.UserIP);

        ALogon.Next;

    End While;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведена информация
 о сессиях с текущим репозиторием. Будет выведена следующая информация:
 ключ сессии; наименование, описание и SID (идентификатор субъекта безопасности)
 пользователя, под которым осуществлялось подключение к платформе. А также
 наименование рабочей станции, наименование пользователя, под которым осуществлен
 вход в ОС и IP рабочей станции.


См. также:


[IAuditLogons](IAuditLogons.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
