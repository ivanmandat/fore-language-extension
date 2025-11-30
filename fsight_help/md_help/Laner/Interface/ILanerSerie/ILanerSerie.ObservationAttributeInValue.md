# ILanerSerie.ObservationAttributeInValue

ILanerSerie.ObservationAttributeInValue
-


# ILanerSerie.ObservationAttributeInValue


## Синтаксис


ObservationAttributeInValue: String;


## Описание


Свойство ObservationAttributeInValue
 определяет наименование атрибута наблюдений, значения которого отображаются
 в таблице рабочей книги.


## Комментарии


По умолчанию ObservationAttributeInValue
 не задан.


Если ObservationAttributeInValue
 не задан, то таблице отображаются значения атрибута «VL»
 (значения точек ряда).


Если для ObservationAttributeInValue
 установлено значение, отличное от «VL», то недоступны:


	- выполнение методов расчета;


	- смена единиц отображения;


	- выполнение преобразований;


	- применение формулы к ячейке;


	- сохранение ряда в виде модели.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов. Данная база данных должна содержать атрибут наблюдений с идентификатором
 «CMT».


	Sub UserProc;

	Var

	    Laner: ILaner;

	    LanerS: ILanerSeries;

	    i: Integer;

	    Serie: ILanerSerie;

	    lTable: ILanerTable;

	    col, row: integer;

	Begin

	    Laner := UiErAnalyzer1.ErAnalyzer.Laner;

	    LanerS := Laner.Series;

	    // Изменяем атрибут, отображаемый в таблице

	    Laner.BeginUpdate;

	    For i := 0 To LanerS.Count - 1 Do

	        Serie := LanerS.Item(i);

	        Serie.ObservationAttributeInValue := "CMT";

	    End For;

	    Laner.EndUpdate;

	    // Выводим отображаемые значения в окно консоли

	    lTable := LAner.Execute;

	    For row := 0 To lTable.RowCount - 1 Do

	        For col := 0 To lTable.ColumnCount - 1 Do

	            Debug.Write(lTable.CellName(row, col) + "; ");

	        End For;

	        Debug.WriteLine("");

	    End For;

	End Sub UserProc;


После выполнения примера в таблице рабочей книги будут отображаться
 значения атрибута наблюдений «CMT». Отображаемые значения будут выведены
 в окно консоли.


См. также:


[ILanerSerie](ILanerSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
