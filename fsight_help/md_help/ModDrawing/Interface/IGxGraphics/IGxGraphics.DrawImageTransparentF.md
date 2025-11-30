# IGxGraphics.DrawImageTransparentF

IGxGraphics.DrawImageTransparentF
-


# IGxGraphics.DrawImageTransparentF


## Синтаксис


DrawImageTransparentF(Image: [IGxImage](../IGxImage/IGxImage.htm);
 DestRect: [IGxRectF](../IGxRectF/IGxRectF.htm); SrcRect: [IGxRectF](../IGxRectF/IGxRectF.htm); SrcUnit: [GxUnit](../../Enums/GxUnit.htm);
 TransColor: [IGxColor](../IGxColor/IGxColor.htm)): [IGxRectF](../IGxRectF/IGxRectF.htm);


## Параметры


Image. Изображение.


DestRect. Целочисленный прямоугольник,
 в котором необходимо отрисовать часть изображения. Если в качестве параметра
 передается значение Null - изображение
 отрисовывается в соответствии с размером, передаваемым в параметре SrcRect.


SrcRect. Целочисленный прямоугольник,
 определяющий часть изображения, которую необходимо отрисовать в области
 DestRect. Если в качестве параметра
 передается значение Null - берется
 вся доступная область изображения.


SrcUnit. Единицы измерения,
 используемые параметром SrcRect.
 Данный параметр не поддерживается.


TransColor. Цвет изображения,
 интерпретируемый как прозрачный. Прозрачный цвет не отображается при отрисовке
 изображения. Если в качестве параметра передается значение Null
 - отрисовываются все цвета изображения.


## Описание


Метод DrawImageTransparentF
 отрисовывает изображение, передаваемое посредством параметра Image,
 в заданном вещественном прямоугольнике с заданной прозрачностью.


## Пример


Для выполнения примера предполагается наличие формы, где расположены:
 кнопка с наименованием «Button1», компонент ImageBox с наименованием «ImageBox1».
 В файловой системе должно быть изображение «С:\Image.gif». Подключите
 системные сборки: Drawing, Forms.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    BMP: IGxBitmap;

    Image: IGxImage;

    Graph: IGxGraphics;

    Rect1, Rect2: IGxRectF;

Begin

    BMP := GxBitmap.CreateNew(ImageBox1.ClientWidth, ImageBox1.ClientHeight, GxPixelFormat.Format24bppRgb);

    Image := GxImage.FromFile("c:\Image.gif");

    Graph := GxGraphicsClass.FromImage(BMP);

    Rect1 := New GxRectF.Create(0, 0, ImageBox1.ClientWidth, ImageBox1.ClientHeight);

    Rect2 := New GxRectF.Create(0, 0, 16.5, 16.5);

    Graph.DrawImageTransparentF(Image, Rect1, Rect2, GxUnit.World, Null);

    ImageBox1.Image := BMP;

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в компоненте ImageBox
 отобразится новое битовое изображение с отрисованной частью графического
 файла «С:\Image.gif».


См. также:


[IGxGraphics](IGxGraphics.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
