# WbkToolBarView.setActiveObject

WbkToolBarView.setActiveObject
-


# WbkToolBarView.setActiveObject


## Синтаксис


setActiveObject(objType: PP.Exp.Ui.[EaxObjectType](dhtmlExpress.chm::/Enums/EaxObjectType.htm));


## Параметры


*objType.* Представление,
 которое необходимо сделать активным.


## Описание


Метод setActiveObject активирует
 представление рабочей книги.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Обработаем событие ObjectStateChanged,
 cделаем активным и обновим представление «Карта»:


// Получим панель инструментов управления видимостью представлений рабочей книги
var toolBarView = workbookBox.getDataView().getToolBarView();
// Обработаем событие ObjectStateChanged
toolBarView.ObjectStateChanged.add(function (sender, eventArgs) {
    // Выведем информацию о состоянии представления map
    var mapMeta = eventArgs.getMetadata().map;
    console.log("Флаг активности представления «Карта»: " + mapMeta.enabled);
    console.log("Флаг видимости представления «Карта»: " + mapMeta.visible);
});
// Сделаем активным представление «Карта»
toolBarView.setActiveObject(PP.Exp.Ui.EaxObjectType.Map);
// Обновим представление «Карта»
toolBarView.refresh(PP.Exp.Ui.EaxObjectType.Map)

В результате выполнения примера было активировано и обновлено представление
 «Карта»:


![](WbkToolBarView_setActiveObject.png)


А так же в консоли бразуера была выведена информация о событии:


Флаг активности представления «Карта»: true


Флаг видимости представления «Карта»: true


См. также:


[WbkToolBarView](WbkToolBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
