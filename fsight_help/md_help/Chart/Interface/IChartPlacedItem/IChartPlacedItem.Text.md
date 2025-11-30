# IChartPlacedItem.Text

IChartPlacedItem.Text
-


# IChartPlacedItem.Text


## Синтаксис


Text: String;


## Описание


Свойство Text позволяет задать
 текст надписи.


## Пример


В рассматриваемом примере предполагается, что существует объект Caption типа IChartCaption.


	Sub Text;

	Var

	    Caption : IChartCaption;

	Begin

	    Caption.Text := "Диаграмма";

	End Sub Text;


После выполнения примера текст заголовка будет изменен на текст, заданный
 в примере.


См. также:


[IChartPlacedItem](IChartPlacedItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
