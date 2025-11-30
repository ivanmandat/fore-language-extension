# IMDCalculationCalculateArgs.SliceFilter

IMDCalculationCalculateArgs.SliceFilter
-


# IMDCalculationCalculateArgs.SliceFilter


## Синтаксис


SliceFilter(Slice: [IMDCalculationSlice](../IMDCalculationSlice/IMDCalculationSlice.htm)):
 [IMDCalculationSliceFilter](../IMDCalculationSliceFilter/IMDCalculationSliceFilter.htm);


## Параметры


Slice. Срез приёмника данных,
 по которому необходимо настроить фильтрацию элементов.


## Описание


Свойство SliceFilter возвращает
 настройку фильтрации элементов, по которым будет производиться расчет.


## Пример


Для выполнения примера предполагается наличие в репозитории многомерного
 расчета на сервере БД с идентификатором MDCalc_1. Приёмник данных содержит
 календарное измерение, на котором построен срез с идентификатором CALENDAR.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDInst: IMDCalculationInstance;

	    Args: IMDCalculationCalculateArgs;

	    Filter: IMDCalculationSliceFilter;

	Begin

	    MB := MetabaseClass.Active;

	    MDInst := MB.ItemById("MDCalc_1").Open(Null) As IMDCalculationInstance;

	    Args := MDInst.CreateCalculateArgs;

	    //фильтр с помощью Selection'a

	    Filter := Args.SliceFilter(MDInst.Calculation.Destination.Slices.FindById("CALENDAR"));

	    Filter.Type := MDCalculationSliceFilterType.Selection;

	    Filter.Selection.SelectElement(0, True);

	    Filter.Selection.SelectElement(32, True);

	    MDInst.Calculate(Args);

	End Sub UserProc;


После выполнения примера будет осуществлён многомерный расчет на сервере
 БД. Расчет будет осуществляться по выделенным элементам, содержащим формулы.


См. также:


[IMDCalculationCalculateArgs](IMDCalculationCalculateArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
