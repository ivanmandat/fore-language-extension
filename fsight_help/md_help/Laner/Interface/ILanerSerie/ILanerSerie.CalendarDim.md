# ILanerSerie.CalendarDim

ILanerSerie.CalendarDim
-


# ILanerSerie.CalendarDim


## Синтаксис


CalendarDim: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm);


## Описание


Свойство CalendarDim возвращает
 календарь ряда.


## Комментарии


Если ряды, содержащиеся в рабочей книге, используют разные календари,
 то свойство [ILaner.CalendarDim](../ILaner/ILaner.CalendarDim.htm)
 возвращает значение NULL.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов.


Добавьте ссылки на системные сборки: Dimensions.


	Sub UserProc;

	Var

	    Laner: ILaner;

	    i: Integer;

	    Series: ILanerSeries;

	    LSerie: ILanerSerie;

	    Calendar: IDimInstance;

	    Tbl: ILanerTable;

	    TopH: ILanerTopHeader;

	Begin

	    Laner := UiErAnalyzer1.ErAnalyzer.Laner;

	    If Laner.CalendarDim = Null Then

	        Series := Laner.Series;

	        Debug.WriteLine("Ключи используемых календарных справочников:");

	        For i := 0 To Series.Count - 1 Do

	            LSerie := Series.Item(i);

	            Calendar := LSerie.CalendarDim As IDimInstance;

	            Debug.WriteLine(Calendar.Key);

	        End For;

	        Tbl := Laner.Execute;

	        TopH := Tbl.TopHeader;

	        Debug.WriteLine("Календарь рабочей книги с уровнями динамики:");

	        For i := 0 To TopH.ElementCount - 1 Do

	            Debug.Write(TopH.DimensionDate(0, i));

	            Select Case TopH.DimensionLevel(0, i)

	                Case DimCalendarLevel.Day: Debug.WriteLine(" - дни");

	                Case DimCalendarLevel.HalfYear: Debug.WriteLine(" - полугодия");

	                Case DimCalendarLevel.Month: Debug.WriteLine(" - месяцы");

	                Case DimCalendarLevel.NineMonths: Debug.WriteLine(" - 9 месяцев");

	                Case DimCalendarLevel.Quarter: Debug.WriteLine(" - кварталы");

	                Case DimCalendarLevel.Week: Debug.WriteLine(" - недели");

	                Case DimCalendarLevel.Year: Debug.WriteLine(" - годы");

	            End Select;

	        End For;

	    End If;

	End Sub UserProc;


После выполнения процедуры, если ряды в рабочей книге используют различные
 календари, то в окно консоли будут выведены:


	- ключи используемых календарных справочников;


	- календарь рабочей книги с указанием уровня динамики для каждой
	 даты.


См. также:


[ILanerSerie](ILanerSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
