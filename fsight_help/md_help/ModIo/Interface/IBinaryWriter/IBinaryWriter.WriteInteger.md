# IBinaryWriter.WriteInteger

IBinaryWriter.WriteInteger
-


# IBinaryWriter.WriteInteger


## Синтаксис


WriteInteger(Value: Integer);


## Параметры


Value — целочисленное число, которое необходимо записать.


## Описание


Метод WriteInteger осуществляет запись целого числа в двоичный файл.


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 "С" двоичного файл с наименованием "1.dat".


	Sub UserProc;

	Var

	    File1: IFileInfo;

	    BinW: IBinaryWriter;

	Begin

	    File1:=New FileInfo.Attach("c:\1.dat");

	    If File1.Exists Then

	        BinW:=File1.OpenBinaryWriter(True);

	        BinW.WriteInteger(100);

	    End If;

	    Dispose File1;

	End Sub UserProc;


После выполнения примера в текстовый файл «1.dat» будет записано число
 «100» в двоичном виде.


См.также:


[IBinaryWriter](IBinaryWriter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
