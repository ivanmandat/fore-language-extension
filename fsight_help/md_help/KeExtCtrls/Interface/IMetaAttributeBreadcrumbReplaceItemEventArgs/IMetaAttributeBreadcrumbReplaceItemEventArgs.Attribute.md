# IMetaAttributeBreadcrumbReplaceItemEventArgs.Attribute

IMetaAttributeBreadcrumbReplaceItemEventArgs.Attribute
-


# IMetaAttributeBreadcrumbReplaceItemEventArgs.Attribute


## Синтаксис


Attribute: String;


## Описание


Свойство Attribute возвращает
 идентификатор атрибута, с которым осуществляется замена.


## Комментарии


Данное свойство возвращает идентификатор того атрибута, с которым производится
 замена текущего элемента, соответствующего какому-либо атрибуту базы данных
 временных рядов. Осуществляя проверку по идентификаторам атрибутов можно
 запретить замену, установив соответствующее значение свойству [Allow](ModForms.chm::/Interface/IBreadcrumbActionItemEventArgs/IBreadcrumbActionItemEventArgs.Allow.htm).


## Пример


Для выполнения примера предполагается наличие формы и расположенного
 на ней компонента MetaAttributeBreadcrumb с наименованием «MetaAttributeBreadcrumb1».
 Данный компонент подключен к какой-либо базе данных временных рядов. Указанная
 процедура установлена для «MetaAttributeBreadcrumb1» в качестве обработчика
 события [OnBeforeReplaceItem](../../Class/MetaAttributesBreadcrumb/MetaAttributesBreadcrumb.OnBeforeReplaceItem.htm).


	Sub MetaAttributesBreadcrumb1OnBeforeReplaceItem(

	    Sender: Object; Args: IMetaAttributeBreadcrumbReplaceItemEventArgs);

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


[IMetaAttributeBreadcrumbReplaceItemEventArgs](IMetaAttributeBreadcrumbReplaceItemEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
