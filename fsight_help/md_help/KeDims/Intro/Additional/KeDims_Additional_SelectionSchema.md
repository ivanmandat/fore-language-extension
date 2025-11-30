# Схемы отметки

Схемы отметки
-


# Схемы отметки


Схемы отметки являются скрытыми
 дочерними объектами справочника. Каждая схема отметки это объект класса
 [MetabaseObjectClass.KE_CLASS_DIMSELECTIONSCHEMA](KeSom.chm::/Enums/MetabaseObjectClass.htm).
 Для работы со схемой отметки необходимо соответствующий дочерний объект
 справочника привести к типу [IDimSelectionSchema](../../interface/IDimSelectionSchema/IDimSelectionSchema.htm).


	Var

	    MB: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	    MDescs: IMetabaseObjectDescriptors;

	    SelSchema: IDimSelectionSchema;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.ItemById("Dim_1");

	    MDescs := MDesc.Children;

	    Debug.WriteLine("Схемы отметки справочника");

    For Each MDesc In MDescs Do

	        If MDesc.ClassId = MetabaseObjectClass.KE_CLASS_DIMSELECTIONSCHEMA Then

	            Debug.WriteLine("Наименование: " + MDesc.Name);

	            SelSchema := MDesc.Bind As IDimSelectionSchema;

	            Debug.WriteLine("Количество примитивов: " + SelSchema.Count.ToString);

	        End If;

    End For;


Схема отметки представляет из себя набор примитивов. Каждый примитив
 реализует определенный алгоритм по установке или снятию отметки элементов.
 Для схем отметки создано два вида примитивов: статические и динамические.
 Статические примитивы содержат
 определенную отметку, сформированную на стадии создания примитива. Динамические примитивы реализуют
 определенный алгоритм, по которому формируется отметки во время работы
 со справочником. Итоговая отметка схемы отметки получается после поочередного
 применения всех примитивов. Любой примитив является наследником типа [IDimSelectionSchemaPrimitive](../../interface/IDimSelectionSchemaPrimitive/IDimSelectionSchemaPrimitive.htm).
 Для схемы отметки доступны следующие виды примитивов:


	- Статические
	 примитивы


	- Отметить все - осуществляет установку
	 (снятие) отметки всех элементов справочника. Данный примитив является
	 наследником типа [IDimAllSelectionPrimitive](../../interface/IDimAllSelectionPrimitive/IDimAllSelectionPrimitive.htm).


	- Отметить по списку - осуществляет
	 установку (снятие) отметки указанных элементов справочника. Данный
	 примитив является наследником типа [IDimListSelectionPrimitive](../../interface/IDimListSelectionPrimitive/IDimListSelectionPrimitive.htm).


	- Отметить подчиненные по уровню
	 - осуществляет установку (снятие) отметки указанных элементов справочника
	 и всех их дочерних элементов. Данный примитив является наследником
	 типа [IDimChildrenSelectionPrimitive](../../interface/IDimChildrenSelectionPrimitive/IDimChildrenSelectionPrimitive.htm).


	- Отметить уровень - осуществляет
	 установку (снятие) отметки элементов указанного уровня справочника.
	 Данный примитив является наследником типа [IDimLevelSelectionPrimitive](../../interface/IDimLevelSelectionPrimitive/IDimLevelSelectionPrimitive.htm).


	- Динамические
	 примитивы


	- Всегда отмечать уровень - после
	 отметки какого-либо элемента осуществляет установку (снятие) отметки
	 всех элементов, расположенных на том же уровне. Данный примитив является
	 наследником типа [IDimSelectedSiblingsPrimitive](../../interface/IDimSelectedSiblingsPrimitive/IDimSelectedSiblingsPrimitive.htm).


	- Всегда отмечать с предками - после
	 отметки какого-либо элемента осуществляет установку (снятие) отметки
	 всех родительских элементов до самого верхнего уровня. Данный примитив
	 является наследником типа [IDimSelectedAncestorsPrimitive](../../interface/IDimSelectedAncestorsPrimitive/IDimSelectedAncestorsPrimitive.htm).


	- Всегда отмечать с подчиненными -
	 после отметки какого-либо элемента осуществляет установку (снятие)
	 отметки всех его дочерних элементов до самого нижнего уровня. Данный
	 примитив является наследником типа [IDimSelectedChildrenPrimitive](../../interface/IDimSelectedChildrenPrimitive/IDimSelectedChildrenPrimitive.htm).


Var

    MB: IMetabase;

    MDesc: IMetabaseObjectDescriptor;

    Dimension: IDimensionModel;

    CrInfo: IMetabaseObjectCreateInfo;

    Schema: IDimSelectionSchema;

    LvlPrimitive: IDimLevelSelectionPrimitive;

Begin

    MB := MetabaseClass.Active;

    MDesc := MB.ItemById("Dim_1");

    Dimension := MDesc.Bind As IDimensionModel;

    //Информация для создания схемы отметки

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_DIMSELECTIONSCHEMA;

    CrInfo.Id := "Schema1";

    CrInfo.Name := "Схема отметки 1";

    CrInfo.Parent := MDesc;

    //Создание схемы отметки со статическим примитивом

    Schema := MB.CreateObject(CrInfo).Edit As IDimSelectionSchema;

    //Указание справочника

    Schema.Dimension := Dimension;

    //Добавление примитива, отмечающего элементы уровня

    //Предполагается наличие в справочнике минимум одного уровня

    LvlPrimitive := Schema.Add(SelectionPrimitiveType.Level) As IDimLevelSelectionPrimitive;

    LvlPrimitive.Included(Dimension.Levels.Item(0)) := True;

    //Сохранение схемы отметки

    (Schema As IMetabaseObject).Save;

    //Создание схемы отметки с динамическим примитивом

    CrInfo.Id := "Schema2";

    CrInfo.Name := "Схема отметки 2";

    Schema := MB.CreateObject(CrInfo).Edit As IDimSelectionSchema;

    Schema.Dimension := Dimension;

    Schema.Add(SelectionPrimitiveType.SelectedAncestors);

    (Schema As IMetabaseObject).Save;


Работа по организации отметки статических примитивов аналогична работе
 с отметкой справочника и описана в разделе [Работа
 с данными справочников: Отметка справочников](../Selection/KeDims_Selection.htm).


См. также:


[Дополнительные
 объекты справочников](KeDims_AdditionalObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
