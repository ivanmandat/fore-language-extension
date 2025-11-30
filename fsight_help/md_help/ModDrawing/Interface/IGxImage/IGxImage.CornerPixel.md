# IGxImage.CornerPixel

IGxImage.CornerPixel
-


# IGxImage.CornerPixel


## Синтаксис


CornerPixel(Value: [GxCorner](../../Enums/GxCorner.htm)):
 [IGxColor](../IGxColor/IGxColor.htm);


## Параметры


Value. Тип угловой точки.


## Описание


Свойство CornerPixel возвращает
 цвет указанной угловой точки.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента ImageBox с наименованием
 ImageBox1. В ImageBox1 загружено какое-либо изображение.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Image: IGxImage;

    Color: IGxColor;

Begin

    Image := ImageBox1.Image;

    Color := Image.CornerPixel(GxCorner.BottomLeft);

    Debug.WriteLine("R: " + Color.R.ToString + " G: " + Color.G.ToString + " B: " + Color.B.ToString);

End Sub Button1OnClick;


При нажатии на кнопку в переменной Color будет содержаться цвет нижней
 левой точки изображения, содержащегося в компоненте с наименованием ImageBox1.
 R, G, B компоненты полученного цвета будут выведены в консоль среды разработки.


См. также:


[IGxImage](IGxImage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
