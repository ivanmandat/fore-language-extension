# IRdsBigElements.CreateIterator

IRdsBigElements.CreateIterator
-


# IRdsBigElements.CreateIterator


## Синтаксис


CreateIterator(FirstElement: Integer;

               Count:
 Integer;

               Filter:
 [IRdsDictionaryFilterConditions](../IRdsDictionaryFilterConditions/IRdsDictionaryFilterConditions.htm);

               Order:
 [IRdsSortAttributes](../IRdsSortAttributes/IRdsSortAttributes.htm)):
 [IRdsElementsIterator](../IRdsElementsIterator/IRdsElementsIterator.htm);


## Параметры


FirstElement. Индекс первого
 элемента итератора.


Count. Количество элементов
 итератора.


Filter. Параметры фильтрации
 элементов итератора.


Order. Параметры сортировки
 элементов итератора.


## Описание


Метод CreateIterator создает
 итератор, предназначенный для навигации по элементам справочника.


## Комментарии


Созданный итератор может быть приведен к интерфейсу [IDatasetInstance](KeDb.chm::/Interface/IDatasetInstance/IDatasetInstance.htm).


## Примеры


Использование свойства приведено в примере для [IRdsDictionaryElementsSearch.SetIterator](../IRdsDictionaryElementsSearch/IRdsDictionaryElementsSearch.SetIterator.htm).


См. также:


[IRdsBigElements](IRdsBigElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
