# GxRect.CreateFromRect

GxRect.CreateFromRect
-


# GxRect.CreateFromRect


## Синтаксис


CreateFromRect(Rect: [IGxRect](../../Interface/IGxRect/IGxRect.htm));


## Параметры


Rect. Прямоугольник, на основе
 которого создается новый прямоугольник.


## Описание


Конструктор CreateFromRect создает
 новый прямоугольник, являющийся копией прямоугольника, передаваемого посредством
 параметра Rect.


## Пример


			Function GetCopyRect(SourceRect: IGxRect): IGxRect;

Var

    DestinationRect: IGxRect;

Begin

    DestinationRect := New GxRect.CreateFromRect(SourceRect);

    Return DestinationRect;

End Function GetCopyRect;


Данная функция вернет копию прямоугольника, передаваемого в качестве
 входного параметра.


См. также:


[GxRect](GxRect.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
