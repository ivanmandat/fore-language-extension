# IMetaAttributesBreadcrumb.GetSelectionSet

IMetaAttributesBreadcrumb.GetSelectionSet
-


# IMetaAttributesBreadcrumb.GetSelectionSet


## Синтаксис


GetSelectionSet: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Описание


Метод GetSelectionSet возвращает
 отметку показателей по атрибутам, входящим в цепочку навигации компонента.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента MetaAttributesBreadcrumb
 с наименованием «MetaAttributesBreadcrumb1». Компонент «MetaAttributesBreadcrumb1»
 подключен к какой-либо базе данных временных рядов.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    SelSet: IDimSelectionSet;

	    Sel: IDimSelection;

	Begin

	    SelSet := MetaAttributesBreadcrumb1.GetSelectionSet;

	    For Each Sel In SelSet Do

	        Debug.WriteLine("Атрибут:" + Sel.Dimension.Name);

	        Debug.WriteLine("Количество отмеченных элементов: " + Sel.SelectedCount.ToString);

	    End For;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в консоль среды разработки
 будет выведена информация об отметке, установленной по атрибутам, входящим
 в цепочку навигации компонента «MetaAttributesBreadcrumb1».


См. также:


[IMetaAttributesBreadcrumb](IMetaAttributesBreadcrumb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
