# DataGrid.OnBandBaseClick

DataGrid.OnBandBaseClick
-


# DataGrid.OnBandBaseClick


## Синтаксис


OnBandBaseClick(Sender: Object; Args: [IDataGridBandEventArgs](../../Interface/IDataGridBandEventArgs/IDataGridBandEventArgs.htm));


## Параметры


Sender. Параметр,
 возвращающий компонент, сгенерировавший событие;


Args. Параметр,
 позволяющий определить параметры события.


## Описание


Событие OnBandBaseClick наступает
 после щелчка мыши по заголовку столбца или контейнера.


## Комментарии


После щелчка мыши по заголовку столбца или контейнера происходит следующее:


	- наступает событие OnBandBaseClick;


	- происходит сортировка столбца;


	- наступает событие [DataGrid.OnSort](DataGrid.OnSort.htm).


## Пример


Для выполнения примера предполагается наличие формы и расположенного
 на ней компонента DataGrid с наименованием «DataGrid1».


Для следующих событий должны быть назначены обработчики:


	- для события OnBandBaseClick - обработчик DataGrid1OnBandBaseClick;


	- для события [DataGrid.OnSort](DataGrid.OnSort.htm) - обработчик
	 DataGrid1OnSort;


	- для события [Form.OnShow](modforms.chm::/Class/Form/Form.OnShow.htm)
	 - обработчик DATAGRID_ONBANDBASECLICKFormOnShow.


Добавьте ссылку на системную сборку MathFin.


	Class DATAGRID_ONBANDBASECLICKForm: Form

	    DataGrid1: DataGrid;

	    Rows: IDataGridRows;

	    Arr: Array Of String;


	Sub DATAGRID_ONBANDBASECLICKFormOnShow(Sender: Object; Args: IEventArgs);

	Var

	    i: integer;

	Begin

	    //Задаем количество строк и столбцов таблицы

	    DataGrid1.AbsoluteRowCount := 5;

	    DataGrid1.ColumnCount := 2;

	    Arr := New String[DataGrid1.AbsoluteRowCount];

	    //Заполняем таблицу данными

	    For i := 0 To DataGrid1.AbsoluteRowCount - 1 Do

	        DataGrid1.CellValue(i, 0) := i + Math.Power(10, DataGrid1.AbsoluteRowCount - 1 - i);

	        //Копируем значение каждой строки

	        Arr[i] := DataGrid1.CellValue(i, 0);

	    End For;


	End Sub DATAGRID_ONBANDBASECLICKFormOnShow;


	Sub DataGrid1OnBandBaseClick(Sender: Object; Args: IDataGridBandEventArgs);

	Var

	    i: integer;

	Begin

	    //Копируем значение каждой строки первого столбца

	    For i := 0 To DataGrid1.AbsoluteRowCount - 1 Do

	        Arr[i] := DataGrid1.CellValue(i, 0);

	    End For;

	End Sub DataGrid1OnBandBaseClick;


	Sub DataGrid1OnSort(Sender: Object; Args: IDataGridColumnEventArgs);

	Var

	    i: integer;

	Begin

	    //Заполняем второй столбец данными первого столбца до сортировки

	    For i := 0 To DataGrid1.AbsoluteRowCount - 1 Do

	        DataGrid1.CellValue(i, 1) := Arr[i];

	    End For;

	End Sub DataGrid1OnSort;

	End Class DATAGRID_ONBANDBASECLICKForm;


В результате выполнения примера после щелчка мыши по заголовку первого
 столбца строки будут отсортированы по возрастанию их значений и значения
 первого столбца до сортировки будут записаны во второй столбец.


См. также:


[DataGrid](DataGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
