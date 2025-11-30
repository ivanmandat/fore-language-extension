# IZipArchive.Unpack

IZipArchive.Unpack
-


# IZipArchive.Unpack


## Синтаксис


Unpack(Path: String);


## Параметры


Path.
 Путь к папке, в которую необходимо распаковать архив.


## Описание


Метод Unpack распаковывает архив
 в указанную папку на диске.


## Пример


Для выполнения примера предполагается наличие на диске архива «D:\Work\Archives\Data.zip».


Добавьте ссылку на системную сборку IO.


			Sub UserProc;

Var

    ZIP: IZipArchive;

Begin

    //Чтение архива

    ZIP := New ZipArchive.Create("D:\Work\Archives\Data.zip", ZipMode.Read);

    //Распаковка архива

    ZIP.Unpack("D:\Work\NewFolder");

    Dispose ZIP;

End Sub UserProc;


При выполнении примера архив будет распакован в указанную папку.


См. также:


[IZipArchive](IZipArchive.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
