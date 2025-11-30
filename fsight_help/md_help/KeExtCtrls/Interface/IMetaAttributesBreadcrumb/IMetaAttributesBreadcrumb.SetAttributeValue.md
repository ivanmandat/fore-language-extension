# IMetaAttributesBreadcrumb.SetAttributeValue

IMetaAttributesBreadcrumb.SetAttributeValue
-


# IMetaAttributesBreadcrumb.SetAttributeValue


## Синтаксис


SetAttributeValue(Attribute: [IMetaAttribute](KeRds.chm::/Interface/IMetaAttribute/IMetaAttribute.htm);
 Value: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm));


## Параметры


Attribute. Атрибут, по которому
 необходимо установить отметку;


Value. Отметка элементов, которую
 необходимо установить по атрибуту Attribute.


## Описание


Метод SetAttributeValue устанавливает
 отметку показателей по атрибуту Attribute.


## Комментарии


Атрибут, указываемый в качестве значения параметра Attribute,
 можно получить в коллекции [IMetaAttributesBreadcrumb.MetaAttributes](IMetaAttributesBreadcrumb.MetaAttributes.htm).
 Отметку для атрибута возвращает метод [IMetaAttributesBreadcrumb.GetAttributeValue](IMetaAttributesBreadcrumb.GetAttributeValue.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки и компонента MetaAttributesBreadcrumb с наименованием «MetaAttributesBreadcrumb1».
 В компоненте «MetaAttributesBreadcrumb1» отображаются данные базы данных
 временных рядов, содержащей атрибут «COUNTRY».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Attrs: IMetaAttributes;

	    Attr: IMetaAttribute;

	    Sel: IDimSelection;

	Begin

	    Attrs := MetaAttributesBreadcrumb1.MetaAttributes;

	    Attr := Attrs.FindById("COUNTRY");

	    Sel := MetaAttributesBreadcrumb1.GetAttributeValue(Attr);

	    Sel.DeselectAll;

	    Sel.SelectElement(0, False);

	    Sel.SelectElement(1, False);

	    Sel.SelectElement(2, False);

	    MetaAttributesBreadcrumb1.SetAttributeValue(Attr, Sel);

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет изменена отметка
 элементов по атрибуту «COUNTRY». По данному атрибуту будут отмечены первые
 три элемента.


См. также:


[IMetaAttributesBreadcrumb](IMetaAttributesBreadcrumb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
