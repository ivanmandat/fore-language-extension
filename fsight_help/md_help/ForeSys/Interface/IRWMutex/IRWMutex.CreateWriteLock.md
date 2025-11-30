# IRWMutex.CreateWriteLock

IRWMutex.CreateWriteLock
-


# IRWMutex.CreateWriteLock


## Синтаксис


CreateWriteLock: [ILock](../ILock/ILock.htm);


## Описание


Метод CreateWriteLock создает
 объект, осуществляющий управление блокировкой на изменение данных.


## Комментарии


При создании объекта автоматически будет включена блокировка на изменение
 данных. Для снятия блокировки выполните метод [ILock.Unlock](../ILock/ILock.Unlock.htm)
 и обнулите соответствующую переменную.


См. также:


[IRWMutex](IRWMutex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
