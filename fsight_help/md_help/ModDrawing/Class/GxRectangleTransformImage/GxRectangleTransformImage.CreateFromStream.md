# GxRectangleTransformImage.CreateFromStream

GxRectangleTransformImage.CreateFromStream
-


# GxRectangleTransformImage.CreateFromStream


## Синтаксис


CreateFromStream(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm));


## Параметры


Stream. Поток, содержащий изображение.


## Описание


Конструктор CreateFromStream создает новое изображение, содержащее фиксированные области, на основе содержимого потока, передаваемого посредством параметра Stream.


## Пример


			Function GetTransformImageFromStream(ImgStream: IIOStream; MLeft: Double; MTop: Double; MRight: Double; MBottom: Double): IGxRectangleTransformImage;

Var

    OutImg: IGxRectangleTransformImage;

    Margins: IGxMargins;

Begin

    If ImgStream.Size <> 0 Then

        OutImg := New GxRectangleTransformImage.CreateFromStream(ImgStream);

        Margins := OutImg.Margins;

        Margins.Bottom := MBottom;

        Margins.Left := MLeft;

        Margins.Right := MRight;

        Margins.Top := MTop;

        Return OutImg;

    Else

        Return Null;

    End If;

End Function GetTransformImageFromStream;


Данная функция вернет изображение, полученное из потока. Изображение будет трансформировано путем введения фиксированных областей, размеры которых передаются посредством входных параметров.


См. также:


[GxRectangleTransformImage](GxRectangleTransformImage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
