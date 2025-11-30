# IGxGraphics.TextRenderingHint

IGxGraphics.TextRenderingHint
-


# IGxGraphics.TextRenderingHint


## Синтаксис


TextRenderingHint: [GxTextRenderingHint](../../Enums/GxTextRenderingHint.htm);


## Описание


Свойство TextRenderingHint
 определяет [режим](../../Enums/GxTextRenderingHint.htm) вывода
 текста.


## Пример


Для выполнения примера предполагается наличие формы, где расположены:
 кнопка с наименованием «Button1», компонент ImageBox
 с наименованием «ImageBox1».


Подключите системные сборки: Drawing, Forms.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    BMP: IGxBitmap;

    Graph: IGxGraphics;

    GraphClass: GxGraphicsClass;

    Font: IGxFont;

    Brush: IGxBrush;

    Format: IGxStringFormat;

Begin

    BMP := GxBitmap.CreateNew(ImageBox1.ClientWidth, ImageBox1.ClientHeight, GxPixelFormat.Format32bppArgb);

    Font := New GxFont.Create("Times New Roman", 100, GxFontStyle.BoldItalic, GxUnit.World);

    Brush := New GxSolidBrush.Create(GxColor.FromName("White"));

    Format := New GxStringFormat.Create;

    GraphClass := New GxGraphics.Create;

    Graph := GraphClass.FromImage(BMP);

    Graph.TextRenderingHint := GxTextRenderingHint.AntiAlias;

    Graph.DrawTextF("NewImage", Font, Brush, 50, 0, Format);

    ImageBox1.Image := BMP;

End Sub Button1OnClick;


При нажатии на кнопку в компоненте ImageBox отобразится битовое изображение
 с указанной надписью с заданными настройками.


См. также:


[IGxGraphics](IGxGraphics.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
