# ILaner.Sorter

ILaner.Sorter
-


# ILaner.Sorter


## Синтаксис


Sorter: [ILanerSorter](../ILanerSorter/ILanerSorter.htm);


## Описание


Свойство Sorter возвращает
 параметры сортировки рабочей книги.


## Комментарии


В рабочей книге доступно 2 вида сортировки:


	- сортировка по значениям наблюдений показателей. Используйте
	 интерфейс [ILanerSorterData](../ILanerSorterData/ILanerSorterData.htm);


	- сортировка по значениям атрибутов показателей. Используйте
	 интерфейс [ILanerSorterHeader](../ILanerSorterHeader/ILanerSorterHeader.htm).


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	Sub UserProc;

	Var

	    Laner: ILaner;

	    Ls: ILanerSorter;

	    DataSort: ILanerSorterData;

	    DimElement: Integer;

	    Dir: LnSortDirection;

	Begin

	    Laner := UiErAnalyzer1.ErAnalyzer.Laner;

	    Ls := Laner.Sorter;

	    // Получаем параметры сортировки данных

	    DataSort := Ls.SeriesDataSort;

	    // Изменяем направление сортировки

	    If DataSort.Count > 0 Then

	        DimElement := DataSort.CalendarElement(0);

	        Dir := DataSort.SortDirection(DimElement);

	        If Dir = LnSortDirection.Ascending Then

	            DataSort.SortDirection(DimElement) := LnSortDirection.Descending;

	        Else

	            DataSort.SortDirection(DimElement) := LnSortDirection.Ascending;

	        End If;

	    End If;

	End Sub UserProc;


Результат выполнения процедуры: если в рабочей книге была задана сортировка
 данных, то её направление будет изменено на противоположное.


См. также:


[ILaner](ILaner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
