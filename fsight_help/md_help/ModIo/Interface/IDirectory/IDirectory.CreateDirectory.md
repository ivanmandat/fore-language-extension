# IDirectory.CreateDirectory

IDirectory.CreateDirectory
-


# IDirectory.CreateDirectory


## Синтаксис


CreateDirectory(Path: String);


## Параметры


Path - путь к каталогу, который необходимо создать.


## Описание


Метод CreateDirectory создает указанный каталог.


## Комментарии


Если каталог уже существует, то будет сгенерирована исключительная ситуация.


## Пример


			Sub UserProc(sPath: String);

Begin

    If Not Directory.Exists(sPath) Then

        Directory.CreateDirectory(sPath);

    End If;

End Sub UserProc;


При выполнении примера осуществляется проверка наличия в файловой системе каталога, указанного в параметре «sPath». Если каталог не существует, то он будет создан.


См.также:


[IDirectory](IDirectory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
