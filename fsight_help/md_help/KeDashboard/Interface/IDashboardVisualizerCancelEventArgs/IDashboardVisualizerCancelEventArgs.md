# IDashboardVisualizerCancelEventArgs

IDashboardVisualizerCancelEventArgs
-


# IDashboardVisualizerCancelEventArgs


Сборка: Dashboard;


## Описание


Интерфейс IDashboardVisualizerCancelEventArgs
 содержит свойства аргумента события, наступающего перед обновлением визуализатора
 информационной панели.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [IDashboardVisualizerEventArgs](../IDashboardVisualizerEventArgs/IDashboardVisualizerEventArgs.htm)


           IDashboardVisualizerCancelEventArgs


## Комментарии


Данный аргумент используется при обработке события с помощью метода
 [IDashboardUserEvents.EventOnBeforeRefreshVisualizer](../IDashboardUserEvents/IDashboardUserEvents.EventOnBeforeRefreshVisualizer.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](IDashboardVisualizerCancelEventArgs.Cancel.htm)
		 Свойство Cancel определяет,
		 будет ли сгенерировано событие для визуализатора информационной
		 панели.


## Свойства, унаследованные от [IDashboardVisualizerEventArgs](../IDashboardVisualizerEventArgs/IDashboardVisualizerEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Visualizer](../IDashboardVisualizerEventArgs/IDashboardVisualizerEventArgs.Visualizer.htm)
		 Свойство Visualizer
		 возвращает визуализатор, для которого сгенерировано событие.


См. также:


[Интерфейсы
 сборки Dashboard](../KeDashboard_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
