# IMetabaseDialogClassFilter.ObjectClass

IMetabaseDialogClassFilter.ObjectClass
-


# IMetabaseDialogClassFilter.ObjectClass


## Синтаксис


ObjectClass: [MetabaseObjectClass](KeSom.chm::/Enums/MetabaseObjectClass.htm);


## Описание


Свойство ObjectClass определяет
 тип объектов, которые будут отображаться в диалоге при использовании данного
 фильтра.


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


[IMetabaseDialogClassFilter](IMetabaseDialogClassFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
