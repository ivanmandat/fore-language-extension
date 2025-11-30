# IFile.OpenBinaryReader

IFile.OpenBinaryReader
-


# IFile.OpenBinaryReader


## Синтаксис


OpenBinaryReader(FileName: String): [IBinaryReader](../IBinaryReader/IBinaryReader.htm);


## Параметры


FileName — путь и наименование файла, который необходимо открыть.


## Описание


Метод OpenBinaryReader открывает файл для чтения в двоичном виде.


## Пример


	Sub UserProc;

	Var

	    BinR: IBinaryReader;

	    d: DateTime;

	Begin

	    If File.Exists("c:\New_folder\1.txt") Then

	        BinR:=File.OpenBinaryReader("c:\New_folder\1.txt");

	        d:=BinR.ReadDateTime;

	    End If;

	End Sub UserProc;


После выполнения примера в переменную «d» из файла «1.txt» будет получена
 дата и время.


См.также:


[IFile](IFile.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
