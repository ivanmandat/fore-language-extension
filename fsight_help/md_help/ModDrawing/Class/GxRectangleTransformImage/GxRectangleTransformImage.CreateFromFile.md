# GxRectangleTransformImage.CreateFromFile

GxRectangleTransformImage.CreateFromFile
-


# GxRectangleTransformImage.CreateFromFile


## Синтаксис


CreateFromFile(FileName: String);


## Параметры


FileName. Путь и наименование файла, содержащего изображение.


## Описание


Конструктор CreateFromFile создает новое изображение с фиксированными областями на основе файла, указанного в параметре FileName.


## Пример


			Function GetTransformImageFromFile(FileName: String; MLeft: Double; MTop: Double; MRight: Double; MBottom: Double): IGxRectangleTransformImage;

Var

    OutImg: IGxRectangleTransformImage;

    Margins: IGxMargins;

Begin

    If File.Exists(FileName) Then

        OutImg := New GxRectangleTransformImage.CreateFromFile(FileName);

        Margins := OutImg.Margins;

        Margins.Bottom := MBottom;

        Margins.Left := MLeft;

        Margins.Right := MRight;

        Margins.Top := MTop;

        Return OutImg;

    Else

        Return Null;

    End If;

End Function GetTransformImageFromFile;


Данная функция вернет изображение, полученное из файла. Изображение будет трансформировано путем введения фиксированных областей, размеры которых передаются посредством входных параметров.


См. также:


[GxRectangleTransformImage](GxRectangleTransformImage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
