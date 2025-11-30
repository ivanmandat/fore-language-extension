# IDimCalendarPeriodSelection.Levels

IDimCalendarPeriodSelection.Levels
-


# IDimCalendarPeriodSelection.Levels


## Синтаксис


Levels: [DimCalendarLevelSet](../../Enums/DimCalendarLevelSet.htm);


## Описание


Свойство Levels определяет уровни,
 элементы которых отмечаются в периоде.


## Комментарии


По умолчанию уровни не определены. Для отметки нескольких уровней указывайте
 необходимые значения перечисления [DimCalendarLevelSet](../../Enums/DimCalendarLevelSet.htm)
 через «Or».


Для изменения списка уровней, элементы которых отмечаются в периоде,
 также используется метод [IDimCalendarPeriodSelection.Select](IDimCalendarPeriodSelection.Select_.htm).


При работе с составными уровнями отмечаются не все уровни, а только
 элементы, соответствующие выбранному уровню.


Например, при задании IDimCalendarPeriodSelection.Levels = NineMonths
 отметится не весь уровень (Полугодия-Кварталы-9 месяцев), а только элементы,
 соответствующие 9-и месяцам.


## Пример


Использование свойства приведено в примере для [IDimCalendarSelection.Period](../IDimCalendarSelection/IDimCalendarSelection.Period.htm).


См. также:


[IDimCalendarPeriodSelection](IDimCalendarPeriodSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
