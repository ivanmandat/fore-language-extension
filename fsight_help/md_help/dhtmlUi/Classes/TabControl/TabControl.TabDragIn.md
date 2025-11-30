# TabControl.TabDragIn

TabControl.TabDragIn
-


# TabControl.TabDragIn


## Синтаксис


TabDragIn: function (sender, args);


## Параметры


sender. Источник
 события;


args. Информация о событии.


## Описание


Событие TabDragIn наступает
 при внесении вкладки в область элемента управления.


## Комментарии


Допустимые значения параметра args:


	- TabItem. Переносимая
	 вкладка;


	- TabControl. Элемент
	 управления, из которого переносится вкладка.


Событие актуально, если для свойства [TabControl.EnableDropFromOutside](TabControl.EnableDropFromOutside.htm)
 установлено значение true.


## Пример


Пример использования события приведен в описании метода [TabControl.removeItemByIndex](TabControl.removeItemByIndex.htm).


См. также:


[TabControl](TabControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
