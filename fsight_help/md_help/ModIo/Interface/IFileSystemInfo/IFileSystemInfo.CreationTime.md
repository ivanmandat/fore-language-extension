# IFileSystemInfo.CreationTime

IFileSystemInfo.CreationTime
-


# IFileSystemInfo.CreationTime


## Синтаксис


CreationTime: DateTime;


## Описание


Свойство CreationTime определяет дату и время создания файла.


## Комментарии


Свойство поддерживается только в ОС Windows.


## Пример


Для выполнения примера предполагается наличие файла C:\1.txt.


Добавьте ссылку на системную сборку IO.


			Sub UserProc;

Var

    FileSInfo: IFileSystemInfo;

Begin

    FileSInfo := New FileInfo.Attach("c:\1.txt");

    If FileSInfo.Exists Then

        Debug.WriteLine("Дата создания: " + FileSInfo.CreationTime.ToString);

        Debug.WriteLine("Дата последнего открытия: " + FileSInfo.LastAccessTime.ToString);

        FileSInfo.LastWriteTime := DateTime.Now;

    End If;

    Dispose FileSInfo;

End Sub UserProc;


В результате выполнения примера будет осуществлена проверка существования
 файла C:\1.txt. Если файл существует, то в консоль среды разработки будет
 выведена дата и время его создания и последнего открытия. Также для файла
 в качестве даты последнего изменения будет установлена текущая дата.


См.также:


[IFileSystemInfo](IFileSystemInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
