# IChartLabel.Font

IChartLabel.Font
-


# IChartLabel.Font


## Синтаксис


Font: [IGxFont](ModDrawing.chm::/Interface/IGxFont/IGxFont.htm);


## Описание


Свойство Font определяет параметры
 шрифта текста подписи данных .


## Пример


Для выполнения примера предполагается наличие регламентного отчёта,
 на листе которого расположена диаграмма. К отчету добавлен модуль, из
 которого с помощью гиперссылки вызывается процедура UserProc. В инспекторе
 сборок модуля должны быть указаны ссылки на системные сборки Chart, Report,
 Tab, Drawing.


			Sub UserProc;

Var

    Chart: IChart;

    FontLabel: IGxFont;

    FCLabel: IGxColor;

Begin

    Chart := (PrxReport.ActiveReport.ActiveSheet As IPrxTable).TabSheet.Objects.Item(0).Extension As IChart;

    Chart.Series.DisplayLabels := True;

    FontLabel := New GxFont.Create("Arial Black", 15, 3 As GxFontStyle, 3 As GxUnit);

    FCLabel := New GxColor.CreateARGB(255,0,126,255);

    Chart.Series.DefaultLabel.Font := FontLabel;

    Chart.Series.DefaultLabel.FontColor := FCLabel;

End Sub UserProc;


После выполнения примера к тексту подписей данных будет применен шрифт
 «Arial Black», указанного стиля и размера.


См. также:


[IChartLabel](IChartLabel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
