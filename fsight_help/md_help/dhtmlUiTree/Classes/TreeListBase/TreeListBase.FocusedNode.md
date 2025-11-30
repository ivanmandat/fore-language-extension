# TreeListBase.FocusedNode

TreeListBase.FocusedNode
-


# TreeListBase.FocusedNode


## Синтаксис


FocusedNode: String;


## Описание


Свойство FocusedNode определяет
 ключ находящейся в фокусе вершины.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setFocusedNode,
 а возвращается с помощью метода getFocusedNode.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Определим сфокусированную вершину
Tree.Tree.setFocusedNode("2");
В результате выполнения примера будет выделена вершина с ключом 2.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
