# IRdsDictionaryFilterConditions.Item

IRdsDictionaryFilterConditions.Item
-


# IRdsDictionaryFilterConditions.Item


## Синтаксис


Item(Index: Integer): [IRdsDictionaryFilterCondition](../IRdsDictionaryFilterCondition/IRdsDictionaryFilterCondition.htm);


## Параметры


Index. Индекс фильтра в коллекции.


## Описание


Свойство Item возвращает фильтр
 из коллекции по его индексу.


## Комментарии


Item обеспечивает возможность
 доступа к определенному фильтру из коллекции. Значение параметра Index должно быть неотрицательным
 числом, но меньше значения свойства [IRdsDictionaryFilterConditions.Count](IRdsDictionaryFilterConditions.Count.htm).
 Индекс первого фильтра в коллекции - «0», последнего- «[IRdsDictionaryFilterConditions.Count](IRdsDictionaryFilterConditions.Count.htm)
 - 1». Нумерация индексов - сплошная.


## Пример


Использование свойства приведено в примере для [IRdsDictionaryFilterConditions.LoadFrom](IRdsDictionaryFilterConditions.LoadFrom.htm).


См. также:


[IRdsDictionaryFilterConditions](IRdsDictionaryFilterConditions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
