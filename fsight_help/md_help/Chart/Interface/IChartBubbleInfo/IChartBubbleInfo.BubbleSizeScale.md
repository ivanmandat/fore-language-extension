# IChartBubbleInfo.BubbleSizeScale

IChartBubbleInfo.BubbleSizeScale
-


# IChartBubbleInfo.BubbleSizeScale


## Синтаксис


BubbleSizeScale: Double;


## Описание


Свойство BubbleSizeScale определяет
 масштаб отображения пузырьков.


## Комментарии


Диапазон допустимых значений [0, 3]. Значение по умолчанию - 1.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «Diagr», содержащим пузырьковую диаграмму.


Добавьте ссылки на системные сборки «Chart», «Metabase», «Report», «Tab».


			Sub UserProc;

Var

    mb: IMetabase;

    report: IprxReport;

    chart: IChart;

    Info: IChartBubbleInfo;

Begin

    mb := MetabaseClass.Active;

    report := Mb.ItemById("Diagr").Edit As IPrxReport;

    chart := (report.ActiveSheet As IPrxTable).TabSheet.Objects.Item(0).Extension As IChart;

    info := chart.BubbleInfo;

    info.BubbleSizeScale := 2;

    info.ShowNegativeBubbles := False;

    info.RepresentedBubbleSizeMeasure := BubbleSizeMeasure.Width;

    (report As IMetabaseObject).Save;

End Sub UserProc;


После выполнение примера для диаграммы будут заданы следующие свойства:
 масштаб пузырьков равен двум, пузырьки с отрицательным размером не рисуются,
 размер пузырька определяется шириной.


См. также:


[IChartBubbleInfo](IChartBubbleInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
