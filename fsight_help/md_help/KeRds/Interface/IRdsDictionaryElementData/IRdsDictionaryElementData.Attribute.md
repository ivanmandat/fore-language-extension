# IRdsDictionaryElementData.Attribute

IRdsDictionaryElementData.Attribute
-


# IRdsDictionaryElementData.Attribute


## Синтаксис


Attribute(AttributeKey: Integer): Variant;


## Параметры


AttributeKey. Ключ атрибута
 справочника, по которому необходимо определить значение.


## Описание


Свойство Attribute определяет
 значение элемента по атрибуту, ключ которого передается посредством параметра
 AttributeKey.


## Комментарии


По умолчанию доступны значения только системных атрибутов. Для получения
 значений системных и пользовательских атрибутов присвойте свойству [IRdsDictionaryInstance.FetchAll](../IRdsDictionaryInstance/IRdsDictionaryInstance.FetchAll.htm)
 значение True.


## Пример


Использование свойства приведено в примере для [IRdsDictionaryElements.CreateElementData](../IRdsDictionaryElements/IRdsDictionaryElements.CreateElementData.htm).


См. также:


[IRdsDictionaryElementData](IRdsDictionaryElementData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
