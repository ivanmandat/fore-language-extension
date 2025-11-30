# ISpeedometerView.ScaleViews

ISpeedometerView.ScaleViews
-


# ISpeedometerView.ScaleViews


## Синтаксис


ScaleViews: [ISpeedometerScaleViews](../ISpeedometerScaleViews/ISpeedometerScaleViews.htm);


## Описание


Свойство ScaleViews возвращает
 коллекцию стилей оформления шкал спидометра.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента SpeedometerBox
 с наименованием «SpeedometerBox1».


	Sub Button1OnClick(Sender:Object; Args: IMouseEventArgs);

	Var

	    s: ISpeedometer;

	    v: ISpeedometerView;

	    ScaleV: ISpeedometerScaleView;

	Begin

	    s := SpeedometerBox1.Speedometer;

	    v := s.View;

	    s.BeginUpdate;

	    ScaleV := s.View.ScaleViews.Item(0);

	    ScaleV.StartAngle :=0;

	    ScaleV.DeltaAngle :=180;

	    ScaleV.Font := New GxFont.Create("Arial",10);

	    ScaleV.FontColor := GxColor.FromName("Blue");

	    ScaleV.TextPlacement:= SpeedometerTextPlacementType.OutsideRotated;

	    s.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будут изменены параметры
 оформления шкалы спидометра, отображаемого в компоненте «SpeedometerBox1».


![](ISpeedometerView_ScaleViews.gif)


См. также:


[ISpeedometerView](ISpeedometerView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
