# IBinaryReader.ReadBoolean

IBinaryReader.ReadBoolean
-


# IBinaryReader.ReadBoolean


## Синтаксис


ReadBoolean: Boolean;


## Описание


Метод ReadBoolean осуществляет считывание логического значения из двоичного файла.


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 "С" двоичного файл с наименованием "1.dat".


	Sub UserProc;

	Var

	    File1: IFileInfo;

	    BinR: IBinaryReader;

	    b: Boolean;

	Begin

	    File1:=New FileInfo.Attach("c:\1.dat");

	    If File1.Exists Then

	        BinR:=File1.OpenBinaryReader;

	        b:=BinR.ReadBoolean;

	    End If;

	    Dispose File1;

	End Sub UserProc;


После выполнения примера в переменной «b» будет содержаться логическое
 значение, считанное из двоичного файла «1.dat».


См.также:


[IBinaryReader](IBinaryReader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
