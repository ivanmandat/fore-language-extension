# IPath.IsPathRooted

IPath.IsPathRooted
-


# IPath.IsPathRooted


## Синтаксис


IsPathRooted(Path: String): Boolean;


## Параметры


Path - проверяемый путь.


## Описание


Метод IsPathRooted возвращает признак наличия в указанной строке абсолютного пути к файлу.


Этот метод не проверяет существование пути или имени файла. Метод вернет значение True для строк, например, "\\MyDir\MyFile.txt" и "C:\MyDir", и значение False для строк, например, "MyDir\MyFile.txt".


## Пример


	Sub UserProc;

	Var

	    Path_File, s: String;

	Begin

	    Path_File:="c:\Work\1.txt";

	    If Path.IsPathRooted(Path_File) Then

	        s:="Yes";

	    Else

	        s:="No";

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Yes», если
 в пути содержится абсолютный путь к файлу.


См. также:


[IPath](IPath.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
