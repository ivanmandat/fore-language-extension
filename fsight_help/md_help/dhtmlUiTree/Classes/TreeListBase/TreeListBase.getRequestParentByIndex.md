# TreeListBase.getRequestParentByIndex

TreeListBase.getRequestParentByIndex
-


# TreeListBase.getRequestParentByIndex


## Синтаксис


getRequestParentByIndex(idx);


## Параметры


idx. Number. Порядковый номер
 вершины.


## Описание


Метод getRequestParentByIndex
 возвращает индекс родителя по порядковому номеру вершины.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Получим родителя второй вершины
Tree.getRequestParentByIndex(1);
// -> "0"
В результате выполнения примера будет получен индекс родителя указанной
 вершины.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
