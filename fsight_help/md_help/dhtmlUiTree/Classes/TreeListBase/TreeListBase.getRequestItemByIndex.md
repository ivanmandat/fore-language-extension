# TreeListBase.getRequestItemByIndex

TreeListBase.getRequestItemByIndex
-


# TreeListBase.getRequestItemByIndex


## Синтаксис


getRequestItemByIndex(idx);


## Параметры


idx. Number. Порядковый номер
 вершины.


## Описание


Метод getRequestItemByIndex
 возвращает индекс вершины и её родителя по порядковому номеру.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим вторую вершину
Tree.getRequestItemByIndex(1);
// -> Object {Parent: "0", Index: 0}
В результате выполнения примера будет получен индекс родителя и указанной
 вершины.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
