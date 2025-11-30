# TreeListBase.NodeControls

TreeListBase.NodeControls
-


# TreeListBase.NodeControls


## Синтаксис


NodeControls: Array of PP.Ui.Control;


## Описание


Свойство NodeControls определяет
 элементы управления вершины.


## Комментарии


Значение свойства устанавливается с помощью метода setNodeControls(nodeKey,
 value), а возвращается с помощью метода getNodeControls(nodeKey).


Параметры:


nodeKey. String. Идентификатор
 вершины;


value. PP.Ui.Control. Значение.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим элементы управления вершины
Tree.getNodeControls(0);
В результате выполнения примера будут получены элементы управления вершины.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
