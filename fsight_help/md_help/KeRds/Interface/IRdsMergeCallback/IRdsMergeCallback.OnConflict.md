# IRdsMergeCallback.OnConflict

IRdsMergeCallback.OnConflict
-


# IRdsMergeCallback.OnConflict


## Синтаксис


OnConflict(LoadElement: [IRdsDictionaryElement](../IRdsDictionaryElement/IRdsDictionaryElement.htm); CurrentElement: [IRdsDictionaryElement](../IRdsDictionaryElement/IRdsDictionaryElement.htm));


## Параметры


LoadElement. Элемент справочника, загруженный из файла.


CurrentElement. Соответствующий элемент в справочнике.


## Описание


Метод OnConflict реализует событие, возникающее, если значения атрибутов элемента CurrentElement в справочнике и соответствующего ему элемента LoadElement, загруженного из файла, имеют различия. Данное событие возникает на стадии сравнения элементов.


## Пример


Использование метода приведено в примере для [IRdsMergeCallback.OnBeforeProcess](IRdsMergeCallback.OnBeforeProcess.htm).


См. также:


[IRdsMergeCallback](IRdsMergeCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
