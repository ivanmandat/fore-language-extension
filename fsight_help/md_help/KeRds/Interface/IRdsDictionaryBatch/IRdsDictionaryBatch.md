# IRdsDictionaryBatch

IRdsDictionaryBatch
-


# IRdsDictionaryBatch


Сборка: Rds;


## Описание


Интерфейс IRdsDictionaryBatch
 предназначен для работы с пакетом элементов справочника НСИ.


## Иерархия наследования


           IRdsDictionaryBatch


## Комментарии


Пакет предназначен для выполнения каких-либо действий над всеми элементами
 в пакете одновременно.


Данный интерфейс является базовым для всех типов пакетов. Для определения
 типа пакета используйте свойство [IRdsDictionaryBatch.BatchType](IRdsDictionaryBatch.BatchType.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [BatchType](IRdsDictionaryBatch.BatchType.htm)


		 Свойство BatchType
		 возвращает тип пакета.


		 ![](../../Property_Image.gif)
		 [Callback](IRdsDictionaryBatch.Callback.htm)


		 Свойство Callback определяет
		 обработчик исключительных ситуаций, возникающих при выполнении
		 пакета.


		 ![](../../Property_Image.gif)
		 [Count](IRdsDictionaryBatch.Count.htm)


		 Свойство Count возвращает
		 число элементов, к которым были применены действия.


		 ![](../../Property_Image.gif)
		 [Dictionary](IRdsDictionaryBatch.Dictionary.htm)


		 Свойство Dictionary
		 возвращает данные справочника, элементы которого образуют пакет.


		 ![](../../Property_Image.gif)
		 [Filter](IRdsDictionaryBatch.Filter.htm)


		 Свойство Filter возвращает
		 коллекцию фильтров, по которым отбираются элементы для пакета.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Execute](IRdsDictionaryBatch.Execute.htm)


		 Метод Execute выполняет
		 действие, предусмотренное пакетом.


См. также:


[Интерфейсы
 сборки Rds](../KeRds_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
