# WbkPropertyBarView.getGaugeMaster

WbkPropertyBarView.getGaugeMaster
-


# WbkPropertyBarView.getGaugeMaster


## Синтаксис


getGaugeMaster(gaugeView: [PP.Exp.Ui.GaugeBox](dhtmlExpress.chm::/Classes/Express/GaugeBox/GaugeBox.htm));


## Параметры


gaugeView. Компонент для отображения
 спидометра.


## Описание


Метод getGaugeMaster возвращает
 мастер для настройки спидометра.


## Комментарии


Метод возвращает объект типа [PP.Ui.GaugeMaster](dhtmlGauge.chm::/Classes/Speedometer/GaugeMaster/GaugeMaster.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), так же необходимо отображение всех
 представлений рабочей книги. Получим мастер для настройки спидометра и
 отобразим его:


// Получим панель свойств рабочей книги
propertyBarView = workbookBox.getPropertyBarView();
// Скроем все мастера
propertyBarView.hideAllMasters();
// Получим отображение данных рабочей книги
book = workbookBox.getDataView();
// Получим отображение спидометра
gauge = book.getGaugeView();
// Определим переменную мастера для настройки спидометра
gaugeMaster = propertyBarView.getGaugeMaster(gauge);
// Отобразим мастер спидометра
gaugeMaster.show();

В результате выполнения примера будет получен мастер для настройки спидометра
 и отображен в боковой панели рабочей книги.


См. также:


[WbkPropertyBarView](WbkPropertyBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
