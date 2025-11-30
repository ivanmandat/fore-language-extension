# IAuditLog.OpenOperations

IAuditLog.OpenOperations
-


# IAuditLog.OpenOperations


## Синтаксис


OpenOperations(Session: Integer): [IAuditOperations](../IAuditOperations/IAuditOperations.htm);


## Параметры


Session. Номер
 сессии.


## Описание


Метод OpenOperations возвращает
 список операций, произведенных в репозитории, в линейном виде.


## Комментарии


Для получения информации о соединениях с репозиторием используйте свойство
 [IAuditLog.OpenLogons](IAuditLog.OpenLogons.htm). Для получения
 ключа текущей сессии используйте свойство [ILogonSession.Key](../ILogonSession/ILogonSession.Key.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    AL: IAuditLog;

    ALogs: IAuditLogons;

    AOperat: IAuditOperations;

    s: Array[0..10] Of String;

    i: Integer;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Откроем протокол доступа

    AL := MS.OpenAuditLog;

    // Отключим использование
 фильтра протокола доступа

    ALogs := AL.OpenLogons(False);

    // Сформируем список операций

    AOperat := AL.OpenOperations(ALogs.Session);

    // Выведем номера текущей сессии
 в консоль

    Debug.WriteLine("Сессия " + ALogs.Session.ToString + ": ");

    For i := 0 To 9 Do

        s[i] := AOperat.Name;

        Debug.WriteLine(s[i]);

        AOperat.Next;

    End For;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера в консоль будут выведены наименования десяти
 последних операций над объектами текущей сессии репозитория.


См. также:


[IAuditLog](IAuditLog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
