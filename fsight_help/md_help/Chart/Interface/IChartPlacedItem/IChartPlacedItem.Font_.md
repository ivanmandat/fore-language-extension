# IChartPlacedItem.Font

IChartPlacedItem.Font
-


# IChartPlacedItem.Font


## Синтаксис


Font: [IGxFont](ModDrawing.chm::/Interface/IGxFont/IGxFont.htm);


## Описание


Свойство Font определяет шрифт
 текста.


## Пример


В рассматриваемом примере предполагается, что существует объект Caption типа IChartCaption.


	Sub Font;

	Var

	    Caption : IChartCaption;

	Begin

	    Caption.Font := New GxFont.Create("Arial Black", 10, 3 As GxFontStyle, 3 As GxUnit);

	End Sub Font;


После выполнения примера к заголовку диаграммы будет применен шрифт
 «Arial Black», указанного стиля и размера.


См. также:


[IChartPlacedItem](IChartPlacedItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
