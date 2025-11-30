# IMetabaseDialogMetaclassFilter.ObjectMetaclass

IMetabaseDialogMetaclassFilter.ObjectMetaclass
-


# IMetabaseDialogMetaclassFilter.ObjectMetaclass


## Синтаксис


ObjectMetaclass: [MetabaseObjectMetaclass](KeSom.chm::/Enums/MetabaseObjectMetaclass.htm);


## Описание


Свойство ObjectMetaclass определяет
 класс объектов, которые будут отображаться в диалоге при использовании
 данного фильтра.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента MetabaseOpenDialog с
 наименованием «MetabaseOpenDialog1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Filter: IMetabaseDialogMetaclassFilter;

	Begin

	    Filter := New MetabaseDialogMetaclassFilter.Create;

	    Filter.Description := "Справочники";

	    Filter.ObjectMetaclass := MetabaseObjectMetaclass.DIMENSION_CLASS;

	    MetabaseOpenDialog1.Filters.AddFilter(Filter);

	    MetabaseOpenDialog1.Execute(Self);

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в список фильтров компонента
 «MetabaseOpenDialog1» будет добавлен новый фильтр, при использовании которого
 в диалоге будут отображаться все объекты всех видов справочников репозитория.


См. также:


[IMetabaseDialogMetaclassFilter](IMetabaseDialogMetaclassFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
