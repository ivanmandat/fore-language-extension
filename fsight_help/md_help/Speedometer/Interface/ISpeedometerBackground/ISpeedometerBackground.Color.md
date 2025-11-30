# ISpeedometerBackground.Color

ISpeedometerBackground.Color
-


# ISpeedometerBackground.Color


## Синтаксис


Color: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство Color определяет цвет
 заливки фона.


## Комментарии


Используется, если [тип фона](ISpeedometerBackground.Type.htm)
 установлен любой, кроме SpeedometerBackgroundType.Picture. Назначение
 свойства зависит от выбранного типа заливки фона.


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

	    Back.Type := SpeedometerBackgroundType.Color;

	    Back.Color := GxColor.FromName("Yellow");

	    s.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будут изменены параметры
 оформления спидометра, отображаемого в компоненте «SpeedometerBox1». Для
 фона спидометра будет установлен монотонный желтый фон.


![](ISpeedometerBackground_Type_Color.gif)


См. также:


[ISpeedometerBackground](ISpeedometerBackground.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
