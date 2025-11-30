# IMsFormulaTermInfo.DateSlice

IMsFormulaTermInfo.DateSlice
-


# IMsFormulaTermInfo.DateSlice


## Синтаксис


		DateSlice: [IMsFormulaTransformSlice](../IMsFormulaTransformSlice/IMsFormulaTransformSlice.htm);


## Описание


Свойство DateSlice
 определяет срез данных, используемый при расчётах с данным термом.


## Комментарии


Свойство актуально, если тип терма - срез данных, то есть свойство [IMsFormulaTermInfo.Type](IMsFormulaTermInfo.Type.htm)
 имеет значение [MsFormulaTermType.SliceDate](../../Enums/MsFormulaTermType.htm).


Данное свойство необходимо для поддержки в выражениях дополнительных
 атрибутов базы данных временных рядов при работе с контейнером моделирования,
 принадлежащим базе.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR. В данной базе предполагается
 наличие фильтра валидации с идентификатором VALIDATION. Фильтр использует
 для расчетов пользовательский метод.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    RubDescr: IMetabaseObjectDescriptor;

		    Validation: IValidationFilter;

		    CustomData: IValidationCustom;

		    Trans: IMsFormulaTransform;

		    Formula: IMsFormula;

		    Determ: IMsDeterministicTransform;

		    TermList: IMsFormulaTermList;

		    OperCount, i: Integer;

		    TInfo: IMsFormulaTermInfo;

		    Slice: IMsFormulaTransformSlice;

		    ParamDimensions: IMsParametrizedDimensions;

		    DimCount, j: Integer;

		    ParamDim: IMsParametrizedDimension;

		Begin

		    Mb := MetabaseClass.Active;

		    RubDescr := Mb.ItemById("OBJ_RUBRICATOR");

		    Validation := Mb.ItemByIdNamespace("VALIDATION",RubDescr.Key).Bind As IValidationFilter;

		    CustomData := Validation.Details As IValidationCustom;

		    Trans := CustomData.Transform;

		    Formula := Trans.FormulaItem(0);

		    Debug.WriteLine("Формуларасчета фильтра валидации: " + Formula.CreateStringGenerator.Execute);

		    Determ := Formula.Method As IMsDeterministicTransform;

		    TermList := Determ.Operands;

		    OperCount := TermList.Count;

		    For i := 0 To OperCount - 1 Do

		        TInfo := TermList.Item(i).TermInfo;

		        Debug.WriteLine("Терм '" + TInfo.TermText + "'");

		        If TInfo.Type = MsFormulaTermType.SliceDate Then

		            Slice := TInfo.DateSlice;

		            ParamDimensions := Slice.ParametrizedDimensions;

		            DimCount := ParamDimensions.Count;

		            Debug.WriteLine("   Измерения терма:");

		            For j := 0 To DimCount - 1 Do

		                ParamDim := ParamDimensions.Item(j);

		                Debug.WriteLine("    - " + ParamDim.Name);

		            End For;

		        End If;

		    End For;

		End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены термы,
 которые входят в формулу расчёта фильтра валидации и являются срезами
 данных. Также будут выведены наименования измерений данных термов.


См. также:


[IMsFormulaTermInfo](IMsFormulaTermInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
