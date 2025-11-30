# IBinaryWriter.WriteListBegin

IBinaryWriter.WriteListBegin
-


# IBinaryWriter.WriteListBegin


## Синтаксис


WriteListBegin;


## Описание


Метод WriteListBegin осуществляет запись признака начала страницы в двоичный файл.


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 "С" двоичного файл с наименованием "1.dat".


	Sub UserProc;

	Var

	    File1: IFileInfo;

	    BinW: IBinaryWriter;

	    i: Integer;

	Begin

	    File1:=New FileInfo.Attach("c:\1.dat");

	    If File1.Exists Then

	        BinW:=File1.OpenBinaryWriter(True);

	        BinW.WriteListBegin;

	        For i:=65 To 90 Do

	            BinW.WriteInteger(i);

	        End For;

	        BinW.WriteListEnd;

	    End If;

	    Dispose File1;

	End Sub UserProc;


После выполнения примера в двоичный файл «1.dat» будет записан массив
 целочисленных значений. Массив будет ограничен признаками начала и окончания
 страницы.


См.также:


[IBinaryWriter](IBinaryWriter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
