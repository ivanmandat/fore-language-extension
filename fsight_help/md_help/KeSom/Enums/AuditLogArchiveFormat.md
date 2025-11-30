# AuditLogArchiveFormat

AuditLogArchiveFormat
-


# AuditLogArchiveFormat


## Описание


Перечисление AuditLogArchiveFormat
 содержит форматы файлов, в которые может быть сохранен протокол доступа.


Используется следующими свойствами и методами:


	- [IAuditLog.Archive](../Interface/IAuditLog/IAuditLog.Archive.htm);


	- [IAuditLog.ArchiveToDate](../Interface/IAuditLog/IAuditLog.ArchiveToDate.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Binary. Протокол доступа
		 сохраняется в двоичный файл в формате, поддерживаемом платформой.
		 Файл должен иметь расширение «ppl».


		 1
		 CSV. Протокол доступа
		 сохраняется в текстовый файл в формате, поддерживаемом Microsoft
		 Excel. Файл должен иметь расширение «csv».


		 2
		 CEF. Протокол доступа
		 сохраняется в текстовый файл в формате, поддерживаемом [SIEM-системами](Setup.chm::/01_sysreq/siem.htm).
		 Файл должен иметь расширение «cef».


См. также:


[Перечисления сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
