# GxSize.CreateFromSize

GxSize.CreateFromSize
-


# GxSize.CreateFromSize


## Синтаксис


CreateFromSize(Size: [IGxSize](../../Interface/IGxSize/IGxSize.htm));


## Параметры


Size. Размер, на основе которого
 создается новый размер.


## Описание


Конструктор CreateFromPoint
 создает новый размер, являющийся копией размера, передаваемого посредством
 параметра Size.


## Пример


			Function GetCopySize(SourceSize: IGxSize): IGxSize;

Var

    DestinationSize: IGxSize;

Begin

    DestinationSize := New GxSize.CreateFromSize(SourceSize);

    Return DestinationSize;

End Function GetCopySize;


Данная функция вернет копию размера, передаваемого в качестве входного
 параметра.


См. также:


[GxSize](GxSize.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
