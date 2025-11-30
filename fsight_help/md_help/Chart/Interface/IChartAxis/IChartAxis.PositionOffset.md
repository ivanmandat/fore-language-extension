# IChartAxis.PositionOffset

IChartAxis.PositionOffset
-


# IChartAxis.PositionOffset


## Синтаксис


PositionOffset: [ChartAxisPositionOffsetType](../../Enums/ChartAxisPositionOffsetType.htm);


## Описание


Свойство PositionOffset определяет вариант смещения оси относительно области построения диаграммы.


## Комментарии


По умолчанию смещение оси отключено.


Если используется смещение, то его величина задается свойством [IChartAxis.PositionOffsetValue](IChartAxis.PositionOffsetValue.htm).


При заданном положительном значении ось смещается в противоположенную сторону от области построения. При отрицательном значении смещение происходит внутрь области построения.


## Пример


Пример содержит обработчик события. Для выполнения примера добавьте ссылки на системные сборки «MathFin» и «Chart». На форму добавьте компоненты UiChart с идентификатором «UiChart1», кнопку Button и ChartBox с источником UiChart1 для отображения результата примера.


			Sub UiChart1OnGetDataValue(Sender: Object; Args: IUiChartGetDataValueEventArgs);

Begin

    Args.Result := True;

    Args.Value := Math.RandBetween(10,40);

End Sub UiChart1OnGetDataValue;


Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var Axis: IChartAxis;

Begin

    Axis := UiChart1.Chart.AxisX;

    Axis.PositionOffset := ChartAxisPositionOffsetType.Custom;

    Axis.PositionOffsetValue := 10;

End Sub Button1OnClick;


После выполнения примера ось Х будет смещена на 10 мм влево относительно области построения диаграммы.


См. также:


[IChartAxis](IChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
