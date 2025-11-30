# IIOStream.WriteByte

IIOStream.WriteByte
-


# IIOStream.WriteByte


## Синтаксис


WriteByte(Byte: Integer);


## Параметры


Byte - байт данных, который необходимо записать в поток.


## Описание


Метод WriteByte осуществляет запись байта данных в поток. Вставка осуществляется в текущую позицию в потоке.


## Пример


			Sub UserProc;

Var

    File1: IFileInfo;

    BinW: IBinaryWriter;

    Stream: IIOStream;

    i: Integer;

Begin

    File1 := New FileInfo.Attach("c:\1.dat");

    If File1.Exists Then

        BinW := File1.OpenBinaryWriter(True);

        Stream := BinW.Stream;

        For i := 65 To 90 Do

            Stream.WriteByte(i);

        End For;

    End If;

    Dispose File1;

End Sub UserProc;


После выполнения примера в файл «1.dat» будет записана последовательность байтов.


См.также:


[IIOStream](IIOStream.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
