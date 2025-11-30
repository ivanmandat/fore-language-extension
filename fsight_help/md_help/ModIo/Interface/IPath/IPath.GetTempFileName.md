# IPath.GetTempFileName

IPath.GetTempFileName
-


# IPath.GetTempFileName


## Синтаксис


GetTempFileName: String;


## Описание


Метод GetTempFileName создает временный файл с уникальным именем и возвращает абсолютный путь к нему.


## Пример


	Sub UserProc;

	Var

	    s: String;

	Begin

	    s:=Path.GetTempFileName;

	End Sub UserProc;


После выполнения примера будет создан временный файл и в переменной
 «s» будет содержаться его уникальное имя.


См.также:


[IPath](IPath.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
