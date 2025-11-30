# ISpeedometerBackground.Type

ISpeedometerBackground.Type
-


# ISpeedometerBackground.Type


## Синтаксис


Type: [SpeedometerBackgroundType](../../Enums/SpeedometerBackgroundType.htm);


## Описание


Свойство Type определяет тип
 фона спидометра.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента SpeedometerBox
 с наименованием «SpeedometerBox1».


	Sub Button1OnClick(Sender:Object; Args: IMouseEventArgs);

	Var

	    s: ISpeedometer;

	    v: ISpeedometerView;

	    Back: ISpeedometerBackground;

	Begin

	    s := SpeedometerBox1.Speedometer;

	    v := s.View;

	    s.BeginUpdate;

	    Back := v.Background;

	    Back.Type := SpeedometerBackgroundType.Gradient;

	    Back.GradientAngle :=45;

	    Back.GradientColor :=GxColor.FromName("Red");

	    s.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будут изменены параметры
 оформления спидометра, отображаемого в компоненте «SpeedometerBox1».


![](../ISpeedometerView/ISpeedometerView_Background.gif)


См. также:


[ISpeedometerBackground](ISpeedometerBackground.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
