# IDimensionViewer.EndDate

IDimensionViewer.EndDate
-


# IDimensionViewer.EndDate


## Синтаксис


EndDate: DateTime;


## Описание


Свойство EndDate определяет
 конец периода диапазона данных.


## Комментарии


Используется при работе с [отметкой
 элементов](UiSelection.chm::/Selection/Selection_of_the_dimension_elements.htm) календарного измерения в режиме «[Только
 по уровням](UiSelection.chm::/Selection/Selection_of_the_CalendarDimension_elements.htm#levels_only)».


![](StartDate_EndDate.png)


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button
 с наименованием «Button1», DimensionTree с наименованием «DimensionTree1»
 и UiDimension с наименованием «UiDimension1». В качестве источника для
 UiDimension выбран календарный справочник, а в качестве источника для
 DimensionTree выбран UiDimension1.


Добавьте ссылку на системную сборку ExtCtrls.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    DimensionTree1.ModeElements := False;

	    DimensionTree1.ModeLevels := True;

	    DimensionTree1.StartDate := DateTime.ComposeDay(2004, 2, 2);

	    DimensionTree1.EndDate := DateTime.ComposeDay(2014, 2, 2);

	End Sub Button1OnClick;


При выполнении примера для календаря будет включён
 режим отметки «Только по уровням»
 и задан период отметки элементов.


См. также:


[IDimensionViewer](IDimensionViewer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
