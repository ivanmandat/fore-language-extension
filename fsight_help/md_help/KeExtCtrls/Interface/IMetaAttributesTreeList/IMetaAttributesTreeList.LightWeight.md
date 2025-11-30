# IMetaAttributesTreeList.LightWeight

IMetaAttributesTreeList.LightWeight
-


# IMetaAttributesTreeList.LightWeight


## Синтаксис


LightWeight: Boolean;


## Описание


Свойство LightWeight определяет,
 загружать ли показатели динамически.


## Комментарии


Если LightWeight = True,
 то показатели загружаются динамически (только при раскрытии последнего
 уровня дерева показателей). Использование динамической загрузки позволяет
 сократить время загрузки дерева показателей.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с идентификатором «Button1», компонента [MetaAttributesBreadcrumb](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesBreadcrumb.htm)
 и компонента [MetaAttributesTreeList](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesTreeList.htm)
 с идентификатором «MetaAttributesTreeList1». Данные компоненты настроены
 на работу с какой-либо базой данных временных рядов. Пример является обработчиком
 события OnClick для кнопки.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    MetaAttributesTreeList1.LightWeight := True;

	End Sub Button1OnClick;


После выполнения примера показатели базы будут загружаться динамически.


См. также:


[IMetaAttributesTreeList](IMetaAttributesTreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
