# IFileSystemInfoList.Item

IFileSystemInfoList.Item
-


# IFileSystemInfoList.Item


## Синтаксис


Item(Index: Integer): [IFileSystemInfo](../IFileSystemInfo/IFileSystemInfo.htm);


## Параметры


Index — индекс элемента коллекции.


## Описание


Свойство Item возвращает информацию о элементе коллекции, индекс которого передается посредством параметра Index.


## Пример


	Sub UserProc;

	Var

	    DirInfo: IDirectoryInfo;

	    SysInfoList: IFileSystemInfoList;

	    s: String;

	Begin

	    DirInfo:=New DirectoryInfo.Attach("c:\New_folder");

	    If DirInfo.Exists Then

	        SysInfoList:=DirInfo.GetFileSystemInfos("*");

	        s:=SysInfoList.Item(0).Name;

	    End If;

	    Dispose DirInfo;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 первого элемента коллекции.


См.также:


[IFileSystemInfoList](IFileSystemInfoList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
