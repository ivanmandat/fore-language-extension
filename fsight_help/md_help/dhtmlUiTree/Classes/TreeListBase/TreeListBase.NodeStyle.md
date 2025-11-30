# TreeListBase.NodeStyle

TreeListBase.NodeStyle
-


# TreeListBase.NodeStyle


## Синтаксис


NodeStyle: PP.Style;


## Описание


Свойство NodeStyle определяет
 стиль указанной вершины.


## Комментарии


Значение свойства устанавливается с помощью метода setNodeStyle(nodeKey,
 value), а возвращается с помощью метода getNodeStyle(nodeKey).


Параметры:


nodeKey. String. Идентификатор
 вершины;


value. PP.Style. Значение.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Установим стиль
Tree.setNodeStyle(1, "border: 1px dotted lightgray; border-radius: 2px");
В результате выполнения примера будет применен стиль к вершине с ключом
 1.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
