# TreeMapItem.calculateLeafColor

TreeMapItem.calculateLeafColor
-


**


# TreeMapItem.calculateLeafColor


## Синтаксис


calculateLeafColor(color1: Object);


## Параметры


*color1. **Значение
 цвета.* Объект содержит следующие поля: R
 - красный компонент цвета, G -
 зеленый компонент цвета, B - синий
 компонент цвета.


## Описание


Метод calculateLeafColor**
 рассчитывает значение цвета элемента.


## Комментарии


Метод возвращает значение типа String,
 в формате "#RRGGBB".


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TreeMap](../../Components/TreeMap/TreeMap.htm) с наименованием
 «treeMap» (см. «[Пример
 создания компонента TreeMap](../../Components/TreeMap/TreeMap_example.htm)» ). Рассчитаем новый цвет границы элемента,
 цвет фона элемента, цвет шрифта текста элемента:


// Получим элемент диаграммы с индексом 3
var item = treeMap.getSceneItems()[3];
// Создадим новые цвета
var color1 = {R: 100, G: 150, B: 200};
// Рассчитаем и выведем цвет элемента
LfColor = item.calculateLeafColor(color1)
console.log("Цвет элемента: " + BrColor)

В результате выполнения примера в консоли браузера были выведены значения
 цвета элемента:


Цвет элемента: "#6496c8"


См. также:


[TreeMapItem](TreeMapItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
