# IRWMutex.TryLockRead

IRWMutex.TryLockRead
-


# IRWMutex.TryLockRead


## Синтаксис


TryLockRead: Boolean;


## Описание


Метод TryLockRead проверяет
 возможность получить блокировку на чтение данных без ожидания.


## Комментарии


Метод возвращает значение True,
 если возможна блокировка на чтение данных. Для создания объекта, управляющего
 блокировкой, используйте метод [CreateReadLock](IRWMutex.CreateReadLock.htm)
 или [TryCreateReadLock](IRWMutex.TryCreateReadLock.htm).


См. также:


[IRWMutex](IRWMutex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
