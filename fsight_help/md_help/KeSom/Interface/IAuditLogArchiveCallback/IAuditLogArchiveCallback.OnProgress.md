# IAuditLogArchiveCallback.OnProgress

IAuditLogArchiveCallback.OnProgress
-


# IAuditLogArchiveCallback.OnProgress


## Синтаксис


OnProgress(Current: Integer; Total: Integer);


## Параметры


Current. Количество обработанных
 записей;


Total. Общее количество записей,
 которые будут обработаны.


## Описание


Метод OnProgress реализует событие
 общего статуса архивации протокола доступа. Данный метод должен быть переопределен
 в пользовательском классе.


## Пример


Для выполнения примера требуется наличие файла AuditLog.pplog.


Добавьте ссылку на системную сборку Metabase.


			Class MyCallback: Object, IAuditLogArchiveCallback

    Sub OnProgress(Current: Integer; Total: Integer);

    Begin

        Debug.WriteLine("Упаковано " + Current.ToString + " из " + Total.ToString + " записей");

    End Sub OnProgress;

End Class MyCallback;


Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    AL: IAuditLog;

    Callback: MyCallback;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Откроем протокол доступа

    Al := MS.OpenAuditLog;

    Callback := New MyCallback.Create;

    // Сохраним протокол доступа в файл

    AL.Archive("C:\AuditLog.pplog", Callback);

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера записи протокола доступа будут сохранены в
 файл AuditLog.pplog. Статус сохранения будет выведен в консоль среды разработки.


См. также:


[IAuditLogArchiveCallback](IAuditLogArchiveCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
