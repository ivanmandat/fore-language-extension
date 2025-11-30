# ILanerSorter.HeadersSort

ILanerSorter.HeadersSort
-


# ILanerSorter.HeadersSort


## Синтаксис


HeadersSort: [ILanerSorterHeader](../ILanerSorterHeader/ILanerSorterHeader.htm);


## Описание


Свойство HeadersSort возвращает
 параметры сортировки по значениям атрибутов показателей.


## Комментарии


По умолчанию в рабочей книге сортировка по значениям атрибутов показателей
 не производится.


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

	    HeaderSort: ILanerSorterHeader;

	    Columns: ILanerAttributeColumns;

	    i: Integer;

	    Inv: Boolean;

	    LCol: ILanerColumn;

	Begin

	    Laner := UiErAnalyzer1.ErAnalyzer.Laner;

	    Ls := Laner.Sorter;

	    // Получаем параметры сортировки
	 по значениям атрибутов показателей

	    HeaderSort := Ls.HeadersSort;

	    // Сбрасываем текущие параметры сортировки

	    HeaderSort.Clear;

	    // Получаем столбец со значениями
	 атрибута «Формат отображения»

	    Columns := Laner.AttributeColumns;

	    For i := 0 To Columns.Count - 1 Do

	        LCol := Columns.Column(i);

	        If LCol.Type = LnColumnType.Inversion Then

	            inv := True;

	            Break;

	        End If;

	    End For;

	    If Not inv Then

	        LCol := Columns.AddByType(LnColumnType.Inversion);

	    End If;

	    // Задаем направление сортировки

	    HeaderSort.SortColumnDirection(LCol) := LnSortDirection.Ascending;

	End Sub UserProc;


Результат выполнения процедуры: в рабочей книге будет установлена сортировка
 по возрастанию значений атрибута «Формат
 отображения». Если значения данного атрибута не отображаются в
 рабочей книге, то будет отображен соответствующий столбец со значениями.


См. также:


[ILanerSorter](ILanerSorter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
