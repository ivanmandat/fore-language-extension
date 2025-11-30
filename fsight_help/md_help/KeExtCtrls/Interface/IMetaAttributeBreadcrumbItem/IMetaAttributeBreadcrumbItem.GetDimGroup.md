# IMetaAttributeBreadcrumbItem.GetDimGroup

IMetaAttributeBreadcrumbItem.GetDimGroup
-


# IMetaAttributeBreadcrumbItem.GetDimGroup


## Синтаксис


GetDimGroup: [IDimElementGroup](KeDims.chm::/interface/IDimElementGroup/IDimElementGroup.htm);


## Описание


Свойство GetDimGroup возвращает
 отмеченную группу элементов справочника для данного элемента компонента.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки и компонента MetaAttributesBreadcrumb с наименованием «MetaAttributesBreadcrumb1».
 Компонент MetaAttributesBreadcrumb подключен к базе данных временных рядов.


В компоненте MetaAttributesBreadcrumb первым должен быть элемент, ссылающийся
 на справочник, содержащий группу элементов с идентификатором GROUP_TEST.
 Пример будет выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MetaItems: IBreadcrumbItems;

	    Item: IMetaAttributeBreadcrumbItem;

	    Group: IDimElementGroup;

	    mb: IMetabase;

	    Selection: IDimSelection;

	    DictDescr: IMetabaseObjectDescriptor;

	Begin

	    MetaItems := MetaAttributesBreadcrumb1.Items;

	    Item := MetaItems.Item(0) As IMetaAttributeBreadcrumbItem;

	    Group := Item.GetDimGroup;

	    If Group = Null Then

	        Selection := Item.GetSelection;

	        Selection.DeselectAll;

	        DictDescr := Item.MetaAttribute.ValuesObject;

	        mb := MetabaseClass.Active;

	        Group := mb.ItemByIdNamespace("GROUP_TEST",DictDescr.Key).Bind As IDimElementGroup;

	        Selection.Group := Group;

	        Item.SetSelection(Selection);

	    End If;

	End Sub Button1OnClick;


После выполнения примера для первого элемента компонента MetaAttributesBreadcrumb
 будет установлена отметка, включающая все элементы указанной группы.


См. также:


[IMetaAttributeBreadcrumbItem](IMetaAttributeBreadcrumbItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
