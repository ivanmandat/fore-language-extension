# IMsTransformObjectList.Item

IMsTransformObjectList.Item
-


# IMsTransformObjectList.Item


## Синтаксис


Item(Index: Integer): [IMsTransformObject](../IMsTransformObject/IMsTransformObject.htm);


## Параметры


Index. Индекс объекта в коллекции.


## Описание


Свойство Item возвращает объект из коллекции по его индексу.


## Комментарии


Данное свойство обеспечивает возможность доступа к определенному объекту коллекции. Значение параметра Index должно быть неотрицательным числом, но меньше значения свойства [IMsTransformObjectList.Count](IMsTransformObjectList.Count.htm). Индекс первого объекта в коллекции - «0», последнего - «[IMsTransformObjectList.Count](IMsTransformObjectList.Count.htm) - 1». Нумерация индексов - сквозная.


## Пример


Использование свойства приведено в примере для [IMsTransformObject.Descriptor](../IMsTransformObject/IMsTransformObject.Descriptor.htm).


См. также:


[IMsTransformObjectList](IMsTransformObjectList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
