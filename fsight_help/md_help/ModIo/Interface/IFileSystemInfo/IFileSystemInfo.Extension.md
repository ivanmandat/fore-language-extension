# IFileSystemInfo.Extension

IFileSystemInfo.Extension
-


# IFileSystemInfo.Extension


## Синтаксис


Extension: String;


## Описание


Свойство Extension возвращает расширение файла, включая «.».


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
 содержаться файлы, то в переменной «s» будет содержаться расширение первого
 файла.


См.также:


[IFileSystemInfo](IFileSystemInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
