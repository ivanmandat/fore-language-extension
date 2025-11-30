# IFileSystemInfo.Attributes

IFileSystemInfo.Attributes
-


# IFileSystemInfo.Attributes


## Синтаксис


Attributes: [FileAttributes](../../Enums/FileAttributes.htm);


## Описание


Свойство Attributes определяет атрибуты файла.


## Пример


	Sub UserProc;

	Var

	    FileSInfo: IFileSystemInfo;

	    s: String;

	Begin

	    FileSInfo:=New FileInfo.Attach("c:\1.txt");

	    If FileSInfo.Exists Then

	        FileSInfo.Attributes:=FileAttributes.Hidden Or FileAttributes.ReadOnly;

	    End If;

	Dispose FileSInfo;

	End Sub UserProc;


После выполнения примера для файла «1.txt», если он существует, будут
 установлены атрибуты «Скрытый» и «Только чтение».


См.также:


[IFileSystemInfo](IFileSystemInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
