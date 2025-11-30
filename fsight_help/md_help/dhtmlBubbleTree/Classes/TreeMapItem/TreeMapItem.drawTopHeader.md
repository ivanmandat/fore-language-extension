# TreeMapItem.drawTopHeader

TreeMapItem.drawTopHeader
-


# TreeMapItem.drawTopHeader


## Синтаксис


drawTopHeader();


## Описание


Метод drawTopHeader рисует заголовок
 ветви поверх отрисованных элементов.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TreeMap](../../Components/TreeMap/TreeMap.htm) с наименованием
 «treeMap» (см. «[Пример
 создания компонента TreeMap](../../Components/TreeMap/TreeMap_example.htm)» ):


// Получим элемент диаграммы с индексом 3
var item = treeMap.getSceneItems()[3];
//Проверим, рисуется ли заголовок поверх других элементов. Если нет - отрисуем поверх других элементов.
if (item.isHeaderAtTop) item.drawTopHeader();
В результате выполнения примера заголовок ветви был отрисован поверх
 других элементов.


См. также:


[TreeMapItem](TreeMapItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
