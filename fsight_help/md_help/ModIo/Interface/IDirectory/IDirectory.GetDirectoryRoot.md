# IDirectory.GetDirectoryRoot

IDirectory.GetDirectoryRoot
-


# IDirectory.GetDirectoryRoot


## Синтаксис


GetDirectoryRoot(Path: String): String;


## Параметры


Path - путь, соответствующий директории, корневой каталог которой необходимо получить.


## Описание


Метод GetDirectoryRoot возвращает путь корневого каталога директории, передаваемой посредством параметра Path.


## Комментарии


Path может содержать сведения об абсолютном или относительном пути. Если каталог, указанный в Path, не существует, то генерируется исключительная ситуация.


## Пример


			Sub UserProc;

Var

    Root: String;

Begin

    Root := Directory.GetDirectoryRoot(Directory.GetCurrentDirectory);

    Debug.WriteLine(Root);

End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведен путь корневого каталога рабочей директории текущего приложения.


См.также:


[IDirectory](IDirectory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
