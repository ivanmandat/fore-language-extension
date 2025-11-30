# IDashboardUserEvents.EventOnBeforeRefreshVisualizer

IDashboardUserEvents.EventOnBeforeRefreshVisualizer
-


# IDashboardUserEvents.EventOnBeforeRefreshVisualizer


## Синтаксис


EventOnBeforeRefreshVisualizer(Args: [IDashboardVisualizerCancelEventArgs](../IDashboardVisualizerCancelEventArgs/IDashboardVisualizerCancelEventArgs.htm));


## Параметры


Args.
 Аргумент события.


## Описание


Метод EventOnBeforeRefreshVisualizer
 реализует событие, наступающее перед обновлением визуализатора информационной
 панели.


## Комментарии


Метод должен быть переопределён в пользовательском классе. Класс-обработчик
 событий для информационной панели задаётся в свойстве [IDashboard.EventsClass](../IDashboard/IDashboard.EventsClass.htm).


## Пример


Использование метода приведено в примере для [IDashboardUserEvents.EventOnBeforeOpenDashboard](IDashboardUserEvents.EventOnBeforeOpenDashboard.htm).


См. также:


[IDashboardUserEvents](IDashboardUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
