# IChartCorridor.GradientFill

IChartCorridor.GradientFill
-


# IChartCorridor.GradientFill


## Синтаксис


GradientFill: Boolean;


## Описание


Свойство GradientFill определяет
 тип заливки коридора диаграммы. Если значение данного свойства True,
 то заливка коридора градиентная, при значении False
 - монотонная.


## Пример


В рассматриваемом примере предполагается, что существует объект Corridor типа IChartCorridor.


	Sub GradientFill;

	Var

	    Corridor: IChartCorridor;

	Begin

	    Corridor.GradientFill := True;

	End Sub GradientFill;


После выполнения примера тип заливки коридора диаграммы будет изменен
 на градиентный, например:


![](IChartCorridor.GradientFill.gif)


См. также:


[IChartCorridor](IChartCorridor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
