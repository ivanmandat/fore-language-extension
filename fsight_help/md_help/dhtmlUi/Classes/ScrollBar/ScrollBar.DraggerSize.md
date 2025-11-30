# ScrollBar.DraggerSize

ScrollBar.DraggerSize
-


# ScrollBar.DraggerSize


## Синтаксис


DraggerSize: Number;


## Описание


Свойство DraggerSize определяет
 ширину ползунка.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setDraggerSize, а возвращается с
 помощью метода getDraggerSize


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](dhtmlUiTree.chm::/Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Отобразим полосу прокрутки расширив заголовок
caps = Tree.getCaptions();
caps.getCaptions()[0].setWidth(300);
caps.getCaptions()[1].setWidth(300);
// Получим полосу прокрутки
scroll = Tree.getScrollBarH();
// Установим минимальное и текущее значение ползунка
scroll.setDraggerMinSize(100);
scroll.setDraggerSize(50);
В результате выполнения примера была задана минимальная ширина ползунка
 и текущая.


См. также:


[ScrollBar](ScrollBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
