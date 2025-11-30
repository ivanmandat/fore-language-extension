# IMsExponentialSmoothingTransform.AutoSearch

IMsExponentialSmoothingTransform.AutoSearch
-


# IMsExponentialSmoothingTransform.AutoSearch


## Синтаксис


		AutoSearch: [IExponentialSmoothingAutoSearch](StatLib.chm::/Interface/IExponentialSmoothingAutoSearch/IExponentialSmoothingAutoSearch.htm);


## Описание


Свойство AutoSearch возвращает
 настройки автоподбора параметров для экспоненциального сглаживания.


## Комментарии


С помощью свойства возможно задать способ получения параметров метода
 (альфа, дельта, гамма, фи): рассчитываются автоматически или задаются
 пользователем (свойство [IMsExponentialSmoothingTransform.Parameters](IMsExponentialSmoothingTransform.Parameters.htm)).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором OBJ_MS, содержащим модель с идентификатором
 MODEL. Модель рассчитывается с помощью метода экспоненциального сглаживания.


Добавьте ссылки на системные сборки: Ms, Metabase и Stat.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    MsDescrKey: Integer;

		    Model: IMsModel;

		    ModelTrans: IMsFormulaTransform;

		    Formula: IMsFormula;

		    ExpSmoothing: IMsExponentialSmoothingTransform;

		    AutoSearch: IExponentialSmoothingAutoSearch;

		    Params: IExponentialSmoothingParameters;

		Begin

		    Mb := MetabaseClass.Active;

		    MsDescrKey := Mb.ItemById("OBJ_MS").Key;

		    // Получение модели

		    Model := MB.ItemByIdNamespace("MODEL", MsDescrKey).Edit As IMsModel;

		    ModelTrans := Model.Transform;

		    // Настройка параметров расчета модели

		    Formula := ModelTrans.FormulaItem(0);

		    ExpSmoothing := Formula.Method As IMsExponentialSmoothingTransform;

		    AutoSearch := ExpSmoothing.AutoSearch;

		    AutoSearch.DeltaSearch := True;

		    AutoSearch.GammaSearch := True;

		    AutoSearch.PhiSearch := True;

		    AutoSearch.AlphaSearch := False;

		    Params := ExpSmoothing.Parameters;

		    Params.Alpha := 0.15;

		    // Сохраняем параметры расчета модели

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера будут заданы следующие параметры метода:
 Дельта, Гамма, Фи - будут рассчитываться автоматически, Альфа - будет
 задан пользователем.


См. также:


[IMsExponentialSmoothingTransform](IMsExponentialSmoothingTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
