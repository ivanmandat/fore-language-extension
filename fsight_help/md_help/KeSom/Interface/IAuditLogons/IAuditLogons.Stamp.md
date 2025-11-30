# IAuditLogons.Stamp

IAuditLogons.Stamp
-


# IAuditLogons.Stamp


## Синтаксис


Stamp: Double;


## Описание


Свойство Stamp возвращает дату
 и время входа в репозиторий.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    AL: IAuditLog;

    ALogon: IAuditLogons;

    d, d1: DateTime;

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

        Debug.Write("Сессия: " + ALogon.Session.ToString + " | ");

        d := DateTime.FromDouble(ALogon.Stamp);

        d1 := DateTime.FromDouble(ALogon.StampOut);

        Debug.WriteLine(d.ToString + "-" + d1.ToString);

        ALogon.Next;

    End While;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведена информация
 о сессиях с текущим репозиторием. Будет выведен номер сессии, дата начала
 и завершения сессии.


См. также:


[IAuditLogons](IAuditLogons.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
