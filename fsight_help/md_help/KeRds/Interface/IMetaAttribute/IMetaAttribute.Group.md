# IMetaAttribute.Group

IMetaAttribute.Group
-


# IMetaAttribute.Group


## Синтаксис


Group: [IMetaAttributeGroup](../IMetaAttributeGroup/IMetaAttributeGroup.htm);


## Описание


Свойство Group определяет
 группу атрибута.


## Комментарии


Если для атрибута назначена группа, то он является групповым атрибутом
 и всегда необязателен для заполнения. Значение группового атрибута изменяется
 для всех показателей, входящих в группу.


Если атрибут входит в уникальный ключ, т.е. [IMetaAttribute.Primary](IMetaAttribute.Primary.htm)
 = True, то он не может иметь группу.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором FC_GROUPS, содержащей обязательные атрибуты показателей
 COUNTRY и INDICATOR. Данные атрибуты являются ссылками на справочник.
 В базе данных временных рядов должен отсутствовать первичный индекс.


Добавьте ссылки на системные сборки: Rds, Metabase, Dimensions, Cubes.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    Rub: IRubricator;

	    Dic: IMetaDictionary;

	    Meta_idxs: IMetaIndexes;

	    Meta_idx: IMetaIndex;

	    MetaAttrs: IMetaAttributes;

	    AttCountry, AttIndicator: IMetaAttribute;

	    Grp: IMetaAttributeGroup;

	    Dim_sel_fact: DimSelectionSetFactory;

	    GrpSel: IDimSelectionSet;

	    Dim_inst: IDimInstance;

	    Dim_sel: IDimSelection;

	    DimAttInst: IDimAttributeInstance;

	    Dim_Element: Integer;

	    GrFilter: IMetaAttributeGroupFilter;

	    Att: IMetaAttribute;

	Begin

	    mb := MetabaseClass.Active;

	    Rub := mb.ItemById("FC_GROUPS").Bind As IRubricator;

	// Получаем справочник показателей базы

	    Dic := (Rub.Facts As IMetabaseObject).Edit As IMetaDictionary;

	// Создаем первичный индекс

	    Meta_idxs := Dic.Indexes;

	    Meta_idx := Meta_idxs.Primary;

	    MetaAttrs := Dic.Attributes;

	    AttCountry := MetaAttrs.FindById("COUNTRY");

	    AttIndicator := MetaAttrs.FindById("INDICATOR");

	    If Meta_idx = Null Then

	        Meta_idx := Meta_idxs.Add;

	        Meta_idx.Attributes.Add(AttCountry);

	        Meta_idx.Attributes.Add(AttIndicator);

	        Meta_idx.Enabled := True;

	        Meta_idx.Primary := True;

	    End If;

	// Добавляем группу

	    Grp := Dic.Groups.Add;

	    Grp.Name := "Атрибуты отношений между странами";

	// Задаем первичный атрибут группы

	    Grp.PrimaryAttributes := MetaAttrs.CreateSubset("COUNTRY", SubsetOperation.Select_);

	// Задаем свободный атрибут группы

	    Grp.FreeAttributes := MetaAttrs.CreateSubset("INDICATOR", SubsetOperation.Select_);

	// Формируем отметку для свободного атрибута INDICATOR

	    Dim_sel_fact := New DimSelectionSetFactory.Create;

	    GrpSel := Dim_sel_fact.CreateDimSelectionSet;

	    Dim_inst := AttIndicator.ValuesObject.Open(Null) As IDimInstance;

	    Dim_sel := GrpSel.Add(Dim_inst);

	    DimAttInst := Dim_inst.Attributes.FindById("NAME");

	    Dim_Element := DimAttInst.LookupValue("BCA");

	    Dim_sel.SelectElement(Dim_Element, False);

	    Dim_Element := DimAttInst.LookupValue("BDS");

	    Dim_sel.SelectElement(Dim_Element, False);

	    Dim_Element := DimAttInst.LookupValue("BCI");

	    Dim_sel.SelectElement(Dim_Element, False);

	    Grp.Filter.SetSelection(GrpSel);

	// Формируем отметку для первичного атрибута COUNTRY

	    Dim_inst := AttCountry.ValuesObject.Open(Null) As IDimInstance; //COUNTRY

	    Dim_sel := GrpSel.Add(Dim_inst);

	    DimAttInst := Dim_inst.Attributes.FindById("NAME");

	    Dim_Element := DimAttInst.LookupValue("Afghanistan");

	    Dim_sel.SelectElement(Dim_Element, False);

	    Dim_Element := DimAttInst.LookupValue("Albania");

	    Dim_sel.SelectElement(Dim_Element, False);

	    Dim_Element := DimAttInst.LookupValue("Brazil");

	    Dim_sel.SelectElement(Dim_Element, False);

	// Устанавливаем созданные отметки в фильтр группы

	    GrFilter := Grp.Filter;

	    If Not GrFilter.IsEmpty Then

	        GrFilter.SetSelection(Null);

	    End If;

	    GrFilter.SetSelection(GrpSel);

	// Создаем групповой атрибут показателей

	    Att := MetaAttrs.Add;

	    Att.Name := "Групповой";

	    Att.Group := Grp;

	// Сохраняем справочник показателей базы

	    (Dic As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будет создан групповой атрибут показателей.
 Атрибут применим для рядов, у которых:


	- атрибут COUNTRY равен или Afghanistan, или Albania, или Brazil;


	- атрибут INDICATOR равен или BCA, или BDS, или BCI.


См. также:


[IMetaAttribute](IMetaAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
