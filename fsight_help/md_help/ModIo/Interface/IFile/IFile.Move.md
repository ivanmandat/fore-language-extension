# IFile.Move

IFile.Move
-


# IFile.Move


## Синтаксис


Move(Source: String; Destination: String);


## Параметры


Source. Путь до файла, который
 будет перемещён;


Destination. Путь до папки,
 в которую будет перемещён файл.


## Описание


Метод Move осуществляет перемещение
 файла.


## Комментарии


Метод осуществляет перемещение файла Source
 в папку Destination. Если файл
 в целевой папке уже существует, то произойдёт его перезапись.


## Пример


Для выполнения примера необходимо наличие файла C:\New_folder\1.txt
 и папки C:\Temp.


Добавьте ссылки на системные сборки: Fore: IO.


			Sub UserProc;

Begin

    // Если файл и папка существуют, то переместим файл

    If File.Exists("c:\New_folder\1.txt") And Directory.Exists("c:\Temp") Then

        File.Move("c:\New_folder\1.txt", "c:\Temp");

    End If;

End Sub UserProc;


После выполнения примера файл 1.txt будет перемещён в папку C:\Temp.


См.также:


[IFile](IFile.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
