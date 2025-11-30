# ISpeedometerBackground.Image

ISpeedometerBackground.Image
-


# ISpeedometerBackground.Image


## Синтаксис


Image: [IGxImage](ModDrawing.chm::/Interface/IGxImage/IGxImage.htm);


## Описание


Свойство Image определяет изображение,
 которое будет использоваться в качестве фона.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента SpeedometerBox
 с наименованием «SpeedometerBox1». В корневом каталоге диска С имеется
 файл «Image.bmp».


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

	    Back.Type := SpeedometerBackgroundType.Picture;

	    Back.Image := GxImage.FromFile("C:\Image.bmp");

	    Back.ImageDrawStyle :=SpeedometerImageDrawStyle.Stretch;

	    s.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будут изменены параметры
 оформления спидометра, отображаемого в компоненте «SpeedometerBox1». В
 качестве фона спидометра будет установлено изображение «Image.bmp».


![](ISpeedometerBackground_Type_Picture.gif)


См. также:


[ISpeedometerBackground](ISpeedometerBackground.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
