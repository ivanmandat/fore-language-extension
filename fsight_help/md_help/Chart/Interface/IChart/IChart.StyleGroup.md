# IChart.StyleGroup

IChart.StyleGroup
-


# IChart.StyleGroup


## Синтаксис


StyleGroup: [IChartStyleAbsoluteGroup](../IChartStyleAbsoluteGroup/IChartStyleAbsoluteGroup.htm);


## Описание


Свойство StyleGroup определяет
 параметры отображения списка групп рядов.


## Комментарии


Свойство актуально для использования, если для диаграммы установлен
 тип шкалы «Смешанный» ([IChart.Style](IChart.Style.htm)).


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub MakeA;

	Var

	    Chart : IChart;

	Begin

	    Chart.StyleGroup.MakeAbsolute;

	End Sub MakeA;


После выполнения примера на диаграмме все ряды будут расположены в отдельных
 группах.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
