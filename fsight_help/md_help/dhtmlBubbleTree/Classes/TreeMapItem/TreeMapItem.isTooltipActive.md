# TreeMapItem.isTooltipActive

TreeMapItem.isTooltipActive
-


# TreeMapItem.isTooltipActive


## Синтаксис


isTooltipActive() : Boolean;


## Описание


Метод isTooltipActive возвращает
 признак активности всплывающей подсказки у элемента дерева.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TreeMap](../../Components/TreeMap/TreeMap.htm) с наименованием
 «treeMap» (см. «[Пример
 создания компонента TreeMap](../../Components/TreeMap/TreeMap_example.htm)»), наведем курсором мыши на четвертый
 элемент дерева для отображения подсказки:


// Получим элемент диаграммы с индексом 3
var item = treeMap.getSceneItems()[3];
//Получим признак активности всплывающей подсказки у четвертого элемента
item.isTooltipActive();
В результате выполнения примера в консоль будет выведено значение true, если у четвертого элемента
 была активна подсказка.


См. также:


[TreeMapItem](TreeMapItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
