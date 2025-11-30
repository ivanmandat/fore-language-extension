# IChartLabel.HotspotPositionCoef

IChartLabel.HotspotPositionCoef
-


# IChartLabel.HotspotPositionCoef


## Синтаксис


HotspotPositionCoef: Double;


## Описание


Свойство HotspotPositionCoef
 определяет положение подписи данных относительно столбика или сектора
 диаграммы. Допустимые значения находятся в диапазоне [0..1]. По умолчанию
 принимается значение 0,5.


## Пример


В рассматриваемом примере предполагается существование объекта Serie типа IChartSerie
 и для данного ряда должны быть отражены подписи данных . В случае необходимости,
 отображение подписей данных ряда данных может быть реализовано посредством
 выполнения команды: «Serie.LabelsEnabled := True;»


	Sub HotspotPosition;

	Var

	    Serie : IChartSerie;

	Begin

	    Serie.Label(3).HotspotPositionCoef := 1;

	End Sub HotspotPosition;


После выполнения примера заданная подпись данных (нумерация подписей
 данных начинается с нуля) будет расположена на краю столбика (радиуса).


См. также:


[IChartLabel](IChartLabel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
