# ISpeedometerArrowView.Background

ISpeedometerArrowView.Background
-


# ISpeedometerArrowView.Background


## Синтаксис


Background: [ISpeedometerBackground](../ISpeedometerBackground/ISpeedometerBackground.htm);


## Описание


Свойство Background определяет
 оформление фона стрелки.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента SpeedometerBox
 с наименованием «SpeedometerBox1».


	Sub Button1OnClick(Sender:Object; Args: IMouseEventArgs);

	Var

	    s: ISpeedometer;

	    v: ISpeedometerView;

	    ScaleView: ISpeedometerScaleView;

	    ArrowView: ISpeedometerArrowView;

	Begin

	    s := SpeedometerBox1.Speedometer;

	    v := s.View;

	    s.BeginUpdate;

	    ScaleView := v.ScaleViews.Item(0);

	    ArrowView := ScaleView.ArrowViews.Item(0);

	    ArrowView.AxisOffset:= 0.1;

	    ArrowView.Background.Color:= GxColor.FromName("Green");

	    ArrowView.Length := 0.8;

	    ArrowView.Shape := SpeedometerArrowShapes.Triangle;

	    ArrowView.Width := 0.15;

	    s.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет изменено оформление
 стрелки шкалы спидометра, отображаемого в компоненте «SpeedometerBox1».
 Для стрелки будет задано смещение от центра, цвет фона, длина и ширина.
 Также будет изменена форма стрелки.


![](../ISpeedometerScaleView/ISpeedometerScaleView_ArrowViews.gif)


См. также:


[ISpeedometerArrowView](ISpeedometerArrowView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
