# IBinaryWriter.Stream

IBinaryWriter.Stream
-


# IBinaryWriter.Stream


## Синтаксис


Stream: [IIOStream](../IIOStream/IIOStream.htm);


## Описание


Свойство Stream возвращает поток для работы с двоичным файлом в виде последовательности байтов.


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 "С" двоичного файл с наименованием "1.dat".


	Sub UserProc;

	Var

	    File1: IFileInfo;

	    BinW: IBinaryWriter;

	    Stream: IIOStream;

	    i: Integer;

	Begin

	    File1:=New FileInfo.Attach("c:\1.dat");

	    If File1.Exists Then

	        BinW:=File1.OpenBinaryWriter(True);

	        Stream:=BinW.Stream;

	        For i:=65 To 90 Do

	            Stream.WriteByte(i);

	        End For;

	    End If;

	    Dispose File1;

	End Sub UserProc;


После выполнения примера в файл «1.dat» будет записана последовательность
 байтов.


См.также:


[IBinaryWriter](IBinaryWriter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
