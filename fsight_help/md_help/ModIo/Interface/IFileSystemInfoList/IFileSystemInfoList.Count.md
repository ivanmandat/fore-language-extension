# IFileSystemInfoList.Count

IFileSystemInfoList.Count
-


# IFileSystemInfoList.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество элементов в коллекции.


## Пример


	Sub UserProc;

	Var

	    DirInfo: IDirectoryInfo;

	    SysInfoList: IFileSystemInfoList;

	    i: Integer;

	Begin

	    DirInfo:=New DirectoryInfo.Attach("c:\New_folder");

	    If DirInfo.Exists Then

	        SysInfoList:=DirInfo.GetFileSystemInfos("*");

	        i:=SysInfoList.Count;

	    End If;

	    Dispose DirInfo;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 подкаталогов и файлов директории «c:\New_folder».


См.также:


[IFileSystemInfoList](IFileSystemInfoList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
