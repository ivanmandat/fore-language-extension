# ICalendarWeekLevel.RestDays

ICalendarWeekLevel.RestDays
-


# ICalendarWeekLevel.RestDays


## Синтаксис


RestDays: [DayOfWeekSet](../../Enums/DayOfWeekSet.htm);


## Описание


Свойство RestDays определяет
 выходные дни недели. Выходные дни будут исключаться из построения уровня.


Примечание.
 Свойство возвращает значение «0», если для уровня «Недели» настроена семидневная
 неделя и значение «96», если настроена пятидневная неделя. [См. Мастер
 создания календарного справочника.](UiMd.chm::/reference_book/Master_Calendar_reference_book/UiMd_reference_book_Master_Calendar_page2.htm)


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    ClnDim: ICalendarDimension;

    WeekLvl: ICalendarWeekLevel;

Begin

    MB := MetabaseClass.Active;

    // Создание календарного справочника

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_CLNDIM;

    CrInfo.Id := "CALENDAR_DIM";

    CrInfo.Name := "Календарный справочник";

    CrInfo.Parent := MB.Root;

    ClnDim := MB.CreateObject(CrInfo).Edit As ICalendarDimension;

    // Настройка параметров календарного справочника

    ClnDim.Hierarchy := 3;

    ClnDim.StartYear := 2015;

    ClnDim.EndYear := 2016;

    ClnDim.IncludeYears := True;

    ClnDim.IncludeWeek := True;

    ClnDim.IncludeDays := True;

    WeekLvl := ClnDim.WeekLevel;

    WeekLvl.RestDays := DayOfWeekSet.Friday;

    (ClnDim As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера в корневом каталоге репозитория будет создан
 календарный справочник с идентификатором «CALENDAR_DIM». В иерархии справочника
 будут присутствовать уровни «Годы», «Недели» и «Дни». При построении уровня
 «Недели» в него будут включены все дни недели, кроме пятницы:


![](ICalendarWeekLevel.RestDays.gif)


См. также:


[ICalendarWeekLevel](ICalendarWeekLevel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
