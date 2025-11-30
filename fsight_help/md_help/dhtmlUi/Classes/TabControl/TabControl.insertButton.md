# TabControl.insertButton

TabControl.insertButton
-


# TabControl.insertButton


## Синтаксис


insertButton(value: JSON | PP.Ui.[Button](../Button/Button.htm)
 | PP.Ui.[TabControl](TabControl.htm), position: [PP.LTRB](dhtmlCommon.chm::/Enums/LTRB.htm),
 _isItem: Boolean, fireEvent: Boolean);


## Параметры


value. Элемент,
 который будет добавлен;


position. Позиция панели, в
 которую будет добавлен элемент;


_isItem. Признак добавления
 элемента в качестве вкладки;


fireEvent. Признак вызова события
 [TabControl.AddButton](TabControl.AddButton.htm)
 при выполнении метода.


## Описание


Метод insertButton добавляет
 кнопку в компонент TabControl.


## Комментарии


Допустимые значения параметра _isItem:


	- true. Элемент добавляется
	 как вкладка;


	- false. По умолчанию.
	 Элемент добавляется как кнопка.


Допустимые значения параметра fireEvent:


	- true. По умолчанию.
	 При выполнении метода генерируется событие [TabControl.AddButton](TabControl.AddButton.htm);


	- false. При выполнении
	 метода событие [TabControl.AddButton](TabControl.AddButton.htm)
	 не генерируется.


Метод полностью повторяет действия метода [TabControl.addButton](TabControl.addButton_M.htm).


## Пример


Пример использования метода приведён в описании метода [TabControl.removeItemByIndex](TabControl.removeItemByIndex.htm).


См. также:


[TabControl](TabControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
