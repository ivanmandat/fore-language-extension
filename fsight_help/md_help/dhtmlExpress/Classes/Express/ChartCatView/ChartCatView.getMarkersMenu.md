# ChartCatView.getMarkersMenu

ChartCatView.getMarkersMenu
-


# ChartCatView.getMarkersMenu


## Синтаксис


getMarkersMenu(): [PP.Exp.Ui.ChartMarkerMenu](../ChartMarkerMenu/ChartMarkerMenu.htm);


## Описание


Метод getMarkersMenu возвращает
 меню, которое вызывается при нажатии на кнопку «Маркеры» на вкладке ленты
 инструментов «Диаграмма».


## Комментарии


Метод возвращает объект класса [PP.Exp.Ui.ChartMarkerMenu](../ChartMarkerMenu/ChartMarkerMenu.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Получим меню маркеров, которое вызывается
 в пункте меню «Маркеры» ленты инструментов:


// Получим представление вкладки "Диаграмма"
chartCategory = expressBox.getRibbonView().getChartCategory();
// Получим меню маркеров
markerMenu = chartCategory.getMarkersMenu();
// Получим индекс выбранного элемента
selected = markerMenu.getSelectedIndex();
// Получим пиктограмму выбранного маркера
console.debug("Выбран маркер: " + markerMenu.getMarker() + " с индексом " + selected);
//--> Выбран маркер: diamond с индексом 3
// Установим событие смены маркера
markerMenu.MarkerChanged.add(function(){alert('Тип маркера изменен')});
// Получим список всех доступных маркеров
list = markerMenu.getChartMarkerListBox();
console.debug(list.getItems());
// Обнулим выбранный тип маркера
markerMenu.clearSelection();

В результате выполнения данного примера будет выведено наименование
 пиктограммы и индекс выбранного маркера, установлено событие на смену
 маркера, получен список доступных пиктограмм маркеров, текущее выделение
 в кнопке меню было отменено.


См. также:


[ChartCatView](ChartCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
