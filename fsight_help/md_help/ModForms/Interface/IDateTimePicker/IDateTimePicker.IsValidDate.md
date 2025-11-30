# IDateTimePicker.IsValidDate

IDateTimePicker.IsValidDate
-


# IDateTimePicker.IsValidDate


## Синтаксис


IsValidDate(Value: DateTime): Boolean;


## Параметры


Value - значение даты и времени, которое необходимо проверить на возможность установки в качестве значения для компонента [DateTimePicker](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/DateTimePicker.htm).


## Описание


Свойство IsValidDate возвращает признак возможности установить значение, передаваемое посредством параметра Value, в качестве значения для компонента.


## Комментарии


Свойство возвращает значение True для дат в диапазоне 01.01.1601-31.12.9999, и False для всех остальных дат.


См. также:


[IDateTimePicker](IDateTimePicker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
