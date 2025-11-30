# IDimLevelsGroupPrimitive.IsLevelIncluded

IDimLevelsGroupPrimitive.IsLevelIncluded
-


# IDimLevelsGroupPrimitive.IsLevelIncluded


## Синтаксис


IsLevelIncluded(Level: [IDimLevel](../IDimLevel/IDimLevel.htm)):
 Boolean;


## Параметры


Level — уровень
 справочника, который необходимо проверить.


## Описание


Метод IsLevelIncluded проверяет,
 отмечен ли уровень справочника, передаваемый посредством параметра Level, в примитиве в списке уровней,
 чьи элементы необходимо оставить.


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 с идентификатором "TAB_DIM". Для справочника создана группа
 элементов. Первый примитив группы элементов оставляет элементы определенного
 уровня справочника.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    ObjDesc: IMetabaseObjectDescriptor;

	    MObj: IMetabaseObject;

	    ElemGroup: IDimElementGroup;

	    LevelPrim: IDimLevelsGroupPrimitive;

	    Level: IDimLevel;

	Begin

	    MB := MetabaseClass.Active;

	    ObjDesc := MB.ItemById("TAB_DIM");

	    MObj := ObjDesc.Children.Item(0).Edit;

	    ElemGroup := MObj As IDimElementGroup;

	    LevelPrim := ElemGroup.Item(0) As IDimLevelsGroupPrimitive;

	    Level := ElemGroup.Dimension.Levels.Item(0);

	    If LevelPrim.IsLevelIncluded(Level) Then

	        LevelPrim.DeleteLevel(Level);

	    End If;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера из примитива, оставляющего элементы уровня,
 будет удалена отметка первого уровня справочника, если она была включена.


См. также:


[IDimLevelsGroupPrimitive](IDimLevelsGroupPrimitive.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
