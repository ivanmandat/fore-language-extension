# IPlainAuditLogRecords.ObjectClass

IPlainAuditLogRecords.ObjectClass
-


# IPlainAuditLogRecords.ObjectClass


## Синтаксис


ObjectClass: Integer;


## Описание


Свойство ObjectClass возвращает
 класс объекта, над которым произведена операция.


## Комментарии


Если текущая запись соответствует подключению к репозиторию, то свойство
 возвращает значение 0. Для всех других операций возвращается одно из значений,
 доступных в перечислении [MetabaseObjectClass](../../Enums/MetabaseObjectClass.htm).


## Пример


Использование свойства приведено в примере для [IAuditLog.OpenPlainLog](../IAuditLog/IAuditLog.OpenPlainLog.htm).


См. также:


[IPlainAuditLogRecords](IPlainAuditLogRecords.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
