# SelectionModeType

SelectionModeType
-


# SelectionModeType


## Описание


Перечисление SelectionModeType
 содержит режимы отметки элементов.


Используется следующими свойствами и методами:


	- [IDimensionViewer.SelectionMode](KeExtCtrls.chm::/Interface/IDimensionViewer/IDimensionViewer.SelectionMode.htm);


	- [ITreeControl.SelectionMode](../Interface/ITreeControl/ITreeControl.SelectionMode.htm);


	- [IRdsDictionaryBox.SelectionMode](KeRds.chm::/Interface/IRdsDictionaryBox/IRdsDictionaryBox.SelectionMode.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 SingleSelect. Одиночная
		 отметка элементов. Всегда выделен сфокусированный элемент.


		 1
		 SingleSelectNullable.
		 Одиночная отметка элементов. Для сфокусированного элемента может
		 отсутствовать отметка. При переходе по элементам осуществляется
		 выделение сфокусированного элемента. При вызове контекстного меню
		 в области элемента, элемент фокусируется но не выделяется.


		 2
		 MultiSelect. Расширенный
		 режим множественной отметки. Множественная отметка осуществляется
		 при выборе элемента, переход по элементам не вызывает сброс отметки.
		 При зажатой клавише CTRL осуществляется добавление в отметку всех
		 дочерних элементов. При вызове контекстного меню в области элемента,
		 элемент фокусируется но не выделяется.


		 3
		 MultiSelectStandard.
		 Стандартный режим множественной отметки. Множественная отметка
		 осуществляется при зажатой клавише SHIFT или CTRL, переход по
		 элементам вызывает сброс отметки и выделение сфокусированного
		 элемента.


См. также:


[Перечисления сборки Forms](ModForms_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
