# INavigationBarHeader.CustomContent

INavigationBarHeader.CustomContent
-


# INavigationBarHeader.CustomContent


## Синтаксис


CustomContent: [IControl](../IControl/IControl.htm);


## Описание


Свойство CustomContent определяет
 элемент управления, отображаемый в области заголовка.


## Комментарии


Данное свойство актуально, если свойству [Content](INavigationBarHeader.Content.htm)
 установлено значение [NavigationBarHeaderContent.Custom](../../Enums/NavigationBarHeaderContent.htm).
 Указанный элемент управления будет отображен с левой стороны от текста
 заголовка и будет иметь фиксированный размер - 15*15 пикселей. Для элемента
 управления, указываемого в свойстве CustomContent,
 в качестве родительского объекта в свойстве [Parent](../IControl/IControl.Parent.htm)
 должен быть указан текущий компонент [NavigationBar](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/NavigationBar.htm).


Примечание.
 В области заголовка не могут использоваться безоконные компоненты (Label,
 Hyperlink, Bevel и ImageBox).


## Пример


Пример использования приведен в описании свойства [INavigationBar.Pads](../INavigationBar/INavigationBar.Pads.htm).


См. также:


[INavigationBarHeader](INavigationBarHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
