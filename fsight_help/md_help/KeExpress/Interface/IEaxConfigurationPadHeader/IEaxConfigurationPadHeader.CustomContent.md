# IEaxConfigurationPadHeader.CustomContent

IEaxConfigurationPadHeader.CustomContent
-


# IEaxConfigurationPadHeader.CustomContent


## Синтаксис


CustomContent: [IControl](ModForms.chm::/Interface/IControl/IControl.htm);


## Описание


Свойство CustomContent определяет
 элемент управления, отображаемый в области заголовка.


## Комментарии


Данное свойство актуально, если свойству [Content](IEaxConfigurationPadHeader.Content.htm) установлено
 значение [EaxConfigurationPadHeaderContent.Custom](../../Enums/EaxConfigurationPadHeaderContent.htm).
 Указанный элемент управления будет отображен с левой стороны от текста
 заголовка и будет иметь фиксированный размер - 15*15 пикселей. Для элемента
 управления, указываемого в свойстве CustomContent,
 в качестве родительского объекта в свойстве [Parent](ModForms.chm::/Interface/IControl/IControl.Parent.htm) должен
 быть указан текущий компонент [EaxConfigurationPanel](uidevenv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/EaxConfigurationPanel.htm).


См. также:


[IEaxConfigurationPadHeader](IEaxConfigurationPadHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
