# IChartMarker.FillBrush

IChartMarker.FillBrush
-


# IChartMarker.FillBrush


## Синтаксис


FillBrash: [IGxBrush](ModDrawing.chm::/Interface/IGxBrush/IGxBrush.htm);


## Описание


Свойство FillBrush определяет
 заливку маркера.


## Пример


В рассматриваемом примере предполагается, что существует объект Marker типа IChartMarker.


	Sub SetBrush;

	Var

	    Marker : IChartMarker;

	    b : IGxBrush;

	Begin

	    b := New GxSolidBrush.Create(New GxColor.CreateARGB(255,0,0,255));

	    Marker.FillBrush := b;

	End Sub SetBrush;


После выполнения примера заливка маркера на графике изменится на синий
 цвет.


См. также:


[IChartMarker](IChartMarker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
