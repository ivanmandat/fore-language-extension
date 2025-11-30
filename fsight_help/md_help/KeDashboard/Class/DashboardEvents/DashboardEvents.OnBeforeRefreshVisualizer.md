# DashboardEvents.OnBeforeRefreshVisualizer

DashboardEvents.OnBeforeRefreshVisualizer
-


# DashboardEvents.OnBeforeRefreshVisualizer


## Синтаксис


OnBeforeRefreshVisualizer(EaxObject: [IDashboardVisualizer](../../Interface/IDashboardVisualizer/IDashboardVisualizer.htm);
 Var Cancel: Boolean);


## Параметры


EaxObject. Визуализатор, для
 которого генерируется событие.


Cancel. Признак отмены обновления
 содержимого визуализатора.


## Описание


Метод OnBeforeRefreshVisualizer
 реализует событие, наступающее перед обновлением визуализатора информационной
 панели.


## Комментарии


Если в параметры было установлено значение True,
 то обновление содержимого визуализатора будет отменено.


## Пример


Использование метода приведено в примере для [DashboardEvents.OnBeforeOpenDashboard](DashboardEvents.OnBeforeOpenDashboard.htm).


См. также:


[DashboardEvents](DashboardEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
