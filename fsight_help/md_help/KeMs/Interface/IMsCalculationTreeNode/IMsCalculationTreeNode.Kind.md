# IMsCalculationTreeNode.Kind

IMsCalculationTreeNode.Kind
-


# IMsCalculationTreeNode.Kind


## Синтаксис


		Kind: [MsCalculationTreeNodeKind](../../Enums/MsCalculationTreeNodeKind.htm);


## Описание


Свойство Kind возвращает вид
 элемента.


## Комментарии


Для работы со всем видами элементов предназначен базовый интерфейс [IMsCalculationTreeNode](IMsCalculationTreeNode.htm).
 Если элемент дерева представляет собой точку останова (свойство принимает
 значение MsCalculationTreeNodeKind.Model),
 то для получения дополнительных данных следует использовать дочерний интерфейс
 [IMsCalculationModelTreeNode](../IMsCalculationModelTreeNode/IMsCalculationModelTreeNode.htm).


## Пример


Использование свойства приведено в примере для [IMsProblemCalculation.CalculationTree](../IMsProblemCalculation/IMsProblemCalculation.CalculationTree.htm).


См. также:


[IMsCalculationTreeNode](IMsCalculationTreeNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
