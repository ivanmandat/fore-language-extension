# DirectoryInfo.Attach

DirectoryInfo.Attach
-


# DirectoryInfo.Attach


## Синтаксис


Attach(Path: String);


## Параметры


Path. Каталог, с которым будет
 связан объект данного класса.


## Описание


Конструктор Attach создает объект
 для работы с каталогами и связывает его с каталогом, путь к которому передается
 посредством параметра Path.


## Комментарии


Каталог, указанный в параметре Path,
 может отсутствовать. Для проверки наличия каталога используйте метод [Exists](../../Interface/IFileSystemInfo/IFileSystemInfo.Exists.htm).


## Пример


			Sub UserProc;

Var

    Dir: IDirectoryInfo;

Begin

    Dir := New DirectoryInfo.Attach("c:\New_folder");

    If Not Dir.Exists Then

        Dir.Create;

    End If;

    Dispose Dir;

End Sub UserProc;


После выполнения примера будет создана папка «New_folder», если она
 еще не существует.


См. также:


[DirectoryInfo](DirectoryInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
