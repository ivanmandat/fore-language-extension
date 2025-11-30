# IMetaAttributeSetting.DimHierarchy

IMetaAttributeSetting.DimHierarchy
-


# IMetaAttributeSetting.DimHierarchy


## Синтаксис


DimHierarchy: [IDimHierarchyInstance](KeDims.chm::/interface/IDimHierarchyInstance/IDimHierarchyInstance.htm);


## Описание


Свойство DimHierarchy определяет
 иерархию атрибута.


## Комментарии


Для определения, будет ли видимым указанный атрибут справочника НСИ
 в раскрывающемся списке значений атрибута базы данных временных рядов,
 используйте свойство [IMetaAttributeSetting.ShowAttribute](IMetaAttributeSetting.ShowAttribute.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонент [MetaAttributesBreadcrumb](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MetaAttributesBreadcrumb.htm)
 с наименованием «MetaAttributesBreadcrumb1». В репозитории должна присутствовать
 база данных временных рядов с идентификатором DIM_HIERARCHY. В базе должен
 присутствовать пользовательский атрибут, ссылающийся на справочник с настроенной
 [альтернативной
 иерархией](UiNavObj.chm::/reference_book/UiMd_reference_book_Hierarchy.htm). Для компонента «MetaAttributesBreadcrumb1»
 должен быть выбран хотя бы один элемент справочника. Пример является обработчиком
 события OnClick для компонента «Button1».


Добавьте ссылки на системные сборки: Cubes, Dimensions, ExtCtrls, Forms,
 Metabase, Rds.


	Sub SAMPLEFormOnCreate(Sender: Object; Args: IEventArgs);

	Var

	    MB: IMetabase;

	    RubInst: IRubricatorInstance;

	Begin

	    MB := MetabaseClass.Active;

	    RubInst := MB.ItemById("DIM_HIERARCHY").Open(Null) As IRubricatorInstance;

	    MetaAttributesBreadcrumb1.Rubricator := RubInst;

	End Sub SAMPLEFormOnCreate;


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	     Items: IBreadcrumbItems;

	     Item: IMetaAttributeBreadcrumbItem;

	     Attr: IMetaAttribute;

	     AttrS: IMetaAttributeSettings;

	     AttrSett: IMetaAttributeSetting;

	     DimInst: IDimInstance;

	Begin

	     Items := MetaAttributesBreadcrumb1.Items;

	     Item := Items.Item(0) As IMetaAttributeBreadcrumbItem;

	     Attr := Item.MetaAttribute;

	     DimInst := Attr.ValuesObject.Open(Null) As IDimInstance;

	     AttrS := MetaAttributesBreadcrumb1.MetaAttributeSettings;

	     AttrSett := AttrS.FindByAttribute(Attr);

	     AttrSett.DimHierarchy := DimInst.Hierarchies.Item(0);

	End Sub Button1OnClick;


После выполнения примера для отображаемых элементов справочника будет
 применена альтернативная иерархия:


	- до применения альтернативной иерархии: ![](DimHierarchy_before.gif);


	- после применения альтернативной иерархии: ![](DimHierarchy_after.gif).


См. также:


[IMetaAttributeSetting](IMetaAttributeSetting.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
