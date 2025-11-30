# IMetaAttributesTreeList.DeleteNodes

IMetaAttributesTreeList.DeleteNodes
-


# IMetaAttributesTreeList.DeleteNodes


## Синтаксис


DeleteNodes(Nodes: Array; DeleteFacts: Boolean);


## Параметры


Nodes. Массив элементов компонента
 MetaAttributesTreeList;


DeleteFacts. Определяет, удалять
 ли из БД показатели, соответствующие элементам компонента. True
 - удалять; False - не удалять.


## Описание


Метод DeleteNodes удаляет указанные
 элементы из компонента. Удаление всегда осуществляется рекурсивно.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с идентификатором «Button1», компонента [MetaAttributesBreadcrumb](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesBreadcrumb.htm)
 и компонента [MetaAttributesTreeList](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesTreeList.htm)
 с наименованием «MetaAttributesTreeList1». Данные компоненты настроены
 на работу с какой-либо базой данных временных рядов.


Пример будет выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    SelNodes: Array;

	Begin

	    SelNodes := MetaAttributesTreeList1.GetSelectedNodes;

	    MetaAttributesTreeList1.DeleteNodes(SelNodes, True);

	End Sub Button1OnClick;


После выполнения примера выделенные элементы будут удалены из компонента,
 соответствующие им показатели будут удалены из базы данных временных рядов.


См. также:


[IMetaAttributesTreeList](IMetaAttributesTreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
