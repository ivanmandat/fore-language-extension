# IAuditLog.Archival

IAuditLog.Archival
-


# IAuditLog.Archival


## Синтаксис


Archival:
 Boolean;


## Описание


Свойство Archival возвращает
 True, если текущий протокол безопасности
 загружен из файла.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    AL: IAuditLog;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Откроем протокол доступа

    Al := MS.OpenAuditLog;

    If Al.Archival Then

        Debug.WriteLine("Протокол доступа загружен из файла");

        Else

        Debug.WriteLine("Протокол доступа не загружен из файла");

    End If;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера в консоли будет определено, загружен протокол
 доступа из файла или нет.


См. также:


[IAuditLog](IAuditLog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
