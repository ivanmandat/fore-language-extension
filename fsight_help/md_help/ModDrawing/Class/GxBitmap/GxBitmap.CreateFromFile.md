# GxBitmap.CreateFromFile

GxBitmap.CreateFromFile
-


# GxBitmap.CreateFromFile


## Синтаксис


CreateFromFile(FileName: String);


## Параметры


FileName. Путь и наименование файла, содержащего изображение.


## Описание


Конструктор CreateFromFile создает новое растровое изображение на основе файла, указанного в параметре FileName.


## Пример


			Function GetBmpFromFile(FileName: String): IGxBitmap;

Var

    Bmp: IGxBitmap;

Begin

    If File.Exists(FileName) Then

        Bmp := New GxBitmap.CreateFromFile(FileName);

        Return Bmp;

    Else

        Return Null;

    End If;

End Function GetBmpFromFile;


Данная функция вернет изображение, полученное из файла, путь к которому указан в качестве входного параметра.


См. также:


[GxBitmap](GxBitmap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
