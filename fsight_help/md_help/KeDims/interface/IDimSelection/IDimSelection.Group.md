# IDimSelection.Group

IDimSelection.Group
-


# IDimSelection.Group


## Синтаксис


Group: [IDimElementGroup](../IDimElementGroup/IDimElementGroup.htm);


## Описание


Свойство Group определяет группу
 элементов справочника, которая установлена в отметке.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки и компонента MetaAttributesBreadcrumb с наименованием «MetaAttributesBreadcrumb1».
 Компонент MetaAttributesBreadcrumb подключен к базе данных временных рядов
 показателей.


В компоненте MetaAttributesBreadcrumb первым должен быть элемент, ссылающийся
 на справочник, содержащий группу элементов с идентификатором «GROUP_TEST».


Пример является обработчиком события OnClick для компонента «Button1».


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

	        Group := mb.ItemByIdNamespace("GROUP_TEST", DictDescr.Key).Bind As IDimElementGroup;

	        Selection.Group := Group;

	        Item.SetSelection(Selection);

	    End If;

	End Sub Button1OnClick;


После выполнения примера для первого элемента компонента MetaAttributesBreadcrumb
 будет установлена отметка, включающая все элементы указанной группы.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
