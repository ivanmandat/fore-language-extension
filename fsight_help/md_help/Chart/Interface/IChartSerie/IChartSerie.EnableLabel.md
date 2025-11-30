# IChartSerie.EnableLabel

IChartSerie.EnableLabel
-


# IChartSerie.EnableLabel


## Синтаксис


EnableLabel(Index: Integer; Value: Boolean);


## Параметры


Index. Номер подписи данных
 ряда. Нумерация подписей данных ряда начинается с нуля;


Value. Параметр отображения
 подписи данных.


## Описание


Метод EnableLabel определяет
 отображение подписей данных ряда данных.


## Пример


В рассматриваемом примере предполагается, что существует объект Serie типа IChartSerie,
	а также все подписи данных ряда отображены.


	Sub SetLabel;

	Var

	    Serie: IChartSerie;

	Begin

	    Serie.EnableLabel(0,False);

	End Sub SetLabel;


После выполнения примера первая подпись данных ряда данных на графике
 не будет отображаться.


См. также:


[IChartSerie](IChartSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
