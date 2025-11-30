# IChartLabel.Hotspot

IChartLabel.Hotspot
-


# IChartLabel.Hotspot


## Синтаксис


Hotspot: [IGxPointF](ModDrawing.chm::/Interface/IGxPointF/IGxPointF.htm);


## Описание


Свойство Hotspot определяет
 положение подписи данных, то есть отвечает за смещение подписи по оси
 X и Y.


## Комментарии


Для круговой диаграммы свойство отвечает за смещение подписи от/к центру
 диаграммы и за поворот положения подписи по/против часовой стрелки.


## Пример


В рассматриваемом примере предполагается существование объекта Serie типа IChartSerie.


	Sub Hotspot;

	Var

	    Serie : IChartSerie;

	Begin

	    Serie.Label(3).Visible := True;

	    Serie.Label(3).HotSpot := New GxPointF.Create(10,5);

	End Sub Hotspot;


После выполнения примера 4 подпись данных (нумерация подписей данных
 начинается с нуля) будет смещена относительно ряда на заданные расстояния
 по оси X и Y.


См. также:


[IChartLabel](IChartLabel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
