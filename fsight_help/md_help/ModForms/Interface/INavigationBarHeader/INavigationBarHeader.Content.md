# INavigationBarHeader.Content

INavigationBarHeader.Content
-


# INavigationBarHeader.Content


## Синтаксис


Content: [NavigationBarHeaderContent](../../Enums/NavigationBarHeaderContent.htm);


## Описание


Свойство Content определяет тип элемента управления, который будет присутствовать в заголовке.


## Комментарии


По умолчанию свойству установлено значение [NavigationBarHeaderContent.Custom](../../Enums/NavigationBarHeaderContent.htm), при этом в заголовке будет отображен элемент управления, заданный в свойстве [CustomContent](INavigationBarHeader.CustomContent.htm). Если свойство [CustomContent](INavigationBarHeader.CustomContent.htm) не установлено, то в заголовке будет отображаться только текст, указанный в свойстве [Title](INavigationBarHeader.Title.htm).


При установке в свойстве Content значения [NavigationBarHeaderContent.CheckBox](../../Enums/NavigationBarHeaderContent.htm) в заголовке слева от текста будет отображен флажок. Состояния отметки данного флажка можно определить в свойстве [Value](INavigationBarHeader.Value.htm).


## Пример


Пример использования приведен в описании свойства [INavigationBar.Pads](../INavigationBar/INavigationBar.Pads.htm).


См. также:


[INavigationBarHeader](INavigationBarHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
