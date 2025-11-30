# IMsCalculationModelTreeNode

IMsCalculationModelTreeNode
-


# IMsCalculationModelTreeNode


Сборка: Ms;


## Описание


Интерфейс IMsCalculationModelTreeNode
 предназначен для работы с элементом дерева расчёта задачи моделирования,
 который является точкой останова.


## Иерархия наследования


           IMsCalculationModelTreeNode


## Комментарии


Интерфейс является потомком интерфейса [IMsCalculationTreeNode](../IMsCalculationTreeNode/IMsCalculationTreeNode.htm),
 предназначенного для работы со всем видами элементов дерева расчёта. Элемент
 является точкой останова, если свойство [IMsCalculationTreeNode.Kind](../IMsCalculationTreeNode/IMsCalculationTreeNode.Kind.htm)
 возвращает значение [MsCalculationTreeNodeKind.Model](../../Enums/MsCalculationTreeNodeKind.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Breakpoint](IMsCalculationModelTreeNode.Breakpoint.htm)
		 Свойство Breakpoint
		 возвращает точку останова.


		 ![](../../Property_Image.gif)
		 [CurrentPoint](IMsCalculationModelTreeNode.CurrentPoint.htm)
		 Свойство CurrentPoint
		 возвращает календарную точку расчета, на которой расположена точка
		 останова.


		 ![](../../Property_Image.gif)
		 [Model](IMsCalculationModelTreeNode.Model.htm)
		 Свойство Model возвращает
		 модель, для которой установлена точка останова.


		 ![](../../Property_Image.gif)
		 [Scenario](IMsCalculationModelTreeNode.Scenario.htm)
		 Свойство Scenario возвращает
		 сценарий, на котором расположена точка останова.


## Свойства, унаследованные от [IMsCalculationTreeNode](../IMsCalculationTreeNode/IMsCalculationTreeNode.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Children](../IMsCalculationTreeNode/IMsCalculationTreeNode.Children.htm)


		 Свойство Children возвращает
		 коллекцию потомков для элемента.


		 ![](../../Property_Image.gif)
		 [Key](../IMsCalculationTreeNode/IMsCalculationTreeNode.Key.htm)


		 Свойство Key возвращает
		 ключ элемента.


		 ![](../../Property_Image.gif)
		 [Kind](../IMsCalculationTreeNode/IMsCalculationTreeNode.Kind.htm)


		 Свойство Kind возвращает
		 тип элемента.


		 ![](../../Property_Image.gif)
		 [Parent](../IMsCalculationTreeNode/IMsCalculationTreeNode.Parent.htm)


		 Свойство Parent возвращает
		 коллекцию родителей элемента.


		 ![](../../Property_Image.gif)
		 [Text](../IMsCalculationTreeNode/IMsCalculationTreeNode.Text.htm)


		 Свойство Text возвращает
		 текст элемента.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
