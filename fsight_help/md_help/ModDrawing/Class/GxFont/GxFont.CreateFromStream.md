# GxFont.CreateFromStream

GxFont.CreateFromStream
-


# GxFont.CreateFromStream


## Синтаксис


CreateFromStream(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm));


## Параметры


Stream. Поток.


## Описание


Конструктор CreateFromStream
 создает шрифт из потока.


## Пример


			Function GetFontFromStream(FontStream: IIOStream): IGxFont;

Var

    OutFont: IGxFont;

Begin

    If FontStream.Size <> 0 Then

        OutFont := New GxFont.CreateFromStream(FontStream);

        Return OutFont;

    Else

        Return Null;

    End If;

End Function GetFontFromStream;


Указанная процедура вернет шрифт, загруженный из потока.


См. также:


[GxFont](GxFont.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
