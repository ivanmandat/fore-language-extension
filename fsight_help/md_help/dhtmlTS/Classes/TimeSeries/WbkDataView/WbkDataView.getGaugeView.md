# WbkDataView.getGaugeView

WbkDataView.getGaugeView
-


# WbkDataView.getGaugeView


## Синтаксис


getGaugeView();


## Описание


Метод getGaugeView возвращает
 контейнер для спидометра.


## Комментарии


Возвращает экземпляр класса [PP.Exp.Ui.GaugeBox](dhtmlExpress.chm::/Classes/Express/GaugeBox/GaugeBox.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../WorkbookBox/WorkbookBox.htm) c наименованием
 «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)») и расположенным в нем спидометре.
 Получим контейнер для спидометра:


// Получим отображение данных рабочей книги
book = workbookBox.getDataView();
// Получим контейнер для спидометра
gauge = book.getGaugeView();
// Получим идентификатор контейнера
gauge.getId();

В результате выполнения примера будет получен контейнер для спидометра.
 В консоли браузера будет выведено сообщение с идентификатором контейнера.


См. также:


[WbkDataView](WbkDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
