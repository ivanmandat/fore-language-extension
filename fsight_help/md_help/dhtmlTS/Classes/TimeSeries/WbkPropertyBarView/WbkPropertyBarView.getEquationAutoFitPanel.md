# WbkPropertyBarView.getEquationAutoFitPanel

WbkPropertyBarView.getEquationAutoFitPanel
-


# WbkPropertyBarView.getEquationAutoFitPanel


## Синтаксис


getEquationAutoFitPanel();


## Описание


Метод getEquationAutoFitPanel возвращает панель автоподбора параметров экспоненциального сглаживания.


## Комментарии


Метод возвращает объект типа PP.TS.Ui.[EquationAutoFitPanel](../EquationAutoFitPanel/EquationAutoFitPanel.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)». Отобразим панель автоподбора параметров экспоненциального сглаживания:


// Получим панель свойств рабочей книги
var propertyBar = workbookBox.getPropertyBarView();
// Получим панель автоподбора параметров экспоненциального сглаживания
var equationAutoFitPanel = propertyBar.getEquationAutoFitPanel();
// Отобразим панель
equationAutoFitPanel.show();
// Развернём панель
equationAutoFitPanel.expand();

В результате выполнения примера была отображена панель автоподбора параметров экспоненциального сглаживания:


![](WbkPropertyBarView_getEquationAutoFitPanel.png)


См. также:


[WbkPropertyBarView](WbkPropertyBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
