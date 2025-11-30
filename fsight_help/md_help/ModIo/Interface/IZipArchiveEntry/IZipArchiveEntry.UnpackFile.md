# IZipArchiveEntry.UnpackFile

IZipArchiveEntry.UnpackFile
-


# IZipArchiveEntry.UnpackFile


## Синтаксис


UnpackFile(Path: String);


## Параметры


Path. Путь к папке, в которую
 необходимо распаковать текущий элемент.


## Описание


Метод UnpackFile распаковывает
 текущий элемент в указанную папку на диске.


## Комментарии


Если текущий элемент соответствует папке, то распаковывается всё её
 содержимое с сохранением всей внутренней иерархии папок и файлов.


## Пример


Для выполнения примера предполагается наличие на диске архива «D:\Work\Archives\Data.zip».
 В архиве содержатся различные папки и файлы, в наименовании некоторых
 может присутствовать текст «Last».


Добавьте ссылку на системную сборку IO.


			Sub UserProc;

Var

    ZIP: IZipArchive;

    ZIPEntry: IZipArchiveEntry;

Begin

    ZIP := New ZipArchive.Create("D:\Work\Archives\Data.zip", ZipMode.Read);

    For Each ZIPEntry In ZIP Do

        If ZIPEntry.ArchPath.IndexOf("Last") <> -1 Then

            ZIPEntry.UnpackFile("D:\Work\Files");

        End If;

    End For;

    Dispose ZIP;

End Sub UserProc;


При выполнении примера осуществляется проверка элементов архива на наличие
 в своём наименовании текста «Last». Если указанный текст имеется, то данный
 папка/файл будут распакованы в указанный каталог.


См. также:


[IZipArchiveEntry](IZipArchiveEntry.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
