# IMsFormulaTransformSlice.ParametrizedDimensions

IMsFormulaTransformSlice.ParametrizedDimensions
-


# IMsFormulaTransformSlice.ParametrizedDimensions


## Синтаксис


ParametrizedDimensions: [IMsParametrizedDimensions](../IMsParametrizedDimensions/IMsParametrizedDimensions.htm);


## Описание


Свойство ParametrizedDimensions
 возвращает коллекцию измерений среза переменой, которые можно параметризировать.


## Комментарии


Нумерация элементов коллекции сквозная и начинается с нуля.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC_PARAM. Данная база содержит атрибут
 «COUNTRY», ссылающийся на справочник. В контейнере моделирования базы
 находится метамодель с идентификатором METAMODEL и модель с идентификатором
 MODEL. Для метамодели задан параметр, ссылающийся на тот же справочник,
 что и атрибут «COUNTRY».


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms,
 Rds.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    Catalog: IRubricator;

	    Transforms: IMetabaseObjectDescriptor;

	    MetaModel: IMsMetaModel;

	    Model: IMsModel;

	    Transform: IMsFormulaTransform;

	    Input: IMsFormulaTransformVariable;

	    Slice: IMsFormulaTransformSlice;

	    Sel: IDimSelectionSet;

	    Atts: IMetaAttributes;

	    Dict: IMetabaseObjectDescriptor;

	    dimInst: IDimInstance;

	    dimSel: IDimSelection;

	    Params: IMsModelParams;

	    paramDim: IMsParametrizedDimensions;

	    paramD: IMsParametrizedDimension;

	    pr: IMsModelParam;

	Begin

	    mb := MetabaseClass.Active;

	    Catalog := mb.ItemById("FC_PARAM").Bind As IRubricator;

	    Transforms := Catalog.ModelSpace;

	    MetaModel := mb.ItemByIdNamespace("METAMODEL", Transforms.Key).Bind As IMsMetaModel;

	    Model := mb.ItemByIdNamespace("MODEL", Transforms.Key).Edit As IMsModel;

	    Transform := Model.Transform;

	    Input := Transform.Inputs.Item(0);

	    Slice := Input.Slices.Item(0);

	    Sel := Slice.Selection;

	    Atts := Catalog.Facts.Attributes;

	    Dict := Atts.FindById("COUNTRY").ValuesObject;

	    dimInst := Dict.Open(Null) As IDimInstance;

	    dimSel := Sel.Add(dimInst);

	    dimSel.SelectElement(0, False);

	    Params := MetaModel.Params;

	    pr := Params.Item(0);

	    paramDim := Slice.ParametrizedDimensions;

	    paramD := paramDim.Item(0);

	    paramD.Parameter := pr;

	    (Model As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера для среза переменной модели будет задано параметризированное
 измерение.


См. также:


[IMsFormulaTransformSlice](IMsFormulaTransformSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
