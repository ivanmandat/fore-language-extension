# ITableFilterCondition.Condition

ITableFilterCondition.Condition
-


# ITableFilterCondition.Condition


## Синтаксис


Condition: [FilterCondition](../../Enums/FilterCondition.htm);


## Описание


Свойство Condition определяет
 тип условия, по которому фильтруются данные.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента DataGrid с наименованием
 «DataGrid1» и компонента UiDataSource, который является источником данных
 для DataGrid.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    filter: ITableFilter;

	    filterItem: ITableFilterItem;

	    cond1, cond2: ITableFilterCondition;

	Begin

	    filter := DataGrid1.TableFilter;

	    filterItem := filter.Item(0);

	    cond1 := filterItem.Conditions.Add;

	    cond1.Condition := FilterCondition.Less;

	    cond1.Value := 6;

	    cond1.Relation := FilterRelation.And_;

	    cond2 := filterItem.Conditions.Add;

	    cond2.Condition := FilterCondition.More;

	    cond2.Value := 2;

	    filterItem.State := FilterItemState.Condition;

	End Sub Button1OnClick;


При нажатии кнопки «Button1» будет произведена фильтрация первого столбца
 по условию «меньше 6» и «больше 2».


См. также:


[ITableFilterCondition](ITableFilterCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
