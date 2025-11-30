# ITabRange.SortRows

ITabRange.SortRows
-


# ITabRange.SortRows


## Синтаксис


SortRows(ColumnIndex: Integer; Ascending: Boolean);


## Параметры


ColumnIndex. Индекс столбца,
 в зависимости от значений которого будут сортироваться строки.


Ascending. Параметр, определяющий
 направление сортировки. Если True,
 то сортировка осуществляется по возрастанию значений.


## Описание


Метод SortRows осуществляет
 сортировку диапазона строк в зависимости от значений, содержащихся в столбце
 с индексом ColumnIndex.


## Комментарии


В результате работы метода строки переставляются таким образом, чтобы
 значения расположенные в столбце ColumnIndex
 были упорядочены в зависимости от направления сортировки.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1", компонента TabSheetBox
 с наименованием "TabSheetBox1" и какого-либо источника данных
 для TabSheetBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    TabSheetBox1: TabSheetBox;

	    Range: ITabRange;

	Begin

	    Range := TabSheetBox1.Source.GetTabSheet.Rows(0, 9);

	    Range.SortRows(0, True);

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку первые десять строк таблицы
 будут отсортированы по значениям первого столбца.


См. также:


[ITabRange](ITabRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
