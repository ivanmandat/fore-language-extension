# IMetaAttributesTreeList.UserConditions

IMetaAttributesTreeList.UserConditions
-


# IMetaAttributesTreeList.UserConditions


## Синтаксис


UserConditions: [IOrmConditions](KeOrm.chm::/Interface/IOrmConditions/IOrmConditions.htm);


## Описание


Свойство UserConditions возвращает
 пользовательские условия, накладываемые на элементы дерева.


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

	    conds: IOrmConditions;

	    con: IOrmCondition;

	Begin

	    mb := MetabaseClass.Active;

	    rubDescr := mb.ItemById("OBJ_FC");

	    rub := rubDescr.Bind As IRubricator;

	    rubInst := rubDescr.Open(Null) As IRubricatorInstance;

	    dictInst := rubInst.GetDictionary(RubricatorDictionary.Facts);

	    If dictInst <> Null Then

	        dict := (dictInst As IMetabaseObjectInstance).Object As IMetaDictionary;

	        MetaAttributesTreeList1.Dictionary := dict;

	        conds := MetaAttributesTreeList1.UserConditions;

	        con := conds.Add;

	        con.AttributeName := "DL";

	        con.Value := 1;

	        MetaAttributesTreeList1.Breadcrumb := MetaAttributesBreadcrumb1;

	        MetaAttributesBreadcrumb1.Dictionary := dictInst;

	        MetaAttributesBreadcrumb1.MetaAttributes := dict.Attributes;

	    End If;

	End Sub Button1OnClick;


После выполнения примера в компоненте [MetaAttributesBreadcrumb](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesBreadcrumb.htm)
 можно будет выбрать атрибут, определяющий иерархию дерева базы данных
 временных рядов, отображаемую в компоненте [MetaAttributesTreeList](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesTreeList.htm).
 На дерево элементов будет наложено ограничение: отображаются только данные
 с годовой динамикой.


См. также:


[IMetaAttributesTreeList](IMetaAttributesTreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
