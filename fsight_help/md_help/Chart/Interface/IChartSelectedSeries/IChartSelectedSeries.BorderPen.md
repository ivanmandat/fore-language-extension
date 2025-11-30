# IChartSelectedSeries.BorderPen

IChartSelectedSeries.BorderPen
-


# IChartSelectedSeries.BorderPen


## Синтаксис


BorderPen: [IGxPen](ModDrawing.chm::/Interface/IGxPen/IGxPen.htm);


## Описание


Свойство BordenPen определяет параметры линии границы ряда данных.


## Комментарии


Свойство актуально для диаграмм следующих типов: с областями, гистограммы, круговой, смешанной и для частных случаев биржевой.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox и UiChart, являющегося источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

   SelectedSeries: IChartSelectedSeries;

   chartPen: IGxPen;

Begin

    SelectedSeries:= UiChart1.Chart.SelectedSeries;

    SelectedSeries.Add (2);

    chartPen := New GxPen.CreateSolid(GxColor.FromName("Green"), 1);

    SelectedSeries.BorderPen := chartPen;

End Sub Button1OnClick;


После нажатия кнопки «Button1» границы ряда данных будут выделены зеленой линией толщиной 1 миллиметр .


См. также:


[ChartSelectedSeries](IChartSelectedSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
