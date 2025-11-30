# IBinaryWriter.WriteBoolean

IBinaryWriter.WriteBoolean
-


# IBinaryWriter.WriteBoolean


## Синтаксис


WriteBoolean(Value: Boolean);


## Параметры


Value — логическое значение, которое необходимо записать.


## Описание


Метод WriteBoolean осуществляет запись логического значения в двоичный файл.


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

	        BinW.WriteBoolean(True);

	    End If;

	    Dispose File1;

	End Sub UserProc;


После выполнения примера в двоичный файл «1.dat» будет записано логическое
 значение «True».


См.также:


[IBinaryWriter](IBinaryWriter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
