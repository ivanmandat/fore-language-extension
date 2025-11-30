# IFileInfo.SizeEx

IFileInfo.SizeEx
-


# IFileInfo.SizeEx


## Синтаксис Fore


SizeEx: Variant;


## Описание


Свойство SizeEx возвращает размер
 файла в байтах.


## Комментарии


Какие-либо ограничения на размер файла не накладываются.


## Пример


Для выполнения примера в файловой системе предполагается наличие файла
 «C:\Application.log».


Добавьте ссылку на системную сборку «IO».


			Sub UserProc;

Var

    FileInf: IFileInfo;

Begin

    FileInf := New FileInfo.Attach("C:\Application.log");

    If FileInf.Exists Then

        Debug.WriteLine(FileInf.SizeEx);

    End If;

    Dispose FileInf;

End Sub UserProc;


После выполнения примера в окно консоли будет выведен размер файла «C:\Application.log».


См. также:


[IFileInfo](IFileInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
