# IGxGraphics.CompositingQuality

IGxGraphics.CompositingQuality
-


# IGxGraphics.CompositingQuality


## Синтаксис


CompositingQuality: [GxCompositingQuality](../../Enums/GxCompositingQuality.htm);


## Описание


Свойство CompositingQuality
 определяет качество отрисовки изображений.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонент ImageBox с наименованием
 ImageBox1. В файловой системе должно быть изображение «C:\Map.bmp».


Добавьте ссылку на системную сборку Drawing.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Image: IGxImage;

    Graphics: IGxGraphics;

Begin

    Image := GxBitmap.FromFile("C:\Map.bmp");

    Graphics := GxGraphicsClass.FromImage(Image);

    Graphics.InterpolationMode := GxInterpolationMode.Bilinear;

    Graphics.CompositingQuality := GxCompositingQuality.HighQuality;

    ImageBox1.Image := Image;

End Sub Button1OnClick;


При нажатии на кнопку в компонент ImageBox1 будет загружено изображение
 из файла «C:\Map.bmp» с заданным качеством отрисовки и режимом интерполяции.


См. также:


[IGxGraphics](IGxGraphics.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
