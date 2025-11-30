# IZipArchive.ItemByName

IZipArchive.ItemByName
-


# IZipArchive.ItemByName


## Синтаксис


ItemByName(Name: String): [IZipArchiveEntry](../IZipArchiveEntry/IZipArchiveEntry.htm);


## Параметры


Name. Наименование элемента
 архива.


## Описание


Свойство ItemByName возвращает
 информацию об элементе архива с указанным наименованием.


## Комментарии


Для получения элемента в архиве в качестве значения параметра Name необходимо указывать следующее:


	- Наименование файла, если файл расположен в корне архива, например
	 «File.txt»;


	- Путь и наименование файла внутри архива, если файл расположен
	 в какой-либо папке, например «Folder/File.txt»;


	- Наименование папки или полный путь до папки и слеш, например
	 «Folder/» или «Folder/SubFolder/».


Если элемент с указанным наименованием отсутствует в архиве, то метод
 возвращает значение Null.


## Пример


Пример использования приведён в описании методов [IZipArchiveEntry.Remove](../IZipArchiveEntry/IZipArchiveEntry.Remove.htm),
 [IZipArchiveEntry.Rename](../IZipArchiveEntry/IZipArchiveEntry.Rename.htm).


См. также:


[IZipArchive](IZipArchive.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
