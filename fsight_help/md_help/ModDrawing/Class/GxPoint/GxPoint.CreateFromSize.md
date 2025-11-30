# GxPoint.CreateFromSize

GxPoint.CreateFromSize
-


# GxPoint.CreateFromSize


## Синтаксис


CreateFromSize(Size: [IGxSize](../../Interface/IGxSize/IGxSize.htm));


## Параметры


Size. Размер, на основе которого
 создается новая точка.


## Описание


Конструктор CreateFromSize создает
 новую точку, на основе параметров размера, передаваемого посредством параметра
 Size.


## Комментарии


Координате X будет соответствовать ширина, а координата Y - высота указанного
 размера.


## Пример


			Function GetPointFromSize(SourceSize: IGxSize): IGxPoint;

Var

    OutPoint: IGxPoint;

Begin

    OutPoint := New GxPoint.CreateFromSize(SourceSize);

    Return OutPoint;

End Function GetPointFromSize;


Данная функция вернет точку, созданную на базе размера, который передается
 в качестве входного параметра.


См. также:


[GxPoint](GxPoint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
