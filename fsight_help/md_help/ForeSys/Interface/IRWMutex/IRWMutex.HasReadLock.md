# IRWMutex.HasReadLock

IRWMutex.HasReadLock
-


# IRWMutex.HasReadLock


## Синтаксис


HasReadLock: Boolean;


## Описание


Свойство HasReadLock возвращает
 признак наличия включенной блокировки на чтение данных.


## Комментарии


Допустимые значения:


	- True. Блокировка на
	 чтение включена. Для снятия блокировки используйте метод [IRWMutex.UnlockRead](IRWMutex.UnlockRead.htm);


	- False. Блокировка на
	 чтение выключена.


## Пример


Пример использования приведен в описании метода [IRWMutex.LockRead](IRWMutex.LockRead.htm).


См. также:


[IRWMutex](IRWMutex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
