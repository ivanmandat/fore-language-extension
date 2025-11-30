# ITableFilterItem.Icon

ITableFilterItem.Icon
-


# ITableFilterItem.Icon


## Синтаксис


Icon(Index: [TableFilterIconState](../../Enums/TableFilterIconState.htm)):
 [IGxIcon](ModDrawing.chm::/Interface/IGxIcon/IGxIcon.htm);


## Параметры


Index. Индекс
 состояния пиктограммы.


## Описание


Свойство Icon определяет пиктограмму
 кнопки автофильтра для соответствующего состояния.


## Комментарии


Элемент перечисления [TableFilterIconState.Ascending](../../Enums/TableFilterIconState.htm)
 определяется только в сочетании с элементом [TableFilterIconState.Sorted](../../Enums/TableFilterIconState.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с наименованием «Button1», компонент DataGrid с идентификатором
 «DataGrid1» и компонент UiDataSource с идентификатором «UiDataSource1».
 Укажите компонент «UiDataSource1» в качестве источника данных для компонента
 «DataGrid1».


Добавьте ссылку на системную сборку Drawing.


Пример является обработчиком события OnClick для компонента «Button1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Filter: ITableFilter;

	    FilterItem: ITableFilterItem;

	    Icon1, Icon2: IGxIcon;

	Begin

	    // Получим новые пиктограммы

	    Icon1 := New GxIcon.CreateFromFile("C:\Icons\tray1.ico");

	    Icon2 := New GxIcon.CreateFromFile("C:\Icons\tray2.ico");

	    Filter := DataGrid1.TableFilter;

	    // Установим пиктограммы для первого столбца

	    FilterItem := Filter.Item(0);

	    Filteritem.Icon(TableFilterIconState.Sorted) := Icon1;

	    Filteritem.Icon(TableFilterIconState.Sorted Or TableFilterIconState.Ascending) := Icon2;

	End Sub Button1OnClick;


При нажатии на кнопку «Button1» для первого столбца будут установлены
 новые пиктограммы для отображения сортировки по убыванию и по возрастанию.


См. также:


[ITableFilterItem](ITableFilterItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
