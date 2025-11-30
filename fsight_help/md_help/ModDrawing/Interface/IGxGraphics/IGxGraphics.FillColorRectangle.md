# IGxGraphics.FillColorRectangle

IGxGraphics.FillColorRectangle
-


# IGxGraphics.FillColorRectangle


## Синтаксис


FillColorRectangle(Color: [IGxColor](../IGxColor/IGxColor.htm);
 Rect: [IGxRect](../IGxRect/IGxRect.htm));


## Параметры


Color. Цвет, которым будет
 залит прямоугольник.


Rect. Целочисленный прямоугольник.


## Описание


Метод FillColorRectangle заливает
 целочисленный прямоугольник цветом, передаваемым посредством параметра
 Color.


## Пример


Для выполнения примера предполагается наличие формы, где расположены:
 кнопка с наименованием «Button1», компонент ImageBox с наименованием «ImageBox1».
 Подключите системные сборки: Drawing, Forms.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Img: IGxBitmap;

    ImgColor: IGxColor;

    Graph: IGxGraphics;

    Rect: IGxRect;

    l, t, r, b: Integer;

Begin

    Img := GxBitmap.CreateNew(ImageBox1.ClientWidth, ImageBox1.ClientHeight, GxPixelFormat.Format32bppArgb);

    ImgColor := GxColor.FromValue(Math.RandBetweenI(0, Integer.MaxValue));

    l := Math.RandBetweenI(0, Double.RoundInt(ImageBox1.ClientWidth / 2));

    t := Math.RandBetweenI(0, Double.RoundInt(ImageBox1.ClientHeight / 2));

    r := Math.RandBetweenI(Double.RoundInt(ImageBox1.ClientWidth / 2), ImageBox1.ClientWidth);

    b := Math.RandBetweenI(Double.RoundInt(ImageBox1.ClientHeight / 2), ImageBox1.ClientHeight);

    Rect := New GxRect.Create(l, t, r, b);

    Graph := GxGraphicsClass.FromImage(Img);

    Graph.FillColorRectangle(ImgColor, Rect);

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
