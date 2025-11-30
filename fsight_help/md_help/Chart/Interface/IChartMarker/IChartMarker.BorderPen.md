# IChartMarker.BorderPen

IChartMarker.BorderPen
-


# IChartMarker.BorderPen


## Синтаксис


BordenPen: [IGxPen](ModDrawing.chm::/Interface/IGxPen/IGxPen.htm);


## Описание


Свойство BordenPen определяет
 обводку маркера.


## Пример


В рассматриваемом примере предполагается, что существует объект Marker типа IChartMarker.


	Sub SetPen;

	Var

	    BPen: IGxPen;

	    Marker: IChartMarker;

	Begin

	    BPen := New GxPen.CreateSolid(New GxColor.CreateARGB(255,0,0,255),1.02)

	    Marker.BorderPen := BPen;

	End Sub SetPen;


После выполнения примера у маркера на графике появится синяя обводка.


См. также:


[IChartMarker](IChartMarker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
