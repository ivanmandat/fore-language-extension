# IGxGraphics.DrawTextW

IGxGraphics.DrawTextW
-


# IGxGraphics.DrawTextW


## Синтаксис


DrawTextW(Text: String; Font: [IGxFont](../IGxFont/IGxFont.htm);
 Brush: [IGxBrush](../IGxBrush/IGxBrush.htm); X: Double, Y:
 Double);


## Параметры


Text. Текст.


Font. Шрифт, которым будет
 выведен текст.


Brush. Кисть, которой будет
 отрисован текст.


X. Вещественная координата
 Х точки, в которой будет выведен текст.


Y. Вещественная координата
 Y точки, в которой будет выведен текст.


## Описание


Метод DrawTextW осуществляет
 вывод текста заданной кистью и шрифтом в точке с координатами X
 и Y.


## Пример


Для выполнения примера предполагается наличие формы, где расположены:
 кнопка с наименованием «Button1», компонент ImageBox с наименованием «ImageBox1».
 Подключите системные сборки: Drawing, Forms.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    BMP: IGxBitmap;

    ImgFont: IGxFont;

    ImgBrush: IGxBrush;

    Graph: IGxGraphics;

Begin

    BMP := GxBitmap.CreateNew(ImageBox1.ClientWidth, ImageBox1.ClientHeight, GxPixelFormat.Format24bppRgb);

    ImgFont := New GxFont.Create("Times New Roman", 16, GxFontStyle.BoldItalic, GxUnit.World);

    ImgBrush := New GxSolidBrush.Create(GxColor.FromName("Red"));

    Graph := GxGraphicsClass.FromImage(BMP);

    Graph.DrawTextW("New Image", ImgFont, ImgBrush, 10, 10);

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
