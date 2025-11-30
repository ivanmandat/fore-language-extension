# IDirectoryInfo.Parent

IDirectoryInfo.Parent
-


# IDirectoryInfo.Parent


## Синтаксис


Parent: [IDirectoryInfo](IDirectoryInfo.htm);


## Описание


Свойство Parent возвращает информацию
 о родительском каталоге.


## Пример


			Sub UserProc;

Var

    Dir, RootDir: IDirectoryInfo;

    d: DateTime;

Begin

    Dir := New DirectoryInfo.Attach("c:\Temp\1");

    If Dir.Exists Then

        RootDir := Dir.Parent;

        d := RootDir.CreationTime;

    End If;

    Dispose Dir;

End Sub UserProc;


После выполнения примера в переменной «d» будет содержаться дата и время
 создания папки «Temp».


См.также:


[IDirectoryInfo](IDirectoryInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
