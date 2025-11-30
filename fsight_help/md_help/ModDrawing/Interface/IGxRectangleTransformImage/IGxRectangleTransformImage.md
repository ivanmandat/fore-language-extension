# IGxRectangleTransformImage

IGxRectangleTransformImage
-


# IGxRectangleTransformImage


Сборка: Drawing;


## Описание


Интерфейс IGxRectangleTransformImage
 содержит свойства и методы изображения, изменённого за счет использования
 фиксированных отступов.


## Комментарии


Изображение условно разбивается на 9 частей:


![](IGxRectangleTransformImage.gif)


При отрисовке изображения части A, C, G, I не подлежат масштабированию.
 Части B, H подлежат масштабированию только по горизонтали. Части D, F
 подлежат масштабированию только по вертикали. Часть E масштабируется полностью.
 Доступ к параметрам фиксированных отступов осуществляется посредством
 свойства [Margins](IGxRectangleTransformImage.Margins.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Margins](IGxRectangleTransformImage.Margins.htm)
		 Свойство Margins определяет
		 параметры фиксированных отступов графического изображения.


## Свойства, унаследованные от [IGxTransformImage](../IGxTransformImage/IGxTransformImage.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Unit](../IGxTransformImage/IGxTransformImage.Unit.htm)
		 Свойство Unit определяет
		 единицы измерения, используемые для задания параметров графического
		 изображения.


## Свойства, унаследованные от [IGxImage](../IGxImage/IGxImage.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CornerPixel](../IGxImage/IGxImage.CornerPixel.htm)
		 Свойство CornerPixel
		 возвращает цвет указанной угловой точки.


		 ![](../../Property_Image.gif)
		 [Flags](../IGxImage/IGxImage.Flags.htm)
		 Свойство Flags возвращает
		 параметры изображения.


		 ![](../../Property_Image.gif)
		 [Height](../IGxImage/IGxImage.Height.htm)
		 Свойство Height возвращает
		 высоту изображения в пикселях.


		 ![](../../Property_Image.gif)
		 [HorizontalResolution](../IGxImage/IGxImage.HorizontalResolution.htm)
		 Свойство HorizontalResolution
		 возвращает горизонтальное разрешение изображения в точках на дюйм.


		 ![](../../Property_Image.gif)
		 [PhysicalDimension](../IGxImage/IGxImage.PhysicalDimension.htm)
		 Свойство PhysicalDimension
		 возвращает размер изображения в пикселях на дюйм.


		 ![](../../Property_Image.gif)
		 [PixelFormat](../IGxImage/IGxImage.PixelFormat.htm)
		 Свойство PixelFormat
		 возвращает формат пикселей изображения.


		 ![](../../Property_Image.gif)
		 [RawFormat](../IGxImage/IGxImage.RawFormat.htm)
		 Свойство RawFormat
		 возвращает формат изображения.


		 ![](../../Property_Image.gif)
		 [Size](../IGxImage/IGxImage.Size.htm)
		 Свойство Size возвращает
		 размеры изображения в пикселях.


		 ![](../../Property_Image.gif)
		 [VerticalResolution](../IGxImage/IGxImage.VerticalResolution.htm)
		 Свойство VerticalResolution
		 возвращает вертикальное разрешение изображения в точках на дюйм.


		 ![](../../Property_Image.gif)
		 [Width](../IGxImage/IGxImage.Width.htm)
		 Свойство Width возвращает
		 ширину изображения в пикселях.


## Методы, унаследованные от [IGxImage](../IGxImage/IGxImage.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Clone](../IGxImage/IGxImage.Clone.htm)
		 Метод Clone создает
		 копию изображения.


		 ![](../../Sub_Image.gif)
		 [CopyRect](../IGxImage/IGxImage.CopyRect.htm)
		 Метод CopyRect возвращает
		 часть текущего изображения, ограниченную указанным прямоугольником.


		 ![](../../Sub_Image.gif)
		 [CopyToClipboard](../IGxImage/IGxImage.CopyToClipboard.htm)
		 Метод CopyToClipboard
		 осуществляет копирование изображения в буфер обмена.


		 ![](../../Sub_Image.gif)
		 [GetThumbnailImage](../IGxImage/IGxImage.GetThumbnailImage.htm)
		 Метод GetThumbnailImage
		 создает миниатюру.


		 ![](../../Sub_Image.gif)
		 [RotateFlip](../IGxImage/IGxImage.RotateFlip.htm)
		 Метод RotateFlip осуществляет
		 вращение и отражение изображения.


		 ![](../../Sub_Image.gif)
		 [SaveToFile](../IGxImage/IGxImage.SaveToFile.htm)
		 Метод SaveToFile осуществляет
		 сохранение изображения в файл.


		 ![](../../Sub_Image.gif)
		 [SaveToFileEncoded](../IGxImage/IGxImage.SaveToFileEncoded.htm)
		 Метод SaveToFileEncoded осуществляет
		 сохранение изображения в файл в указанном формате.


		 ![](../../Sub_Image.gif)
		 [SaveToStream](../IGxImage/IGxImage.SaveToStream.htm)
		 Метод SaveToStream
		 осуществляет сохранение изображения в поток, передаваемый посредством
		 входного параметра.


		 ![](../../Sub_Image.gif)
		 [SaveToStreamEncoded](../IGxImage/IGxImage.SaveToStreamEncoded.htm)
		 Метод SaveToStreamEncoded
		 осуществляет сохранение изображения в поток в указанном формате.


См. также:


[Интерфейсы сборки Drawing](../ModDrawing_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
