# IDirectoryInfo.MoveTo

IDirectoryInfo.MoveTo
-


# IDirectoryInfo.MoveTo


## Синтаксис


MoveTo(Destination: String);


## Параметры


Destination — путь, соответствующий директории, в которую необходимо перенести.


## Описание


Метод MoveTo осуществляет перенос директории со всем содержимым.


## Пример


	Sub UserProc;

	Var

	    Dir: IDirectoryInfo;

	Begin

	    Dir:=New DirectoryInfo.Attach("c:\New_folder");

	    If Dir.Exists Then

	        Dir.MoveTo("c:\Temp");

	    End If;

	    Dispose Dir;

	End Sub UserProc;


После выполнения примера папка «New_folder» со всем содержимы будет
 перемещена в «Temp».


См.также:


[IDirectoryInfo](IDirectoryInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
