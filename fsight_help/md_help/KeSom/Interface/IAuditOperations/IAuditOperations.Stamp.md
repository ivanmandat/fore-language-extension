# IAuditOperations.Stamp

IAuditOperations.Stamp
-


# IAuditOperations.Stamp


## Синтаксис


Stamp: Double;


## Описание


Свойство Stamp возвращает дату
 и время операции. Дата представляется в системном формате дат.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    AL: IAuditLog;

    ALogon: IAuditLogons;

    Operat: IAuditOperations;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Откроем протокол доступа

    Al:=MS.OpenAuditLog;

    ALogon:= AL.OpenLogons(False);

    Operat:=Al.OpenOperations(ALogon.Session);

    // Выведем в консоль дату и время последней операции

    Debug.WriteLine(DateTime.FromDouble(Operat.Stamp).ToString);

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера в консоль будет выведена дата и время последней
 операции.


См. также:


[IAuditOperations](IAuditOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
