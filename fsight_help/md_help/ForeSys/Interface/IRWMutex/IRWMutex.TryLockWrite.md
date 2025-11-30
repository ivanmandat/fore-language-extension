# IRWMutex.TryLockWrite

IRWMutex.TryLockWrite
-


# IRWMutex.TryLockWrite


## Синтаксис


TryLockWrite: Boolean;


## Описание


Метод TryLockWrite проверяет
 возможность получить блокировку на изменение данных без ожидания.


## Комментарии


Метод возвращает значение True,
 если возможна блокировка на изменение данных. Для создания объекта, управляющего
 блокировкой, используйте метод [CreateWriteLock](IRWMutex.CreateWriteLock.htm)
 или [TryCreateWriteLock](IRWMutex.TryCreateWriteLock.htm).


См. также:


[IRWMutex](IRWMutex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
