# GxIcon.CreateFromStreamS

GxIcon.CreateFromStreamS
-


# GxIcon.CreateFromStreamS


## Синтаксис


CreateFromStreamS(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm);
 Size: [IGxSize](../../Interface/IGxSize/IGxSize.htm));


## Параметры


Stream.
 Поток,
 из которого осуществляется загрузка пиктограммы.


Size. Размеры, в соответствии
 с которыми осуществляется масштабирование пиктограммы.


## Описание


Конструктор CreateFromStreamS
 создает пиктограмму из потока, масштабируя ее до указанных в параметре
 Size размеров.


## Пример


			Function GetScalingIconFromStream(IconStream: IIOStream; SWidth: Integer; SHeight: Integer): IGxIcon;

Var

    ScalingSize: IGxSize;

    OutIcon: IGxIcon;

Begin

    If IconStream.Size <> 0 Then

        ScalingSize := New GxSize.Create(SWidth, SHeight);

        OutIcon := New GxIcon.CreateFromStreamS(IconStream, ScalingSize);

        Return OutIcon;

    Else

        Return Null;

    End If;

End Function GetScalingIconFromStream;


Данная функция вернет пиктограмму, полученную из потока и промасштабированную
 в соответствии с указанными размерами.


См. также:


[GxIcon](GxIcon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
