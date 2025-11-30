# IPath.GetFileNameWithoutExtension

IPath.GetFileNameWithoutExtension
-


# IPath.GetFileNameWithoutExtension


## Синтаксис


GetFileNameWithoutExtension(Path: String): String;


## Параметры


Path - путь к файлу.


## Описание


Метод GetFileName возвращает имя файла указанной строки пути без расширения.


## Пример


	Sub UserProc;

	Var

	    Path_File, s: String;

	Begin

	    Path_File:="c:\Work\1.txt";

	    s:=Path.GetFileNameWithoutExtension(Path_File);

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «1».


См.также:


[IPath](IPath.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
