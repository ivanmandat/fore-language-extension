# IUiChartGetDataValueEventArgs.Editable

IUiChartGetDataValueEventArgs.Editable
-


# IUiChartGetDataValueEventArgs.Editable


## Синтаксис


Editable: Boolean;


## Описание


Свойство Editable определяет,
 возможно ли редактирование значения ряда в данной точке. Если значение
 данного свойства False, то событие
 [UiChart.OnSetDataValue](../../Class/UiChart/UiChart.OnSetDataValue.htm)
 для данной точки ряда вызвано не будет.


## Пример


	Sub UiChartOnGetDataValue(Sender: Object; Args: IUiChartGetDataValueEventArgs);

	Begin

	    Args.Result := True;

	    Args.Value := Args.PointIndex + Args.SerieIndex;

	    If (Args.SerieIndex = 0) Then

	        Args.Editable := False;

	    End If;

	End Sub UiChartOnGetDataValue;


После выполнения примера будет построен график, состоящий из прямых
 линий, количество и длина которых зависит от заданного количества рядов
 и точек на графике. Точки первого ряда будут недоступны для редактирования.


См. также:


[IUiChartGetDataValueEventArgs](IUiChartGetDataValueEventArgs_.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
