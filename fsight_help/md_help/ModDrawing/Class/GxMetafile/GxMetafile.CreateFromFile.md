# GxMetafile.CreateFromFile

GxMetafile.CreateFromFile
-


# GxMetafile.CreateFromFile


## Синтаксис


CreateFromFile(FileName: String);


## Параметры


FileName. Путь до метафайла Windows и его наименование.


## Описание


Конструктор CreateFromFile создает новый метафайл Windows на основе файла, указанного в параметре FileName.


## Пример


			Function GetMetafileFromFile(FileName: String): IGxMetafile;

Var

    Mtf: IGxMetafile;

Begin

    If File.Exists(FileName) Then

        Mtf := New GxMetafile.CreateFromFile(FileName);

        Return Mtf;

    Else

        Return Null;

    End If;

End Function GetMetafileFromFile;


Данная функция вернет метафайл, полученный из файла, путь к которому указан в качестве входного параметра.


См. также:


[GxImage](../GxImage/GxImage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
