# UiChart.OnGetDataValue

UiChart.OnGetDataValue
-


# UiChart.OnGetDataValue


## Синтаксис


Sub OnGetDataValue(Sender:
 Object; Args: [IUiChartGetDataValueEventArgs](../../Interface/IUiChartGetDataValueEventArgs/IUiChartGetDataValueEventArgs_.htm));


Begin


//набор операторов


End Sub
 OnGetDataValue;


## Параметры


Sender - параметр, возвращающий
 компонент, сгенерировавший событие.


Args - параметр, позволяющий
 определить параметры события.


## Описание


Событие OnGetDataValue используется
 для построения графика.


Примечание.
 Событие срабатывает, только если [количество
 рядов графика](../../Interface/IUiChart/IUiChart.SerieCount.htm) меньше или равно 99.


## Пример


	Sub UiChartOnGetDataValue(Sender: Object; Args: IUiChartGetDataValueEventArgs);

	Begin

	    Args.Result := True;

	    Args.Value := Args.PointIndex + Args.SerieIndex;

	End Sub UiChartOnGetDataValue;


После выполнения примера будет построен график, состоящий из прямых
 линий, количество и длина которых зависит от заданного количества рядов
 и точек на графике.


См. также:


[UiChart](UiChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
