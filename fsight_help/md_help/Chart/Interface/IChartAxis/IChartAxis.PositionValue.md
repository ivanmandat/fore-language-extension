# IChartAxis.PositionValue

IChartAxis.PositionValue
-


# IChartAxis.PositionValue


## Синтаксис


PositionValue: Double;


## Описание


Свойство PositionValue определяет расстояние (абсолютное) до пересечения с ортогональной осью.


## Комментарии


Для задания расстояния установите свойству [IChartAxis.Position](IChartAxis.Position.htm) значение ChartAxisPosition.Custom.


## Пример


Для выполнения примера создайте форму, расположите на ней компоненты ChartBox, UiChart, Button и FloatEdit с идентификаторами, предлагаемыми по умолчанию. Компонент UiChart1 является источником (Source) для компонента ChartBox1. В инспекторе сборок укажите ссылку на системную сборку MathFin.


Процедура UiChart1OnGetDataValue является обработчиком события OnGetDataValue для компонента UiChart1.


Процедура MyFormOnShow является обработчиком события OnShow для формы.


Процедура Button1OnClick является обработчиком события OnClick для кнопки.


			Sub UiChart1OnGetDataValue(Sender: Object; Args: IUiChartGetDataValueEventArgs);

Begin

    Args.Result := True;

    Args.Value := Math.Rand;

End Sub UiChart1OnGetDataValue;


Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Chart: IChart;

    X : IChartAxis;

Begin

    Chart := ChartBox1.Chart;

    X := Chart.AxisX;

    X.Position := ChartAxisPosition.Custom;

    X.PositionValue := FloatEdit1.Value;

End Sub Button1OnClick;


Sub MyFormOnShow(Sender: Object; Args: IEventArgs);

Begin

    UiChart1.PointCount := 3;

    UiChart1.SerieCount := 4;

End Sub OBJ37234FormOnShow;


Задайте расстояние до пересечения с ортогональной осью, нажмите кнопку.
 Положение оси X будет изменено.


См. также:


[IChartAxis](IChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
