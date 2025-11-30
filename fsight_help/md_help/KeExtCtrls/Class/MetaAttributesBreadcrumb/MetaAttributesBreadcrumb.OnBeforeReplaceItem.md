# MetaAttributesBreadcrumb.OnBeforeReplaceItem

MetaAttributesBreadcrumb.OnBeforeReplaceItem
-


# MetaAttributesBreadcrumb.OnBeforeReplaceItem


## Синтаксис


OnBeforeReplaceItem(Sender: Object; Args: [IMetaAttributeBreadcrumbReplaceItemEventArgs](../../Interface/IMetaAttributeBreadcrumbReplaceItemEventArgs/IMetaAttributeBreadcrumbReplaceItemEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnBeforeReplaceItem
 наступает перед заменой элементов в компоненте.


## Комментарии


В данном событии, используя свойство аргумента [IMetaAttributeBreadcrumbReplaceItemEventArgs.Attribute](../../Interface/IMetaAttributeBreadcrumbReplaceItemEventArgs/IMetaAttributeBreadcrumbReplaceItemEventArgs.Attribute.htm),
 можно организовать проверку заменяемых элементов. Установив соответствующее
 значение свойству [IBreadcrumbActionItemEventArgs.Allow](ModForms.chm::/Interface/IBreadcrumbActionItemEventArgs/IBreadcrumbActionItemEventArgs.Allow.htm),
 можно разрешить либо запретить замену элементов.


## Пример


Для выполнения примера предполагается наличие формы и расположенного
 на ней компонента MetaAttributesBreadcrumb с наименованием «MetaAttributesBreadcrumb1».
 Данный компонент подключен к какой-либо базе данных временных рядов. Указанная
 процедура установлена для «MetaAttributesBreadcrumb1» в качестве обработчика
 события [OnBeforeReplaceItem](MetaAttributesBreadcrumb.OnBeforeReplaceItem.htm).


	Sub MetaAttributesBreadcrumb1OnBeforeReplaceItem(Sender: Object; Args: IMetaAttributeBreadcrumbReplaceItemEventArgs);

	Var

	    Item: IMetaAttributeBreadcrumbItem;

	Begin

	    Item := Args.Item As IMetaAttributeBreadcrumbItem;

	    If (Item.MetaAttribute.Id = "DL") And (Args.Attribute = "COUNTRY") Then

	        Args.Allow := False;

	    End If;

	End Sub MetaAttributesBreadcrumb1OnBeforeReplaceItem;


При возникновении события осуществляется проверка идентификаторов атрибутов.
 Если заменяемый элемент соответствует атрибуту с идентификатором DL и
 осуществляется попытка произвести замену на атрибут с идентификатором
 COUNTRY, то замена будет запрещена.


См. также:


[MetaAttributesBreadcrumb](MetaAttributesBreadcrumb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
