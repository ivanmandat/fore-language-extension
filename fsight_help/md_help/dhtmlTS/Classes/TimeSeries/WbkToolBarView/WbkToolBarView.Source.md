# WbkToolBarView.Source

WbkToolBarView.Source
-


# WbkToolBarView.Source


## Синтаксис


Source: PP.TS.[WbkDocument](../WbkDocument/WbkDocument.htm);


## Описание


Свойство Source устанавливает источник данных для компонента [WbkToolBar](../WbkToolBar/WbkToolBar.htm).


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setSource, а возвращается с помощью метода getSource.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Получим ключ источника данных панели инструментов управления видимостью представлений рабочей книги:


// Получим панель инструментов управления видимостью представлений рабочей книги
var toolBarView = workbookBox.getDataView().getToolBarView();
// Установим источник данных для данной панели, если он отсутствует
var source = toolBarView.getSource(); // Получим источник данных
if (source == null | source == undefined) {
    toolBarView.setSource(workbookBox.getSource());
    console.log("Ключ источника данных: " + workbookBox.getSource().getKey());
} else {
    console.log("Ключ источника данных: " + source.getKey());
};

В результате выполнения примера в консоли браузера был выведен ключ источника данных панели инструментов управления видимостью представлений рабочей книги:


Ключ источника данных: 2944


См. также:


[WbkToolBarView](WbkToolBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
