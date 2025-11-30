# IZipArchive.AddFile

IZipArchive.AddFile
-


# IZipArchive.AddFile


## Синтаксис


AddFile(FilePath: String; ArchPath: String): [IZipArchiveEntry](../IZipArchiveEntry/IZipArchiveEntry.htm);


## Параметры


FilePath. Путь и наименование
 файла, который необходимо добавить в архив.


ArchPath. Путь к папке внутри
 архива и имя файла, с которым файл FilePath
 будет добавлен в архив.


## Описание


Метод AddFile добавляет указанный
 файл в архив.


## Комментарии


В качестве значения параметра ArchPath
 не может передаваться пустое значение. В ArchPath
 должно быть указано текущее или новое наименование файла. Также может
 быть указан путь до папки внутри архива, в которую необходимо добавить
 файл, например «Folder/SubFolder/NewFileName.txt».


## Пример


Пример использования приведён в описании конструктора [ZipArchive.Create](../../Class/ZipArchive/ZipArchive.Create.htm).


См. также:


[IZipArchive](IZipArchive.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
