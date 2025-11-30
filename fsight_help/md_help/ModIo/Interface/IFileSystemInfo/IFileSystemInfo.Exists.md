# IFileSystemInfo.Exists

IFileSystemInfo.Exists
-


# IFileSystemInfo.Exists


## Синтаксис


Exists: Boolean;


## Описание


Свойство Exists возвращает признак существования файла.


## Пример


	Sub UserProc;

	Var

	    FileSInfo: IFileSystemInfo;

	    s: String;

	Begin

	    FileSInfo:=New FileInfo.Attach("c:\1.txt");

	    If FileSInfo.Exists Then

	        s:="Yes";

	    Else

	        s:="No";

	    End If;

	    Dispose FileSInfo;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Yes» если
 файл «1.txt» существует в корневом каталоге диска «С».


См.также:


[IFileSystemInfo](IFileSystemInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
