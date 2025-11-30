# IZipArchiveEntry.Rename

IZipArchiveEntry.Rename
-


# IZipArchiveEntry.Rename


## Синтаксис


Rename(Name: String);


## Параметры


Name. Новое наименование.


## Описание


Метод Rename переименовывает
 файл/папку внутри архива.


## Пример


Для выполнения примера предполагается наличие архива «D:\Work\Archives\Data.zip».
 В архив добавлены папка «Other» и файл «WDI.xls» с данными.


Добавьте ссылку на системную сборку IO.


			Sub UserProc;

Var

    ZIP: IZipArchive;

    ZIPEntry: IZipArchiveEntry;

Begin

    ZIP := New ZipArchive.Create("D:\Work\Archives\Data.zip", ZipMode.Update);

    ZIPEntry := ZIP.ItemByName("Other/");

    ZIPEntry.Rename("Old");

    ZIPEntry := ZIP.ItemByName("WDI.xls");

    ZIPEntry.Rename("WDI_Old.xls");

    Dispose ZIP;

End Sub UserProc;


В результате выполнения примера в архиве «Data.zip» будут переименованы
 указанные папка и файл.


См. также:


[IZipArchiveEntry](IZipArchiveEntry.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
