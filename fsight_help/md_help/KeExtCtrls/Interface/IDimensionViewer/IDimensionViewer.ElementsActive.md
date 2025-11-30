# IDimensionViewer.ElementsActive

IDimensionViewer.ElementsActive
-


# IDimensionViewer.ElementsActive


## Синтаксис


ElementsActive: Boolean;


## Описание


Свойство ElementsActive выполняет
 переключение между режимами отметки «По
 элементам» и «По уровням».


## Комментарии


Свойство будет работать только тогда, когда включен режим отметки «[По
 элементам и уровням](UiSelection.chm::/Selection/Selection_of_the_CalendarDimension_elements.htm#elements_and_levels)».


Допустимые значения:


	- True (по умолчанию).
	 Будет выбран режим отметки «По элементам»;


	- False. Будет выбран
	 режим отметки «По уровням».


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button
 с наименованием «Button1», DimensionTree с наименованием «DimensionTree1»
 и UiDimension с наименованием «UiDimension1». В качестве источника для
 UiDimension выбран календарный справочник, а в качестве источника для
 DimensionTree выбран UiDimension1.


Добавьте ссылку на системную сборку ExtCtrls.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    DimensionTree1.ElementsActive := Not DimensionTree1.ElementsActive;

	End Sub Button1OnClick;


В результате выполнения примера после нажатия кнопки произойдет переключение
 между режимами отметки.


См. также:


[IDimensionViewer](IDimensionViewer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
