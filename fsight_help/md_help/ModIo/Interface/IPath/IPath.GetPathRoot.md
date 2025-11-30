# IPath.GetPathRoot

IPath.GetPathRoot
-


# IPath.GetPathRoot


## Синтаксис


GetPathRoot(Path: String): String;


## Параметры


Path — путь, из которого нужно получить сведения корневой папки.


## Описание


Метод GetPathRoot возвращает путь к корневой папке.


## Пример


	Sub UserProc;

	Var

	    Path_File, s: String;

	Begin

	    Path_File:="c:\Work\1.txt";

	    s:=Path.GetPathRoot(Path_File);

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «c:\».


См.также:


[IPath](IPath.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
