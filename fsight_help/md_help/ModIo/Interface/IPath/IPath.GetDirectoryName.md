# IPath.GetDirectoryName

IPath.GetDirectoryName
-


# IPath.GetDirectoryName


## Синтаксис


GetDirectoryName(Path: String): String;


## Параметры


Path — путь к файлу или папке.


## Описание


Метод GetDirectoryName возвращает для указанного пути сведения о папке.


## Пример


	Sub UserProc;

	Var

	    Path_File, s: String;

	Begin

	    Path_File:="c:\Work\1.txt";

	    s:=Path.GetDirectoryName(Path_File);

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться путь к директории,
 в которой содержится файл «1.txt».


См.также:


[IPath](IPath.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
