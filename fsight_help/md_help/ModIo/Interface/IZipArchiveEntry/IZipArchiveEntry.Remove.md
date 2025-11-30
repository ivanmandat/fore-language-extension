# IZipArchiveEntry.Remove

IZipArchiveEntry.Remove
-


# IZipArchiveEntry.Remove


## Синтаксис


Remove;


## Описание


Метод Remove удаляет текущий
 элемент из архива.


## Пример


Для выполнения примера предполагается наличие архива «D:\Work\Archives\Data.zip».
 В архив добавлена папка «Old».


Добавьте ссылку на системную сборку IO.


			Sub UserProc;

Var

    ZIP: IZipArchive;

    ZIPEntry: IZipArchiveEntry;

Begin

    ZIP := New ZipArchive.Create("D:\Work\Archives\Data.zip", ZipMode.Update);

    ZIPEntry := ZIP.ItemByName("Old/");

    If Not IsNull(ZIPEntry) Then

        ZIPEntry.Remove;

    End If;

    Dispose ZIP;

End Sub UserProc;


В результате выполнения примера из архива «Data.zip» будет удалена папка
 «Old».


См. также:


[IZipArchiveEntry](IZipArchiveEntry.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
