# IFileInfoList.Count

IFileInfoList.Count
-


# IFileInfoList.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество элементов в коллекции.


## Пример


	Sub UserProc;

	Var

	    DirInfo: IDirectoryInfo;

	    FileList: IFileInfoList;

	    i: Integer;

	Begin

	    DirInfo:=New DirectoryInfo.Attach("c:\New_folder");

	    If DirInfo.Exists Then

	        FileList:=DirInfo.GetFiles("*");

	        i:=FileList.Count;

	    End If;

	    Dispose DirInfo;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 файлов директории «c:\New_folder».


См.также:


[IFileInfoList](IFileInfoList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
