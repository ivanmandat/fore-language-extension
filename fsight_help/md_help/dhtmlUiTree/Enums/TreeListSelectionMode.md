# TreeListSelectionMode

TreeListSelectionMode
-


# TreeListSelectionMode


Пространство
 имен: PP.Ui;


## Описание


Перечисление TreeListSelectionMode содержит
 режимы отметки элементов дерева.


Используется следующими свойствами и методами:


	- [TreeListBase.SelectionChanged](../Classes/TreeListBase/TreeListBase.SelectionChanged.htm);


	- [TreeListBase.SelectionChanging](../Classes/TreeListBase/TreeListBase.SelectionChanging.htm);


	- [TreeListBase.SelectionMode](../Classes/TreeListBase/TreeListBase.SelectionMode.htm).


## Допустимые значения


		 Значение


		 Краткое описание


		 ControlShiftMultiSelect


		 Множественная отметка осуществляется
		 при зажатой клавише SHIFT или CTRL, переход по элементам вызывает
		 сброс отметки и выделение сфокусированного элемента.


		 DragMultiSelect


		 Множественная отметка осуществляется
		 при выборе элемента или при зажатой клавише SHIFT или CTRL, переход
		 по элементам не вызывает сброс отметки. При зажатой клавише CTRL
		 осуществляется добавление в отметку всех дочерних элементов. При
		 вызове контекстного меню элемент фокусируется, но не выделяется.


		 MultiSelect


		 Множественная отметка осуществляется
		 при выборе элемента, переход по элементам не вызывает сброс отметки.
		 При зажатой клавише CTRL осуществляется добавление в отметку всех
		 дочерних элементов. При вызове контекстного меню элемент фокусируется,
		 но не выделяется.


		 SingleSelect


		 Одиночная отметка элементов. Всегда
		 выделен сфокусированный элемент.


См. также:


[PP.Ui](dhtmlUi.chm::/Classes/classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
