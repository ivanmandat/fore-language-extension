# IGxGraphicsClass.FromImage

IGxGraphicsClass.FromImage
-


# IGxGraphicsClass.FromImage


## Синтаксис


FromImage(Image: [IGxImage](../IGxImage/IGxImage.htm)):
 [IGxGraphics](../IGxGraphics/IGxGraphics.htm);


## Параметры


Image.
 Источник изображения.


## Описание


Метод FromImage возвращает графический
 объект, полученный из изображения, передаваемого посредством входного
 параметра.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента ImageBox с наименованием
 ImageBox1. В ImageBox1 загружено какое-либо изображение.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    f: IGxFont;

    b: IGxBrush;

    Image: IGxImage;

    Graph: IGxGraphics;

Begin

    f := New GxFont.Create("Times New Roman", 16, GxFontStyle.BoldItalic, GxUnit.World);

    b := New GxSolidBrush.Create(GxColor.FromName("Green"));

    Image := ImageBox1.Image;

    Graph := GxGraphicsClass.FromImage(Image);

    Graph.DrawTextW("Пример", f, b, 0, 0);

    ImageBox1.Image := Image;

End Sub Button1OnClick;


При нажатии на кнопку будет получен графический контекст изображения,
 отображаемого в компоненте ImageBox1. Поверх данного изображения будет
 выведено слово «Пример», после чего изображение будет обновлено в компоненте
 ImageBox1.


См. также:


[IGxGraphicsClass](IGxGraphicsClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
