# IAuditLog.Archive

IAuditLog.Archive
-


# IAuditLog.Archive


## Синтаксис


Archive(FileName: String; [Callback: [IAuditLogArchiveCallback](../IAuditLogArchiveCallback/IAuditLogArchiveCallback.htm)
 = Null]; [Format: [AuditLogArchiveFormat](../../Enums/AuditLogArchiveFormat.htm)
 = 0]; [ClearLog: Boolean = False]);


## Параметры


FileName. Наименование
 файла;


Callback. Объект,
 используемый для отслеживания процесса архивации протокола доступа;


Format. Формат файла, в который осуществляется
 сохранение;


ClearLog. Параметр,
 определяющий удаление записи из протокола доступа после архивации.


## Описание


Метод Archive производит архивирование
 протокола доступа в файл.


## Комментарий


Для параметра ClearLog по умолчанию
 установлено значение False,
 при этом протокол доступа не очищается. Если установить значение True,
 то после архивации все записи протокола доступа будут удалены.


## Пример


Добавьте ссылку на системную сборку Metabase.


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

	    Al := MS.OpenAuditLog;

	    // Сохраним протокол доступа в файл

	    AL.Archive("C:\AuditLog.ppl");

	    // Освободим лицензию

	    Lic := Null;

	End Sub UserProc;


После выполнения примера протокол доступа будет сохранен в указанный
 файл.


См. также:


[IAuditLog](IAuditLog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
