# IFileSystemInfo.FullName

IFileSystemInfo.FullName
-


# IFileSystemInfo.FullName


## Синтаксис


FullName: String;


## Описание


Свойство FullName возвращает полный путь и наименование файла.


## Пример


	Sub UserProc;

	Var

	    Dir: IDirectoryInfo;

	    FileSInfo: IFileSystemInfo;

	    s: String;

	Begin

	    Dir:=New DirectoryInfo.Attach("c:\New_folder");

	    If Dir.Exists And (Dir.GetFiles("*").Count<>0) Then

	        s:=Dir.GetFiles("*").Item(0).Extension;

	    End If;

	    Dispose Dir;

	End Sub UserProc;


После выполнения примера, если папка «New_folder» существует и в ней
 содержаться файлы, то в переменной «s» будет содержаться полный путь и
 наименование первого файла.


См.также:


[IFileSystemInfo](IFileSystemInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
