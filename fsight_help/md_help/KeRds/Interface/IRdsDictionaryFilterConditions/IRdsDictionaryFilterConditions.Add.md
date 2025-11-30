# IRdsDictionaryFilterConditions.Add

IRdsDictionaryFilterConditions.Add
-


# IRdsDictionaryFilterConditions.Add


## Синтаксис


Add(Attribute: [IRdsAttribute](../IRdsAttribute/IRdsAttribute.htm)):
 [IRdsDictionaryFilterCondition](../IRdsDictionaryFilterCondition/IRdsDictionaryFilterCondition.htm);


## Параметры


Attribute. Атрибут справочника
 НСИ.


## Описание


Метод Add добавляет фильтр в
 коллекцию по указанному атрибуту.


## Комментарии


После выполнения метод возвращает настройки добавленного фильтра. Фильтр
 добавляется в конец коллекции, при этом значение свойства [IRdsDictionaryFilterConditions.Count](IRdsDictionaryFilterConditions.Count.htm)
 увеличивается на единицу.


## Пример


Использование метода приведено в примере для [IRdsDictionaryBatch.Filter](../IRdsDictionaryBatch/IRdsDictionaryBatch.Filter.htm).


См. также:


[IRdsDictionaryFilterConditions](IRdsDictionaryFilterConditions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
