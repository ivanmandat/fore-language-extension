# IGxGraphics.SetTranslate

IGxGraphics.SetTranslate
-


# IGxGraphics.SetTranslate


## Синтаксис


SetTranslate(Value: [IGxPointF](../IGxPointF/IGxPointF.htm));


## Параметры


Value. Точка,
 в которую смещается начало координат.


## Описание


Метод SetTranslate осуществляет
 смещение начала координат в точку, передаваемую посредством параметра
 Value.


## Пример


Для выполнения примера предполагается наличие формы, где расположены:
 кнопка с наименованием «Button1», компонент ImageBox с наименованием «ImageBox1».
 Подключите системные сборки: Drawing, Forms.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Img: IGxBitmap;

    ImgFont: IGxFont;

    ImgBrush: IGxBrush;

    Graph: IGxGraphics;

    p: IGxPointF;

Begin

    Img := GxBitmap.CreateNew(ImageBox1.ClientWidth, ImageBox1.ClientHeight, GxPixelFormat.Format32bppArgb);

    ImgFont := New GxFont.Create("Times New Roman", 16, GxFontStyle.BoldItalic, GxUnit.World);

    ImgBrush := New GxSolidBrush.Create(GxColor.FromName("Red"));

    Graph := GxGraphicsClass.FromImage(Img);

    Graph.DrawTextW("Text 1", ImgFont, ImgBrush, 0, 0);

    p := New GxPointF.Create(50, 50);

    Graph.SetTranslate(p);

    Graph.DrawTextW("Text 2", ImgFont, ImgBrush, 0, 0);

    ImageBox1.Image := Img;

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в компоненте ImageBox
 отобразится новое битовое изображение, на котором будут отрисованы две
 надписи в соответствии с заданными настройками и с разницей в смещении
 начала координат.


См. также:


[IGxGraphics](IGxGraphics.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
