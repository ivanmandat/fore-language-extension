# WbkDataView.getViews

WbkDataView.getViews
-


# WbkDataView.getViews


## Синтаксис


getViews();


## Описание


Метод getViews возвращает массив
 представлений визуализаторов.


## Комментарии


Метод возвращает экземпляры следующих классов:


	- [PP.Exp.Ui.TitleBox](dhtmlExpress.chm::/Classes/Express/TitleBox/TitleBox.htm);


	- [PP.TS.Ui.LanerBoxView](../LanerBoxView/LanerBoxView.htm);


	- [PP.TS.Ui.WbkChartBox](dhtmlExpress.chm::/Classes/Express/EaxChartView/EaxChartView.htm);


	- [PP.TS.Ui.WbkMapView](dhtmlExpress.chm::/Classes/Express/EaxMapView/EaxMapView.htm);


	- [PP.Exp.Ui.GaugeBox](dhtmlExpress.chm::/Classes/Express/GaugeBox/GaugeBox.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../WorkbookBox/WorkbookBox.htm) c наименованием
 «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Получим массив представлений визуализаторов:


// Получим отображение данных рабочей книги
book = workbookBox.getDataView();
// Получим массив представлений визуализаторов
views = book.getViews();
// Получим длину массива
console.debug("Длина массива:" + views.length);

В результате выполнения примера будет получен массив представлений визуализаторов.
 В консоли браузера будет выведено сообщение с длиной массива.


См. также:


[WbkDataView](WbkDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
