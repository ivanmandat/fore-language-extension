# GxPen.CreateSolid

GxPen.CreateSolid
-


# GxPen.CreateSolid


## Синтаксис


CreateSolid(Color: [IGxColor](../../Interface/IGxColor/IGxColor.htm);
 [Width: Double = 1]);


## Параметры


Color. Цвет пера;


Width. Ширина нового пера.
 По умолчанию создается перо размером в 1 пиксель.


## Описание


Конструктор CreateSolid создает
 новое перо заданного цвета.


## Пример


Добавьте ссылку на системную сборку Drawing.


			Function GetPen(PenColor: GxKnownColor; PenWidth: Double): IGxPen;

Var

    OutPen: IGxPen;

Begin

    OutPen := New GxPen.CreateSolid(GxColor.FromKnownColor(PenColor), PenWidth);

    Return OutPen;

End Function GetPen;


Данная функция возвращает перо, цвет и толщина которого передаются в
 качестве входных параметров.


См. также:


[GxPen](GxPen.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
