# RdsDictionaryBatchType

RdsDictionaryBatchType
-


# RdsDictionaryBatchType


## Описание


Перечисление RdsDictionaryBatchType
 содержит типы пакета элементов.


Используется следующими свойствами и методами:


	- [IRdsDictionaryBatch.BatchType](../Interface/IRdsDictionaryBatch/IRdsDictionaryBatch.BatchType.htm);


	- [IRdsDictionaryInstance.CreateBatch](../Interface/IRdsDictionaryInstance/IRdsDictionaryInstance.CreateBatch.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Unknown. Тип пакета
		 не определен.


		 1
		 Delete. Пакет для удаления
		 элементов.


		 2
		 Update. Пакет для обновления
		 элементов.


## Комментарии


	- Unknown. Для работы
	 с пакетами неопределенного типа предназначен интерфейс [IRdsDictionaryBatch](../Interface/IRdsDictionaryBatch/IRdsDictionaryBatch.htm).


	- Delete. Для работы с
	 пакетами для удаления элементов - интерфейс [IRdsDictionaryBatchDelete](../Interface/IRdsDictionaryBatchDelete/IRdsDictionaryBatchDelete.htm).


	- Update. Для работы с
	 пакетами для обновления элементов - интерфейс [IRdsDictionaryBatchUpdate](../Interface/IRdsDictionaryBatchUpdate/IRdsDictionaryBatchUpdate.htm).


## Пример


Использование перечисления приведено в примерах для [IRdsDictionaryInstance.CreateBatch](../Interface/IRdsDictionaryInstance/IRdsDictionaryInstance.CreateBatch.htm)
 и [IRdsDictionaryBatchUpdate.SetData](../Interface/IRdsDictionaryBatchUpdate/IRdsDictionaryBatchUpdate.SetData.htm).


См. также:


[Перечисления
 сборки Rds](KeRds_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
