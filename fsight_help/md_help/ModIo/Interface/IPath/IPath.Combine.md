# IPath.Combine

IPath.Combine
-


# IPath.Combine


## Синтаксис


Combine(Path1: String; Path2: String): String;


## Параметры


Path1 — первый путь.


Path2 — второй путь.


## Описание


Метод Combine осуществляет объединение двух строк пути, передаваемых посредством параметров Path1 и Path2.


## Пример


	Sub UserProc;

	Var

	    Path1, Path2, s: String;

	Begin

	    Path1:="c:\Work\";

	    Path2:="SubDir\1.txt";

	    s:=Path.Combine(Path1, Path2);

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться комбинированный
 путь.


См.также:


[IPath](IPath.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
