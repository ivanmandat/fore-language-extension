# IRdsDictionaryBatchUpdate

IRdsDictionaryBatchUpdate
-


# IRdsDictionaryBatchUpdate


Сборка: Rds;


## Описание


Интерфейс IRdsDictionaryBatchUpdate
 предназначен для работы с пакетом, элементы которого должны быть обновлены.


## Иерархия наследования


           [IRdsDictionaryBatch](../IRdsDictionaryBatch/IRdsDictionaryBatch.htm)


           IRdsDictionaryBatchUpdate


## Комментарии


Для создания пакета используйте метод [IRdsDictionaryInstance.CreateBatch](../IRdsDictionaryInstance/IRdsDictionaryInstance.CreateBatch.htm).
 Затем полученный базовый интерфейс приведите к данному интерфейсу.


## Свойства, унаследованные от [IRdsDictionaryBatch](../IRdsDictionaryBatch/IRdsDictionaryBatch.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [BatchType](../IRdsDictionaryBatch/IRdsDictionaryBatch.BatchType.htm)


		 Свойство BatchType
		 возвращает тип пакета.


		 ![](../../Property_Image.gif)
		 [Callback](../IRdsDictionaryBatch/IRdsDictionaryBatch.Callback.htm)


		 Свойство Callback определяет
		 обработчик исключительных ситуаций, возникающих при выполнении
		 пакета.


		 ![](../../Property_Image.gif)
		 [Count](../IRdsDictionaryBatch/IRdsDictionaryBatch.Count.htm)


		 Свойство Count возвращает
		 число элементов, к которым были применены действия.


		 ![](../../Property_Image.gif)
		 [Dictionary](../IRdsDictionaryBatch/IRdsDictionaryBatch.Dictionary.htm)


		 Свойство Dictionary
		 возвращает данные справочника, элементы которого образуют пакет.


		 ![](../../Property_Image.gif)
		 [Filter](../IRdsDictionaryBatch/IRdsDictionaryBatch.Filter.htm)


		 Свойство Filter возвращает
		 коллекцию фильтров, по которым отбираются элементы для пакета.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [SetData](IRdsDictionaryBatchUpdate.SetData.htm)


		 Метод SetData устанавливает
		 данные, которые необходимо обновить.


## Методы, унаследованные от [IRdsDictionaryBatch](../IRdsDictionaryBatch/IRdsDictionaryBatch.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Execute](../IRdsDictionaryBatch/IRdsDictionaryBatch.Execute.htm)


		 Метод Execute выполняет
		 действие, предусмотренное пакетом.


См. также:


[Интерфейсы
 сборки Rds](../KeRds_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
