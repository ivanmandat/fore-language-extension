# IChartSerie.Name

IChartSerie.Name
-


# IChartSerie.Name


## Синтаксис


Name: String;


## Описание


Свойство Name возвращает имя
 ряда. Данное свойство доступно только для чтения.


## Пример


В рассматриваемом примере предполагается, что существует объект Serie типа IChartSerie.


	Sub Name;

	Var

	    Serie : IChartSerie;

	    Appellation : String;

	Begin

	    Appellation := Serie.Name As String;

	End Sub Name;


После выполнения примера в переменной Appellation
 будет храниться имя ряда.


См. также:


[IChartSerie](IChartSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
