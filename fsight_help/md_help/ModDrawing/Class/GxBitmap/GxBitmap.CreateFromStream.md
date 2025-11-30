# GxBitmap.CreateFromStream

GxBitmap.CreateFromStream
-


# GxBitmap.CreateFromStream


## Синтаксис


CreateFromStream(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm));


## Параметры


Stream. Поток, содержащий растровое изображение.


## Описание


Конструктор CreateFromStream создает новое растровое изображение на основе содержимого потока, передаваемого посредством параметра Stream.


## Пример


			Function GetBmpFromStream(BmpStream: IIOStream): IGxBitmap;

Var

    Bmp: IGxBitmap;

Begin

    If BmpStream.Size <> 0 Then

        Bmp := New GxBitmap.CreateFromStream(BmpStream);

        Return Bmp;

    Else

        Return Null;

    End If;

End Function GetBmpFromStream;


Данная функция вернет изображение, полученное из потока, который указан в качестве входного параметра.


См. также:


[GxBitmap](GxBitmap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
