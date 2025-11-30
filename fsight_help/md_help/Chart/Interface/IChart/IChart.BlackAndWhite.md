# IChart.MakeBlackAndWhite

IChart.MakeBlackAndWhite
-


# IChart.MakeBlackAndWhite


## Синтаксис


MakeBlackAndWhite;


## Описание


Метод MakeBlackAndWhite позволяет
 отображать диаграмму в черно-белом формате.


## Пример


Для выполнения примера необходимо добавить ссылки на системные сборки
 «Chart», «Report»
 и «Tab». Данный модуль подключается
 к регламентному отчету, на листе которого расположена только диаграмма.
 Процедура ChangeBlackAndWhite
 назначается обработчиком щелчка по гиперссылке в ячейке отчета.


			Sub ChangeBlackAndWhite;

Var

    Rep: IPrxReport;

    TabS: ITabSheet;

    pChart: IPrxChart;

    Chart: IChart;

Begin

    Rep := PrxReport.ActiveReport;

    TabS := (Rep.ActiveSheet As IPrxTable).TabSheet;

    pChart := TabS.Objects.Item(0).Extension As IPrxChart;

    Chart := pChart As IChart;

    Chart.MakeBlackAndWhite;

    TabS.Recalc;

End Sub ChangeBlackAndWhite;


После щелчка по гиперссылке, выполняющей процедуру ChangeBlackAndWhite,
 диаграмма будет отображена в черно-белом формате.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
