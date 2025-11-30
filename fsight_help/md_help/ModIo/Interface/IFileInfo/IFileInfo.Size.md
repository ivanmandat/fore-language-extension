# IFileInfo.Size

IFileInfo.Size
-


# IFileInfo.Size


## Синтаксис


Size: Integer;


## Описание


Свойство Size возвращает размер
 файла (до 2-х Гб) в байтах.


## Комментарии


Для получения размера любого файла используйте свойство [IFileInfo.SizeEx](IFileInfo.SizeEx.htm).


## Пример


Для выполнения примера в файловой системе предполагается наличие файла
 «C:\Application.txt» размером менее 2-х гигабайт.


Добавьте ссылку на системную сборку «IO».


			Sub UserProc;

Var

    FileInf: IFileInfo;

Begin

    FileInf := New FileInfo.Attach("C:\Application.txt");

    If FileInf.Exists Then

        Debug.WriteLine(FileInf.Size);

    End If;

    Dispose FileInf;

End Sub UserProc;


После выполнения примера в окно консоли будет выведен размер файла «C:\Application.txt».


См. также:


[IFileInfo](IFileInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
