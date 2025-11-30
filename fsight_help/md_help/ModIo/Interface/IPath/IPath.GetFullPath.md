# IPath.GetFullPath

IPath.GetFullPath
-


# IPath.GetFullPath


## Синтаксис


GetFullPath(Path: String): String;


## Параметры


Path — файл или папка, для которых нужно получить абсолютный путь.


## Описание


Метод GetFullPath возвращает для указанной строки абсолютный путь. Абсолютный путь возвращается с учетом рабочей директории приложения, его существование на диске необязательно.


## Пример


	Sub UserProc;

	Var

	    Path_File, s: String;

	Begin

	    Path_File:="c:\Work\1.txt";

	    s:=Path.GetFullPath(Path_File);

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться абсолютный
 путь для файла «1.txt».


См.также:


[IPath](IPath.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
