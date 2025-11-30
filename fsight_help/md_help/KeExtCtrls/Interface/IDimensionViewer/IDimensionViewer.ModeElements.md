# IDimensionViewer.ModeElements

IDimensionViewer.ModeElements
-


# IDimensionViewer.ModeElements


## Синтаксис


ModeElements: Boolean;


## Описание


Свойство ModeElements определяет
 отображение режима отметки «[Только
 по элементам](UiSelection.chm::/Selection/Selection_of_the_CalendarDimension_elements.htm#elements_only)».


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button
 с наименованием «Button1», DimensionTree с наименованием «DimensionTree1»
 и UiDimension с наименованием «UiDimension1». В качестве источника для
 UiDimension выбран календарный справочник, а в качестве источника для
 DimensionTree выбран UiDimension1.


Добавьте ссылку на системную сборку ExtCtrls.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    DimensionTree1.ModeElements := True;

	    DimensionTree1.ModeLevels := True;

	End Sub Button1OnClick;


В результате выполнения примера после нажатия кнопки будет включен режим
 отметки «[По
 элементам и уровням](UiSelection.chm::/Selection/Selection_of_the_CalendarDimension_elements.htm#elements_and_levels)».


См. также:


[IDimensionViewer](IDimensionViewer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
