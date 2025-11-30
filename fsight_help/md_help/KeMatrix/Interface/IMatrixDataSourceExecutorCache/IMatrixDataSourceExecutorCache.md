# IMatrixDataSourceExecutorCache

IMatrixDataSourceExecutorCache
-


# IMatrixDataSourceExecutorCache


Сборка: Matrix;


## Описание


Интерфейс IMatrixDataSourceExecutorCache
 содержит свойства и методы объекта, представляющего собой кеш многомерного
 источника данных.


## Иерархия наследования


IMatrixDataSourceExecutorCache


## Комментарии


Кеш существует пока многомерный источник данных открыт. В кеш помещаются
 данные, полученные по указанной отметке при выполнении метода [Execute](IMatrixDataSourceExecutorCache.Execute.htm).
 При повторном извлечении метод [Execute](IMatrixDataSourceExecutorCache.Execute.htm)
 проверит наличие необходимых данных в кеше. В случае отсутствия данных
 кеш будет дополнен.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Executor](IMatrixDataSourceExecutorCache.Executor.htm)
		 Свойство Executor определяет
		 объект, для которого создан кеш.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Execute](IMatrixDataSourceExecutorCache.Execute.htm)
		 Метод Execute осуществляет
		 проверку наличия данных в кеше и возвращает результирующую матрицу
		 кешированных данных.


		 ![](../../Sub_Image.gif)
		 [Flush](IMatrixDataSourceExecutorCache.Flush.htm)
		 Метод Flush осуществляет
		 очистку кеша многомерного источника данных.


См. также:


[Интерфейсы
 сборки Matrix](../KeMatrix_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
