# IIOStream.CopyFrom

IIOStream.CopyFrom
-


# IIOStream.CopyFrom


## Синтаксис


CopyFrom(SourceStream: [IIOStream](IIOStream.htm);
 Count: Integer);


## Параметры


SourceStream. Поток-источник,
 из которого необходимо скопировать.


Count. Количество байт данных,
 которые необходимо скопировать.


## Описание


Метод CopyFrom осуществляет
 копирование данных из указанного потока в текущий поток.


## Комментарии


Объем данных, которые необходимо скопировать, указывается посредством
 параметра Count. Если указывается
 значение «-1» или «0», то копируется все содержимое потока.


Если текущий поток является [файловым](../IFileStream/IFileStream.htm),
 то при копировании всё его содержимое перезаписывается.


Если текущий поток [организован
 в памяти компьютера](../IMemoryStream/IMemoryStream.htm), то при копировании данные дописываются в конец
 потока.


## Пример


			Sub UserProc;

Var

    File1, File2: IFileInfo;

    BinR: IBinaryReader;

    BinW: IBinaryWriter;

    Stream: IIOStream;

Begin

    File1 := New FileInfo.Attach("c:\1.dat");

    File2 := New FileInfo.Attach("c:\2.dat");

    If File1.Exists Then

        BinR := File1.OpenBinaryReader;

        BinW := File2.OpenBinaryWriter(True);

        Stream := BinW.Stream;

        Stream.CopyFrom(BinR.Stream, BinR.Stream.Size);

    End If;

    Dispose File1;

    Dispose File2;

End Sub UserProc;


После выполнения примера будет создан файл «2.dat» и в него будет скопировано
 содержимое файла «1.dat».


См.также:


[IIOStream](IIOStream.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
