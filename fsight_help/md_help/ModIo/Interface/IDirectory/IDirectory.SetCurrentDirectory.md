# IDirectory.SetCurrentDirectory

IDirectory.SetCurrentDirectory
-


# IDirectory.SetCurrentDirectory


## Синтаксис


SetCurrentDirectory(Path: String);


## Параметры


Path - каталог, который указывается в качестве рабочего каталога приложения.


## Описание


Метод SetCurrentDirectory изменяет рабочий каталог для приложения.


## Пример


			Sub UserProc(sPath: String);

Begin

    If Directory.Exists(sPath) Then

        Directory.SetCurrentDirectory(sPath);

    End If;

End Sub UserProc;


При выполнении примера осуществляется проверка наличия в файловой системе каталога, указанного в параметре «sPath». Если каталог существует, то он будет установлен в качестве рабочего каталога для текущего приложения.


См.также:


[IDirectory](IDirectory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
