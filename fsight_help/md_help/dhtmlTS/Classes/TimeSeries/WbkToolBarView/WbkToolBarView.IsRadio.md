# WbkToolBarView.IsRadio

WbkToolBarView.IsRadio
-


# WbkToolBarView.IsRadio


## Синтаксис


IsRadio: Boolean;


## Описание


Свойство IsRadio определяет, являются ли кнопки компонента [WbkToolBar](../WbkToolBar/WbkToolBar.htm) переключателями.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setIsRadio, а возвращается с помощью метода getIsRadio.


Если значение свойства равно true, то кнопки компонента [WbkToolBar](../WbkToolBar/WbkToolBar.htm) являются переключателями, иначе - не являются.


По умолчанию значение свойства равно false.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)». Преобразуем кнопки на панели инструментов в переключатели:


// Получим панель инструментов управления видимостью представлений рабочей книги
var toolBarView = workbookBox.getDataView().getToolBarView();
// Преобразуем кнопки на панели инструментов в переключатели
toolBarView.setIsRadio(true);

В результате выполнения примера кнопки на панели инструментов стали переключателями:


![](WbkToolBarView_IsRadio.png)


См. также:


[WbkToolBarView](WbkToolBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
