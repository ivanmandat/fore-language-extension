# GxSizeF.Create

GxSizeF.Create
-


# GxSizeF.Create


## Синтаксис


Create(Width: Double; Height: Double);


## Параметры


Width. Высота размера.


Heigh. Ширина размера.


## Описание


Конструктор Create создает новый
 размер с указанными значениями ширины и высоты.


## Пример


			Function GetSizeF(Width: Double; Height: Double): IGxSizeF;

Var

    OutSize: IGxSizeF;

Begin

    OutSize := New GxSizeF.Create(Width, Height);

    Return OutSize;

End Function GetSizeF;


Данная функция вернет новый размер, ширина и высота которого передаются
 в качестве входных параметров.


См. также:


[GxSizeF](GxSizeF.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
