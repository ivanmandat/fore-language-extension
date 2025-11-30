# IDimensionViewer.LevelsMultiselect

IDimensionViewer.LevelsMultiselect
-


# IDimensionViewer.LevelsMultiselect


## Синтаксис


LevelsMultiselect: Boolean;


## Описание


Свойство LevelsMultiselect определяет
 включение множественной отметки уровней измерения.


## Комментарии


Свойство будет работать только тогда, когда включен режим отметки «[По
 уровням](UiSelection.chm::/Selection/Selection_of_the_CalendarDimension_elements.htm#levels_only)».


Допустимые значения:


	- True (по умолчанию).
	 Множественная отметка включена;


	- False. Множественная
	 отметка выключена.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button
 с наименованием «Button1», DimensionTree с наименованием «DimensionTree1»
 и UiDimension с наименованием «UiDimension1». В качестве источника для
 UiDimension выбран календарный справочник, а в качестве источника для
 DimensionTree выбран UiDimension1.


Добавьте ссылку на системную сборку ExtCtrls.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	   DimensionTree1.LevelsMultiselect := False;

	End Sub Button1OnClick;


В результате выполнения примера после нажатия кнопки произойдет отключение
 множественной отметки уровней измерения.


См. также:


[IDimensionViewer](IDimensionViewer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
