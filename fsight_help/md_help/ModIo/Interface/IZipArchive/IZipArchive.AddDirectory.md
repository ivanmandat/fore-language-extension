# IZipArchive.AddDirectory

IZipArchive.AddDirectory
-


# IZipArchive.AddDirectory


## Синтаксис


AddDirectory(DirectoryPath: String; [ArchPath: String
 = ""]): [IZipArchiveEntry](../IZipArchiveEntry/IZipArchiveEntry.htm);


## Параметры


DirectoryPath. Путь к папке
 на диске, которую необходимо добавить в архив.


ArchPath. Путь к папке внутри
 архива, в которую будет добавлена папка DirectoryPath.


## Описание


Метод AddDirectory добавляет
 указанную папку в архив со всем содержимым.


## Комментарии


По умолчанию параметр ArchPath
 не указан, при этом папка DirectoryPath
 добавляется в корень архива.


## Пример


Пример использования приведён в описании конструктора [ZipArchive.Create](../../Class/ZipArchive/ZipArchive.Create.htm).


См. также:


[IZipArchive](IZipArchive.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
