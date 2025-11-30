# IMetabaseDialogCombiFilter.Filters

IMetabaseDialogCombiFilter.Filters
-


# IMetabaseDialogCombiFilter.Filters


## Синтаксис


Filters: [IMetabaseDialogFilters](../IMetabaseDialogFilters/IMetabaseDialogFilters.htm);


## Описание


Свойство Filters возвращает
 коллекцию фильтров комбинированного фильтра.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента MetabaseOpenDialog с
 наименованием «MetabaseOpenDialog1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MetaclassFilter: IMetabaseDialogMetaclassFilter;

	    ClassFilter: IMetabaseDialogClassFilter;

	    CombiFilter: IMetabaseDialogCombiFilter;

	    Filters: IMetabaseDialogFilters;

	Begin

	    // Фильтр для всех видов справочников

	    MetaclassFilter := New MetabaseDialogMetaclassFilter.Create;

	    MetaclassFilter.Description := "Все справочники";

	    MetaclassFilter.ObjectMetaclass := MetabaseObjectMetaclass.DIMENSION_CLASS;

	    // Фильтр для стандартных кубов

	    ClassFilter := New MetabaseDialogClassFilter.Create;

	    ClassFilter.Description := "Стандартные кубы";

	    ClassFilter.ObjectClass := MetabaseObjectClass.KE_CLASS_STDCUBE;

	    // Комбинированный фильтр

	    CombiFilter := New MetabaseDialogCombiFilter.Create;

	    Filters := CombiFilter.Filters;

	    Filters.AddFilter(MetaclassFilter);

	    Filters.AddFilter(ClassFilter);

	    // Подключение комбинированного фильтра в компоненте

	    MetabaseOpenDialog1.Filters.AddFilter(CombiFilter);

	    MetabaseOpenDialog1.Execute(Self);

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будут созданы три фильтра:


	- Фильтр, при использовании которого в диалоге будут отображаться
	 все виды справочников репозитория.


	- Фильтр, при использовании которого в диалоге будут отображаться
	 стандартные кубы репозитория.


	- Комбинированный фильтр, включающий в себя два предыдущих фильтра.


Комбинированный фильтр будет включен в список фильтров компонента «MetabaseOpenDialog1».


См. также:


[IMetabaseDialogCombiFilter](IMetabaseDialogCombiFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
