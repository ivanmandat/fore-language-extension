# IChartSelectedSeries.LinePen

IChartSelectedSeries.LinePen
-


# IChartSelectedSeries.LinePen


## Синтаксис


LinePen: [IGxPen](ModDrawing.chm::/Interface/IGxPen/IGxPen.htm);


## Описание


Свойство LinePen определяет
 параметры линии выделенных рядов данных диаграммы. Изменения линии ряда
 отображаются только для следующих типов диаграмм: линейной, лепестковой,точечной,
 биржевой и смешанной.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1»,
 компонентов ChartBox и UiChart,
 являющегося источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);


Var

    SelectedSeries: IChartSelectedSeries;

    pen: IGxPen;

Begin

    SelectedSeries:= UiChart1.Chart.SelectedSeries;

    SelectedSeries.LinePen:= New GxPen.CreateSolid(New GxColor.CreateARGB(255, 0, 0, 255), 1.00);

    SelectedSeries.SelectAll(True, True);

End Sub Button1OnClick;


После выполнения примера линии выделенных рядов данных будут отображаться
 синим цветом толщиной 1 мм.


См. также:


[ChartSelectedSeries](IChartSelectedSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
