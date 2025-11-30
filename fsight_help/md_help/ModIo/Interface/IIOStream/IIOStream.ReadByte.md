# IIOStream.ReadByte

IIOStream.ReadByte
-


# IIOStream.ReadByte


## Синтаксис


ReadByte: Integer;


## Описание


Метод ReadByte осуществляет считывание байта данных из потока. Метод возвращает байт, приведенный к целому типу.


## Пример


			Sub UserProc;

Var

    File1: IFileInfo;

    BinR: IBinaryReader;

    Stream: IIOStream;

    IntList: IArrayList;

    i: Integer;

Begin

    File1 := New FileInfo.Attach("c:\1.dat");

    IntList := New ArrayList.Create;

    If File1.Exists Then

        BinR := File1.OpenBinaryReader;

        Stream := BinR.Stream;

        For i := 0 To File1.Size - 1 Do

            IntList.Add(Stream.ReadByte);

        End For;

    End If;

    Dispose File1;

End Sub UserProc;


После выполнения примера в массиве «IntList» будет содержаться последовательность целых чисел, соответствующих байтам, считанным из файла «1.dat».


См.также:


[IIOStream](IIOStream.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
