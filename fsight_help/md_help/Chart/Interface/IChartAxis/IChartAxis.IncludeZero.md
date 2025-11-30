# IChartAxis.IncludeZero

IChartAxis.IncludeZero
-


# IChartAxis.IncludeZero


## Синтаксис


IncludeZero: Boolean;


## Описание


Свойство IncludeZero определяет признак принудительного включения нуля на оси.


## Комментарии


Если значение данного свойства True, то на оси будет отображаться нуль, при значении False - нуль не отображается.


По умолчанию свойство имеет значение False.


Отображение нуля на оси Y доступно, если для оси Y:


-
[IChartAxis.Max](IChartAxis.Max.htm) и [IChartAxis.Min](IChartAxis.Min.htm) установлен фиксированный диапазон значений, включающий нуль. При этом минимальное значение намного больше нуля;


-
параметр [IChartAxis.AutoMin](IChartAxis.AutoMin.htm) в значении True.


См. также:


[IChartAxis](IChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
