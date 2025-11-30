# IPath.GetExtension

IPath.GetExtension
-


# IPath.GetExtension


## Синтаксис


GetExtension(Path: String): String;


## Параметры


Path — строка пути, из которой нужно получить расширение.


## Описание


Метод GetExtension возвращает расширение указанной строки пути.


## Пример


	Sub UserProc;

	Var

	    Path_File, s: String;

	Begin

	    Path_File:="c:\Work\1.txt";

	    s:=Path.GetExtension(Path_File);

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «.txt».


См.также:


[IPath](IPath.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
