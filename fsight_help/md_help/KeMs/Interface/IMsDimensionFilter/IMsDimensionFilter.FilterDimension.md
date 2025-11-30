# IMsDimensionFilter.FilterDimension

IMsDimensionFilter.FilterDimension
-


# IMsDimensionFilter.FilterDimension


## Синтаксис


		FilterDimension: [IDimensionModel](KeDims.chm::/interface/IDimensionModel/IDimensionModel.htm);


## Описание


Свойство FilterDimension
 возвращает измерение, в котором разрешена множественная отметка.


## Комментарии


Для фиксации данного измерения используйте свойство [IMsDimensionFilter.Fixed](IMsDimensionFilter.Fixed.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего модель детерминированного
 уравнения с идентификатором MODEL_FREEDIM.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    MsKey, i: Integer;

		    Model: IMsModel;

		    Transform: IMsFormulaTransform;

		    Formula: IMsFormula;

		    FreeDimensions: IMsDimensionFilterList;

		    Filter: IMsDimensionFilter;

		    Dim: IDimensionModel;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем ключ контейнера моделирования

		    MsKey := mb.GetObjectKeyById("MS");

		    // Получаем модель

		    Model := mb.ItemByIdNamespace("MODEL_FREEDIM", MsKey).Bind As IMsModel;

		    // Получаем параметры расчета модели

		    Transform := Model.Transform;

		    // Получаем метод расчета модели

		    Formula := Transform.FormulaItem(0);

		    // Получаем список измерений, по которым разрешена множественная отметка

		    FreeDimensions := Formula.FreeDimensions;

		    // Если такие измерения присутствуют, то выводим информацию о них

		    If FreeDimensions.Count > 0 Then

		        For i := 0 To FreeDimensions.Count - 1 Do

		            Filter := FreeDimensions.Item(i);

		            Dim := Filter.FilterDimension;

		            Debug.WriteLine("Наименование измерения: " + (Dim As IMetabaseObject).Name);

		            If Filter.Param <> Null

		                Then Debug.WriteLine("    - измерение параметрическое, управляется параметром: " +

		                    Filter.Param.Name);

		                Else Debug.WriteLine("    - измерение непараметрическое");

		            End If;

		            If Filter.Fixed

		                Then Debug.WriteLine("    - измерение зафиксированное");

		                Else Debug.WriteLine("    - измерение незафиксированное");

		            End If;

		        End For;

		    End If;

		End Sub UserProc;


В результате выполнения примера в окно консоли будет выведена информация
 о тех измерениях моделируемой переменной, в которых разрешена множественная
 отметка.


См. также:


[IMsDimensionFilter](IMsDimensionFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
