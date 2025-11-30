# IChartLabel.BorderPen

IChartLabel.BorderPen
-


# IChartLabel.BorderPen


## Синтаксис


BorderPen: [IGxPen](ModDrawing.chm::/Interface/IGxPen/IGxPen.htm);


## Описание


Свойство BorderPen определяет
 параметры границы подписи данных.


## Пример


Для выполнения примера предполагается наличие регламентного отчёта,
 на листе которого расположена диаграмма. К отчету добавлен модуль, из
 которого с помощью гиперссылки вызывается процедура UserProc. В инспекторе
 сборок модуля должны быть указаны ссылки на системные сборки Chart, Report,
 Tab, Drawing.


	Sub UserProc;

	Var

	  Chart: IChart;

	  BPen: IGxPen;

	Begin

	   Chart := (PrxReport.ActiveReport.ActiveSheet As IPrxTable).TabSheet.Objects.Item(0).Extension As IChart;

	   Chart.Series.DisplayLabels := True;

	   BPen := New GxPen.CreateSolid(New GxColor.CreateARGB(150,0,0,150),1.01);

	   Chart.Series.DefaultLabel.BorderPen := Bpen;

	End Sub UserProc;


После выполнения примера у подписей данных появится граница синего цвета.


См. также:


[IChartLabel](IChartLabel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
