# IDirectoryInfoList.Item

IDirectoryInfoList.Item
-


# IDirectoryInfoList.Item


## Синтаксис


Item(Index: Integer): [IDirectoryInfo](../IDirectoryInfo/IDirectoryInfo.htm);


## Параметры


Index — индекс элемента коллекции.


## Описание


Свойство Item возвращает описание элемента коллекции.


## Пример


	Sub UserProc;

	Var

	    DirInfo: IDirectoryInfo;

	    DirList: IDirectoryInfoList;

	    s: String;

	Begin

	    DirInfo:=New DirectoryInfo.Attach("c:\New_folder");

	    If DirInfo.Exists Then

	        DirList:=DirInfo.GetDirectories("*");

	        s:=DirList.Item(0).Name;

	    End If;

	    Dispose DirInfo;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 первого подкаталога директории «c:\New_folder».


См.также:


[IDirectoryInfoList](IDirectoryInfoList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
