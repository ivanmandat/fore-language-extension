# IDirectoryInfo.Create

IDirectoryInfo.Create
-


# IDirectoryInfo.Create


## Синтаксис


Create;


## Описание


Метод Create создает папку.


## Комментарии


Если папка уже существует, то будет сгенерирована исключительная ситуация.


## Пример


	Sub UserProc;

	Var

	    Dir: IDirectoryInfo;

	Begin

	    Dir:=New DirectoryInfo.Attach("c:\New_folder");

	    If Not Dir.Exists Then

	        Dir.Create;

	    End If;

	    Dispose Dir;

	End Sub UserProc;


После выполнения примера будет создана папка «New_folder», если она
 еще не существует.


См.также:


[IDirectoryInfo](IDirectoryInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
