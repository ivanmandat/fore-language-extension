# IRWMutex

IRWMutex
-


# IRWMutex


Сборка: System;


## Описание


Интерфейс IRWMutex содержит
 свойства и методы для управления мьютексом.


## Иерархия наследования


IRWMutex


## Комментарии


Мьютекс - это объект, реализующий
 механизм синхронизации, обеспечивающий доступ к данным только из одного
 потока одновременно. В текущей реализации мьютекс поддерживают [матрица](KeMatrix.chm::/Interface/IMatrix/IMatrix.htm)
 и [итератор
 матрицы](KeMatrix.chm::/Interface/IMatrixIterator/IMatrixIterator.htm), которые получены на базе кешированных данных
 куба ([расчет](KeCubes.chm::/Interface/ICubeInstanceDestinationExecutor/ICubeInstanceDestinationExecutor.PerformExecuteO.htm)
 куба производится в режиме [CubeInstanceDestinationExecutorOptions.Cached](KeCubes.chm::/Enums/CubeInstanceDestinationExecutorOptions.htm)).


Использование мьютекса необходимо, если разрабатываемый код предполагает
 работу с кешированными данными куба, но выполнение кода будет осуществляться
 через веб-сервисы BI-сервера платформы. При работе BI-сервера кеш кубов
 загружается в память один раз и все объекты, настроенные на работу с кубом,
 будут использовать общий кеш. В инструментах продукта «Форсайт. Аналитическая платформа»
 управление блокировками осуществляется автоматически, при работе с кубами
 из Fore - управление блокировками должно осуществляться на прикладном
 уровне.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [HasReadLock](IRWMutex.HasReadLock.htm)
		 Свойство HasReadLock
		 возвращает признак наличия включенной блокировки на чтение данных.


		 ![](../../Property_Image.gif)
		 [HasWriteLock](IRWMutex.HasWriteLock.htm)
		 Свойство HasWriteLock
		 возвращает признак наличия включенной блокировки на изменение
		 данных.


		 ![](../../Property_Image.gif)
		 [LockType](IRWMutex.LockType.htm)
		 Свойство LockType возвращает
		 тип мьютекса.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateReadLock](IRWMutex.CreateReadLock.htm)
		 Метод CreateReadLock
		 создает объект, осуществляющий управление блокировкой на чтение
		 данных.


		 ![](../../Sub_Image.gif)
		 [CreateWriteLock](IRWMutex.CreateWriteLock.htm)
		 Метод CreateWriteLock
		 создает объект, осуществляющий управление блокировкой на изменение
		 данных.


		 ![](../../Sub_Image.gif)
		 [LockRead](IRWMutex.LockRead.htm)
		 Метод LockRead осуществляет
		 блокировку на чтение данных.


		 ![](../../Sub_Image.gif)
		 [LockWrite](IRWMutex.LockWrite.htm)
		 Метод LockWrite осуществляет
		 блокировку на запись данных.


		 ![](../../Sub_Image.gif)
		 [TryCreateReadLock](IRWMutex.TryCreateReadLock.htm)
		 Метод TryCreateReadLock
		 осуществляет попытку создать объект, используемый для управления
		 блокировкой на чтение данных.


		 ![](../../Sub_Image.gif)
		 [TryCreateWriteLock](IRWMutex.TryCreateWriteLock.htm)
		 Метод TryCreateWriteLock
		 осуществляет попытку создать объект, используемый для управления
		 блокировкой на изменение данных.


		 ![](../../Sub_Image.gif)
		 [TryLockRead](IRWMutex.TryLockRead.htm)
		 Метод TryLockRead проверяет
		 возможность получить блокировку на чтение данных без ожидания.


		 ![](../../Sub_Image.gif)
		 [TryLockWrite](IRWMutex.TryLockWrite.htm)
		 Метод TryLockWrite
		 проверяет возможность получить блокировку на изменение данных
		 без ожидания.


		 ![](../../Sub_Image.gif)
		 [UnlockRead](IRWMutex.UnlockRead.htm)
		 Метод UnlockRead снимает
		 блокировку на чтение.


		 ![](../../Sub_Image.gif)
		 [UnlockWrite](IRWMutex.UnlockWrite.htm)
		 Метод UnlockWrite снимает
		 блокировку на запись.


См. также:


[Интерфейсы
 сборки System](../System_interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
