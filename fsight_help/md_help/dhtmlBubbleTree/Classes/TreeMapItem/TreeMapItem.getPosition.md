# TreeMapItem.getPosition

TreeMapItem.getPosition
-


# TreeMapItem.getPosition


## Синтаксис


getPosition();


## Описание


Метод getPosition рассчитывает
 положение элемента.


## Комментарии


Метод возвращает объект типа:


{Width: 216, Height: 137, Left: 219, Top: 25}


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TreeMap](../../Components/TreeMap/TreeMap.htm) с наименованием
 «treeMap» (см. «[Пример
 создания компонента TreeMap](../../Components/TreeMap/TreeMap_example.htm)»):


// Получим элемент диаграммы с индексом 3
var item = treeMap.getSceneItems()[3];
//Получим координаты.
item.getPosition();
В результате выполнения примера в консоль будут выведены координаты
 четвертого элемента.


См. также:


[TreeMapItem](TreeMapItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
