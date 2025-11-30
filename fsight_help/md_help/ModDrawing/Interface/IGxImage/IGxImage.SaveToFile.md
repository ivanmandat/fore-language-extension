# IGxImage.SaveToFile

IGxImage.SaveToFile
-


# IGxImage.SaveToFile


## Синтаксис


SaveToFile(FileName: String);


## Параметры


FileName. Файл, в который будет сохранено изображение.


## Описание


Метод SaveToFile осуществляет
 сохранение изображения в файл.


## Комментарии


Если файл уже существует, то он будет перезаписан. Файл сохраняется
 в исходном формате. Если необходима смена формата, то используйте метод
 [SaveToFileEncoded](IGxImage.SaveToFileEncoded.htm). Для проверки
 формата изображения используйте свойство [RawFormat](IGxImage.RawFormat.htm).


## Пример


	Sub UserProc;

	Var

	    Img: IGxImage;

	    Format: IGxImageFormat;

	Begin

	    Img := ImageBox1.Image;

	    Format := Img.RawFormat;

	    If Format = GxImageFormats.Bmp Then

	        Img.SaveToFile("c:\New_Image.Bmp");

	    Elseif Format = GxImageFormats.Emf Then

	        Img.SaveToFile("c:\New_Image.Emf");

	    Elseif Format = GxImageFormats.Gif Then

	        Img.SaveToFile("c:\New_Image.Gif");

	    Elseif Format = GxImageFormats.Icon Then

	        Img.SaveToFile("c:\New_Image.Ico");

	    Elseif Format = GxImageFormats.Jpeg Then

	        Img.SaveToFile("c:\New_Image.Jpeg");

	    Elseif Format = GxImageFormats.MemoryBmp Then

	        Img.SaveToFile("c:\New_Image.Bmp");

	    Elseif Format = GxImageFormats.Png Then

	        Img.SaveToFile("c:\New_Image.Png");

	    Elseif Format = GxImageFormats.Tiff Then

	        Img.SaveToFile("c:\New_Image.Tiff");

	    Elseif Format = GxImageFormats.Wmf Then

	        Img.SaveToFile("c:\New_Image.Wmf");

	    End If;

	End Sub UserProc;


При нажатии на кнопку произойдет сохранение изображения, содержащегося
 в компоненте ImageBox1.


См. также:


[IGxImage](IGxImage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
