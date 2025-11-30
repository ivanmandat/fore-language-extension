# WbkPropertyBarView.getEquationSmoothingSlidingPanel

WbkPropertyBarView.getEquationSmoothingSlidingPanel
-


# WbkPropertyBarView.getEquationSmoothingSlidingPanel


## Синтаксис


getEquationSmoothingSlidingPanel();


## Описание


Метод getEquationSmoothingSlidingPanel возвращает панель «Скользящее среднее».


## Комментарии


Метод возвращает объект типа PP.TS.Ui.[EquationSmoothingSlidingPanel](../EquationSmoothingSlidingPanel/equationsmoothingslidingpanel.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)». Отобразим панель «Скользящее среднее»:


// Получим панель свойств рабочей книги
var propertyBar = workbookBox.getPropertyBarView();
// Получим панель «Скользящее среднее»
var equationSmoothingSlidingPanel = propertyBar.getEquationSmoothingSlidingPanel();
// Отобразим данную панель
equationSmoothingSlidingPanel.show();
// Развернём панель
equationSmoothingSlidingPanel.expand();

В результате выполнения примера была отображена панель «Скользящее среднее»:


![](WbkPropertyBarView_getEquationSmoothingSlidingPanel.png)


См. также:


[WbkPropertyBarView](WbkPropertyBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
