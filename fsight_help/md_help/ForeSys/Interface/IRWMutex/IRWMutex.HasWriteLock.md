# IRWMutex.HasWriteLock

IRWMutex.HasWriteLock
-


# IRWMutex.HasWriteLock


## Синтаксис


HasWriteLock: Boolean;


## Описание


Свойство HasWriteLock возвращает
 признак наличия включенной блокировки на изменение данных.


## Комментарии


Допустимые значения:


	- True. Блокировка на
	 изменение включена. Для снятия блокировки используйте метод [IRWMutex.UnlockWrite](IRWMutex.UnlockWrite.htm);


	- False. Блокировка на
	 изменение выключена.


## Пример


Пример использования приведен в описании метода [IRWMutex.LockWrite](IRWMutex.LockWrite.htm).


См. также:


[IRWMutex](IRWMutex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
