# IMemoryStream.Capacity

IMemoryStream.Capacity
-


# IMemoryStream.Capacity


## Синтаксис


Capacity: Integer;


## Описание


Свойство Capacity определяет объем памяти в байтах, выделяемой под поток.


## Пример


	Sub UserProc;

	Var

	    File1: IFileInfo;

	    BinR: IBinaryReader;

	    MStream: IMemoryStream;

	    i: Integer;

	Begin

	    MStream:=New MemoryStream.Create;

	    File1:=New FileInfo.Attach("c:\New_folder\1.dat");

	    If File1.Exists Then

	        BinR:=File1.OpenBinaryReader;

	        For i:=0 To File1.Size-1 Do

	            MStream.WriteByte(BinR.Stream.ReadByte);

	        End For;

	        i:=MStream.Capacity;

	    End If;

	    Dispose File1;

	    Dispose MStream;

	End Sub UserProc;


После выполнения примера в поток «MStream», находящийся в памяти, будет
 считано содержимое файла «1.dat». В переменной «i» будет содержаться значение
 объема памяти, выделенной под поток.


См.также:


[IMemoryStream](IMemoryStream.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
