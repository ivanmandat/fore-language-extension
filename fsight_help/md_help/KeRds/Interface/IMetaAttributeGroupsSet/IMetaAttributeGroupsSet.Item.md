# IMetaAttributeGroupsSet.Item

IMetaAttributeGroupsSet.Item
-


# IMetaAttributeGroupsSet.Item


## Синтаксис


Item(Index: Integer): [IMetaAttributeGroup](../IMetaAttributeGroup/IMetaAttributeGroup.htm);


## Параметры


Index. Индекс элемента.


## Описание


Свойство Item возвращает
 указанный элемент коллекции.


## Комментарии


Индексация элементов коллекции сквозная и начинается с нуля. Число элементов
 в коллекции возвращает свойство [IMetaAttributeGroupsSet.Count](IMetaAttributeGroupsSet.Count.htm).


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором FC_GROUPS, содержащей групповой атрибут.


Добавьте ссылки на системные сборки: Rds, Metabase, Cubes, Dimensions.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    Rub: IRubricator;

	    Dic: IMetaDictionary;

	    Meta_idx: IMetaIndex;

	    Groups: IMetaAttributeGroups;

	    i: Integer;

	    Grp: IMetaAttributeGroup;

	    Dim_sel_fact: DimSelectionSetFactory;

	    GrpSel: IDimSelectionSet;

	    Dim_inst: IDimInstance;

	    Dim_sel: IDimSelection;

	    GrFilter: IMetaAttributeGroupFilter;

	    Att: IMetaAttribute;

	Begin

	    mb := MetabaseClass.Active;

	    Rub := mb.ItemById("FC_GROUPS").Bind As IRubricator;

	// Получаем справочник показателей базы
	 данных временных рядов

	    Dic := (Rub.Facts As IMetabaseObject).Edit As IMetaDictionary;

	// Получаем первичный индекс справочника

	    Meta_idx := Dic.Indexes.Primary;

	    Debug.WriteLine("Атрибуты первичного индекса:");

	    For Each Att In Meta_idx.AttributesSet Do

	        Debug.WriteLine(" - " + Att.Name);

	    End For;

	// Получаем группы атрибутов справочника

	    Groups := Dic.Groups;

	    For i := 0 To Groups.Count - 1 Do

	        Grp := Groups.Item(i);

	        Debug.WriteLine("Группа '" + Grp.Name + "'");

	        Dim_sel_fact := New DimSelectionSetFactory.Create;

	        GrpSel := Dim_sel_fact.CreateDimSelectionSet;

	        Debug.WriteLine("  Первичные атрибуты:");

	        For Each Att In Grp.PrimaryAttributes Do

	            Debug.WriteLine("   - " + Att.Name);

	            Dim_inst := Att.ValuesObject.Open(Null) As IDimInstance;

	            Dim_sel := GrpSel.Add(Dim_inst);

	            GrFilter := Grp.Filter;

	            Debug.Write("     фильтр: ");

	            Debug.WriteLine(GrFilter.LoadSelection(GrpSel).FindById(Dim_inst.Ident).ToString);

	        End For;

	        If Grp.IsPartiallyFree Then

	            Debug.WriteLine("  Свободные атрибуты:");

	            For Each Att In Grp.FreeAttributes Do

	                Debug.WriteLine("   - " + Att.Name);

	                Dim_inst := Att.ValuesObject.Open(Null) As IDimInstance;

	                Dim_sel := GrpSel.Add(Dim_inst);

	                GrFilter := Grp.Filter;

	                Debug.Write("     фильтр: ");

	                Debug.WriteLine(GrFilter.LoadSelection(GrpSel).FindById(Dim_inst.Ident).ToString);

	            End For;

	        End If;


	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация о
 первичном индексе и групповых атрибутах базы данных временных рядов.


См. также:


[IMetaAttributeGroupsSet](IMetaAttributeGroupsSet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
