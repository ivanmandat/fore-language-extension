# IBreadcrumbItem.Permanent

IBreadcrumbItem.Permanent
-


# IBreadcrumbItem.Permanent


## Синтаксис


Permanent: Boolean;


## Описание


Свойство Permanent определяет, будет ли фиксирован элемент компонента.


## Комментарии


Допустимые значения:


-
True. Элемент фиксирован;


-
False. Элемент не фиксирован.


Если задано значение True, то перемещение элемента влево/вправо будет недоступно.


По умолчанию свойство Permanent имеет значение False.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки и компонента MetaAttributesBreadcrumb с наименованием «MetaAttributesBreadcrumb1». Компонент MetaAttributesBreadcrumb подключен к базе данных временных рядов. Должны быть указаны ссылки на системные сборки: Metabase, Cubes.


Процедура является обработчиком события OnClick для кнопки «Button1». Пример будет выполняться при нажатии кнопки.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);
Var

    Items: IBreadcrumbItems;

    Item: IMetaAttributeBreadcrumbItem;

    i: Integer;
Begin

    Items := MetaAttributesBreadcrumb1.Items;

    For i := 0 To Items.Count - 1 Do

        Item := (Items.Item(i) As IMetaAttributeBreadcrumbItem);

        Item.Permanent := True;
    End For;
End Sub Button1OnClick;


После выполнения примера все элементы в компоненте MetaAttributesBreadcrumb будут фиксированы.


См. также:


[IBreadcrumbItem](IBreadcrumbItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
