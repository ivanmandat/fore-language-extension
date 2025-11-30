# IFileInfo.DirectoryName

IFileInfo.DirectoryName
-


# IFileInfo.DirectoryName


## Синтаксис


DirectoryName: String;


## Описание


Свойство DirectoryName возвращает
 полный путь и наименование папки, в которой содержится файл.


## Пример


	Sub UserProc;

	Var

	    FileInf: IFileInfo;

	    s: String;

	Begin

	    FileInf:=New FileInfo.Attach("c:\Work\1.txt");

	    If FileInf.Exists Then

	        s:=FileInf.DirectoryName;

	    End If;

	    Dispose FileInf;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться полный путь
 и наименование папки, в которой находится файл «1.txt».


См. также:


[IFileInfo](IFileInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
