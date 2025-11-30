# TreeMapItem.Color

TreeMapItem.Color
-


**


# TreeMapItem.Color


## Синтаксис


Color: [PP.SolidColorBrush](dhtmlCommon.chm::/Classes/PP/SolidColorBrush/SolidColorBrush.htm)
 || String


## Описание


Свойство Color** определяет
 цвет элемента плоского дерева.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода set**Color**,
 а возвращается с помощью метода get**Color**.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TreeMap](../../Components/TreeMap/TreeMap.htm) с наименованием
 «treeMap» (см. «[Пример
 создания компонента TreeMap](../../Components/TreeMap/TreeMap_example.htm)» ). Закрасим элемент диаграммы с индексом
 3 красным цветом, перерисуем элемент, получим его контейнер и изменим
 его прозрачность:


// Получим элемент диаграммы с индексом 3
var item = treeMap.getSceneItems()[3];
// Закрасим элемент красным цветом
item.setColor("#FF0000");
// Перерисуем элемент
item.draw()
// Получим контейнер элемента
var container = item.getContainer();
// Изменим прозрачность контейнера элемента
container.setOpacity(0.7);

В результате выполнения примера был перекрашен и перерисован элемент
 диаграммы с индексом 3, была изменена прозрачность контейнера этого элемента:


![](TreeMapItem_Color.png)


См. также:


[TreeMapItem](TreeMapItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
