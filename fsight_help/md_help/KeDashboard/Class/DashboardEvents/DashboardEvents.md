# DashboardEvents

DashboardEvents
-


# DashboardEvents


Сборка: Dashboard;


## Описание


Класс DashboardEvents содержит
 методы, реализующие события информационной панели.


## Комментарии


Данный класс имеет идентичные методы для описания событий как и у интерфейса
 [IDashboardUserEvents](../../Interface/IDashboardUserEvents/IDashboardUserEvents.htm).
 При создании пользовательского класса следует в качестве родительского
 элемента выбирать класс DashboardEvents,
 так как это в дальнейшем избавит от проблем при появлении новых методов,
 реализующих события.


## Методы объекта класса


		 Имя свойства
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [OnAfterRefreshVisualizer](DashboardEvents.OnAfterRefreshVisualizer.htm)
		 Метод OnAfterRefreshVisualizer
		 реализует событие, наступающее после обновления визуализатора
		 информационной панели.


		 ![](../../Sub_Image.gif)
		 [OnBeforeOpenDashboard](DashboardEvents.OnBeforeOpenDashboard.htm)
		 Метод OnBeforeOpenDashboard
		 реализует событие, наступающее при открытии информационной панели.


		 ![](../../Sub_Image.gif)
		 [OnBeforeRefreshVisualizer](DashboardEvents.OnBeforeRefreshVisualizer.htm)
		 Метод OnBeforeRefreshVisualizer
		 реализует событие, наступающее перед обновлением визуализатора
		 информационной панели.


## Методы объекта класса, унаследованные от [IDashboardUserEvents](../../Interface/IDashboardUserEvents/IDashboardUserEvents.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [EventOnAfterRefreshVisualizer](../../Interface/IDashboardUserEvents/IDashboardUserEvents.EventOnAfterRefreshVisualizer.htm)
		 Метод EventOnAfterRefreshVisualizer
		 реализует событие, наступающее после обновления визуализатора
		 информационной панели.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeOpenDashboard](../../Interface/IDashboardUserEvents/IDashboardUserEvents.EventOnBeforeOpenDashboard.htm)
		 Метод EventOnBeforeOpenDashboard
		 реализует событие, наступающее при открытии информационной панели.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeRefreshVisualizer](../../Interface/IDashboardUserEvents/IDashboardUserEvents.EventOnBeforeRefreshVisualizer.htm)
		 Метод EventOnBeforeRefreshVisualizer
		 реализует событие, наступающее перед обновлением визуализатора
		 информационной панели.


См. также:


[Классы
 сборки Dashboard](../KeDashboard_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
