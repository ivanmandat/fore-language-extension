# IFileSystemInfo.Delete

IFileSystemInfo.Delete
-


# IFileSystemInfo.Delete


## Синтаксис


Delete;


## Описание


Метод Delete осуществляет удаление файла.


## Пример


	Sub UserProc;

	Var

	    FileSInfo: IFileSystemInfo;

	Begin

	    FileSInfo:=New FileInfo.Attach("c:\1.txt");

	    If FileSInfo.Exists Then

	        FileSInfo.Delete;

	    End If;

	Dispose FileSInfo;

	End Sub UserProc;


После выполнения примера будет удален файла «1.txt», если он существует.


См.также:


[IFileSystemInfo](IFileSystemInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
