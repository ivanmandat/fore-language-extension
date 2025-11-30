# IMetabaseDialogFilters.AddFilter

IMetabaseDialogFilters.AddFilter
-


# IMetabaseDialogFilters.AddFilter


## Синтаксис


AddFilter(Filter: [IMetabaseDialogFilter](../IMetabaseDialogFilter/IMetabaseDialogFilter.htm)):
 Integer;


## Параметры


Filter.
 Фильтр, который необходимо добавить в коллекцию.


## Описание


Метод AddFilter добавляет в
 коллекцию фильтр, который передается в качестве входного параметра Filter, после чего метод возвращает
 индекс добавленного фильтра.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента MetabaseOpenDialog с
 наименованием «MetabaseOpenDialog1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Filter: IMetabaseDialogClassFilter;

	Begin

	    Filter := New MetabaseDialogClassFilter.Create;

	    Filter.Description := "Таблицы";

	    Filter.ObjectClass := MetabaseObjectClass.KE_CLASS_TABLE;

	    MetabaseOpenDialog1.Filters.AddFilter(Filter);

	    MetabaseOpenDialog1.Execute(Self);

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в список фильтров компонента
 «MetabaseOpenDialog1» будет добавлен новый фильтр, при использовании которого
 в диалоге будут отображаться все таблицы репозитория.


См. также:


[IMetabaseDialogFilters](IMetabaseDialogFilters.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
