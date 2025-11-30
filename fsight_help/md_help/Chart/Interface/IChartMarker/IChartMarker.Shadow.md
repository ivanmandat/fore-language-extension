# IChartMarker.Shadow

IChartMarker.Shadow
-


# IChartMarker.Shadow


## Синтаксис


Shadow: [IChartShadow](../IChartShadow/IChartShadow.htm);


## Описание


Свойство Shadow определяет параметры
 тени у маркера.


## Пример


В рассматриваемом примере предполагается, что существует объект Marker типа IChartMarker.


	Sub Shad;

	Var

	    Clr : IGxColor;

	    Pnt : IGxPointF;

	    Marker : IChartMarker;

	Begin

	    Clr := New GxColor.CreateARGB(255,0,120, 255);

	    Pnt := New GxPointF.Create (1.00,2.00);

	    Marker.Shadow.Direction := Pnt;

	    Marker.Shadow.Color := Clr;

	End Sub Shad;


После выполнения примера тень у маркеров на графике примет голубой цвет
 и будет смещена на 1 пунк по оси X и на 2 пункта по оси Y.


См. также:


[IChartMarker](IChartMarker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
