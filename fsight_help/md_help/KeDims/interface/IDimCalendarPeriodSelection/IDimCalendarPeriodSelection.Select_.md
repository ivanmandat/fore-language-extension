# IDimCalendarPeriodSelection.Select_

IDimCalendarPeriodSelection.Select_
-


# IDimCalendarPeriodSelection.Select_


## Синтаксис


Select_(Levels: [DimCalendarLevelSet](../../Enums/DimCalendarLevelSet.htm);
 Replace: Boolean);


## Параметры


Levels. Календарный уровень.


Replace. Заменять ли уровни,
 установленные в [IDimCalendarPeriodSelection.Levels](IDimCalendarPeriodSelection.Levels.htm).


## Описание


Метод Select_ включает указанный
 уровень в отметку.


## Комментарии


Select_ изменяет и дополняет
 значение свойства [IDimCalendarPeriodSelection.Levels](IDimCalendarPeriodSelection.Levels.htm).
 Если значение параметра Replace
 - True, то значение [IDimCalendarPeriodSelection.Levels](IDimCalendarPeriodSelection.Levels.htm)
 будет заменено на значение параметра Levels.
 Если значение параметра Replace
 - False, то значение [IDimCalendarPeriodSelection.Levels](IDimCalendarPeriodSelection.Levels.htm)
 будет дополнено значением параметра Levels.


## Пример


Использование метода приведено в примере для [IDimCalendarSelection.Period](../IDimCalendarSelection/IDimCalendarSelection.Period.htm).


См. также:


[IDimCalendarPeriodSelection](IDimCalendarPeriodSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
