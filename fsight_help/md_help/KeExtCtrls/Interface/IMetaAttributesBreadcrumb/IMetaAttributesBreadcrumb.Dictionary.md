# IMetaAttributesBreadcrumb.Dictionary

IMetaAttributesBreadcrumb.Dictionary
-


# IMetaAttributesBreadcrumb.Dictionary


## Синтаксис


Dictionary: [IMetaDictionaryInstance](KeRds.chm::/Interface/IMetaDictionaryInstance/IMetaDictionaryInstance.htm);


## Описание


Свойство Dictionary определяет
 справочник, на который настраивается компонент [MetaAttributesBreadcrumb](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesBreadcrumb.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с идентификатором «Button1» и компонента [MetaAttributesBreadcrumb](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesBreadcrumb.htm)
 с идентификатором «MetaAttributesBreadcrumb1». В репозитории должна располагаться
 база данных временных рядов с идентификатором OBJ_FC. Пример будет выполняться
 при нажатии на кнопку.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    mb: IMetabase;

	    rubDescr: IMetabaseObjectDescriptor;

	    dict: IMetaDictionary;

	    dictInst: IMetaDictionaryInstance;

	    rubInst: IRubricatorInstance;

	Begin

	    mb := MetabaseClass.Active;

	    rubDescr := mb.ItemById("OBJ_FC");

	    rubInst := rubDescr.Open(Null) As IRubricatorInstance;

	    dictInst := rubInst.GetDictionary(RubricatorDictionary.Facts);

	    If dictInst <> Null Then

	        dict := (dictInst As IMetabaseObjectInstance).Object As IMetaDictionary;

	        MetaAttributesBreadcrumb1.Dictionary := dictInst;

	        MetaAttributesBreadcrumb1.MetaAttributes := dict.Attributes;

	    End If;

	End Sub Button1OnClick;


После выполнения примера компонент [MetaAttributesBreadcrumb](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesBreadcrumb.htm)
 будет настроен на справочник показателей базы данных временных рядов.


См. также:


[IMetaAttributesBreadcrumb](IMetaAttributesBreadcrumb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
