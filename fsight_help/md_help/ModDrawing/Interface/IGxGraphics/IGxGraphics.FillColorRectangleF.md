# IGxGraphics.FillColorRectangleF

IGxGraphics.FillColorRectangleF
-


# IGxGraphics.FillColorRectangleF


## Синтаксис


FillColorRectangleF(Color: [IGxColor](../IGxColor/IGxColor.htm);
 Rect: [IGxRectF](../IGxRectF/IGxRectF.htm));


## Параметры


Color. Цвет, которым будет
 залит прямоугольник.


Rect. Вещественный прямоугольник.


## Описание


Метод FillColorRectangleF заливает
 вещественный прямоугольник цветом, передаваемым посредством параметра
 Color.


## Пример


Для выполнения примера предполагается наличие формы, где расположены:
 кнопка с наименованием «Button1», компонент ImageBox с наименованием «ImageBox1».
 Подключите системные сборки: Drawing, Forms.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Img: IGxBitmap;

    ImgColor: IGxColor;

    RectF: IGxRectF;

    Graph: IGxGraphics;

    l, t, r, b: Double;

Begin

    Img:= GxBitmap.CreateNew(ImageBox1.ClientWidth, ImageBox1.ClientHeight, GxPixelFormat.Format32bppArgb);

    ImgColor := GxColor.FromValue(Math.RandBetweenI(0, Integer.MaxValue));

    l := Math.RandBetween(0, ImageBox1.ClientWidth / 2);

    t := Math.RandBetween(0, ImageBox1.ClientHeight / 2);

    r := Math.RandBetween(ImageBox1.ClientWidth / 2, ImageBox1.ClientWidth);

    b := Math.RandBetween(ImageBox1.ClientHeight / 2, ImageBox1.ClientHeight);

    RectF := New GxRectF.Create(l, t, r, b);

    Graph := GxGraphicsClass.FromImage(Img);

    Graph.FillColorRectangleF(ImgColor, RectF);

    ImageBox1.Image := Img;

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в компоненте ImageBox
 отобразится новое битовое изображение с прямоугольником случайного размера
 и цвета.


См. также:


[IGxGraphics](IGxGraphics.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
