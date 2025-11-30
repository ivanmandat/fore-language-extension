# Группы элементов

Группы элементов
-


# Группы элементов


Группы элементов являются скрытыми
 дочерними объектами справочника. Каждая группа элементов это объект класса
 [MetabaseObjectClass.KE_CLASS_DIMELEMENTGROUP](KeSom.chm::/Enums/MetabaseObjectClass.htm).
 Для работы с группой элементов необходимо соответствующий дочерний объект
 справочника привести к типу [IDimElementGroup](../../interface/IDimElementGroup/IDimElementGroup.htm).


	Var

	    MB: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	    MDescs: IMetabaseObjectDescriptors;

	    ElemGroup: IDimElementGroup;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.ItemById("Dim_1");

	    MDescs := MDesc.Children;

	    Debug.WriteLine("Группы элементов справочника");

	    For Each MDesc In MDescs Do

	        If MDesc.ClassId = MetabaseObjectClass.KE_CLASS_DIMELEMENTGROUP Then

	            Debug.WriteLine("Наименование: " + MDesc.Name);

	            ElemGroup := MDesc.Bind As IDimElementGroup;

	            Debug.WriteLine("Количество примитивов: " + ElemGroup.Count.ToString);

	        End If;

	    End For;


Для создания группы отметок необходимо создать объект репозитория класса
 [MetabaseObjectClass.KE_CLASS_DIMELEMENTGROUP](KeSom.chm::/Enums/MetabaseObjectClass.htm),
 для которого в качестве родительского объекта указать справочник репозитория.
 После открытия созданного объекта на редактирование и приведения к интерфейсу
 [IDimElementGroup](../../interface/IDimElementGroup/IDimElementGroup.htm)
 можно изменять коллекцию примитивов. Группа элементов представляет из
 себя набор примитивов, объединенных по методу, указанному в свойстве [UnionType](../../interface/IDimElementGroup/IDimElementGroup.UnionType.htm).
 Каждый примитив реализует определенный алгоритм по отбору элементов. Любой
 примитив является наследником типа [IDimElementGroupPrimitive](../../interface/IDimElementGroupPrimitive/IDimElementGroupPrimitive.htm).
 Доступны следующие виды примитивов:


	- Элементы
	 из списка - в группу будут включены элементы, указанные в отметке
	 примитива. Данный примитив является наследником типа [IDimListGroupPrimitive](../../interface/IDimListGroupPrimitive/IDimListGroupPrimitive.htm).


	- Элементы
	 уровней - в группу будут включены элементы указанного уровня
	 справочника. Данный примитив является наследником типа [IDimLevelsGroupPrimitive](../../interface/IDimLevelsGroupPrimitive/IDimLevelsGroupPrimitive.htm).


	- Элементы
	 по общему владельцу - в группу будут включены элементы, являющиеся
	 дочерними элементами элементов, указанных в отметке примитива. Данный
	 примитив является наследником типа [IDimChildrenGroupPrimitive](../../interface/IDimChildrenGroupPrimitive/IDimChildrenGroupPrimitive.htm).


	- Элементы
	 по общему владельцу с владельцем - в группу будут включены
	 элементы, указанные в отметке примитива, вместе со всеми их дочерними
	 элементами. Данный примитив является наследником типа [IDimChildrenWithParentGroupPrimitive](../../interface/IDimChildrenWithParentGroupPrimitive/IDimChildrenWithParentGroupPrimitive.htm).


	Var

	    MB: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	    Dimension: IDimensionModel;

	    CrInfo: IMetabaseObjectCreateInfo;

	    Group: IDimElementGroup;

	    LvlPrimitive: IDimLevelsGroupPrimitive;

	    ChildWhitePrimitive: IDimChildrenWithParentGroupPrimitive;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.ItemById("Dim_1");

	    Dimension := MDesc.Bind As IDimensionModel;

	    //Информация для создания группы элементов

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_DIMELEMENTGROUP;

	    CrInfo.Id := "Group1";

	    CrInfo.Name := "Группа элементов 1";

	    CrInfo.Parent := MDesc;

	    //Создание группы элементов

	    Group := MB.CreateObject(CrInfo).Edit As IDimElementGroup;

	    //Указание справочника

	    Group.Dimension := Dimension;

	    //Способ взаимодействия примитивов

	    Group.UnionType := UnionGroupType.Intersection;

	    //Создание примитива, возвращающего элементы уровней

	    LvlPrimitive := Group.AddPrimitive(SelectionGroupType.Levels) As IDimLevelsGroupPrimitive;

	    LvlPrimitive.AddLevel(Dimension.Levels.Item("LEVEL2"));

	    //Создание примитива, возвращающего дочерние элементы с родителем

	    ChildWhitePrimitive := Group.AddPrimitive(SelectionGroupType.ChildrenWithParent) As IDimChildrenWithParentGroupPrimitive;

	    ChildWhitePrimitive.Selection.SelectElement(0, False);

	    (Group As IMetabaseObject).Save;


Созданная группа элементов в дальнейшем может использоваться при настройке
 компонентов, отображающих дерево элементов справочника, в регламентных
 отчетах при настройке срезов источников данных и других блоках платформы,
 где предусмотрена работа с группами элементов справочников. Также можно
 использовать отметку, соответствующую элементам группы элементов и доступную
 в свойстве [Selection](../../interface/IDimElementGroup/IDimElementGroup.Selection.htm).


См. также:


[Дополнительные
 объекты справочников](KeDims_AdditionalObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
