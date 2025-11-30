# IUiChartGetDataValueEventArgs.Value3

IUiChartGetDataValueEventArgs.Value3
-


# IUiChartGetDataValueEventArgs.Value3


## Синтаксис


Value3: Double;


## Описание


Свойство Value3 определяет размер
 пузырька пузырьковой диаграммы.


## Комментарии


Для получения исходных данных по оси OX, OY используйте свойства [IUiChartGetDataValueEventArgs.Value2](IUiChartGetDataValueEventArgs.Value2.htm)
 и [IUiChartGetDataValueEventArgs.Value](IUiChartGetDataValueEventArgs.Value.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 ChartBox с идентификатором «ChartBox1» и компонент UiChart с идентификатором
 «UiChart1». Укажите «UiChart1» в качестве источника данных для компонента
 «ChartBox1».


Добавьте ссылки на системные сборки «Chart», «ExtCtrls», «Forms».


Пример является обработчиком события OnGetDataValue для компонента «UiChart1».


			Sub UiChart1OnGetDataValue(Sender: Object; Args: IUiChartGetDataValueEventArgs);

Begin

Args.Result := True;

Args.Value := Args.SerieIndex + Args.SerieIndex + 1;

Args.Value2 := Args.SerieIndex + Args.SerieIndex + 2;

Args.Value3 := Args.SerieIndex + Args.SerieIndex + 1;

End Sub UiChart1OnGetDataValue;


После выполнения примера будет построена пузырьковая диаграмма по заданному
 количеству рядов и пузырьков, размер которых зависит от заданного начального
 размера.


См. также:


[IUiChartGetDataValueEventArgs](IUiChartGetDataValueEventArgs_.htm)
 | [UiChart.OnGetDataValue](../../Class/UiChart/UiChart.OnGetDataValue.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
