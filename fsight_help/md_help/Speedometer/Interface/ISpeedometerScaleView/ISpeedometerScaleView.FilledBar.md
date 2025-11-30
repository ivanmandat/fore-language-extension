# ISpeedometerScaleView.FilledBar

ISpeedometerScaleView.FilledBar
-


# ISpeedometerScaleView.FilledBar


## Синтаксис


FilledBar: [ISpeedometerFilledBar](../ISpeedometerFilledBar/ISpeedometerFilledBar.htm);


## Описание


Свойство FilledBar возвращает
 параметры цветной интервальной полосы спидометра.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента SpeedometerBox
 с наименованием «SpeedometerBox1».


	Sub Button1OnClick(Sender:Object; Args: IMouseEventArgs);

	Var

	    s: ISpeedometer;

	    v: ISpeedometerView;

	    ScaleView: ISpeedometerScaleView;

	    FilledBar: ISpeedometerFilledBar;

	    Bar, Bar1: ISpeedometerBar;

	Begin

	    s := SpeedometerBox1.Speedometer;

	    v := s.View;

	    s.BeginUpdate;

	    ScaleView := s.View.ScaleViews.Item(0);

	    FilledBar := ScaleView.FilledBar;

	    FilledBar.StartRadius:= 0.1;

	    FilledBar.EndRadius :=0.9;

	    FilledBar.Bars.Count:= 2;

	    Bar := FilledBar.Bars.Item(0);

	    Bar1 := FilledBar.Bars.Item(1);

	    Bar.StartColor := GxColor.FromName("Blue");

	    Bar.EndColor := GxColor.FromName("Green");

	    Bar.Part := 0.7;

	    Bar1.StartColor := GxColor.FromName("Green");

	    Bar1.EndColor := GxColor.FromName("Red");

	    Bar1.Part := 0.3;

	    s.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет изменено оформление
 цветовой интервальной полосы спидометра, отображаемого в компоненте «SpeedometerBox1».


![](ISpeedometerScaleView_FilledBar.gif)


См. также:


[ISpeedometerScaleView](ISpeedometerScaleView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
