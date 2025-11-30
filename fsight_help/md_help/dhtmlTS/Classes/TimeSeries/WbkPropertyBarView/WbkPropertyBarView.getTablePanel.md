# WbkPropertyBarView.getTablePanel

WbkPropertyBarView.getTablePanel
-


# WbkPropertyBarView.getTablePanel


## Синтаксис


getTablePanel();


## Описание


Метод getTablePanel возвращает панель «Данные» вкладки «Данные».


## Комментарии


Метод возвращает объект типа PP.TS.Ui.[TablePanel](../TablePanel/TablePanel.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)». Отобразим панель «Данные»:


// Получим панель свойств рабочей книги
var propertyBar = workbookBox.getPropertyBarView();
// Получим панель «Данные»
var tablePanel = propertyBar.getTablePanel();
// Отобразим данную панель
tablePanel.show();
// Развернём панель
tablePanel.expand();

В результате выполнения примера была отображена панель «Данные»:


![](WbkPropertyBarView_getTablePanel.png)


См. также:


[WbkPropertyBarView](WbkPropertyBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
