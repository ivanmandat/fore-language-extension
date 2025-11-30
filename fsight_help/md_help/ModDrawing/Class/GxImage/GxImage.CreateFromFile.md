# GxImage.CreateFromFile

GxImage.CreateFromFile
-


# GxImage.CreateFromFile


## Синтаксис


CreateFromFile(FileName: String);


## Параметры


FileName. Путь и наименование файла, содержащего изображение.


## Описание


Конструктор CreateFromFile создает новое изображение на основе файла, указанного в параметре FileName.


## Пример


			Function GetImageFromFile(FileName: String): IGxImage;

Var

    Img: IGxImage;

Begin

    If File.Exists(FileName) Then

        Img := New GxImage.CreateFromFile(FileName);

        Return Img;

    Else

        Return Null;

    End If;

End Function GetImageFromFile;


Данная функция вернет изображение, полученное из файла, путь к которому указан в качестве входного параметра.


См. также:


[GxImage](GxImage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
