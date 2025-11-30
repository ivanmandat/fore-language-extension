# IDirectoryInfoList.Count

IDirectoryInfoList.Count
-


# IDirectoryInfoList.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество элементов в коллекции.


## Пример


	Sub UserProc;

	Var

	    DirInfo: IDirectoryInfo;

	    DirList: IDirectoryInfoList;

	    i: Integer;

	Begin

	    DirInfo:=New DirectoryInfo.Attach("c:\New_folder");

	    If DirInfo.Exists Then

	        DirList:=DirInfo.GetDirectories("*");

	        i:=DirList.Count;

	    End If;

	    Dispose DirInfo;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 подкаталогов директории «c:\New_folder».


См.также:


[IDirectoryInfoList](IDirectoryInfoList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
