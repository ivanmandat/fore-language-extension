# IPlainAuditLogRecords.StampOut

IPlainAuditLogRecords.StampOut
-


# IPlainAuditLogRecords.StampOut


## Синтаксис


StampOut: Double;


## Описание


Свойство StampOut возвращает
 дату и время выхода из репозитория.


## Комментарии


Свойство актуально только для записей, соответствующих подключению к
 репозиторию. Для записей об операциях над объектами не заполняется. Значение
 представляется в системном формате дат. Для преобразования используйте
 метод [DateTime.FromDouble](ForeSys.chm::/Class/DateTime/DateTime.FromDouble.htm).


## Пример


Использование свойства приведено в примере для [IAuditLog.OpenPlainLog](../IAuditLog/IAuditLog.OpenPlainLog.htm).


См. также:


[IPlainAuditLogRecords](IPlainAuditLogRecords.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
