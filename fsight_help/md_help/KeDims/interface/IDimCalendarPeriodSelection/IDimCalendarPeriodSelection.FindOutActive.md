# IDimCalendarPeriodSelection.FindOutActive

IDimCalendarPeriodSelection.FindOutActive
-


# IDimCalendarPeriodSelection.FindOutActive


## Синтаксис


FindOutActive;


## Описание


Метод FindOutActive настраивает
 параметры периода на основании текущей отметки.


## Комментарии


Если в календаре первый отмеченный элемент - 01.01.1990, последний -
 01.01.1992, между этими элементами отмечены все месяцы, и других отмеченных
 элементов нет, то после вызова метода FindOutActive
 будут установлены свойства: [Start](IDimCalendarPeriodSelection.Start.htm)
 - «01.01.1990 00:00:00», [End_](IDimCalendarPeriodSelection.End_.htm)
 - «01.01.1992 00:00:00», [Levels](IDimCalendarPeriodSelection.Levels.htm)
 - количество месяцев между ними, [Active](IDimCalendarPeriodSelection.Active.htm) = True.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с идентификатором «Button1», компонент DimensionTree с идентификатором
 «DimensionTree1» и компонент UiDimension с идентификатором «UiDimension1».
 Для компонента «DimensionTree1» укажите источник данных «UiDimension1».
 В качестве источника данных используется календарный справочник. Пример
 является обработчиком события OnClick для компонента «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    CalendarSel: IDimCalendarSelection;

    SelPeriod: IDimCalendarPeriodSelection;

Begin

    CalendarSel := UiDimension1.Selection As IDimCalendarSelection;

    SelPeriod := CalendarSel.Period;

    SelPeriod.FindOutActive;

    Debug.WriteLine(SelPeriod.Start.ToString + " " + SelPeriod.End_.ToString);

    Debug.WriteLine(SelPeriod.Levels);

    Debug.WriteLine(SelPeriod.Active);

End Sub Button1OnClick;


При нажатии на кнопку «Button1» в окно консоли будут выведены параметры
 периода на основании текущей отметки.


См. также:


[IDimCalendarPeriodSelection](IDimCalendarPeriodSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
