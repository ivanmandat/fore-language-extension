# IMsFormulaTransformCoord.TransparentDimensionsCount

IMsFormulaTransformCoord.TransparentDimensionsCount
-


# IMsFormulaTransformCoord.TransparentDimensionsCount


## Синтаксис


		TransparentDimensionsCount: Integer;


## Описание


Свойство TransparentDimensionsCount
 возвращает количество скрытых измерений в переменной.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC_PARAM. Данная база содержит атрибут
 COUNTRY, ссылающийся на справочник. В контейнере моделирования базы находится
 метамодель с идентификатором METAMODEL и модель с идентификатором MODEL.
 Для метамодели задан параметр, ссылающийся на тот же справочник, что и
 атрибут COUNTRY. Добавьте ссылки на системные сборки: Cubes, Dimensions,
 Metabase, Ms, Rds.


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

		    Coord: IMsFormulaTransformCoord;

		Begin

		    // Получаем репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем БДВР

		    Catalog := mb.ItemById("FC_PARAM").Bind As IRubricator;

		    // Получаем контейнер моделирования

		    Transforms := Catalog.ModelSpace;

		    // Получаем метамодель и модель

		    MetaModel := mb.ItemByIdNamespace("METAMODEL", Transforms.Key).Bind As IMsMetaModel;

		    Model := mb.ItemByIdNamespace("MODEL", Transforms.Key).Edit As IMsModel;

		    // Настраиваем параметры модели

		    Transform := Model.Transform;

		    Input := Transform.Inputs.Item(0);

		    Slice := Input.Slices.Item(0);

		    Sel := Slice.Selection;

		    Atts := Catalog.Facts.Attributes;

		    Dict := Atts.FindById("COUNTRY").ValuesObject;

		    dimInst := Dict.Open(Null) As IDimInstance;

		    dimSel := Sel.Add(dimInst);

		    dimSel.SelectElement(0, False);

		    // Настраиваем параметры метамодели

		    Params := MetaModel.Params;

		    pr := Params.Item(0);

		    paramDim := Slice.ParametrizedDimensions;

		    paramD := paramDim.Item(0);

		    paramD.ParamAttributes.Parameter := pr;

		    Debug.WriteLine("Наименование измерения: " + paramD.DimensionDescriptor.Name);

		    Debug.WriteLine("Описание измерения: " + (paramD.Dimension As IMetabaseObject).Description);

		    Coord := Transform.CreateCoord(Transform.Outputs.Item(0));

		    If Coord.TransparentDimensionsCount > 0 Then

		        Debug.WriteLine("Моделируемая переменная содержит скрытые измерения");

		    End If;

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера для среза переменной модели будет задано
 параметризированное измерение. Информация о нем будет выведено в окно
 консоли. Если моделируемая переменная модели содержит скрытые измерения,
 то данные об этом также будут выведены в консоль.


См. также:


[IMsFormulaTransformCoord](IMsFormulaTransformCoord.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
