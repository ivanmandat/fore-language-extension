# IPrxChart.DoSerieClick

IPrxChart.DoSerieClick
-


# IPrxChart.DoSerieClick


## Синтаксис


DoSerieClick(SerieIndex: Integer; [PointIndex: Integer
 = -1]);


## Параметры


SerieIndex. Индекс
 ряда.


PointIndex. Необязательный
 параметр, определяющий точку ряда.


## Описание


Метод DoSerieClick генерирует
 событие щелчка кнопки мыши на ряде диаграммы.


## Комментарии


Индекс ряда и точка ряда, для которых генерируется событие, передаются
 посредством параметров SerieIndex
 и PointIndex соответственно.


## Пример


Данный пример является макросом для регламентного отчета. К регламентному
 отчету должен быть подключен модуль с идентификатором «MOD_MACRO», в котором
 содержится данная процедура. Также в модуле должен содержаться макрос
 «OnChartClick», который используется для обработки события щелчка мыши
 на ряде диаграммы.


			Sub SerieClick;

Var

    Report: IPrxReport;

    Tab: ITabSheet;

    Chart: IPrxChart;

Begin

    Report := PrxReport.ActiveReport;

    Tab := (Report.ActiveSheet As IPrxTable).TabSheet;

    Chart := Tab.Objects.Item(0).Extension As IPrxChart;

    Chart.SerieAction := "MOD_MACRO.OnChartClick";

    Chart.DoSerieClick(0, 3);

End Sub SerieClick;


При выполнении макроса для указанной точки и ряда диаграммы будет сгенерировано
 событие щелчка мыши. Данное событие будет обрабатываться макросом «OnChartClick».


См. также:


[IPrxChart](IPrxChart.htm) | [IPrxAssemblies](../IPrxAssemblies/IPrxAssemblies.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
