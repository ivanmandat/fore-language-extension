# IGxFont.SaveToStream

IGxFont.SaveToStream
-


# IGxFont.SaveToStream


## Синтаксис


SaveToStream(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm));


## Описание


Метод SaveToStream осуществляет
 сохранение шрифта в поток.


## Пример


			Sub UserProc;

Var

    Font, FontFromStream: IGxFont;

    Stream: IIOStream;

Begin

    Stream := New MemoryStream.Create;

    Font := New GxFont.Create("Arial", 13);

    Font.SaveToStream(Stream);

    Stream.Position := 0;

    FontFromStream := New GxFont.CreateFromStream(Stream);

End Sub UserProc;


После выполнения примера будет создан шрифт и сохранен в поток. Далее
 из этого потока будет создан шрифт и сохранен в переменную «FontFromStream».


См. также:


[IGxFont](IGxFont.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
