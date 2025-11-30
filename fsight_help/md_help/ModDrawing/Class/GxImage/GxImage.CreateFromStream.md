# GxImage.CreateFromStream

GxImage.CreateFromStream
-


# GxImage.CreateFromStream


## Синтаксис


CreateFromStream(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm));


## Параметры


Stream. Поток, содержащий графическое изображение.


## Описание


Конструктор CreateFromStream создает новое изображение на основе содержимого потока, передаваемого посредством параметра Stream.


## Пример


			Function GetImageFromStream(ImgStream: IIOStream): IGxImage;

Var

    Img: IGxImage;

Begin

    If ImgStream.Size <> 0 Then

        Img := New GxImage.CreateFromStream(ImgStream);

        Return Img;

    Else

        Return Null;

    End If;

End Function GetImageFromStream;


Данная функция вернет изображение, полученное из потока, который указан в качестве входного параметра.


См. также:


[GxImage](GxImage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
