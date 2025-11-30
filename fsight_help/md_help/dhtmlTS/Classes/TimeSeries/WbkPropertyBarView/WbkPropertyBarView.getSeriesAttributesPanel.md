# WbkPropertyBarView.getSeriesAttributesPanel

WbkPropertyBarView.getSeriesAttributesPanel
-


# WbkPropertyBarView.getSeriesAttributesPanel


## Синтаксис


getSeriesAttributesPanel();


## Описание


Метод getSeriesAttributesPanel
 возвращает панель «Данные» вкладки «Формат».


## Комментарии


Метод возвращает объект типа PP.TS.Ui.[TablePanel](../TablePanel/TablePanel.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)». Отобразим панель «Данные» вкладки
 «Формат»:


// Получим панель свойств рабочей книги
var propertyBar = workbookBox.getPropertyBarView();
// Получим панель «Данные» вкладки «Формат»
var seriesAttributesPanel = propertyBar.getSeriesAttributesPanel();
// Отобразим данную панель
seriesAttributesPanel.show();
// Развернём панель
seriesAttributesPanel.expand();

В результате выполнения примера была отображена панель «Данные» из вкладки
 «Формат»:


![](WbkPropertyBarView_getSeriesAttributesPanel.png)


См. также:


[WbkPropertyBarView](WbkPropertyBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
