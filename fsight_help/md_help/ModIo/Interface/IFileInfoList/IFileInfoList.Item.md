# IFileInfoList.Item

IFileInfoList.Item
-


# IFileInfoList.Item


## Синтаксис


Item(Index: Integer): [IFileInfo](../IFileInfo/IFileInfo.htm);


## Параметры


Index — индекс элемента коллекции.


## Описание


Свойство Item возвращает описание элемента коллекции.


## Пример


	Sub UserProc;

	Var

	    DirInfo: IDirectoryInfo;

	    FileList: IFileInfoList;

	    s: String;

	Begin

	    DirInfo:=New DirectoryInfo.Attach("c:\New_folder");

	    If DirInfo.Exists Then

	        FileList:=DirInfo.GetFiles("*");

	        s:=FileList.Item(0).Name;

	    End If;

	    Dispose DirInfo;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 первого файла, находящегося в директории «c:\New_folder».


См.также:


[IFileInfoList](IFileInfoList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
