# IPath.HasExtension

IPath.HasExtension
-


# IPath.HasExtension


## Синтаксис


HasExtension(Path: String): Boolean;


## Параметры


Path — путь для поиска расширения.


## Описание


Метод HasExtension возвращает признак наличия в пути расширения файла.


## Комментарии


Метод возвращает значение True, если путь содержит расширение файла, и False, если не содержит.


## Пример


	Sub UserProc;

	Var

	    Path_File, s: String;

	Begin

	    Path_File:="c:\Work\1.txt";

	    If Path.HasExtension(Path_File) Then

	        s:="Yes";

	    Else

	        s:="No";

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Yes», если
 в пути содержится расширение файла.


См. также:


[IPath](IPath.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
