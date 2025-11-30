# IChartPlacedItem.FontColor

IChartPlacedItem.FontColor
-


# IChartPlacedItem.FontColor


## Синтаксис


FontColor: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство FontColor определяет
 цвет шрифта.


## Пример


В рассматриваемом примере предполагается, что существует объект Caption типа IChartCaption.


	Sub FontColor;

	Var

	    Caption : IChartCaption;

	Begin

	    Caption.FontColor := New GxColor.CreateARGB(255,0,126,255);

	End Sub FontColor;


После выполнения примера цвет шрифта заголовока диаграммы будет изменен
 на голубой.


См. также:


[IChartPlacedItem](IChartPlacedItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
