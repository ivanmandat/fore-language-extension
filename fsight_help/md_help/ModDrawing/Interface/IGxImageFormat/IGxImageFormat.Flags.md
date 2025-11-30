# IGxImageFormat.Flags

IGxImageFormat.Flags
-


# IGxImageFormat.Flags


## Синтаксис


Flags: Integer;


## Описание


Свойство Flags возвращает атрибуты
 кодека изображения.


## Комментарии


Для проверки значений атрибутов используйте перечислимый тип [GxImageCodecFlags](../../Enums/GxImageCodecFlags.htm).


## Пример


Для выполнения примера предполагается наличие в файловой системе изображения
 C:\Map.bmp.


			Sub UserProc;

Var

    Image: IGxImage;

    ImgFormat: IGxImageFormat;

    f: integer;

Begin

    Image := GxImage.FromFile("C:\Map.bmp");

    ImgFormat := Image.RawFormat;

    f := ImgFormat.Flags;

    If (f And GxImageCodecFlags.Encoder) > 0 Then

        Debug.WriteLine("кодек поддерживает кодирование (сохранение)");

    End If;

    If (f And GxImageCodecFlags.Decoder) > 0 Then

        Debug.WriteLine("кодек поддерживает декодирование (чтение)");

    End If;

    If (f And GxImageCodecFlags.SupportBitmap) > 0 Then

        Debug.WriteLine("кодек поддерживает растровые изображения (точечные рисунки)");

    End If;

    If (f And GxImageCodecFlags.SupportVector) > 0 Then

        Debug.WriteLine("кодек поддерживает векторные изображения (метафайлы)");

    End If;

    If (f And GxImageCodecFlags.SeekableEncode) > 0 Then

        Debug.WriteLine("кодировщику требуется поток вывода с возможностью поиска");

    End If;

    If (f And GxImageCodecFlags.BlockingDecode) > 0 Then

        Debug.WriteLine("в процессе декодирования декодер выполняет блокировку");

    End If;

    If (f And GxImageCodecFlags.Builtin) > 0 Then

        Debug.WriteLine("кодек встроен в GDI+");

    End If;

End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведена информация
 об атрибутах кодека, который использует указанное изображение.


См. также:


[IGxImageFormat](IGxImageFormat.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
