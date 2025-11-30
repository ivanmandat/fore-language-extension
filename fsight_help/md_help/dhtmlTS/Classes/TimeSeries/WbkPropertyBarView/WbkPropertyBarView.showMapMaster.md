# WbkPropertyBarView.showMapMaster

WbkPropertyBarView.showMapMaster
-


# WbkPropertyBarView.showMapMaster


## Синтаксис


showMapMaster();


## Описание


Метод showMapMaster отображает
 мастер для настройки карты.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), так же необходимо отображение всех
 представлений рабочей книги. Отобразим мастер для настройки карты:


// Получим панель свойств рабочей книги
propertyBarView = workbookBox.getPropertyBarView();
// Скроем все мастера
propertyBarView.hideAllMasters();
// Отобразим мастер для настройки карты
propertyBarView.showMapMaster();

В результате выполнения примера в боковой панели рабочей книги будет
 отображен мастер для настройки карты.


См. также:


[WbkPropertyBarView](WbkPropertyBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
