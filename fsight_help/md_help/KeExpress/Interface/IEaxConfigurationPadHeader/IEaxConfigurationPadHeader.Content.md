# IEaxConfigurationPadHeader.Content

IEaxConfigurationPadHeader.Content
-


# IEaxConfigurationPadHeader.Content


## Синтаксис


Content: [EaxConfigurationPadHeaderContent](../../Enums/EaxConfigurationPadHeaderContent.htm);


## Описание


Свойство Content определяет тип элемента управления, который будет присутствовать в заголовке.


## Комментарии


По умолчанию свойству установлено значение [IEaxConfigurationPadHeader.Content](IEaxConfigurationPadHeader.Content.htm), при этом в заголовке будет отображен элемент управления, заданный в свойстве [CustomContent](IEaxConfigurationPadHeader.CustomContent.htm). Если свойство [CustomContent](IEaxConfigurationPadHeader.CustomContent.htm) не установлено, то в заголовке будет отображаться только текст, указанный в свойстве [Title](IEaxConfigurationPadHeader.Title.htm).


При установке в свойстве Content значения [EaxConfigurationPadHeaderContent.CheckBox](../../Enums/EaxConfigurationPadHeaderContent.htm) в заголовке слева от текста будет отображен флажок. Состояния отметки данного флажка можно определить в свойстве [Value](IEaxConfigurationPadHeader.Value.htm).


## Пример


Пример использования приведен в описании свойства [IEaxCustomConfigurationCategory.Pads](../IEaxCustomConfigurationCategory/IEaxCustomConfigurationCategory.Pads.htm).


См. также:


[IEaxConfigurationPadHeader](IEaxConfigurationPadHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
