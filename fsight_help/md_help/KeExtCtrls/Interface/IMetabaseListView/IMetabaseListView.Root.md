# IMetabaseListView.Root

IMetabaseListView.Root
-


# IMetabaseListView.Root


## Синтаксис


Root: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство Root определяет описание
 корневого каталог, содержимое которого будет отображаться в компоненте.


## Комментарии


В качестве значения свойства необходимо указать описание какой-либо
 папки или объекта-контейнера (Репозиторий НСИ, База данных временных рядов,
 Контейнер моделирования, Сборка). Навигация будет доступна по всем дочерним
 объектам.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента MetabaseListView с наименованием
 «MetabaseListView1».


Добавьте ссылку на системную сборку Metabase.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    CombineFilter: IMetabaseDialogCombiFilter;

	    Filter: IMetabaseDialogMetaclassFilter;

	Begin

	    MetabaseListView1.Root := MetabaseClass.Active.Root;

	    // Возможность вызова для объектов системного контекстного меню

	    MetabaseListView1.EnableSystemPopupMenu := True;

	    // Отображать кнопку "Найти все"

	    MetabaseListView1.EnableFindAll := True;

	    CombineFilter := New MetabaseDialogCombiFilter.Create;

	    // Фильтр для отображения папок

	    Filter := New MetabaseDialogMetaclassFilter.Create;

	    Filter.ObjectMetaclass := MetabaseObjectMetaclass.FOLDER_CLASS;

	    CombineFilter.Filters.AddFilter(Filter);

	    // Фильтр для отображения различных видов справочников НСИ

	    Filter := New MetabaseDialogMetaclassFilter.Create;

	    Filter.ObjectMetaclass := MetabaseObjectMetaclass.RDS_CLASS;

	    CombineFilter.Filters.AddFilter(Filter);

	    // Установить фильтр для компонента

	    MetabaseListView1.Filters.AddFilter(CombineFilter);

	End Sub Button1OnClick;


При нажатии на кнопку будет произведена настройка компонента «MetabaseListView1».
 Для компонента будет задан корневой каталог, включена возможность вызова
 системного контекстного меню для объектов репозитория. В диалоге поиска
 будет доступна кнопка «Найти все».
 Также будет установлен фильтр объектов: в компоненте будут отображаться
 папки и различные виды справочников НСИ.


См. также:


[IMetabaseListView](IMetabaseListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
