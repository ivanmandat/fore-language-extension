# IGxBitmap.Pixel

IGxBitmap.Pixel
-


# IGxBitmap.Pixel


## Синтаксис


Pixel(X: Integer; Y: Integer): [IGxColor](../IGxColor/IGxColor.htm);


## Параметры


X. Координата Х.


Y. Координата Y.


## Описание


Свойство Pixel определяет цвет
 отдельного пикселя с указанными координатами.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента ImageBox с наименованием
 ImageBox1.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Img: IGxBitmap;

	Begin

	    Img := GxBitmap.CreateNew(6, 6, GxPixelFormat.Format32bppArgb);

	    Img.Pixel(0,0):= GxColor.FromKnownColor(GxKnownColor.Red);

	    Img.Pixel(0,5):= GxColor.FromKnownColor(GxKnownColor.Blue);

	    Img.Pixel(5,0):= GxColor.FromKnownColor(GxKnownColor.Yellow);

	    Img.Pixel(5,5):= GxColor.FromKnownColor(GxKnownColor.Green);

	    Img.SetResolution(6,6);

	    ImageBox1.Image := Img;

	    ImageBox1.Stretch := True;

	End Sub Button1OnClick;


При нажатии на кнопку будут создано растровое изображение размером 6*6.
 Для угловых точек изображения будет изменён цвет. После этого изображение
 будет загружено в компонент ImageBox.


См. также:


[IGxBitmap](IGxBitmap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
