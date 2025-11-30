# IChartSerie.CustomPaletteIndex

IChartSerie.CustomPaletteIndex
-


# IChartSerie.CustomPaletteIndex


## Синтаксис


		CustomPaletteIndex: Integer;


## Описание


Свойство CustomPaletteIndex
 определяет индекс цвета ряда данных в стандартной палитре.


## Комментарии


Свойство актуально, если [IChartSerie.ColorIsDefault](IChartSerie.ColorIsDefault.htm) = True.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с идентификатором «Button1», компонент ChartBox с идентификатором
 «ChartBox1» и компонент UiErAnalyzer с идентификатором «UiErAnalyzer1».
 Для компонента «ChartBox1» укажите источник данных «UiErAnalyzer1».


Пример является обработчиком события OnClick для компонента «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Chart: IChart;

    Serie: IChartSerie;

    i: Integer;

Begin

    Chart := ChartBox1.Chart;

    For i := 0 To Chart.Series.Count-1 Do

        Serie := Chart.Series.Item(i);

        Serie.Is3DBorder := True;

    End For;

    Serie.ColorIsDefault := True;

    Serie.CustomPaletteIndex := 1;

End Sub Button1OnClick;


При нажатии на кнопку для рядов данных будут применены следующие настройки:


	- будет использоваться 3D-стиль границы всех рядов


	- будут использоваться цвета из стандартной палитры;


	- сменится заливка для всех рядов данных.


См. также:


[IChartSerie](IChartSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
