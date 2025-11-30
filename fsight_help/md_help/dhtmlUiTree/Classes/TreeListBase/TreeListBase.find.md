# TreeListBase.find

TreeListBase.find
-


# TreeListBase.find


## Синтаксис


find(value, column, setFocus, fireEvents);


## Параметры


value.String. Искомая строка;


column. Number|String. Столбец
 в котором производится поиск. По умолчанию 0;


setFocus. Boolean. Устанавливать
 фокус в найденную строку;


fireEvents. Boolean. Генерировать
 событие изменения. Необязательный параметр.


## Описание


Метод find возвращает ключ вершины,
 содержащей искомую строку в соответствующем столбце.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Определим вершины, содержащие цифру 2 во втором столбце
Tree.find("2", 1, true);
// -> "0"
В результате выполнения примера первая вершина будет выделена в фокус,
 в консоль выведен ключ вершины.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
