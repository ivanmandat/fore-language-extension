# IPath.GetFileName

IPath.GetFileName
-


# IPath.GetFileName


## Синтаксис


GetFileName(Path: String): String;


## Параметры


Path — путь к файлу.


## Описание


Метод GetFileName возвращает имя файла и расширение указанной строки пути.


## Пример


	Sub UserProc;

	Var

	    Path_File, s: String;

	Begin

	    Path_File:="c:\Work\1.txt";

	    s:=Path.GetFileName(Path_File);

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «1.txt».


См.также:


[IPath](IPath.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
