# IFileStream.FileName

IFileStream.FileName
-


# IFileStream.FileName


## Синтаксис


FileName: String;


## Описание


Свойство FileName возвращает наименование файла, представленного в виде потока.


## Пример


	Sub UserProc;

	Var

	    Dir: IDirectoryInfo;

	    FileInf: IFileInfo;

	    FileStr: IFileStream;

	    s: String;

	Begin

	    Dir:=New DirectoryInfo.Attach("c:\New_Folder");

	    If Dir.Exists Then

	        FileInf:=Dir.GetFiles("*").Item(0);

	        FileStr:=FileInf.Open(FileOpenMode.ReadWrite, FileShare.DenyWrite);

	        s:=FileStr.FileName;

	    End If;

	    Dispose Dir;

	    Dispose FileInf;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 первого файла, содержащегося в директории «c:\New_Folder».


См.также:


[IFileStream](IFileStream.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
