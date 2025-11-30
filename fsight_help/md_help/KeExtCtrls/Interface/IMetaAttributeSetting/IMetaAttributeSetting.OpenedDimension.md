# IMetaAttributeSetting.OpenedDimension

IMetaAttributeSetting.OpenedDimension
-


# IMetaAttributeSetting.OpenedDimension


## Синтаксис


OpenedDimension: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm);


## Описание


Свойство OpenedDimension определяет
 открытое измерение атрибута.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента [MetaAttributesBreadcrumb](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesBreadcrumb.htm)
 с наименованием «MetaAttributesBreadcrumb1» и компонента [MetaAttributesTreeList](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesTreeList.htm)
 с наименованием «MetaAttributesTreeList1». В репозитории должна присутствовать
 база данных временных рядов с идентификатором OBJ_FC. В данной базе должен
 присутствовать пользовательский атрибут показателей «COUNTRY», ссылающийся
 на справочник.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    RubDesc: IMetabaseObjectDescriptor;

	    RubrIn: IRubricatorInstance;

	    DictInst: IMetaDictionaryInstance;

	    Dict: IMetaDictionary;

	    MetaAttrS: IMetaAttributes;

	    MetaAttr: IMetaAttribute;

	    AttrS: IMetaAttributeSettings;

	    Attr: IMetaAttributeSetting;

	    OpenedDimension: IDimInstance;

	Begin

	    MB := MetabaseClass.Active;

	    RubDesc := MB.ItemById("OBJ_FC");

	    MetaAttributesTreeList1.Rubricator := RubDesc.Bind As IRubricator;

	    MetaAttributesTreeList1.Breadcrumb := MetaAttributesBreadcrumb1;

	    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

	    MetaAttributesBreadcrumb1.Rubricator := RubrIn;

	    DictInst := RubrIn.GetDictionary(RubricatorDictionary.Facts);

	    Dict := (DictInst As IMetabaseObjectInstance).Object As IMetaDictionary;

	    MetaAttributesTreeList1.Dictionary := Dict;

	    MetaAttributesBreadcrumb1.Dictionary := DictInst;

	    MetaAttributesBreadcrumb1.MetaAttributes := Dict.Attributes;

	    MetaAttrS := Dict.Attributes;

	    MetaAttr := MetaAttrS.FindById("COUNTRY");

	    OpenedDimension := MetaAttr.ValuesObject.Open(Null) As IDimInstance;

	    AttrS := MetaAttributesBreadcrumb1.MetaAttributeSettings;

	    Attr := AttrS.FindById("COUNTRY");

	    Attr.OpenedDimension := OpenedDimension;

	End Sub Button1OnClick;


После выполнения примера для атрибута «COUNTRY» будет определено измерение.


См. также:


[IMetaAttributeSetting](IMetaAttributeSetting.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
