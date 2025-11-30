# IChartAxisLevelLine.MinMaxRelatesToSecondaryAxis

IChartAxisLevelLine.MinMaxRelatesToSecondaryAxis
-


# IChartAxisLevelLine.MinMaxRelatesToSecondaryAxis


## Синтаксис


MinMaxRelatesToSecondaryAxis: Boolean;


## Описание


Свойство MinMaxRelatesToSecondaryAxis
 определяет, задаются ли минимальное и максимальное значения по отношению
 к дополнительной оси.


## Комментарии


Допустимые значения:


	- True. Минимальное и
	 максимальное значения задаются;


	- False. Минимальное и
	 максимальное значения не задаются.


Для задания минимального и максимального значений используйте свойства
 [IChartAxisLevelLine.Min](IChartAxisLevelLine.Min.htm)
 и [IChartAxisLevelLine.Max](IChartAxisLevelLine.Max.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с идентификатором «Button1», компонент ChartBox с идентификатором
 «ChartBox1» и компонент UiErAnalyzer с идентификатором «UiErAnalyzer1»,
 являющийся источником данных для компонента ChartBox1. В качестве источника
 данных для компонента UiErAnalyzer1 укажите экспресс-отчет, сохраненный
 на листе с диаграммой. На диаграмме должны присутствовать линии уровня.


Пример является обработчиком события OnClick для компонента «Button1».


Добавьте ссылку на системную сборку «Drawing».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    ChartLevel: IChartAxisLevelLine;

    AxisY: IChartAxis;

Begin

    AxisY := ChartBox1.Chart.AxisY;

    ChartLevel := AxisY.LevelLines.Item(0);

    ChartLevel.MinMaxRelatesToSecondaryAxis := True;

    ChartLevel.AutoMin := False;

    ChartLevel.Min := 0.125000;

    ChartLevel.AutoMax := False;

    ChartLevel.Max := 0.875000;

    ChartLevel.InterlineColor := GxColor.FromName("Blue");

End Sub Button1OnClick;


После выполнения примера на диаграмме будут отображаться линии уровня
 в соответствии с заданными параметрами:


	- включено задание минимального и максимального значений по отношению
	 к дополнительной оси;


	- значение минимума задаётся в ручную и равно «0,125000»;


	- значение максимума задаётся в ручную и равно «0,875000»;


	- задан цвет заливки отображаемой части линиями уровня.


См. также:


[IChartAxisLevelLine](IChartAxisLevelLine.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
