# TreeListBase.getLastSelectedNode

TreeListBase.getLastSelectedNode
-


# TreeListBase.getLastSelectedNode


## Синтаксис


getLastSelectedNode();


## Описание


Метод getLastSelectedNode возвращает
 ключ последней выделенной вершины.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Выделим вершину
Tree.setNodeSelected(2, true);
// Получим индекс последней выделенной вершины
Tree.getLastSelectedNode();
// -> "2"
В результате выполнения примера будет получен ключ последней выделенной
 вершины.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
