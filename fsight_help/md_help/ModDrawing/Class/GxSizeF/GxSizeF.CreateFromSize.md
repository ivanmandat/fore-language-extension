# GxSizeF.CreateFromSize

GxSizeF.CreateFromSize
-


# GxSizeF.CreateFromSize


## Синтаксис


CreateFromSize(Size: [IGxSizeF](../../Interface/IGxSizeF/IGxSizeF.htm));


## Параметры


Size. Размер, на основе которого
 создается новый размер.


## Описание


Конструктор CreateFromPoint
 создает новый размер, являющийся копией размера, передаваемого посредством
 параметра Size.


## Пример


			Function GetCopySizeF(SourceSize: IGxSizeF): IGxSizeF;

Var

    DestinationSize: IGxSizeF;

Begin

    DestinationSize := New GxSizeF.CreateFromSize(SourceSize);

    Return DestinationSize;

End Function GetCopySizeF;


Данная функция вернет копию размера, передаваемого в качестве входного
 параметра.


См. также:


[GxSizeF](GxSizeF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
