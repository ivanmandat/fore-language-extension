# IBreadcrumb.BeginUpdate

IBreadcrumb.BeginUpdate
-


# IBreadcrumb.BeginUpdate


## Синтаксис


BeginUpdate;


## Описание


Метод BeginUpdate останавливает перерисовку связанных компонентов.


## Комментарии


Метод актуален, если он вызывается из компонента-потомка [MetaAttributesBreadcrumb](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesBreadcrumb.htm), связанного с компонентом [MetaAttributesTreeList](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesTreeList.htm). Вызов метода позволяет избежать мерцания компонента [MetaAttributesTreeList](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesTreeList.htm) при изменении свойств компонента [MetaAttributesBreadcrumb](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesBreadcrumb.htm).


Для возобновления перерисовки используйте метод [EndUpdate](IBreadcrumb.EndUpdate.htm).


Примечание. При работе метода выполняется [сохранение](IBreadcrumb.SaveState.htm) состояния элементов компонента.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент MetaAttributesTreeList с наименованием «MetaAttributesTreeList1» и компонент MetaAttributesBreadcrumb с наименованием «MetaAttributesBreadcrumb1». Компоненты должны быть настроены на работу с одним справочником. Перед выполнением примера в компоненте «MetaAttributesBreadcrumb1» должны быть выбраны два или более атрибута справочника. Также на форме предполагается наличие кнопка с наименованием «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Items: IBreadcrumbItems;

Begin

    MetaAttributesBreadcrumb1.BeginUpdate;

    Items := MetaAttributesBreadcrumb1.Items;

    Items.Move(0, 1);

    MetaAttributesBreadcrumb1.EndUpdate;

End Sub Button1OnClick;


При нажатии на кнопку первый элемент в компоненте «MetaAttributesBreadcrumb1» будет перемещен на вторую позицию. На время перемещения перерисовка компонента «MetaAttributesTreeList1» будет приостановлена.


См. также:


[IBreadcrumb](IBreadcrumb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
