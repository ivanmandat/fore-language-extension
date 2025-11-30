# ILanerSorterData.Clear

ILanerSorterData.Clear
-


# ILanerSorterData.Clear


## Синтаксис


Clear;


## Описание


Метод Clear сбрасывает
 сортировку по значениям наблюдений показателей.


## Комментарии


После выполнения метода свойство [ILanerSorterData.Count](ILanerSorterData.Count.htm)
 становится равным нулю.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая книга базы данных временных
 рядов. Перед выполнением примера выделите один ряд в компоненте в LanerBox1.


Добавьте ссылки на системные сборки: Laner.


	Sub UserProc;

	Var

	    Laner: ILaner;

	    Ls: ILanerSorter;

	    DataSort: ILanerSorterData;

	Begin

	    Laner := UiErAnalyzer1.ErAnalyzer.Laner;

	    Ls := Laner.Sorter;

	    DataSort := Ls.SeriesDataSort;

	    If DataSort.Count > 0 Then

	        DataSort.Clear;

	    End If;

	End Sub UserProc;


Результат выполнения примера: если в рабочей книге выполнялась сортировка
 по значениям наблюдений показателей, то она будет сброшена.


См. также:


[ILanerSorterData](ILanerSorterData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
