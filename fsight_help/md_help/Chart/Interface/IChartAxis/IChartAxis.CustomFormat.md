# IChartAxis.CustomFormat

IChartAxis.CustomFormat
-


# IChartAxis.CustomFormat


## Синтаксис


CustomFormat: String;


## Описание


Свойство CustomFormat позволяет
 задавать пользовательский формат числа для осей диаграммы.


## Пример


В рассматриваемом примере предполагается, что существует объект ChartAxis типа IChartAxis.


	Sub CustomFormat;

	Var

	    ChartAxis : IChartAxis;

	Begin

	    ChartAxis.CustomFormat := "0,00";

	End Sub CustomFormat;


После выполнения примера значения по оси будут представлены в числовом
 формате с двумя десятичными знаками.


См. также:


[IChartAxis](IChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
