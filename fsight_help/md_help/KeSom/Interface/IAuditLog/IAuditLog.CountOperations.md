# IAuditLog.CountOperations

IAuditLog.CountOperations
-


# IAuditLog.CountOperations


## Синтаксис


CountOperations([Session: Integer = -1]; [Operation:
 Integer = -1]): Integer;


## Параметры


Session. Определяет сессию,
 в рамках которой необходимо определить количество записей в протоколе
 доступа;


Operation. Определяет операцию,
 количество записей о которой необходимо определить в протоколе доступа.


## Описание


Метод CountOperations возвращает
 количество записей в протоколе доступа об операциях в репозитории.


## Комментарии


Параметры являются необязательными.


В качестве значения параметра Session
 можно использовать свойство [IAuditLogons.Session](../IAuditLogons/IAuditLogons.Session.htm)
 или [IAuditOperations.Session](../IAuditOperations/IAuditOperations.Session.htm).
 Значение по умолчанию «-1» (все сессии).


В качестве значения параметра Operation
 можно использовать [IAuditOperations.Operation](../IAuditOperations/IAuditOperations.Operation.htm).
 Значение по умолчанию «-1» (все операции).


Если указаны параметры Session
 и Operation, то возвращается
 количество записей, с учетом значений данных параметров.


## Пример


Использование метода приведено в примере для [IAuditLog.CountLogons](IAuditLog.CountLogons.htm).


См. также:


[IAuditLog](IAuditLog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
