# IGxGraphics.DrawTextP

IGxGraphics.DrawTextP
-


# IGxGraphics.DrawTextP


## Синтаксис


DrawTextP(Text: String; Font: [IGxFont](../IGxFont/IGxFont.htm);
 Brush: [IGxBrush](../IGxBrush/IGxBrush.htm); Origin: [IGxPointF](../IGxPointF/IGxPointF.htm));


## Параметры


Text. Текст.


Font. Шрифт, которым будет
 выведен текст.


Brush. Кисть, которой будет
 отрисован текст.


Origin. Вещественная точка,
 в которой будет выведен текст.


## Описание


Метод DrawTextP осуществляет
 вывод текста заданной кистью и шрифтом в точке, передаваемой посредством
 параметра Origin.


## Пример


Для выполнения примера предполагается наличие формы, где расположены:
 кнопка с наименованием «Button1», компонент ImageBox с наименованием «ImageBox1».
 Подключите системные сборки: Drawing, Forms.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    BMP: IGxBitmap;

    Graph: IGxGraphics;

    ImgFont: IGxFont;

    ImgBrush: IGxBrush;

    p: IGxPointF;

Begin

    BMP := GxBitmap.CreateNew(ImageBox1.ClientWidth, ImageBox1.ClientHeight, GxPixelFormat.Format24bppRgb);

    ImgFont := New GxFont.Create("Times New Roman", 16, GxFontStyle.BoldItalic, GxUnit.World);

    ImgBrush := New GxSolidBrush.Create(GxColor.FromName("Red"));

    Graph := GxGraphicsClass.FromImage(BMP);

    p := New GxPointF.Create(10.5, 10.5);

    Graph.DrawTextP("New Image", ImgFont, ImgBrush, p);

    ImageBox1.Image := BMP;

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в компоненте ImageBox
 отобразится новое битовое изображение, на котором будет отрисована указанная
 надпись с заданными настройками.


См. также:


[IGxGraphics](IGxGraphics.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
