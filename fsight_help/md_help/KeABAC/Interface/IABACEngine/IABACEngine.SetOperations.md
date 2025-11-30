# IABACEngine.SetOperations

IABACEngine.SetOperations
-


# IABACEngine.SetOperations


## Синтаксис


SetOperations(ReadMask: Integer, WriteMask: Integer,
 AllMask: Integer);


## Параметры


ReadMask. Операция чтения со
 значением параметра «2»;


WriteMask.
 Операция записи со значением параметра «4»;


AllMask.
 Все операции со значением параметра «1».


## Описание


Метод SetOperations задает значения
 атрибута в [цели](Admin.chm::/04_SecurityPolicy/Target.htm),
 если используется атрибут среды окружения «[OPERATION](Admin.chm::/04_SecurityPolicy/Creating_conditions.htm#environment)»
 с условием «[IN](Admin.chm::/04_SecurityPolicy/Target.htm#in)».


## Комментарии


Значения параметров метода устанавливаются по умолчанию. Метод используется
 в том случае, если в [цели](Admin.chm::/04_SecurityPolicy/Target.htm)
 задано логическое выражение с атрибутом среды окружения «[OPERATION](Admin.chm::/04_SecurityPolicy/Creating_conditions.htm#environment)»
 и условием «[IN](Admin.chm::/04_SecurityPolicy/Target.htm#in)».


Параметр метода [IABACEngine.Evaluate](IABACEngine.Evaluate.htm)
 должен содержать операцию, установленную в цели, или дочернюю операцию
 чтения и записи.


## Пример


Использование метода приведено в примере для [IABACEngine.Evaluate](IABACEngine.Evaluate.htm).


См. также:


[IABACEngine](IABACEngine.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
