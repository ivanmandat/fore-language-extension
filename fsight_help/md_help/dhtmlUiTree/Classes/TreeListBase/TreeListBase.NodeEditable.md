# TreeListBase.NodeEditable

TreeListBase.NodeEditable
-


# TreeListBase.NodeEditable


## Синтаксис


NodeEditable: Boolean;


## Описание


Свойство NodeEditable определяет
 возможность редактирования указанной вершины.


## Комментарии


Значение свойства устанавливается с помощью метода setNodeEditable(nodeKey,
 value), а возвращается с помощью метода getNodeEditable(nodeKey).


Параметры:


nodeKey. String. Идентификатор
 вершины;


value. Boolean. Значение.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Запретим редактирование вершины с индексом ноль
Tree.setNodeEditable(0, false);
В результате выполнения примера будет запрещено редактирование вершины
 с индексом 0.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
