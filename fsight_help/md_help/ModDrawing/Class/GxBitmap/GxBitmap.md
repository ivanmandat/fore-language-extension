# GxBitmap

GxBitmap
-


# GxBitmap


Сборка: Drawing;


## Описание


Класс GxBitmap реализует растровое
 изображение.


## Конструкторы


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateFromClipboard](GxBitmap.CreateFromClipboard.htm)
		 Конструктор CreateFromClipboard
		 создает растровое изображение на основе содержимого буфера обмена.


		 ![](../../Sub_Image.gif)
		 [CreateFromFile](GxBitmap.CreateFromFile.htm)
		 Конструктор CreateFromFile
		 создает новое растровое изображение на основе файла, указанного
		 в параметре FileName.


		 ![](../../Sub_Image.gif)
		 [CreateFromStream](GxBitmap.CreateFromStream.htm)
		 Конструктор CreateFromStream
		 создает новое растровое изображение на основе содержимого потока,
		 передаваемого посредством параметра Stream.


## Статические методы класса, унаследованные от [IGxBitmapClass](../../Interface/IGxBitmapClass/IGxBitmapClass.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateNew](../../Interface/IGxBitmapClass/IGxBitmapClass.CreateNew.htm)
		 Метод CreateNew создает
		 новое растровое изображение.


## Статические методы класса, унаследованные от [IGxImageClass](../../Interface/IGxImageClass/IGxImageClass.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [FromFile](../../Interface/IGxImageClass/IGxImageClass.FromFile.htm)
		 Метод FromFile возвращает
		 изображение, полученное из файла.


		 ![](../../Sub_Image.gif)
		 [FromStream](../../Interface/IGxImageClass/IGxImageClass.FromStream.htm)
		 Метод FromStream возвращает
		 изображение, полученное из потока.


## Свойства объекта класса, унаследованные от [IGxBitmap](../../Interface/IGxBitmap/IGxBitmap.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Pixel](../../Interface/IGxBitmap/IGxBitmap.Pixel.htm)
		 Свойство Pixel определяет
		 цвет отдельного пикселя с указанными координатами.


## Свойства объекта класса, унаследованные от [IGxImage](../../Interface/IGxImage/IGxImage.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CornerPixel](../../Interface/IGxImage/IGxImage.CornerPixel.htm)
		 Свойство CornerPixel
		 возвращает цвет указанной угловой точки.


		 ![](../../Property_Image.gif)
		 [Flags](../../Interface/IGxImage/IGxImage.Flags.htm)
		 Свойство Flags возвращает
		 параметры изображения.


		 ![](../../Property_Image.gif)
		 [Height](../../Interface/IGxImage/IGxImage.Height.htm)
		 Свойство Height возвращает
		 высоту изображения в пикселях.


		 ![](../../Property_Image.gif)
		 [HorizontalResolution](../../Interface/IGxImage/IGxImage.HorizontalResolution.htm)
		 Свойство HorizontalResolution
		 возвращает горизонтальное разрешение изображения в точках на дюйм.


		 ![](../../Property_Image.gif)
		 [PhysicalDimension](../../Interface/IGxImage/IGxImage.PhysicalDimension.htm)
		 Свойство PhysicalDimension
		 возвращает размер изображения в пикселях на дюйм.


		 ![](../../Property_Image.gif)
		 [PixelFormat](../../Interface/IGxImage/IGxImage.PixelFormat.htm)
		 Свойство PixelFormat
		 возвращает формат пикселей изображения.


		 ![](../../Property_Image.gif)
		 [RawFormat](../../Interface/IGxImage/IGxImage.RawFormat.htm)
		 Свойство RawFormat
		 возвращает формат изображения.


		 ![](../../Property_Image.gif)
		 [Size](../../Interface/IGxImage/IGxImage.Size.htm)
		 Свойство Size возвращает
		 размеры изображения в пикселях.


		 ![](../../Property_Image.gif)
		 [VerticalResolution](../../Interface/IGxImage/IGxImage.VerticalResolution.htm)
		 Свойство VerticalResolution
		 возвращает вертикальное разрешение изображения в точках на дюйм.


		 ![](../../Property_Image.gif)
		 [Width](../../Interface/IGxImage/IGxImage.Width.htm)
		 Свойство Width возвращает
		 ширину изображения в пикселях.


## Методы объекта класса, унаследованные от [IGxBitmap](../../Interface/IGxBitmap/IGxBitmap.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [SetResolution](../../Interface/IGxBitmap/IGxBitmap.SetResolution.htm)
		 Метод SetResolution
		 устанавливает разрешение изображения.


## Методы объекта класса, унаследованные от [IGxImage](../../Interface/IGxImage/IGxImage.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Clone](../../Interface/IGxImage/IGxImage.Clone.htm)
		 Метод Clone создает
		 копию изображения.


		 ![](../../Sub_Image.gif)
		 [CopyRect](../../Interface/IGxImage/IGxImage.CopyRect.htm)
		 Метод CopyRect возвращает
		 часть текущего изображения, ограниченную указанным прямоугольником.


		 ![](../../Sub_Image.gif)
		 [CopyToClipboard](../../Interface/IGxImage/IGxImage.CopyToClipboard.htm)
		 Метод CopyToClipboard
		 осуществляет копирование изображения в буфер обмена.


		 ![](../../Sub_Image.gif)
		 [GetThumbnailImage](../../Interface/IGxImage/IGxImage.GetThumbnailImage.htm)
		 Метод GetThumbnailImage
		 создает миниатюру.


		 ![](../../Sub_Image.gif)
		 [RotateFlip](../../Interface/IGxImage/IGxImage.RotateFlip.htm)
		 Метод RotateFlip осуществляет
		 вращение и отражение изображения.


		 ![](../../Sub_Image.gif)
		 [SaveToFile](../../Interface/IGxImage/IGxImage.SaveToFile.htm)
		 Метод SaveToFile осуществляет
		 сохранение изображения в файл.


		 ![](../../Sub_Image.gif)
		 [SaveToFileEncoded](../../Interface/IGxImage/IGxImage.SaveToFileEncoded.htm)
		 Метод SaveToFileEncoded осуществляет
		 сохранение изображения в файл в указанном формате.


		 ![](../../Sub_Image.gif)
		 [SaveToStream](../../Interface/IGxImage/IGxImage.SaveToStream.htm)
		 Метод SaveToStream
		 осуществляет сохранение изображения в поток, передаваемый посредством
		 входного параметра.


		 ![](../../Sub_Image.gif)
		 [SaveToStreamEncoded](../../Interface/IGxImage/IGxImage.SaveToStreamEncoded.htm)
		 Метод SaveToStreamEncoded
		 осуществляет сохранение изображения в поток в указанном формате.


См. также:


[Классы сборки Drawing](../ModDrawing_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
