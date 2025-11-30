# IChartCommonItem.Shadow

IChartCommonItem.Shadow
-


# IChartCommonItem.Shadow


## Синтаксис


Shadow: [IChartShadow](../IChartShadow/IChartShadow.htm);


## Описание


Свойство Shadow определяет параметры
 тени.


## Пример


В рассматриваемом примере предполагается, что существует объект ChartSerie типа IChartSerie.


	Sub Shadow;

	Var

	    ChartSerie : IChartSerie;

	    p : IGxPointF;

	Begin

	    p := New GxPointF.Create (1.00,2.00);

	    ChartSerie.DisplayShadow := True;

	    ChartSerie.Shadow.Color := GxColor.FromName("Red");

	    ChartSerie.Shadow.Direction := p ;

	End Sub Shadow;


После выполнения примера у ряда на диаграмме появится тень красного
 цвета с заданным смещением.


См. также:


[IChartCommonItem](IChartCommonItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
