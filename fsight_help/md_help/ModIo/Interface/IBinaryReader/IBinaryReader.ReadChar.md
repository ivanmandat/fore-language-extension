# IBinaryReader.ReadChar

IBinaryReader.ReadChar
-


# IBinaryReader.ReadChar


## Синтаксис


ReadChar: Char;


## Описание


Метод ReadChar осуществляет считывание символов из двоичного файла.


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 "С" двоичного файл с наименованием "1.dat".


	Sub UserProc;

	Var

	    File1: IFileInfo;

	    BinR: IBinaryReader;

	    c: Char;

	Begin

	    File1:=New FileInfo.Attach("c:\1.dat");

	    If File1.Exists Then

	        BinR:=File1.OpenBinaryReader;

	        c:=BinR.ReadChar;

	    End If;

	    Dispose File1;

	End Sub UserProc;


После выполнения примера в переменной «c» будет содержаться символьное
 значение, считанное из двоичного файла «1.dat».


См.также:


[IBinaryReader](IBinaryReader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
