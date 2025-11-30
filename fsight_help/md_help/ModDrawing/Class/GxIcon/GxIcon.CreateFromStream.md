# GxIcon.CreateFromStream

GxIcon.CreateFromStream
-


# GxIcon.CreateFromStream


## Синтаксис


CreateFromStream(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm));


## Параметры


Stream. Поток, из которого
 осуществляется загрузка пиктограммы.


## Описание


Конструктор CreateFromStream
 создает пиктограмму из потока.


## Пример


			Function GetIconFromStream(IconStream: IIOStream): IGxIcon;

Var

    OutIcon: IGxIcon;

Begin

    If IconStream.Size <> 0 Then

        OutIcon := New GxIcon.CreateFromStream(IconStream);

        Return OutIcon;

    Else

        Return Null;

    End If;

End Function GetIconFromStream;


Данная функция вернет пиктограмму, полученную из потока.


См. также:


[GxIcon](GxIcon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
