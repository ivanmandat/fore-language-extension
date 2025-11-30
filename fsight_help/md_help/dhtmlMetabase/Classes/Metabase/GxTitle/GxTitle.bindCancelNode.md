# GxTitle.bindCancelNode

GxTitle.bindCancelNode
-


# GxTitle.bindCancelNode


## Синтаксис


bindCancelNode(domNode: HTMLElement; addEvent: Boolean);


## Параметры


domNode. DOM-вершина;


addEvent. Признак добавления
 обработчика события нажатия мыши на DOM-вершину. Если для параметра установлено
 значение true, то обработчик события
 нажатия мыши будет добавлен.


## Описание


Метод bindCancelNode отменяет
 отключение режима редактирования заголовка при нажатии на указанную DOM-вершину.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»). Для появления заголовка необходимо
 нажать на кнопку «Заголовок» на вкладке «Главная». Отменим отключение
 режима редактирования заголовка при нажатии на DOM-вершину компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm):


// Получаем заголовок
var title = expressBox.getDataView().getTitleView();
// Отменяем отключение режима редактирования заголовка
title.bindCancelNode(expressBox.getDomNode(), true);
В результате, при включенном режиме редактирования заголовка, нажатие
 на DOM-вершину компонента [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 не приведет к отключению режима редактирования.


Отключим режим редактирования заголовка при нажатии на DOM-вершину компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm):


// Отключаем режим редактирования заголовка
title.unbindCancelNode(expressBox.getDomNode(), true);
В результате, при включенном режиме редактирования заголовка, нажатие
 на DOM-вершину компонента [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 приведет к отключению режима редактирования.


См. также:


[GxTitle](GxTitle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
