# IMetaAttributesBreadcrumb.SetSelectionSet

IMetaAttributesBreadcrumb.SetSelectionSet
-


# IMetaAttributesBreadcrumb.SetSelectionSet


## Синтаксис


SetSelectionSet(Value: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm));


## Параметры


Value. Отметка по атрибутам,
 которую необходимо установить.


## Описание


Метод SetSelectionSet осуществляет
 установку отметки показателей по атрибутам, входящим в цепочку навигации
 компонента.


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

	        Sel.DeselectAll;

	        Sel.SelectElement(0, False);

	    End For;

	    MetaAttributesBreadcrumb1.SetSelectionSet(SelSet);

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет изменена отметка
 по атрибутам, входящим в цепочку навигации компонента «MetaAttributesBreadcrumb1».
 По всем атрибутам будут выделены только первые элементы.


См. также:


[IMetaAttributesBreadcrumb](IMetaAttributesBreadcrumb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
