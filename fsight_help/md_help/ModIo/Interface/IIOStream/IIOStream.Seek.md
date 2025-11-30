# IIOStream.Seek

IIOStream.Seek
-


# IIOStream.Seek


## Синтаксис


Seek(Offset: Integer; Origin: [SeekOrigin](../../Enums/SeekOrigin.htm)): Integer;


## Параметры


Offset - смещение в потоке.


Origin - параметр определяющий точку потока, используемую для получения нового положения.


## Описание


Метод Seek задает позицию в потоке с учетом параметров смещения и позиционирования потока.


## Пример


			Sub UserProc;

Var

    File1: IFileInfo;

    BinW: IBinaryWriter;

    Stream: IIOStream;

Begin

    File1 := New FileInfo.Attach("c:\1.dat");

    If File1.Exists Then

        BinW := File1.OpenBinaryWriter(False);

        Stream := BinW.Stream;

        Stream.Seek(Math.Int(Stream.Size / 2), SeekOrigin.Beginning);

        Stream.WriteByte(32);

        Stream.WriteByte(32);

    End If;

    Dispose File1;

End Sub UserProc;


После выполнения примера курсор в потоке будет установлен на середину, позиционирование происходит относительно начала потока, затем в файл будут записаны 2 байта.


См.также:


[IIOStream](IIOStream.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
