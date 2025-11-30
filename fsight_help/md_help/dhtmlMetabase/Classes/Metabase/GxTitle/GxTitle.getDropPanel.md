# GxTitle.getDropPanel

GxTitle.getDropPanel
-


# GxTitle.getDropPanel


## Синтаксис


getDropPanel();


## Описание


Метод getDropPanel возвращает
 раскрывающуюся панель заголовка.


## Комментарии


Возвращаемое значение - элемент класса PP.Ui.[DropPanel](dhtmlUi.chm::/Classes/DropPanel/DropPanel.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»). Для появления заголовка необходимо
 нажать на кнопку «Заголовок» на вкладке «Главная». Отобразим раскрывающуюся
 панель:


// Получаем заголовок
var title = expressBox.getDataView().getTitleView();
// Отображаем раскрывающуюся панель
title.getDropPanel().show(500, 200);
В результате будет отображена раскрывающаяся панель:


![](GxTitle_getDropPanel.png)


См. также:


[GxTitle](GxTitle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
