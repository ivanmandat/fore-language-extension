# IChart.Type

IChart.Type
-


# IChart.Type


## Синтаксис


Type: [ChartType](../../Enums/ChartType.htm);


## Описание


Свойство Type определяет тип
 диаграммы.


## Комментарии


По умолчанию строится столбиковая диаграмма.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.
 Для выполнения примера добавьте ссылку на системную сборку «Chart».


	Sub UserProc;

	Var

	    Chart: IChart;

	Begin

	    Chart.Type := ChartType.Circles;

	End Sub UserProc;


После выполнения примера диаграмма будет круговой.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
