# GxImage.CreateFromClipboard

GxImage.CreateFromClipboard
-


# GxImage.CreateFromClipboard


## Синтаксис


CreateFromClipboard;


## Описание


Конструктор CreateFromClipboard создает изображение на основе содержимого буфера обмена.


## Пример


			Function GetImageFromClipboard: IGxImage;

Var

    Img: IGxImage;

Begin

    Img := New GxImage.CreateFromClipboard;

    Return Img;

End Function GetImageFromClipboard;


Данная функция вернет изображение, полученное из буфера обмена.


См. также:


[GxImage](GxImage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
