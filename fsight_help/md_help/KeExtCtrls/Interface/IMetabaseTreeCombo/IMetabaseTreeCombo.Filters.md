# IMetabaseTreeCombo.Filters

IMetabaseTreeCombo.Filters
-


# IMetabaseTreeCombo.Filters


## Синтаксис


Filters: [IMetabaseDialogFilters](../IMetabaseDialogFilters/IMetabaseDialogFilters.htm);


## Описание


Свойство Filters возвращает
 коллекцию фильтров, используемых для фильтрации объектов, отображаемых
 в компоненте.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента MetabaseTreeCombo с
 наименованием «MetabaseTreeCombo1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Filter: IMetabaseDialogClassFilter;

	Begin

	    Filter := New MetabaseDialogClassFilter.Create;

	    Filter.ObjectClass := MetabaseObjectClass.KE_CLASS_TABLE;

	    MetabaseTreeCombo1.Filters.AddFilter(Filter);

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в дереве репозитория
 компонента «MetabaseTreeCombo1» будут отображаться только таблицы репозитория.


См. также:


[IMetabaseTreeCombo](IMetabaseTreeCombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
