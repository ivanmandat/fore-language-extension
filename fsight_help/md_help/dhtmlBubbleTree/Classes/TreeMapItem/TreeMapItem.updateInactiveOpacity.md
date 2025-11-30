# TreeMapItem.updateInactiveOpacity

TreeMapItem.updateInactiveOpacity
-


# TreeMapItem.updateInactiveOpacity


## Синтаксис


updateInactiveOpacity();


## Описание


Метод updateInactiveOpacity
 обновляет свойство inactiveOpacity, определяющее прозрачность неактивных
 элементов, сохраняя видимую прозрачность неизменной.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TreeMap](../../Components/TreeMap/TreeMap.htm) с наименованием
 «treeMap» (см. «[Пример
 создания компонента TreeMap](../../Components/TreeMap/TreeMap_example.htm)»):


// Получим элемент диаграммы с индексом 3
var item = treeMap.getSceneItems()[3];
// Поменяем текущее значение inactiveOpacity на 0.5
item.setColor(item.getColor, 0.5);
// Обновим значение прозрачности неактивных элементов
item.updateInactiveOpacity();
// -> inactiveOpacity = 1
В результате выполнения примера свойство inactiveOpacity, определяющее
 прозрачность неактивных элементов, будет изменено на 0.5, после чего будет
 обновлено и примет значение по умолчанию (1).


См. также:


[TreeMapItem](TreeMapItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
