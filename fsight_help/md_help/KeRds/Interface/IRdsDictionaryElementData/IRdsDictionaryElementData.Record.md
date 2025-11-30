# IRdsDictionaryElementData.Record

IRdsDictionaryElementData.Record
-


# IRdsDictionaryElementData.Record


## Синтаксис


Record: [IOrmRecord](KeOrm.chm::/Interface/IOrmRecord/IOrmRecord.htm);


## Описание


Свойство Record возвращает данные
 атрибутов элемента в виде объекта, описываемого интерфейсом [IOrmRecord](KeOrm.chm::/Interface/IOrmRecord/IOrmRecord.htm).


## Комментарии


Представление значений атрибутов элемента в виде объекта, описываемого
 интерфейсом [IOrmRecord](KeOrm.chm::/Interface/IOrmRecord/IOrmRecord.htm),
 используется при [расширенном
 поиске](../IRdsDictionaryElementsSearch/IRdsDictionaryElementsSearch.Condition.htm) элементов справочника. Если предполагается чтение/изменений
 значений атрибутов, то используйте свойства [AccessAttribute](IRdsDictionaryElementData.AccessAttribute.htm),
 [Attribute](IRdsDictionaryElementData.Attribute.htm), [AttributeTranslation](IRdsDictionaryElementData.AttributeTranslation.htm),
 [Value](IRdsDictionaryElementData.Value.htm), [ValueTranslation](IRdsDictionaryElementData.ValueTranslation.htm)
 или метод [SetAttributeValue](IRdsDictionaryElementData.SetAttributeValue.htm).


Примечание.
 Частое обращение к значению свойства Record
 может привести к проблемам с производительностью.


## Пример


Использование свойства приведено в примере для [IRdsDictionaryElementsSearch.Condition](../IRdsDictionaryElementsSearch/IRdsDictionaryElementsSearch.Condition.htm).


См. также:


[IRdsDictionaryElementData](IRdsDictionaryElementData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
