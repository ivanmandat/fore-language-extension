# IGxGraphics.DrawTextPF

IGxGraphics.DrawTextPF
-


# IGxGraphics.DrawTextPF


## Синтаксис


DrawTextPF(Text: String; Font: [IGxFont](../IGxFont/IGxFont.htm);
 Brush: [IGxBrush](../IGxBrush/IGxBrush.htm); Origin: [IGxPointF](../IGxPointF/IGxPointF.htm);
 Format: [IGxStringFormat](../IGxStringFormat/IGxStringFormat.htm));


## Параметры


Text. Текст.


Font. Шрифт, которым будет
 выведен текст.


Brush. Кисть, которой будет
 отрисован текст.


Origin. Вещественная точка,
 в которой будет выведен текст.


Format. Формат выравнивания
 текста.


## Описание


Метод DrawTextPF осуществляет
 вывод текста в заданной точке с заданным форматом.


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

    ImgFormat: IGxStringFormat;

    p: IGxPointF;

Begin

    BMP := GxBitmap.CreateNew(ImageBox1.ClientWidth, ImageBox1.ClientHeight, GxPixelFormat.Format24bppRgb);

    ImgFont := New GxFont.Create("Times New Roman", 16, GxFontStyle.BoldItalic, GxUnit.World);

    ImgBrush := New GxSolidBrush.Create(GxColor.FromName("Red"));

    ImgFormat := New GxStringFormat.Create;

    ImgFormat.Alignment := GxStringAlignment.Center;

    Graph := GxGraphicsClass.FromImage(BMP);

    p := New GxPointF.Create(50.5, 50.5);

    Graph.DrawTextPF("New Image", ImgFont, ImgBrush, p, ImgFormat);

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
