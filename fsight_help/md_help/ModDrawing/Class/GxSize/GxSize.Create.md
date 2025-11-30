# GxSize.Create

GxSize.Create
-


# GxSize.Create


## Синтаксис


Create(Width: Integer; Height: Integer);


## Параметры


Width. Высота размера.


Height. Ширина размера.


## Описание


Конструктор Create создает новый
 размер с указанными значениями ширины и высоты.


## Пример


			Function GetSize(Width: Integer; Height: Integer): IGxSize;

Var

    OutSize: IGxSize;

Begin

    OutSize := New GxSize.Create(Width, Height);

    Return OutSize;

End Function GetSize;


Данная функция вернет новый размер, ширина и высота которого передаются
 в качестве входных параметров.


См. также:


[GxSize](GxSize.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
