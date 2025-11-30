# IRdsDictionaryElement.Data

IRdsDictionaryElement.Data
-


# IRdsDictionaryElement.Data


## Синтаксис


Data: [IRdsDictionaryElementData](../IRdsDictionaryElementData/IRdsDictionaryElementData.htm);


## Описание


Свойство Data возвращает данные
 элемента.


## Комментарии


По умолчанию в кеш загружаются только значения системных атрибутов.
 Для получения значений пользовательских атрибутов выполняется запрос к
 БД. Чтобы избежать лишних запросов не следует многократно вызывать данное
 свойство.


Если [IRdsDictionaryInstance.FetchAll](../IRdsDictionaryInstance/IRdsDictionaryInstance.FetchAll.htm)
 = True, то в кеш одновременно
 загружаются значения системных и пользовательских атрибутов. В данном
 случае не следует использовать Data,
 т.к. будут выполняться запросы, в которых нет необходимости. Данные
 элемента следует получать напрямую, например, через свойство [Value](../IRdsDictionaryElementData/IRdsDictionaryElementData.Value.htm),
 унаследованное от [IRdsDictionaryElementData](../IRdsDictionaryElementData/IRdsDictionaryElementData.htm).


## Пример


Использование свойства приведено в описании [IRdsDictionaryElement.Update](IRdsDictionaryElement.Update.htm).


См. также:


[IRdsDictionaryElement](IRdsDictionaryElement.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
