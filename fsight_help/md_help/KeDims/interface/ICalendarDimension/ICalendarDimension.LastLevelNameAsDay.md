# ICalendarDimension.LastLevelNameAsDay

ICalendarDimension.LastLevelNameAsDay
-


# ICalendarDimension.LastLevelNameAsDay


## Синтаксис


LastLevelNameAsDay: Boolean;


## Описание


Свойство LastLevelNameAsDay определяет состояние опции «Замена наименования последнего уровня на день».


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    Calendar: ICalendarDimension;

	    CalAttr: ICalendarDimAttribute;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_CLNDIM;

	    CrInfo.Id := "CalendarDim";

	    CrInfo.Name := "Календарный справочник";

	    CrInfo.Parent := MB.Root;

	    MObj := MB.CreateObject(CrInfo).Edit;

	    Calendar := MObj As ICalendarDimension;

	    // Период календаря

	    Calendar.StartYear := 1990;

	    Calendar.EndYear := 2010;

	    // Тип календаря

	    Calendar.Hierarchy := 3;

	    // Уровни

	    Calendar.IncludeDays := True;

	    Calendar.IncludeWeek := True;

	    Calendar.IncludeMonths := True;

	    Calendar.IncludeYears := True;

	    Calendar.LastLevelNameAsDay := True;

	    Calendar.WeekLevel.RestDays := DayOfWeekSet.Saturday Or DayOfWeekSet.Sunday;

	    // Пользовательский атрибут

	    CalAttr := Calendar.Attributes.Add;

	    CalAttr.Name := "Дата";

	    CalAttr.Expression(-1).AsString := "@[d MMMM yyyy]+"" г. (""+@[ddd]+"")""";

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан календарный справочник. Период для справочника - 1990-2010 г. В иерархии справочника будут присутствовать уровни День, Неделя, Месяц и Год. В неделе будет 5 дней. Наименование последнего уровня будет заменяться на день в формате "01.01.1990". Так же будет создан пользовательский атрибут, отображающий дату на всех уровнях в формате "1 января 1990 г. (Пн)".


См. также:


[ICalendarDimension](ICalendarDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
