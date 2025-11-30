# IChartLabel.Rectangle

IChartLabel.Rectangle
-


# IChartLabel.Rectangle


## Синтаксис


Rectangle: [IGxRectF](ModDrawing.chm::/Interface/IGxRectF/IGxRectF.htm);


## Описание


Свойство Rectangle возвращает
 координаты и размер подписи данных диаграммы.


## Пример


Для выполнения примера предполагается наличие регламентного отчёта с
 идентификатором «Rep_1», на листе которого расположена диаграмма. В инспекторе
 сборок модуля должны быть указаны ссылки на системные сборки Chart, Report,
 Tab, Drawing, Metabase.


			Sub macro;

Var

    mb:Imetabase;

    report:IPrxReport;

    chart: IChart;

    series: IChartSeries;

    label: IChartLabel;

    Rect: IGxRectF;

Begin

    mb:= MetabaseClass.Active;

    report:= mb.ItemById("Rep_1").Open(Null) As IPrxReport;

    chart := (report.ActiveSheet As IPrxTable).TabSheet.Objects.Item(0).Extension As IChart;

    series := Chart.Series;

    label := series.Item(0).Label(0);

    Rect := label.Rectangle;

    Debug.WriteLine("Высота:" + Rect.Height.ToString);

    Debug.WriteLine("Ширина:" + Rect.Width.ToString);

    Debug.WriteLine("Левая граница:" + Rect.Left.ToString);

    Debug.WriteLine("Верхняя граница:" + Rect.Top.ToString);

End Sub macro;


После выполнения примера в консоль будут выведены координаты и размер
 для первой подписи данных первого ряда:


Высота:4.3054685592651367

Ширина:7.0443191528320313

Левая граница:21.17462158203125

Верхняя граница:28.872674942016602


См. также:


[IChartLabel](IChartLabel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
