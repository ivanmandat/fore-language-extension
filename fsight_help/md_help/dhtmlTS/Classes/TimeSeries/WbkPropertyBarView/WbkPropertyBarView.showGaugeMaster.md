# WbkPropertyBarView.showGaugeMaster

WbkPropertyBarView.showGaugeMaster
-


# WbkPropertyBarView.showGaugeMaster


## Синтаксис


showGaugeMaster();


## Описание


Метод showGaugeMaster отображает
 мастер для настройки спидометра.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), так же необходимо отображение всех
 представлений рабочей книги. Отобразим мастер для настройки спидометра:


// Получим панель свойств рабочей книги
propertyBarView = workbookBox.getPropertyBarView();
// Скроем все мастера
propertyBarView.hideAllMasters();
// Отобразим мастер для настройки спидометра
propertyBarView.showGaugeMaster();

В результате выполнения примера в боковой панели рабочей книги будет
 отображен мастер для настройки спидометра.


См. также:


[WbkPropertyBarView](WbkPropertyBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
