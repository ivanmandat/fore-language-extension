# IDirectoryInfo.CreateSubdirectory

IDirectoryInfo.CreateSubdirectory
-


# IDirectoryInfo.CreateSubdirectory


## Синтаксис


CreateSubdirectory(Path: String): [IDirectoryInfo](IDirectoryInfo.htm);


## Параметры


Path — путь, включающий в себя наименование подкаталога, который необходимо создать.


## Описание


Метод CreateSubdirectory создает подкаталог.


## Пример


	Sub UserProc;

	Var

	    Dir: IDirectoryInfo;

	Begin

	    Dir:=New DirectoryInfo.Attach("c:\New_folder");

	    If Dir.Exists Then

	        Dir.CreateSubdirectory("Folder_1");

	    End If;

	    Dispose Dir;

	End Sub UserProc;


После выполнения примера в папке «New_folder» будет создан подкаталог
 «Folder_1».


См.также:


[IDirectoryInfo](IDirectoryInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
