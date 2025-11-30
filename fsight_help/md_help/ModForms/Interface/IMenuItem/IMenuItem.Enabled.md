# IMenuItem.Enabled

IMenuItem.Enabled
-


# IMenuItem.Enabled


## Синтаксис


Enabled: Boolean;


## Описание


Свойство Enabled определяет
 доступность пункта меню для пользователя.


## Комментарии


Допустимые значения:


	- True. Пункт меню доступен
	 для использования.


	- False. Пункт меню не
	 доступен для использования.


Недоступный пункт отображается серым цветом, игнорирует события, связанные
 с мышью, клавиатурой и события таймера.


Если пункт меню использует объект [Action](IMenuItem.Action.htm),
 то значение свойства Enabled пункта
 меню автоматически определяется значением свойства [Enabled](../IActionItem/IActionItem.Enabled.htm)
 объекта [Action](IMenuItem.Action.htm).


Примечание.
 Свойство Enabled не может принимать
 значение False, если пункт меню
 является корневым для компонента [MainMenu](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/MainMenu.htm).


См. также:


[IMenuItem](IMenuItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
