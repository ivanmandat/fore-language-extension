# GxPointF.CreateFromSize

GxPointF.CreateFromSize
-


# GxPointF.CreateFromSize


## Синтаксис


CreateFromSize(Size: [IGxSizeF](../../Interface/IGxSizeF/IGxSizeF.htm));


## Параметры


Size.
 Размер, на основе которого создается новая точка.


## Описание


Конструктор CreateFromSize создает
 новую точку, на основе параметров размера, передаваемого посредством параметра
 Size.


## Комментарии


Координате X будет соответствовать ширина, а координата Y - высота указанного
 размера.


## Пример


			Function GetPointFromSizeF(SourceSize: IGxSizeF): IGxPointF;

Var

    OutPoint: IGxPointF;

Begin

    OutPoint := New GxPointF.CreateFromSize(SourceSize);

    Return OutPoint;

End Function GetPointFromSizeF;


Данная функция вернет точку, созданную на базе размера, который передается
 в качестве входного параметра.


См. также:


[GxPointF](GxPointF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
