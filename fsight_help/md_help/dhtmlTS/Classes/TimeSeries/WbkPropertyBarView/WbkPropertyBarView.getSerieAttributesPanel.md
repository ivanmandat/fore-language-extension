# WbkPropertyBarView.getSerieAttributesPanel

WbkPropertyBarView.getSerieAttributesPanel
-


# WbkPropertyBarView.getSerieAttributesPanel


## Синтаксис


getSerieAttributesPanel();


## Описание


Метод getSerieAttributesPanel
 возвращает панель «Атрибуты ряда» вкладки «Ряд».


## Комментарии


Метод возвращает объект типа PP.TS.Ui.[MetaDataViewerPanel](../MetaDataViewerPanel/MetaDataViewerPanel.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)». Отобразим панель «Атрибуты ряда»:


// Получим панель свойств рабочей книги
var propertyBar = workbookBox.getPropertyBarView();
// Получим панель «Атрибуты ряда»
var serieAttributesPanel = propertyBar.getSerieAttributesPanel();
// Отобразим данную панель
serieAttributesPanel.show();
// Развернём панель
serieAttributesPanel.expand();

В результате выполнения примера была отображена панель «Атрибуты ряда»:


![](../MetaDataViewerPanel/metaDataPanel.gif)


См. также:


[WbkPropertyBarView](WbkPropertyBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
