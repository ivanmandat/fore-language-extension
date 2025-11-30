# IChartShadow.Color

IChartShadow.Color
-


# IChartShadow.Color


## Синтаксис


Color: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство Color определяет цвет
 тени.


## Пример


В рассматриваемом примере предполагается, что существует объект Serie типа IChartSerie.


	Sub Shad;

	Var

	    Serie: IChartSerie;

	Begin

	    Serie.Shadow.Color := GxColor.FromName("Blue");

	End Sub Shad;


После выполнения примера у ряда данных на графике появится тень синего
 цвета.


См. также:


[IChartShadow](IChartShadow.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
