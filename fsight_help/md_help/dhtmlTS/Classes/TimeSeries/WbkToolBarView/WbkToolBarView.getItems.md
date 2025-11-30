# WbkToolBarView.getItems

WbkToolBarView.getItems
-


# WbkToolBarView.getItems


## Синтаксис


getItems();


## Описание


Метод getItems возвращает массив
 кнопок компонента [WbkToolBar](../WbkToolBar/WbkToolBar.htm).


## Комментарии


Метод возвращает массив объектов типа PP.Ui.[ToolBarButton](dhtmlUi.chm::/Classes/ToolBarButton/ToolBarButton.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Выведем названия кнопок компонента
 [WbkToolBar](../WbkToolBar/WbkToolBar.htm), выведем информацию
 о состоянии представления «Карта»:


// Получим панель инструментов управления видимостью представлений рабочей книги
var toolBarView = workbookBox.getDataView().getToolBarView();
// Получим массив кнопок панели инструментов управления видимостью представлений рабочей книги
var items = toolBarView.getItems();
// Выведем названия кнопок
for (var i = 0; i < items.length; i++) {
   console.log("Название кнопки: " + items[i].getContent())
}
// Получим состояние панели инструментов управления видимостью представлений рабочей книги
var state = toolBarView.getToolBarState();
// Выведем информацию о состоянии представления «Карта»
console.log("Признак активности представления «Карта»: " + state.map.enabled);
console.log("Признак видимости представления «Карта»: " + state.map.visible);

В результате выполнения примера в консоли браузера были выведены названия
 кнопок представлений, а так же состояние представления «Карта»:


Название кнопки: Таблица


Название кнопки: Диаграмма


Название кнопки: Карта


Признак активности представления «Карта»: true


Признак видимости представления «Карта»: false


См. также:


[WbkToolBarView](WbkToolBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
