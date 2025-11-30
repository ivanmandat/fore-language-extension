# IPath.ChangeExtension

IPath.ChangeExtension
-


# IPath.ChangeExtension


## Синтаксис


ChangeExtension(Path: String; Extension: String): String;


## Параметры


Path - изменяемые сведения пути.


Extension - новое расширение. Для удаления из параметра Path существующего расширения задается пустая строка.


## Описание


Метод ChangeExtension возвращает строку, содержащую измененные сведения пути. Метод не производит никаких действий в файловой системе.


## Пример


	Sub UserProc;

	Var

	    Path_File, s: String;

	Begin

	    Path_File:="c:\Work\1.txt";

	    s:=Path.ChangeExtension(Path_File, ".xls");

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться путь «c:\Work\1.xls».


См.также:


[IPath](IPath.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
