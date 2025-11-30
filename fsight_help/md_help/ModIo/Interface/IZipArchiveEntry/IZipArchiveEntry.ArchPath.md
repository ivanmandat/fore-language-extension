# IZipArchiveEntry.ArchPath

IZipArchiveEntry.ArchPath
-


# IZipArchiveEntry.ArchPath


## Синтаксис


ArchPath: String;


## Описание


Свойство ArchPath возвращает
 путь до элемента внутри архива.


## Комментарии


Если текущий элемент соответствует файлу, то свойство возвращает путь
 и наименование файла, например, «File.txt» или «Folder/File.txt».


Если текущий элемент соответствует папке, то свойство возвращает путь
 до папки с добавленным в конце слешем, например, «Folder/» или «Folder/SubFolder/».


## Пример


Для выполнения примера предполагается наличие на диске архива «D:\Work\Archives\Data.zip».


Добавьте ссылку на системную сборку IO.


	Sub UserProc;

	Var

	    ZIP: IZipArchive;

	    ZIPEntry: IZipArchiveEntry;

	    i, c: Integer;

	Begin

	    //Чтение архива

	    ZIP := New ZipArchive.Create("D:\Work\Archives\Data.zip", ZipMode.Read);

	    c := ZIP.Count;

	    //Просмотр содержимого архива

	    For i := 0 To c - 1 Do

	        ZIPEntry := ZIP.Item(i);

	        If Path.GetExtension(ZIPEntry.ArchPath) = "" Then

	            Debug.WriteLine("Папка: " + ZIPEntry.ArchPath);

	        Else

	            Debug.WriteLine("Файл: " + ZIPEntry.ArchPath + ". Исходный размер файла: " + ZIPEntry.Size.ToString + " байт." +

	                + " Дата последней модификации: " + ZIPEntry.ModificationDate.ToString);

	        End If;

	    End For;

	    Dispose ZIP;

	End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведена информация
 о содержимом указанного архива.


См. также:


[IZipArchiveEntry](IZipArchiveEntry.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
