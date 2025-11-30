# IDimLevelsGroupPrimitive.AddLevel

IDimLevelsGroupPrimitive.AddLevel
-


# IDimLevelsGroupPrimitive.AddLevel


## Синтаксис


AddLevel(Value: [IDimLevel](../IDimLevel/IDimLevel.htm));


## Параметры


Value — уровень
 справочника, элементы которого необходимо оставить.


## Описание


Метод AddLevel осуществляет
 добавление в примитив уровня справочника, элементы которого необходимо
 оставить. Уровень передается посредством параметра Value.


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 с идентификатором "TAB_DIM". Для справочника создана группа
 элементов.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    ObjDesc: IMetabaseObjectDescriptor;

	    Child: IMetabaseObjectDescriptors;

	    MObj: IMetabaseObject;

	    ElemGroup: IDimElementGroup;

	    ElemGroupPrim: IDimElementGroupPrimitive;

	Begin

	    MB := MetabaseClass.Active;

	    ObjDesc := MB.ItemById("TAB_DIM");

	    Child := ObjDesc.Children;

	    MObj := Child.Item(0).Edit;

	    ElemGroup := MObj As IDimElementGroup;

	    ElemGroupPrim := ElemGroup.AddPrimitive(SelectionGroupType.Levels);

	    (ElemGroupPrim As IDimLevelsGroupPrimitive).AddLevel(ElemGroup.Dimension.Levels.Item(0));

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в первую группу элементов справочника будет
 добавлен примитив, оставляющий элементы первого уровня справочника.


См. также:


[IDimLevelsGroupPrimitive](IDimLevelsGroupPrimitive.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
