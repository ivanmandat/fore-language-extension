# IFileInfo.OpenBinaryReader

IFileInfo.OpenBinaryReader
-


# IFileInfo.OpenBinaryReader


## Синтаксис


OpenBinaryReader: [IBinaryReader](../IBinaryReader/IBinaryReader.htm);


## Описание


Метод OpenBinaryReader открывает
 файл для чтения в двоичном виде.


## Пример


	Sub UserProc;

	Var

	    File1: IFileInfo;

	    BinR: IBinaryReader;

	    d: DateTime;

	Begin

	    File1:=New FileInfo.Attach("c:\Work\1.txt");

	    If File1.Exists Then

	        BinR:=File1.OpenBinaryReader;

	        d:=BinR.ReadDateTime;

	    End If;

	    Dispose File1;

	End Sub UserProc;


После выполнения примера в переменную «d» из файла «1.txt» будет считана
 дата и время.


См. также:


[IFileInfo](IFileInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
