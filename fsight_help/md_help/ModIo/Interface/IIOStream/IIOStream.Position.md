# IIOStream.Position

IIOStream.Position
-


# IIOStream.Position


## Синтаксис


Position: Integer;


## Описание


Свойство Position определяет позицию в потоке.


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

        i := Stream.Position;

    End If;

    Dispose File1;

End Sub UserProc;


После выполнения примера в файл «1.dat» будет записана последовательность байтов и в переменной «i» будет содержаться номер позиции в потоке.


См.также:


[IIOStream](IIOStream.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
