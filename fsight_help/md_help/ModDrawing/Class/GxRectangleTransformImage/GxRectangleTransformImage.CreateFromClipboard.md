# GxRectangleTransformImage.CreateFromClipboard

GxRectangleTransformImage.CreateFromClipboard
-


# GxRectangleTransformImage.CreateFromClipboard


## Синтаксис


CreateFromClipboard;


## Описание


Конструктор CreateFromClipboard создает изображение с фиксированными областями на основе содержимого буфера обмена.


## Пример


			Function GetTransformImage(MLeft: Double; MTop: Double; MRight: Double; MBottom: Double): IGxRectangleTransformImage;

Var

    OutImg: IGxRectangleTransformImage;

    Margins: IGxMargins;

Begin

    OutImg := New GxRectangleTransformImage.CreateFromClipboard;

    Margins := OutImg.Margins;

    Margins.Bottom := MBottom;

    Margins.Left := MLeft;

    Margins.Right := MRight;

    Margins.Top := MTop;

    Return OutImg;

End Function GetTransformImage;


Данная функция вернет изображение, полученное из буфера обмена. Изображение будет трансформировано путем введения фиксированных областей, размеры которых передаются посредством входных параметров.


См. также:


[GxRectangleTransformImage](GxRectangleTransformImage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
