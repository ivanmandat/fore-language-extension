# IGxGraphics.ResetTransform

IGxGraphics.ResetTransform
-


# IGxGraphics.ResetTransform


## Синтаксис


ResetTransform;


## Описание


Метод ResetTransform сбрасывает
 настройки изображения.


## Комментарии


При выполнении метода [по осям](IGxGraphics.SetScale.htm)
 будет установлен масштаб равный 1 (100%), точка начала координат будет
 возвращена в исходное положение [0, 0].


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента ImageBox с наименованием
 ImageBox1.


Добавьте ссылки на системные сборки: Drawing.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    BMP: IGxBitmap;

    Graph: IGxGraphics;

    ImgFont: IGxFont;

    ImgBrush: IGxBrush;

    ImgFormat: IGxStringFormat;

Begin

    BMP := GxBitmap.CreateNew(ImageBox1.ClientWidth, ImageBox1.ClientHeight, GxPixelFormat.Format24bppRgb);

    ImgFont := New GxFont.Create("Times New Roman", 16, GxFontStyle.BoldItalic, GxUnit.World);

    ImgBrush := New GxSolidBrush.Create(GxColor.FromName("Red"));

    ImgFormat := New GxStringFormat.Create;

    ImgFormat.Alignment := GxStringAlignment.Center;

    Graph := GxGraphicsClass.FromImage(BMP);

    Graph.SetScale(2, 2);

    Graph.DrawTextF("Big text", ImgFont, ImgBrush, 30, 0, ImgFormat);

    Graph.ResetTransform;

    Graph.DrawTextF("Small text", ImgFont, ImgBrush, 50, 50, ImgFormat);

    ImageBox1.Image := BMP;

End Sub Button1OnClick;


При нажатии на кнопку будет создано новое изображение. Для изображения
 будет изменён масштаб и выведен текст. После этого масштаб будет восстановлен
 и добавлен еще один текст. Полученное изображение будет загружено в компонент
 ImageBox1.


См. также:


[IGxGraphics](IGxGraphics.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
