# ITableFilterItem.LimitCondition

ITableFilterItem.LimitCondition
-


# ITableFilterItem.LimitCondition


## Синтаксис


LimitCondition: [ITableFilterLimitCondition](../ITableFilterLimitCondition/ITableFilterLimitCondition.htm);


## Описание


Свойство LimitCondition определяет
 условия фильтрации для типа фильтрации «Первые
 N».


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента DataGrid с наименованием
 «DataGrid1» и компонента UiDataSource, который является источником данных
 для DataGrid.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    filter: ITableFilter;

	    filterItem: ITableFilterItem;

	    limit: ITableFilterLimitCondition;

	Begin

	    filter := DataGrid1.TableFilter;

	    filterItem := filter.Item(1);

	    limit := filterItem.LimitCondition;

	    limit.Count := 2;

	    limit.HighestValues := True;

	    limit.Percentage := True;

	    filterItem.State := FilterItemState.Limit;

	End Sub Button1OnClick;


При нажатии кнопки «Button1» ко второму столбцу будет применен фильтр
 «2 наибольших элемента списка».


См. также:


[ITableFilterItem](ITableFilterItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
