# IPath.GetTempPath

IPath.GetTempPath
-


# IPath.GetTempPath


## Синтаксис


GetTempPath: String;


## Описание


Метод GetTempPath возвращает путь временной папки для текущего пользователя системы.


## Пример


	Sub UserProc;

	Var

	    s: String;

	Begin

	    s:=Path.GetTempPath;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться путь временной
 папки для текущего пользователя.


См.также:


[IPath](IPath.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
