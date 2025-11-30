# FontTools.PropertyChanged

FontTools.PropertyChanged
-


# FontTools.PropertyChanged


## Синтаксис


PropertyChanged: function (sender, args)


## Параметры


sender. Источник
 события;


args. Информация о событии.


При изменении цвета содержит:


	- Font. Параметры шрифта.


	- OldColor. Старый цвет.


	- NewColor. Новый цвет.


	- Cancel. При установке
	 в обработчике события значения true
	 действие будет отменено.


При изменении других настроек содержит:


	- Font. Параметры шрифта.


	- ListItem. Выбранный
	 элемент.


## Описание


Событие PropertyChanged наступает
 при изменении настроек отображения текста.


## Пример


Пример использования события приведен в описании метода [FontTools.init](FontTools.init.htm).


См. также:


[FontTools](FontTools.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
