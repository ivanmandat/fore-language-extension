# IRdsDictionaryBatch.BatchType

IRdsDictionaryBatch.BatchType
-


# IRdsDictionaryBatch.BatchType


## Синтаксис


BatchType: [RdsDictionaryBatchType](../../Enums/RdsDictionaryBatchType.htm);


## Описание


Свойство BatchType возвращает
 тип пакета.


## Комментарии


Для работы с пакетом в зависимости от его типа используются различные
 интерфейсы. Допустимые значения:


	- RdsDictionaryBatchType.Unknown.
	 Используйте [IRdsDictionaryBatch](IRdsDictionaryBatch.htm);


	- RdsDictionaryBatchType.Delete.
	 Используйте [IRdsDictionaryBatchDelete](../IRdsDictionaryBatchDelete/IRdsDictionaryBatchDelete.htm).


	- RdsDictionaryBatchType.Update.
	 Используйте [IRdsDictionaryBatchUpdate](../IRdsDictionaryBatchUpdate/IRdsDictionaryBatchUpdate.htm).


## Пример


Использование свойства приведено в примерах для [IRdsDictionaryInstance.CreateBatch](../IRdsDictionaryInstance/IRdsDictionaryInstance.CreateBatch.htm)
 и [IRdsDictionaryBatchUpdate.SetData](../IRdsDictionaryBatchUpdate/IRdsDictionaryBatchUpdate.SetData.htm).


См. также:


[IRdsDictionaryBatch](IRdsDictionaryBatch.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
