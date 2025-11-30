# GxBitmap.CreateFromClipboard

GxBitmap.CreateFromClipboard
-


# GxBitmap.CreateFromClipboard


## Синтаксис


CreateFromClipboard;


## Описание


Конструктор CreateFromClipboard создает растровое изображение на основе содержимого буфера обмена.


## Пример


			Function GetBmpFromClipboard: IGxBitmap;

Var

    Bmp: IGxBitmap;

Begin

    Bmp := New GxBitmap.CreateFromClipboard;

    Return Bmp;

End Function GetBmpFromClipboard;


Данная функция вернет изображение, полученное из буфера обмена.


См. также:


[GxBitmap](GxBitmap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
