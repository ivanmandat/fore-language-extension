# RdsMergeCallback.OnConflict

RdsMergeCallback.OnConflict
-


# RdsMergeCallback.OnConflict


## Синтаксис


OnConflict(LoadElement: [IRdsDictionaryElement](../../Interface/IRdsDictionaryElement/IRdsDictionaryElement.htm); CurrentElement: [IRdsDictionaryElement](../../Interface/IRdsDictionaryElement/IRdsDictionaryElement.htm));


## Параметры


LoadElement. Элемент справочника, загруженный из файла.


CurrentElement. Соответствующий элемент в справочнике.


## Описание


Метод OnConflict реализует событие, возникающее, если значения атрибутов элемента CurrentElement в справочнике и соответствующего ему элемента LoadElement, загруженного из файла, имеют различия. Данное событие возникает на стадии сравнения элементов.


## Пример


Использование метода приведено в примере для [RdsMergeCallback.OnBeforeProcess](RdsMergeCallback.OnBeforeProcess.htm).


См. также:


[RdsMergeCallback](RdsMergeCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
