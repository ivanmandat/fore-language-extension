# MsCalculationTreeNodeKind

MsCalculationTreeNodeKind
-


# MsCalculationTreeNodeKind


## Описание


Перечисление MsCalculationTreeNodeKind
 содержит виды элемента в дереве расчета задачи моделирования.


Используется следующим свойством:


	- [IMsCalculationTreeNode.Kind](../Interface/IMsCalculationTreeNode/IMsCalculationTreeNode.Kind.htm).


## Описание


		 Значение
		 Краткое описание


		 0
		 Model. Точка останова.


		 1
		 Calendar. Календарная
		 точка.


		 2
		 Scenario. Сценарий
		 моделирования.


## Комментарии


Для работы со всем видами элементов предназначен базовый интерфейс [IMsCalculationTreeNode](../Interface/IMsCalculationTreeNode/IMsCalculationTreeNode.htm).
 Если элемент дерева представляет собой точку останова (MsCalculationTreeNodeKind
 = Model), то для получения дополнительных данных следует использовать
 дочерний интерфейс [IMsCalculationModelTreeNode](../Interface/IMsCalculationModelTreeNode/IMsCalculationModelTreeNode.htm).


См. также:


[Перечисления сборки Ms](KeMs_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
