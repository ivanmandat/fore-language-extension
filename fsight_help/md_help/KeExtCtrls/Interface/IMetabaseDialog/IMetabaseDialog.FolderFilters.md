# IMetabaseDialog.FolderFilters

IMetabaseDialog.FolderFilters
-


# IMetabaseDialog.FolderFilters


## Синтаксис


FolderFilters: [IMetabaseDialogFilters](../IMetabaseDialogFilters/IMetabaseDialogFilters.htm);


## Описание


Свойство FolderFilters возвращает
 коллекцию фильтров, используемых для определения объектов-папок в диалоге.


## Комментарии


Фильтры данной коллекции позволяют определить, какие объекты будут считаться
 папками. В открытом диалоге можно просмотреть содержимое объекта-папки
 и выбрать дочерние объекты.


По умолчанию фильтр объектов-папок не установлен, при этом в диалоге
 можно просматривать содержимое всех объектов-контейнеров, и объектов,
 являющихся родительскими папками для других объектов, например, содержимое
 сборок.


Содержимое папок фильтруется в соответствии с коллекцией [Filters](IMetabaseDialog.Filters.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента MetabaseOpenDialog с
 наименованием «MetabaseOpenDialog1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Filters, FolderFilters: IMetabaseDialogFilters;

	    Filter: IMetabaseDialogFilter;

	Begin

	    Filters := MetabaseOpenDialog1.Filters;

	    FolderFilters := MetabaseOpenDialog1.FolderFilters;

	    // Создание нового фильтра для определения доступных в диалоге объектов

	    // В фильтр включены формы, модули, сборки платформы

	    Filter := New MetabaseDialogMetaclassFilter.Create;

	    (Filter As IMetabaseDialogMetaclassFilter).ObjectMetaclass := MetabaseObjectMetaclass.FORE_CLASS;

	    Filters.AddFilter(Filter);

	    // Создание нового фильтра для определения объектов, содержимое которых можно просмотреть

	    // В фильтр включены толькопапки платформы

	    Filter := New MetabaseDialogClassFilter.Create;

	    (Filter As IMetabaseDialogClassFilter).ObjectClass := MetabaseObjectClass.KE_CLASS_FOLDER;

	    FolderFilters.AddFilter(Filter);

	    MetabaseOpenDialogNet1.Execute(Self);

	End Sub;


При нажатии на кнопку для диалога «MetabaseOpenDialog1» будут определены
 два фильтра:


	- Фильтр объектов, доступных в диалоге;


	- Фильтр объектов, являющихся объектами-папками.


В первый фильтр будут включены модули, формы и сборки репозитория. Во
 второй фильтр будут включены только папки платформы. Таким образом при
 инициализации диалога, в нем можно будет выбрать модуль, форму, либо сборку
 репозитория. Выбор модулей и форм, хранящихся внутри сборок, будет недоступен.


См. также:


[IMetabaseDialog](IMetabaseDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
