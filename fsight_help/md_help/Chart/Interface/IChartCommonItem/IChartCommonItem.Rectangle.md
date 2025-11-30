# IChartCommonItem.Rectangle

IChartCommonItem.Rectangle
-


# IChartCommonItem.Rectangle


## Синтаксис


Rectangle: [IGxRectF](ModDrawing.chm::/Interface/IGxRectF/IGxRectF.htm);


## Описание


Свойство Rectangle определяет
 координаты и размер элемента диаграммы.


## Пример


В рассматриваемом примере предполагается, что существует объект GraphArea типа IGraphArea.


	Sub Rectangle;

	Var

	    GraphArea: IGraphArea;

	    Rect : IGxRectF;

	Begin

	    Rect := New GxRectF.Create(10,5,70,50);

	    GraphArea.Rectangle := Rect;

	End Sub Rectangle;


После выполнения примера область построения диаграммы будет размещена
 в соответствии с указанной позицией.


См. также:


[IChartCommonItem](IChartCommonItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
