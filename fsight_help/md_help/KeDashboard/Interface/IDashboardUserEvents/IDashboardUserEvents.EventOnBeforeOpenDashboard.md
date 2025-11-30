# IDashboardUserEvents.EventOnBeforeOpenDashboard

IDashboardUserEvents.EventOnBeforeOpenDashboard
-


# IDashboardUserEvents.EventOnBeforeOpenDashboard


## Синтаксис


EventOnBeforeOpenDashboard(Args: [IDashboardEventArgs](../IDashboardEventArgs/IDashboardEventArgs.htm));


## Параметры


Args. Аргумент события.


## Описание


Метод EventOnBeforeOpenDashboard
 реализует событие, наступающее при открытии информационной панели.


## Комментарии


Метод должен быть переопределён в пользовательском классе. Класс-обработчик
 событий для информационной панели задаётся в свойстве [IDashboard.EventsClass](../IDashboard/IDashboard.EventsClass.htm).


## Пример


Указанный класс может использоваться для обработки событий информационной
 панели.


Добавьте ссылки на системные сборки: Dashboard.


	Class CUserEvents1: Object, IDashboardUserEvents

	    Sub EventOnBeforeOpenDashboard(Args: IDashboardEventArgs);

	    Begin

	        //...

	        // Обработка открытия информационной панели

	        //...

	    End Sub EventOnBeforeOpenDashboard;


	    Sub EventOnBeforeRefreshVisualizer(Args: IDashboardVisualizerCancelEventArgs);

	    Begin

	        //...

	        // Обработка начала обновления визуализатора

	        //...

	    End Sub EventOnBeforeRefreshVisualizer;


	    Sub EventOnAfterRefreshVisualizer(Args: IDashboardVisualizerEventArgs);

	    Begin

	        //...

	        // Обработка окончания обновления визуализатора

	        //...

	    End Sub EventOnAfterRefreshVisualizer;

	End Class CUserEvents;


См. также:


[IDashboardUserEvents](IDashboardUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
