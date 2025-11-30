# IUiChartSetDataValueEventArgs.Value

IUiChartSetDataValueEventArgs.Value
-


# IUiChartSetDataValueEventArgs.Value


## Синтаксис


Value: Double;


## Описание


Свойство Value определяет значение
 точки ряда.


## Пример


	Sub UiChart1OnSetDataValue(Sender: Object; Args: IUiChartSetDataValueEventArgs);

	Var

	    i: Double;

	Begin

	    i := Args.Value;

	End Sub UiChart1OnSetDataValue;


После выполнения примера в переменной «i» будет содержаться новое значение
 точки ряда.


См. также:


[IUiChartSetDataValueEventArgs](IUiChartSetDataValueEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
