# IChartMarker.Symbol

IChartMarker.Symbol
-


# IChartMarker.Symbol


## Синтаксис


Symbol: String;


## Описание


Свойство Simbol позволяет задать
 маркер в виде символа.


## Комментарии


После задания символа необходимо свойство MarkerType
 установить в Symbol (14) .


## Пример


В рассматриваемом примере предполагается, что существует объект Marker типа IChartMarker.


	Sub Sym;

	Var

	    Marker:IChartMarker;

	Begin

	    Marker.Symbol:= 'Y';

	    Marker.MarkerType := ChartMarkerType.Symbol;

	End Sub Sym;


После выполнения примера маркеры на графике будут отражаться в виде
 символа «Y».


См. также:


[IChartMarker](IChartMarker.htm) | [IChartMarker.MarkerType](IChartMarker.MarkerType.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
