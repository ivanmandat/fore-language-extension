# IBreadcrumbItems.Add

IBreadcrumbItems.Add
-


# IBreadcrumbItems.Add


## Синтаксис


Add: [IBreadcrumbItem](../IBreadcrumbItem/IBreadcrumbItem.htm);


## Описание


Метод Add создает новый элемент
 компонента [Breadcrumb](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/Breadcrumb.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента Breadcrumb с наименованием
 Breadcrumb1.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    i: Integer;

    Items: IBreadcrumbItems;

    Item: IBreadcrumbItem;

Begin

    Items := Breadcrumb1.Items;

    Breadcrumb1.BeginUpdate;

    For i := 0 To 10 Do

        Item := Items.Add;

        Item.Text := "Элемент " + i.ToString;

    End For;

    Breadcrumb1.EndUpdate;

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в коллекцию элементов
 компонента Breadcrumb1 будет добавлено десять элементов.


См. также:


[IBreadcrumbItems](IBreadcrumbItems.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
