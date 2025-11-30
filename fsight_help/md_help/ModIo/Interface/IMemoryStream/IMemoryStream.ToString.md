# IMemoryStream.ToString

IMemoryStream.ToString
-


# IMemoryStream.ToString


## Синтаксис


ToString: String;


## Описание


Метод ToString преобразует содержимое потока в символьную строку для переноса данных между потоками.


## Комментарии


Значение, полученное в результате работы данного метода, может быть использовано для восстановления данных в поток с помощью метода [Parse](IMemoryStream.Parse.htm).


## Пример


	Sub UserProc;

	Var

	    File1: IFileInfo;

	    BinR: IBinaryReader;

	    MStream: IMemoryStream;

	    i: Integer;

	    s: String;

	Begin

	    MStream:=New MemoryStream.Create;

	    File1:=New FileInfo.Attach("c:\Work\1.dat");

	    If File1.Exists Then

	        BinR:=File1.OpenBinaryReader;

	        For i:=0 To File1.Size-1 Do

	            MStream.WriteByte(BinR.Stream.ReadByte);

	        End For;

	        s:=MStream.ToString;

	    End If;

	    Dispose File1;

	    Dispose MStream;

	End Sub UserProc;


После выполнения примера в поток «MStream» будет считано содержимое
 файла «1.dat» и в переменной «s» будет содержимое потока, преобразованное
 к строковому виду.


См. также:


[IMemoryStream](IMemoryStream.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
