# IMetaAttributeSetting.SortAttribute

IMetaAttributeSetting.SortAttribute
-


# IMetaAttributeSetting.SortAttribute


## Синтаксис


SortAttribute: String;


## Описание


Свойство SortAttribute определяет
 атрибут, по которому осуществляется сортировка.


Примечание.
 Данное свойство учитывается, если свойство [IMetaAttributeSetting.SortType](IMetaAttributeSetting.SortType.htm)
 имеет значение ControlSortType.Custom.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки и компонента MetaAttributesBreadcrumb с наименованием «MetaAttributesBreadcrumb1».
 Компонент MetaAttributesBreadcrumb подключен к базе данных временных рядов.


В компоненте MetaAttributesBreadcrumb должен быть выбран хотя бы один
 атрибут. Пример выполняется при нажатии на кнопку.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Items: IBreadcrumbItems;

	    Item: IMetaAttributeBreadcrumbItem;

	    AttSett: IMetaAttributeSettings;

	    Attr: IMetaAttribute;

	    Sett: IMetaAttributeSetting;

	Begin

	    Items := MetaAttributesBreadcrumb1.Items;

	    Item := Items.Item(0) As IMetaAttributeBreadcrumbItem;

	    AttSett := MetaAttributesBreadcrumb1.MetaAttributeSettings;

	    Attr := Item.MetaAttribute;

	    Sett := AttSett.FindByAttribute(Attr);

	    Sett.SortType := ControlSortType.Custom;

	    Sett.SortDirectionType := SortDirection.Ascending;

	    Sett.SortAttribute :="KEY";

	End Sub Button1OnClick;


После выполнения примера элементы первого атрибута, выбранного в MetaAttributesBreadcrumb,
 будут отсортированы по атрибуту «KEY» в порядке возрастания.


См. также:


[IMetaAttributeSetting](IMetaAttributeSetting.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
