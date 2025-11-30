# ISpeedometerBackground.HatchStyle

ISpeedometerBackground.HatchStyle
-


# ISpeedometerBackground.HatchStyle


## Синтаксис


HatchStyle: [GxHatchStyle](ModDrawing.chm::/Enums/GxHatchStyle.htm);


## Описание


Свойство HatchStyle определяет
 тип штриховки, используемой для заливки фона.


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

	    Back.Type := SpeedometerBackgroundType.Hatch;

	    Back.Color := GxColor.FromName("Green");

	    Back.HatchStyle := GxHatchStyle.Shingle;

	    s.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будут изменены параметры
 оформления спидометра, отображаемого в компоненте «SpeedometerBox1». Для
 фона спидометра будет установлена штриховая заливка. Цвет заливки - зеленый.


![](ISpeedometerBackground_Type_Hatch.gif)


См. также:


[ISpeedometerBackground](ISpeedometerBackground.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
