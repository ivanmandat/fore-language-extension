# IFileInfo.Directory

IFileInfo.Directory
-


# IFileInfo.Directory


## Синтаксис


Directory: [IDirectoryInfo](../IDirectoryInfo/IDirectoryInfo.htm);


## Описание


Свойство Directory возвращает
 описание директории, в которой находится файл.


## Пример


	Sub UserProc;

	Var

	    FileInf: IFileInfo;

	    DirInfo: IDirectoryInfo;

	    d: DateTime;

	Begin

	    FileInf:=New FileInfo.Attach("c:\Work\1.txt");

	    If FileInf.Exists Then

	        DirInfo:=FileInf.Directory;

	        d:=DirInfo.CreationTime;

	    End If;

	    Dispose FileInf;

	End Sub UserProc;


После выполнения примера в переменной «d» будет содержаться дата и время
 создания папки, в которой находится файл «1.txt».


См. также:


[IFileInfo](IFileInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
