# IBinaryReader.Stream

IBinaryReader.Stream
-


# IBinaryReader.Stream


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

	    BinR: IBinaryReader;

	    IntList: IArrayList;

	    i: Integer;

	Begin

	    File1:=New FileInfo.Attach("c:\1.dat");

	    IntList:=New ArrayList.Create;

	    If File1.Exists Then

	        BinR:=File1.OpenBinaryReader;

	        For i:=0 To 255 Do

	            IntList.Add(BinR.Stream.ReadByte);

	        End For;

	    End If;

	    Dispose File1;

	End Sub UserProc;


После выполнения примера из файла «1.dat» в массив «IntList» будет считаны
 255 байтов.


См.также:


[IBinaryReader](IBinaryReader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
