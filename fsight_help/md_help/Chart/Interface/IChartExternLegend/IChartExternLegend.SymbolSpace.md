# IChartExternLegend.SymbolSpace

IChartExternLegend.SymbolSpace
-


# IChartExternLegend.SymbolSpace


## Синтаксис


SymbolSpace: Double;


## Описание


Свойство SymbolSpace задаёт расстояние между значком и текстом для элементов легенды диаграмм.


## Комментарии


Значение задается в миллиметрах. По умолчанию значение SymbolSpace равно 2 миллиметра.


Для использования свойства SymbolSpace установите свойству [SymbolSpaceAuto](IChartExternLegend.SymbolSpaceAuto.htm) значение False.


## Пример


Для выполнения примера предполагается наличие регламентного отчёта, на листе которого расположена диаграмма и внешняя легенда. К отчету добавлен модуль, из которого с помощью гиперссылки вызывается процедура UserProc. В инспекторе сборок модуля должны быть указаны ссылки на системные сборки Chart, Report, Tab.


			Sub UserProc;

Var

    Chart: IChartExternLegend;

Begin

    Chart := (PrxReport.ActiveReport.ActiveSheet As IPrxTable).TabSheet.Objects.Item(1) As IChartExternLegend;

    Chart.SymbolSpaceIntervalAuto := False;

    Chart.SymbolSpaceInterval := 5;

End Sub UserProc;


После выполнения примера расстояние между значком и текстом элементов внешней легенды изменится на 5 миллиметров.


См. также:


[IChartExternLegend](IChartExternLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
