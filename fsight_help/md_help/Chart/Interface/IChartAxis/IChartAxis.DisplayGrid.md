# IChartAxis.DisplayGrid

IChartAxis.DisplayGrid
-


# IChartAxis.DisplayGrid


## Синтаксис


DisplayGrid: Boolean;


## Описание


Свойство DisplayGrid управляет видимостью сетки или дополнительных делений в зависимости от выбранного режима.


## Комментарии


Свойство добавлено взамен IChart.DisplayGrid, которое работает следующим образом: при установке данного свойства устанавливаются свойства IChartAxis.DisplayGrid для всех существующих осей, на чтение – возвращается True, если хотя бы одно IChartAxis.DisplayGrid установлено в True.


Для совместимости со свойством IChart.DisplayGrid при загрузке старых диаграмм значение из IChart.DisplayGrid необходимо загружать в IChartAxis.DisplayGrid для всех существующих осей, при сохранении использовать новые свойства IChartAxis.DisplayGrid.


## Пример использования


![](../ichart/IChart_DisplayGrid.gif)


См. также:


[IChartAxis](IChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
