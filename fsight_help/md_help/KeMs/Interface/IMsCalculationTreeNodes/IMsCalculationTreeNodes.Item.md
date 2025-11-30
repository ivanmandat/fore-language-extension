# IMsCalculationTreeNodes.Item

IMsCalculationTreeNodes.Item
-


# IMsCalculationTreeNodes.Item


## Синтаксис


		Item(Index: Integer): [IMsCalculationTreeNode](../IMsCalculationTreeNode/IMsCalculationTreeNode.htm);


## Параметры


Index. Индекс элемента в коллекции.


## Описание


Свойство Item
 возвращает элемент из коллекции по его индексу.


## Комментарии


Данное свойство обеспечивает возможность доступа к определённому элементу
 из коллекции. Значение параметра Index
 должно быть неотрицательным числом, но меньше значения свойства [IMsCalculationTreeNodes.Count](IMsCalculationTreeNodes.Count.htm). Индекс
 первого элемента в коллекции - «0», последнего - «[IMsCalculationTreeNodes.Count](IMsCalculationTreeNodes.Count.htm)
 - 1». Нумерация индексов - сквозная.


## Пример


Использование свойства приведено в примере для [IMsProblemCalculation.CalculationTree](../IMsProblemCalculation/IMsProblemCalculation.CalculationTree.htm).


См. также:


[IMsCalculationTreeNodes](IMsCalculationTreeNodes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
