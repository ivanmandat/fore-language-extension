# IGxBitmapClass.CreateNew

IGxBitmapClass.CreateNew
-


# IGxBitmapClass.CreateNew


## Синтаксис


CreateNew(Width: Integer; Height: Integer; PixelFormat:
 [GxPixelFormat](../../Enums/GxPixelFormat.htm)): [IGxBitmap](../IGxBitmap/IGxBitmap.htm);


## Параметры


Width. Ширина изображения.


Height. Высота изображения.


PixelFormat. Формат пикселей.


## Описание


Метод CreateNew создает новое
 растровое изображение с заданными параметрами.


## Пример


	Sub UserProc;

	Var

	    BMP: IGxBitmap;

	    Color: IGxColor;

	    Rect: IGxRect;

	    Graph: IGxGraphics;

	Begin

	    BMP := GxBitmap.CreateNew(30, 15, GxPixelFormat.Format24bppRgb);

	    Graph := GxGraphicsClass.FromImage(BMP);

	    //Формирование изображения

	    Color := New GxColor.CreateRGB(0, 85, 164);

	    Rect := New GxRect.Create(0, 0, 15, 30);

	    Graph.FillColorRectangle(Color, Rect);

	    Color := GxColor.FromKnownColor(GxKnownColor.White);

	    Rect := New GxRect.Create(15, 0, 30, 30);

	    Graph.FillColorRectangle(Color, Rect);

	    Color := New GxColor.CreateRGB(239, 65, 53);

	    Rect := New GxRect.Create(30, 0, 45, 30);

	    Graph.FillColorRectangle(Color, Rect);

	    //Сохранение изображения в файл

	    BMP.SaveToFileEncoded("D:\flag.bmp", GxImageFormats.Bmp);

	End Sub UserProc;


При выполнении примера будет создано новое изображение. В изображении
 будут отрисованы три прямоугольника таким образом, чтобы изображение представляло
 из себя флаг Франции. Изображение будет сохранено в файл в формате BMP.


См. также:


[IGxBitmapClass](IGxBitmapClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
