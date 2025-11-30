# Создание календарного справочника

Создание календарного справочника
-


# Создание календарного справочника


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    Calendar: ICalendarDimension;

	    CalAttr: ICalendarDimAttribute;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_CLNDIM;

	    CrInfo.Id := "NewCalDim";

	    CrInfo.Name := "Новый календарный справочник";

	    CrInfo.Parent := MB.Root;

	    Calendar := MB.CreateObject(CrInfo).Edit As ICalendarDimension;

	    //Период календаря

	    Calendar.StartYear := 1990;

	    Calendar.EndYear := 2010;

	    //Тип календаря: Годы-Полугодия-Кварталы-Месяцы-Недели-Дни

	    Calendar.Hierarchy := 3;

	    //Уровни

	    Calendar.IncludeDays := True; //Дни

	    Calendar.IncludeWeek := True; //Недели

	    Calendar.IncludeMonths := True; //Месяцы

	    Calendar.IncludeYears := True; //Годы

	    //Замена наименования последнего уровня на день

	    Calendar.LastLevelNameAsDay := True;

	    //5 дневная неделя со понедельника

	    Calendar.WeekLevel.RestDays := DayOfWeekSet.Saturday Or DayOfWeekSet.Sunday;

	    //Пользовательский атрибут

	    CalAttr := Calendar.Attributes.Add;

	    CalAttr.Name := "Дата";

	    //Формат отображения: 1 января 1990 г. (Пн)

	    CalAttr.Expression(-1).AsString := "@[d MMMM yyyy]+"" г. (""+@[ddd]+"")""";

	    (Calendar As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан
 календарный справочник. Период для справочника - 1990-2010 г. В иерархии
 справочника будут присутствовать уровни День, Неделя, Месяц и Год. В неделе
 будет 5 дней. Наименование последнего уровня будет заменяться на день
 в формате "01.01.1990". Так же будет создан пользовательский
 атрибут, отображающий дату на всех уровнях в формате "1 января 1990
 г. (Пн)".


См. также:


[Примеры](KeDims_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
