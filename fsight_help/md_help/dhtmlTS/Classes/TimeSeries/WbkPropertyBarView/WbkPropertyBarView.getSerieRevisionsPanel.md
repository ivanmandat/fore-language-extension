# WbkPropertyBarView.getSerieRevisionsPanel

WbkPropertyBarView.getSerieRevisionsPanel
-


# WbkPropertyBarView.getSerieRevisionsPanel


## Синтаксис


getSerieRevisionsPanel();


## Описание


Метод getSerieRevisionsPanel возвращает панель «Ревизии» вкладки «Ряд».


## Комментарии


Метод возвращает объект типа PP.TS.Ui.[SerieRevisionsPanel](../SerieRevisionsPanel/SerieRevisionsPanel.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)». Отобразим панель «Ревизии»:


// Получим панель свойств рабочей книги
var propertyBar = workbookBox.getPropertyBarView();
// Получим панель «Ревизии»
var serieRevisionsPanel = propertyBar.getSerieRevisionsPanel();
// Отобразим данную панель
serieRevisionsPanel.show();
// Развернём панель
serieRevisionsPanel.expand();

В результате выполнения примера была отображена панель «Ревизии»:


![](WbkPropertyBarView_getSerieRevisionsPanel.png)


См. также:


[WbkPropertyBarView](WbkPropertyBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
