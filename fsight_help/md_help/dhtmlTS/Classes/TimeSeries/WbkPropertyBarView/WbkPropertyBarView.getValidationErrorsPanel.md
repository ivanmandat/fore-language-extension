# WbkPropertyBarView.getValidationErrorsPanel

WbkPropertyBarView.getValidationErrorsPanel
-


**


# WbkPropertyBarView.getValidationErrorsPanel


## Синтаксис


getValidationErrorsPanel();


## Описание


Метод getValidationErrorsPanel**
 возвращает панель «Ошибки валидации» вкладки «Наблюдение».


## Комментарии


Метод возвращает объект типа PP.TS.Ui.ValidationErrorsPanel.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)». Отобразим панель «Ошибки валидации»:


// Получим панель свойств рабочей книги
var propertyBar = workbookBox.getPropertyBarView();
// Получим панель «Ошибки валидации»
var validationErrorsPanel = propertyBar.getValidationErrorsPanel();
// Отобразим данную панель
validationErrorsPanel.show();
// Развернём панель
validationErrorsPanel.expand();

В результате выполнения примера была отображена панель «Ошибки валидации»:


![](WbkPropertyBarView_getValidationErrorsPanel.png)


См. также:


[WbkPropertyBarView](WbkPropertyBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
