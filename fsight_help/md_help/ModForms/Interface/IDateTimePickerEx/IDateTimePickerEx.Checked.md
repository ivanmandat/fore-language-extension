# IDateTimePickerEx.Checked

IDateTimePickerEx.Checked
-


# IDateTimePickerEx.Checked


## Синтаксис


Checked: Boolean;


## Описание


Свойство Checked определяет
 состояние флажка компонента.


## Комментарии


По умолчанию свойству Checked
 установлено значение True, при
 этом в компоненте можно изменять дату и время. Если установить значения
 False, то возможности изменять
 дату и время не будет. Также при этом в свойстве [CurrentDate](IDateTimePickerEx.CurrentDate.htm)
 будет установлено значение «30.12.1899
 0:00:00». При последующей установке свойству Checked
 значения True в свойстве [CurrentDate](IDateTimePickerEx.CurrentDate.htm) будут восстановлены последняя
 дата и время, которые были введены в компоненте.


Свойство актуально, если свойству [ShowCheckbox](IDateTimePickerEx.ShowCheckbox.htm)
 установлено значение True.


См. также:


[IDateTimePickerEx](IDateTimePickerEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
