# ITabSheet.Columns

ITabSheet.Columns
-


# ITabSheet.Columns


## Синтаксис


Columns(Start: Integer; Finish: Integer): [ITabRange](../ITabRange/ITabRange.htm);


## Параметры


Start. Номер первого столбца
 диапазона.


Finish. Номер последнего столбца
 диапазона.


Допустимое значение всех параметров находится в диапазоне [0, [ColumnsCount](ITabSheet.ColumnsCount.htm)).


## Описание


Свойство Columns возвращает
 столбцы таблицы, диапазон которых передается в качестве входных параметров
 Start и Finish.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiTabSheet
 с наименованием «UiTabSheet1» и компонента TabSheetBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Tab: ITabSheet;

	Begin

	    Tab := UiTabSheet1.TabSheet;

	    Tab.RowsCount := 5;

	    Tab.ColumnsCount := 5;

	    Tab.Columns(0, 1).Value := 10;

	    Tab.Rows(0, 1).Value := 10;

	End Sub Button1OnClick;


	Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    r, c: integer;

	    Tab: ITabSheet;

	Begin

	    Tab := UiTabSheet1.TabSheet;

	    r := Tab.MaxUsedRow;

	    c := Tab.MaxUsedColumn;

	    Self.Text := "Количество используемых строк: " + r.ToString + ". Количество используемых столбцов: " + c.ToString;

	End Sub Button2OnClick;


После нажатия на кнопку «Button1» будет ограничено количество строк
 и столбцов до 5. Столбцам и строкам будут присвоены значения «10». При
 нажатии на кнопку «Button2» в заголовке формы будет отображен максимальный
 индекс строк и столбцов.


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
