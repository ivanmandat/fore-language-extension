# IAuditLog.ArchiveToDate

IAuditLog.ArchiveToDate
-


# IAuditLog.ArchiveToDate


## Синтаксис


ArchiveToDate(Stamp: DateTime; FileName: String;
 [Callback: [IAuditLogArchiveCallback](../IAuditLogArchiveCallback/IAuditLogArchiveCallback.htm)
 = Null]; [Format: [AuditLogArchiveFormat](../../Enums/AuditLogArchiveFormat.htm)
 = 0]; [ClearLog: Boolean = False]);


## Параметры


Stamp. Дата, ограничивающая
 последние записи, которые будут архивироваться;


FileName.
 Наименование файла;


Callback. Объект,
 используемый для отслеживания процесса архивации протокола доступа;


Format. Формат
 файла, в который осуществляется сохранение;


ClearLog. Параметр,
 определяющий удаление записи из протокола доступа после архивации.


## Описание


Метод ArchiveToDate производит
 архивирование части протокола доступа в файл.


## Комментарии


Для параметра ClearLog по умолчанию
 установлено значение False,
 при этом записи не удаляются. Если установить значение
 True, то после архивации
 все сохраненные записи будут удалены из протокола доступа.


В файл архивируются записи, начиная с самой первой и заканчивая последней
 записью, дата которой меньше даты, передаваемой посредством параметра
 Stamp.


## Пример


Для выполнения примера требуется наличие файла «Gurnal_Part.csv».


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

    AL.ArchiveToDate(DateTime.ComposeDay(2019, 01, 10), "C:\Gurnal_Part.csv", Null, 0, True);

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера записи протокола доступа, начиная самой первой
 и заканчивая последней записью, дата которой меньше «10.01.2019», будут
 сохранены в файл «Gurnal_Part.csv». После сохранения данные записи будут
 удалены из протокола доступа текущего репозитория.


См. также:


[IAuditLog](IAuditLog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
