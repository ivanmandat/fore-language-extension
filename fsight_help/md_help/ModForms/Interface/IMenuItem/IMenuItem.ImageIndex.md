# IMenuItem.ImageIndex

IMenuItem.ImageIndex
-


# IMenuItem.ImageIndex


## Синтаксис


ImageIndex: Integer;


## Описание


Свойство ImageIndex определяет индекс изображения, отображаемого в пункте меню.


## Комментарии


Значение «-1» соответствует отсутствию изображения. Источником изображений является компонент [ImageList](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/ImageList.htm), имя которого указывается в качестве значения свойства [Images](../IMenu/IMenu.Images.htm) родительского меню (компонент [MainMenu](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/MainMenu.htm) и [PopupMenu](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/PopupMenu.htm)).


Если пункт меню использует объект [Action](IMenuItem.Action.htm), то значение свойства ImageIndex пункта меню автоматически определяется значением свойства [ImageIndex](../IActionItem/IActionItem.ImageIndex.htm) объекта [Action](IMenuItem.Action.htm).


См. также:


[IMenuItem](IMenuItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
