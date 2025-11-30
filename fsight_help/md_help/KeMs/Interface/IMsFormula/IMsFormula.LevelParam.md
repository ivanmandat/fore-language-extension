# IMsFormula.LevelParam

IMsFormula.LevelParam
-


# IMsFormula.LevelParam


## Синтаксис


		LevelParam: String;


## Описание


Свойство LevelParam определяет
 параметр, задающий динамику расчёта метода.


## Комментарии


Для задания динамики расчёта напрямую используйте свойство [IMsFormula.Level](IMsFormula.Level.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. Данный контейнер должен содержать
 метамодель с идентификатором META_LEVELPARAM, рассчитывающую модель с
 идентификатором MODEL_LEVELPARAM.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms, Transform.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    MsKey: Integer;

		    Metamodel: IMsMetaModel;

		    Params: IMsModelParams;

		    Param: IMsModelParam;

		    Model: IMsModel;

		    Formula: IMsFormula;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем ключ контейнера моделирования

		    MsKey := mb.GetObjectKeyById("MS");

		    // Получаем метамодель

		    Metamodel := mb.ItemByIdNamespace("META_LEVELPARAM", MsKey).Edit As IMsMetaModel;

		    // Получаем коллекцию параметров метамодели

		    Params := Metamodel.Params;

		    // Очищаем коллекцию параметров метамодели

		    Params.Clear;

		    // Добавляем новый параметр

		    Param := Params.Add;

		    // Указываем тип параметра - динамика

		    Param.ParamType := TsParamType.Frequency;

		    // Указываем значение по умолчанию - годовая динамика

		    Param.DefaultValue := DimCalendarLevelSet.Year;

		    // Задаем наименование и идентификатор параметра

		    Param.Name := "Динамика расчета";

		    Param.Id := "Formula_Level";

		    // Сохраняем изменения в метамодели

		    (Metamodel As IMetabaseObject).Save;

		    // Получаем модель

		    Model := mb.ItemByIdNamespace("MODEL_LEVELPARAM", MsKey).Edit As IMsModel;

		    // Получаем метод расчета модели

		    Formula := Model.Transform.FormulaItem(0);

		    // Указываем, что динамику расчета модели будет определять параметр

		    Formula.LevelParam := "Formula_Level";

		    // Сохраняем изменения в модели

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера модель с идентификатором MODEL_LEVELPARAM
 будет рассчитываться по динамике, заданной параметром Formula_Level.


См. также:


[IMsFormula](IMsFormula.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
