# IGxGraphics.DrawTextRF

IGxGraphics.DrawTextRF
-


# IGxGraphics.DrawTextRF


## Синтаксис


DrawTextRF(Text: String; Font: [IGxFont](../IGxFont/IGxFont.htm);
 Brush: [IGxBrush](../IGxBrush/IGxBrush.htm); Rect: [IGxRectF](../IGxRectF/IGxRectF.htm);
 Format: [IGxStringFormat](../IGxStringFormat/IGxStringFormat.htm));


## Параметры


Text. Текст.


Font. Шрифт, которым будет
 выведен текст.


Brush. Кисть, которой будет
 отрисован текст.


Rect. Вещественный прямоугольник,
 в котором будет выведен текст.


Format. Формат выравнивания
 текста.


## Описание


Метод DrawTextRF осуществляет
 вывод текста в заданном прямоугольнике с заданным форматом.


## Пример


Для выполнения примера предполагается наличие формы, где расположены:
 кнопка с наименованием «Button1», компонент ImageBox с наименованием «ImageBox1».
 Подключите системные сборки: Drawing, Forms.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    BMP: IGxBitmap;

    ImgFont: IGxFont;

    ImgBrush: IGxBrush;

    ImgFormat: IGxStringFormat;

    Graph: IGxGraphics;

    r: IGxRectF;

Begin

    BMP := GxBitmap.CreateNew(ImageBox1.ClientWidth, ImageBox1.ClientHeight, GxPixelFormat.Format24bppRgb);

    ImgFont := New GxFont.Create("Times New Roman", 16, GxFontStyle.BoldItalic, GxUnit.World);

    ImgBrush := New GxSolidBrush.Create(GxColor.FromName("Red"));

    ImgFormat := New GxStringFormat.Create;

    ImgFormat.Alignment := GxStringAlignment.Center;

    ImgFormat.LineAlignment := GxStringAlignment.Center;

    ImgFormat.Trimming := GxStringTrimming.None;

    Graph := GxGraphicsClass.FromImage(BMP);

    r := New GxRectF.Create(0, 0, 0, 0);

    r := Graph.MeasureTextRF("New Image", ImgFont, r, Null);

    r.Width := r.Width / 2;

    Graph.DrawTextRF("New Image", ImgFont, ImgBrush, r, ImgFormat);

    ImageBox1.Image := BMP;

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в компоненте ImageBox
 отобразится новое битовое изображение с усечённым по ширине прямоугольником,
 в котором по центру отрисована указанная надпись с заданными настройками.


См. также:


[IGxGraphics](IGxGraphics.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
