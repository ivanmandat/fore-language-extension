# IMetaAttributesTreeList.EditAttributes

IMetaAttributesTreeList.EditAttributes
-


# IMetaAttributesTreeList.EditAttributes


## Синтаксис


EditAttributes;


## Описание


Метод EditAttributes вызывает
 диалог редактирования свойств показателя, выделенного в текущий момент
 в компоненте.


## Комментарии


Если элемент, выделенный в компоненте, не является показателем, то диалог
 вызван не будет.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонентов [MetaAttributesBreadcrumb](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesBreadcrumb.htm)
 и [MetaAttributesTreeList](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesTreeList.htm)
 с наименованиями «MetaAttributesBreadcrumb1» и «MetaAttributesTreeList1».
 Данные компоненты настроены на работу с какой-либо базой данных временных
 рядов.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    If MetaAttributesTreeList1.Selected Is IFactorTreeListNode Then

	        MetaAttributesTreeList1.EditAttributes;

	    End If;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку, если текущий элемент,
 выделенный в «MetaAttributesTreeList1», является показателем, то для него
 будет выведен диалог редактирования свойств.


См. также:


[IMetaAttributesTreeList](IMetaAttributesTreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
