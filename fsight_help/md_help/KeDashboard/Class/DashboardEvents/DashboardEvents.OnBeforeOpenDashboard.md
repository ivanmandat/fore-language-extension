# DashboardEvents.OnBeforeOpenDashboard

DashboardEvents.OnBeforeOpenDashboard
-


# DashboardEvents.OnBeforeOpenDashboard


## Синтаксис


OnBeforeOpenDashboard(Dashboard: [IDashboard](../../Interface/IDashboard/idashboard.htm));


## Параметры


Dashboard. Информационная панель,
 для которой генерируется событие.


## Описание


Метод OnBeforeOpenDashboard
 реализует событие, наступающее при открытии информационной панели.


## Пример


Указанный класс может использоваться для обработки событий информационной
 панели.


Добавьте ссылки на системные сборки: Dashboard.


	Class CUserEvents: DashboardEvents

	    Sub OnBeforeOpenDashboard(Dashboard: IDashboard);

	    Begin

	        //...

	        // Обработка открытия информационной панели

	        //...

	    End Sub OnBeforeOpenDashboard;


	    Sub OnBeforeRefreshVisualizer(EaxObject: IDashboardVisualizer; Var Cancel: Boolean);

	    Begin

	        //...

	        // Обработка начала обновления визуализатора

	        //...

	    End Sub OnBeforeRefreshVisualizer;


	    Sub OnAfterRefreshVisualizer(Visualizer: IDashboardVisualizer);

	    Begin

	        //...

	        // Обработка окончания обновления визуализатора

	        //...

	    End Sub OnAfterRefreshVisualizer;

	End Class CUserEvents;


См. также:


[DashboardEvents](DashboardEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
