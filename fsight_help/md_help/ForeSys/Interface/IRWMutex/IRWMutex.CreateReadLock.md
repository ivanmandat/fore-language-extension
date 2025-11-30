# IRWMutex.CreateReadLock

IRWMutex.CreateReadLock
-


# IRWMutex.CreateReadLock


## Синтаксис


CreateReadLock: [ILock](../ILock/ILock.htm);


## Описание


Метод CreateReadLock создает
 объект, осуществляющий управление блокировкой на чтение данных.


## Комментарии


При создании объекта автоматически будет включена блокировка на чтение
 данных. Для снятия блокировки выполните метод [ILock.Unlock](../ILock/ILock.Unlock.htm)
 и обнулите соответствующую переменную.


См. также:


[IRWMutex](IRWMutex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
