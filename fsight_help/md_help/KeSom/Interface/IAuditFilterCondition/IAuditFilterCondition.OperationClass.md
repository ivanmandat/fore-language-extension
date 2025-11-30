# IAuditFilterCondition.OperationClass

IAuditFilterCondition.OperationClass
-


# IAuditFilterCondition.OperationClass


## Синтаксис


		OperationClass(Index: Integer): Integer;


## Параметры


Index - индекс позиции операции.
 Количество позиций определяется свойством [IAuditFilterCondition.OperationCount](IAuditFilterCondition.OperationCount.htm).


## Описание


Свойство OperationClass определяет
 для соответствующей операции класс объектов, для которого данная операция
 будет отображаться в протоколе доступа.


## Комментарии


Тип операции определяется с помощью свойства [IAuditFilterCondition.Operation](IAuditFilterCondition.Operation.htm).
 При определении класса объекта, следует учитывать привязку операций к
 определенным классам:


Основные, дополнительные и специфические операции, доступные для определенных
 типов объектов, представлены в разделе [Типы
 событий](Admin.chm::/05_AccessProtocol/Admin_AccessProtocol_EvetsType.htm).


## Пример


Использование данного свойства приведено в примере для [IAuditFilterCondition.Operation](IAuditFilterCondition.Operation.htm).


См. также:


[IAuditFilterCondition](IAuditFilterCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
