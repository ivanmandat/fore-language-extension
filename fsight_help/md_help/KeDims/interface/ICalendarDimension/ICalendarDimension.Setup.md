# ICalendarDimension.Setup

ICalendarDimension.Setup
-


# ICalendarDimension.Setup


## Синтаксис


Setup: [ICalendarSetup](../ICalendarSetup/ICalendarSetup.htm);


## Описание


Свойство Setup возвращает параметры
 календаря, элементы которого были построены динамически.


## Комментарии


Для динамического открытия календаря используйте метод [ICalendarDimension.OpenAs](ICalendarDimension.OpenAs.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором «FC_COMM». Также должна существовать
 форма, содержащая кнопку с идентификатором «Button1» и два компонента
 Memo с идентификаторами «Memo1»
 и «Memo2». Добавьте ссылки на системные сборки «Metabase», «Cube», «Dimensions». Пример
 является обработчиком события OnClick
 для кнопки.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    mb: IMetabase;

    Rub: IRubricator;

    CalendarObj: IMetabaseObject;

    Calendar: ICalendarDimension;

    CalendDimInst: IDimInstance;

    DynamicCalendInst: IDynamicCalendarInstance;

    Setup: ICalendarSetup;

    Iterator: IDimIterator;

Begin

    mb := MetabaseClass.Active;

    Rub := mb.ItemById("FC_COMM").Edit As IRubricator;

    CalendarObj := Rub.EditCalendar As IMetabaseObject;

    Calendar := CalendarObj As ICalendarDimension;

    Calendar.DefaultOpenType := CalendarOpenType.Hierarchical;

    CalendDimInst := Calendar.OpenAs(CalendarOpenType.Flat);

    DynamicCalendInst := CalendDimInst As IDynamicCalendarInstance;

    Setup := Calendar.Setup;

    Iterator := DynamicCalendInst.Iterator(Setup);

    Memo1.Clear;

    Memo1.Lines.Add("Старые значения");

    While Iterator.Next Do

        Memo1.Lines.Add(CalendDimInst.Elements.Name(Iterator.Element));

    End While;

    Setup.Levels := DimCalendarLevelSet.Week Or DimCalendarLevelSet.Month Or DimCalendarLevelSet.Year;

    Setup.StartDay := DateTime.Parse("01.01.2000");

    Setup.EndDay := DateTime.Parse("01.01.2020");

    Setup.WeekLevel.RestDays := DayOfWeekSet.SaturdaySunday;

    CalendarObj.Save;

    CalendDimInst := Calendar.OpenAs(CalendarOpenType.Flat);

    DynamicCalendInst := CalendDimInst As IDynamicCalendarInstance;

    Iterator := DynamicCalendInst.Iterator(Setup);

    Memo2.Clear;

    Memo2.Lines.Add("Новые значения");

    While Iterator.Next Do

        Memo2.Lines.Add(CalendDimInst.Elements.Name(Iterator.Element));

    End While;

End Sub Button1OnClick;


После выполнения примера календарь базы данных временных рядов будет
 динамически открыт в плоском виде. Элементы календаря будут выведены в
 компонент «Memo1». Затем параметры календаря будут изменены и сохранены:


	- доступные уровни: недели, месяцы, годы;


	- начало календаря: 01.01.2000;


	- окончание календаря: 01.01.2020;


	- выходные дни: суббота, воскресенье;


	- по умолчанию календарь будет открываться в иерархическом виде.


Элементы календаря (в плоском виде с учетом изменений) будут выведены
 в компонент «Memo2».


См. также:


[ICalendarDimension](ICalendarDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
