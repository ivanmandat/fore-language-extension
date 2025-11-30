# WbkPropertyBarView.getEquationPeriodPanel

WbkPropertyBarView.getEquationPeriodPanel
-


# WbkPropertyBarView.getEquationPeriodPanel


## Синтаксис


getEquationPeriodPanel();


## Описание


Метод getEquationPeriodPanel возвращает панель «Периоды расчета».


## Комментарии


Метод возвращает объект типа PP.TS.Ui.[EquationPeriodPanel](../EquationPeriodPanel/EquationPeriodPanel.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)». Отобразим панель «Периоды расчета»:


// Получим панель свойств рабочей книги
var propertyBar = workbookBox.getPropertyBarView();
// Получим панель «Периоды расчета»
var equationPeriodPanel = propertyBar.getEquationPeriodPanel();
// Отобразим данную панель
equationPeriodPanel.show();
// Развернём панель
equationPeriodPanel.expand();

В результате выполнения примера была отображена панель «Периоды расчета»:


![](WbkPropertyBarView_getEquationPeriodPanel.png)


См. также:


[WbkPropertyBarView](WbkPropertyBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
