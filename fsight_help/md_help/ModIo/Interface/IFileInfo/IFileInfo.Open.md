# IFileInfo.Open

IFileInfo.Open
-


# IFileInfo.Open


## Синтаксис


Open(Mode: [FileOpenMode](../../Enums/FileOpenMode.htm);
 Share: [FileShare](../../Enums/FileShare.htm)): [IFileStream](../IFileStream/IFileStream.htm);


## Параметры


Mode — параметр, определяющий
 вид запроса на открытие файла.


Share — параметр, определяющий
 возможность совместного доступа к открытому файлу.


## Описание


Метод Open открывает файл с
 определенными видом запроса открытия файла и параметрами совместного доступа.


## Пример


	Sub UserProc;

	Var

	    File1: IFileInfo;

	    FileStr: IFileStream;

	    i: Integer;

	Begin

	    File1:=New FileInfo.Attach("c:\Work\1.txt");

	    If File1.Exists Then

	        FileStr:=File1.Open(FileOpenMode.Create, FileShare.DenyWrite);

	        For i:=0 To 255 Do

	            FileStr.WriteByte(i);

	        End For;

	    End If;

	    Dispose File1;

	End Sub UserProc;


После выполнения примера в файл «1.txt» будет записан поток байтов.


См. также:


[IFileInfo](IFileInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
