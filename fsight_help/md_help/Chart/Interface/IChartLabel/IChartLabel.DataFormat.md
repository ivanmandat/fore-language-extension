# IChartLabel.DataFormat

IChartLabel.DataFormat
-


# IChartLabel.DataFormat


## Синтаксис


DataFormat: String;


## Описание


Свойство DataFormat определяет
 формат отображения текста в [подписи
 данных](UiDiagrams.chm::/Property_diagramm/UiDiagrams_PropertyDiagramm_Label.htm).


## Комментарии


Для формирования значения можно использовать переменные, текст или подстановки,
 представленные в таблице.


		 Значение
		 Описание


		 %Autovalue
		 Автоматический формат значения (установлен по умолчанию).


		 %Value
		 Значение точки.


		 %YValue
		 Значение точки по оси Y.


		 %XValue
		 Значение точки по оси X.


		 %Part
		 Значение с накоплением.


		 %Percent
		 Доли в процентах - это отношение значения точки ряда к сумме
		 значений этой же точки всех рядов, представленное с процентах.


		 %PercentPart
		 Доли в процентах с накоплением.


		 %PercentHundredth
		 Доли - это отношение значения точки ряда к сумме значений этой
		 же точки всех рядов.


		 %PercentPartHundredth
		 Доли с накоплением.


		 %Data
		 [Пользовательский](../../Class/UiChart/UiChart.OnGetLabelText.htm)
		 формат данных.


		 %SerieName
		 Имя ряда.


		 %SerieNo
		 Номер ряда.


		 %PointName
		 Имя точки.


		 %PointNo
		 Номер точки.


## Пример


Для выполнения примера в репозитории предполагается наличие формы с
 компонентами UiChart с наименованием «UiChart1», ChartBox и Button
 с идентификатором «Button1». UiChart является источником для ChartBox.
 Для «UiChart1» задайте значения PointCount - 3, SerieCount - 1.


Добавьте ссылки на системные сборки: Chart, ExtCtrls, Forms, Metabase, Report,
 Tab.


Пример является обработчиком события OnClick для компонента «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    i, j: Integer;

    chart: IChart;

    Label: IChartLabel;

    text: string;

Begin

    chart := UiChart1.Chart;

    text := " More: ";

    chart.Series.DisplayLabels := True;

    chart.UseSignatureHint := True;

    For j := 0 To chart.Series.Count - 1 Do

        For i := 0 To chart.PointsCount - 1 Do

            Label := chart.Series.Item(j).SeriePoint(i).Label;

            Label.DataFormat := "%Value" + text + "Serie: " + (j + 1).ToString + " Point: " + (i + 1).ToString;

            chart.HintStringFormat := "%Value" + text + "Serie: " + (j + 1).ToString + " Point: " + (i + 1).ToString;

        End For;

    End For;

End Sub Button1OnClick;


Sub UiChart1OnGetDataValue(Sender: Object; Args: IUiChartGetDataValueEventArgs);

Begin

    Args.Result := True;

    Args.Value := Math.RandBetween(10, 40);

End Sub UiChart1OnGetDataValue;


В результате выполнения примера на подписях данных всех рядов будет
 отображено значение ряда в точке, далее текст «More: », текст «Serie: »,
 индекс ряда, текст « Point: » и индекс точки. То же будет отображаться
 во всплывающих подсказках.


Таким образом в подписи данных можно дописывать свои значения, причем
 для каждого ряда и определенной точке ряда значение может отличаться.


См. также:


[IChartLabel](IChartLabel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
