# UiChart.OnSetDataValue

UiChart.OnSetDataValue
-


# UiChart.OnSetDataValue


## Синтаксис


Sub OnSetDataValue(Sender:
 Object; Args: [IUiChartSetDataValueEventArgs](../../Interface/IUiChartSetDataValueEventArgs/IUiChartSetDataValueEventArgs.htm));


Begin


//набор операторов


End Sub
 OnSetDataValue;


## Параметры


Sender - параметр, возвращающий
 компонент, сгенерировавший событие.


Args - параметр, позволяющий
 определить параметры события.


## Описание


Событие OnSetDataValue наступает
 при изменении значения точки ряда на графике.


## Пример


	Sub UiChart1OnSetDataValue(Sender: Object; Args: IUiChartSetDataValueEventArgs);

	Var

	    i: Double;

	Begin

	    i := Args.Value;

	End Sub UiChart1OnSetDataValue;


После выполнения примера, в переменной «i» будет содержаться новое значение
 точки ряда.


См. также:


[UiChart](UiChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
