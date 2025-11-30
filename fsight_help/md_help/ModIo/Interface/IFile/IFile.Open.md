# IFile.Open

IFile.Open
-


# IFile.Open


## Синтаксис


Open(FileName: String; Mode: [FileOpenMode](../../Enums/FileOpenMode.htm); Share: [FileShare](../../Enums/FileShare.htm)): [IFileStream](../IFileStream/IFileStream.htm);


## Параметры


FileName — путь и наименование файла, который необходимо открыть.


Mode — параметр, определяющий вид запроса на открытие файла.


Share — параметр, определяющий возможность совместного доступа к открытому файлу.


## Описание


Метод Open открывает файл с определенными видом запроса открытия файла и параметрами совместного доступа.


## Пример


	Sub UserProc;

	Var

	    FileStr: IFileStream;

	    i: Integer;

	Begin

	    FileStr:=File.Open("c:\New_folder\1.dat", FileOpenMode.Create, FileShare.DenyWrite);

	    For i:=0 To 255 Do

	        FileStr.WriteByte(i);

	    End For;

	End Sub UserProc;


После выполнения примера будет создан файл «1.dat», и в него будет записана
 последовательность байтов. Во время записи для других приложений данный
 файл будет доступен только для чтения.


См.также:


[IFile](IFile.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
