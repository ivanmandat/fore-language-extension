# IMemoryStream.Parse

IMemoryStream.Parse
-


# IMemoryStream.Parse


## Синтаксис


Parse(Value: String);


## Параметры


Value — значение, которое необходимо поместить в поток.


## Описание


Метод Parse осуществляет помещение данных в поток, полученных с помощью метода [ToString](IMemoryStream.ToString.htm) и передаваемых посредством параметра Value.


## Пример


	Sub UserProc;

	Var

	    File1: IFileInfo;

	    BinR: IBinaryReader;

	    MStream, MStream1: IMemoryStream;

	    i: Integer;

	Begin

	    MStream:=New MemoryStream.Create;

	    MStream1:=New MemoryStream.Create;

	    File1:=New FileInfo.Attach("c:\New_folder\1.dat");

	    If File1.Exists Then

	        BinR:=File1.OpenBinaryReader;

	        For i:=0 To File1.Size-1 Do

	            MStream.WriteByte(BinR.Stream.ReadByte);

	        End For;

	        MStream1.Parse(MStream.ToString);

	    End If;

	    Dispose File1;

	    Dispose MStream;

	    Dispose MStream1;

	End Sub UserProc;


После выполнения примера в поток «MStream», находящийся в памяти, будет
 считано содержимое файла «1.dat». В потоке «MStream1» будет содержаться
 копия потока «MStream».


См.также:


[IMemoryStream](IMemoryStream.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
