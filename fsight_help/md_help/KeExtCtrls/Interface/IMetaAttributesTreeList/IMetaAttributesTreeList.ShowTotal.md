# IMetaAttributesTreeList.ShowTotal

IMetaAttributesTreeList.ShowTotal
-


# IMetaAttributesTreeList.ShowTotal


## Синтаксис


ShowTotal: Boolean;


## Описание


Свойство ShowTotal определяет,
 отображать ли корневую вершину дерева. True
 - отображать вершину, False -
 не отображать. Заголовок вершины определяется свойством [IMetaAttributesTreeList.TotalCaption](IMetaAttributesTreeList.TotalCaption.htm).


Пример компонента [MetaAttributesTreeList](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesTreeList.htm)
 с отображаемой вершиной дерева элементов (слева) и без (справа):


![](IMetaAttributesTreeList_ShowTotal.gif)


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонентов [MetaAttributesBreadcrumb](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesBreadcrumb.htm)
 и [MetaAttributesTreeList](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesTreeList.htm)
 с наименованиями «MetaAttributesBreadcrumb1» и «MetaAttributesTreeList1».
 В репозитории должна располагаться база данных временных рядов с идентификатором
 OBJ_FC. Пример будет выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    mb: IMetabase;

	    rubDescr: IMetabaseObjectDescriptor;

	    dict: IMetaDictionary;

	    dictInst: IMetaDictionaryInstance;

	    rub: IRubricator;

	    rubInst: IRubricatorInstance;

	Begin

	    mb := MetabaseClass.Active;

	    rubDescr := mb.ItemById("OBJ_FC");

	    rub := rubDescr.Bind As IRubricator;

	    rubInst := rubDescr.Open(Null) As IRubricatorInstance;

	    dictInst := rubInst.GetDictionary(RubricatorDictionary.Facts);

	    If dictInst <> Null Then

	        dict := (dictInst As IMetabaseObjectInstance).Object As IMetaDictionary;

	        MetaAttributesTreeList1.Dictionary := dict;

	        MetaAttributesTreeList1.ShowTotal := True;

	        MetaAttributesTreeList1.TotalCaption := "Показатели";

	        MetaAttributesTreeList1.Breadcrumb := MetaAttributesBreadcrumb1;

	        MetaAttributesBreadcrumb1.Dictionary := dictInst;

	        MetaAttributesBreadcrumb1.MetaAttributes := dict.Attributes;

	    End If;

	End Sub Button1OnClick;


После выполнения примера в компоненте [MetaAttributesBreadcrumb](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesBreadcrumb.htm)
 можно будет выбрать атрибут, определяющий иерархию дерева базы данных
 временных рядов, отображаемую в компоненте [MetaAttributesTreeList](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesTreeList.htm).
 Для дерева элементов будет отображаться корневая вершина.


См. также:


[IMetaAttributesTreeList](IMetaAttributesTreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
