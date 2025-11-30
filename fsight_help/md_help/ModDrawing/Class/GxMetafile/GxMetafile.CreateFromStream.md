# GxMetafile.CreateFromStream

GxMetafile.CreateFromStream
-


# GxMetafile.CreateFromStream


## Синтаксис


CreateFromStream(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm));


## Параметры


Stream. Поток, на основе которого будет создан новый метафайл.


## Описание


Конструктор CreateFromStream создает новый метафайл на основе указанного потока данных.


## Пример


			Function GetMetafileFromStream(MetafileStream: IIOStream): IGxMetafile;

Var

    Mtf: IGxMetafile;

Begin

    If MetafileStream.Size <> 0 Then

        Mtf := New GxMetafile.CreateFromStream(MetafileStream);

        Return Mtf;

    Else

        Return Null;

    End If;

End Function GetMetafileFromStream;


Данная функция вернет метафайл, полученный из потока, который указан в качестве входного параметра.


См. также:


[GxBitmap](../GxBitmap/GxBitmap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
