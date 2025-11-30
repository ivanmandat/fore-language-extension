# IDirectoryInfo.Root

IDirectoryInfo.Root
-


# IDirectoryInfo.Root


## Синтаксис


Root: [IDirectoryInfo](IDirectoryInfo.htm);


## Описание


Свойство Root возвращает информацию
 о корневом каталоге.


## Пример


			Sub UserProc;

Var

    Dir, RootDir: IDirectoryInfo;

    d: DateTime;

Begin

    Dir := New DirectoryInfo.Attach("c:\Temp\1");

    If Dir.Exists Then

        RootDir := Dir.Root;

        d := RootDir.CreationTime;

    End If;

    Dispose Dir;

End Sub UserProc;


После выполнения примера в переменной «d» будет содержаться дата и время
 создания корневого каталога диска «С».


См.также:


[IDirectoryInfo](IDirectoryInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
