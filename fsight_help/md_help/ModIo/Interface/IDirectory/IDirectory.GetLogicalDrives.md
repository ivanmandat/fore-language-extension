# IDirectory.GetLogicalDrives

IDirectory.GetLogicalDrives
-


# IDirectory.GetLogicalDrives


## Синтаксис


GetLogicalDrives: [IStringList](ModCollections.chm::/Interface/IStringList/IStringList.htm);


## Описание


Метод GetLogicalDrives возвращает список логических дисков на текущем компьютере.


## Пример


			Sub UserProc;

Var

    Drives: IStringList;

    DriveName: String;

Begin

    Drives := Directory.GetLogicalDrives;

    For Each DriveName In Drives Do

        Debug.WriteLine(DriveName);

    End For;

End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведен список всех логических дисков, имеющихся на текущем компьютере.


См.также:


[IDirectory](IDirectory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
