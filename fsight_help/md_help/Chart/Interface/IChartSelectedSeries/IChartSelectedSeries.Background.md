# IChartSelectedSeries.Background

IChartSelectedSeries.Background
-


# IChartSelectedSeries.Background


## Синтаксис


Background: [IChartBackgroundInfo](../IChartBackgroundInfo/IChartBackgroundInfo.htm);


## Описание


Свойство Background определяет параметры заливки выделенной коллекции рядов данных.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонентов ChartBox и UiChart, являющегося источником данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

   SelectedSeries: IChartSelectedSeries;

   chartBI: IChartBackgroundInfo;

Begin

   SelectedSeries:= UiChart1.Chart.SelectedSeries;

   SelectedSeries.Add (2);

   chartBI :=SelectedSeries.Background;

   chartBI.Color := New GxColor.CreateRGB(245, 120, 255);

End Sub Button1OnClick;


После нажатия кнопки «Button1» цвет заливки выделенных рядов будет изменен на сиреневый.


См. также:


[ChartSelectedSeries](IChartSelectedSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
