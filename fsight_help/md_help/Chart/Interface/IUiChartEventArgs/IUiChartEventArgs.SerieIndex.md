# IUiChartEventArgs.SerieIndex

IUiChartEventArgs.SerieIndex
-


# IUiChartEventArgs.SerieIndex


## Синтаксис


SerieIndex: Integer;


## Описание


Свойство SerieIndex возвращает
 номер ряда диаграммы.


## Пример


Рассмотрим использование данного свойства в событии UiChartOnGetDataValue.


	Sub UiChartOnGetDataValue(Sender: Object; Args: IUiChartGetDataValueEventArgs);

	Begin

	    Args.Result := True;

	    Args.Value := Args.PointIndex + Args.SerieIndex;

	End Sub UiChartOnGetDataValue;


После выполнения примера будет построен график, состоящий из прямых
 линий, количество и длина которых зависит от заданного количества рядов
 и точек на графике.


См. также:


[IUiChartEventArgs](IUiChartEventArgs.htm)
 | [UiChart.OnGetDataValue](../../Class/UiChart/UiChart.OnGetDataValue.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
