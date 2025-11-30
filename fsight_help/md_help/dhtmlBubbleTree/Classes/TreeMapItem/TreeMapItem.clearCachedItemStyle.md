# TreeMapItem.clearCachedItemStyle

TreeMapItem.clearCachedItemStyle
-


# TreeMapItem.clearCachedItemStyle


## Синтаксис


clearCachedItemStyle();


## Описание


Метод clearCachedItemStyle обнуляет
 стили элемента.


## Комментарии


Обнуляет стили, сохраненные в DOM представлении или в CanvasLabel.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TreeMap](../../Components/TreeMap/TreeMap.htm) с наименованием
 «treeMap» (см. «[Пример
 создания компонента TreeMap](../../Components/TreeMap/TreeMap_example.htm)» ):


// Получим элемент диаграммы с индексом 3
var item = treeMap.getSceneItems()[3];
//Получим заголовок элемента, объект типа PP.Ui.CanvasLabel
console.debug(item._label);
// Обнулим стили элемента
item.clearCachedItemStyle();
// Повторно получим заголовок элемента
console.debug(item._label);
В результате выполнения примера в консоль был выведен объект заголовка
 элемента, после чего его стиль и он сам были удалены.


См. также:


[TreeMapItem](TreeMapItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
