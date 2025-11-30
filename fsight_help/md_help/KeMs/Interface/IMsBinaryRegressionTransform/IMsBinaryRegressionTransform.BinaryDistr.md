# IMsBinaryRegressionTransform.BinaryDistr

IMsBinaryRegressionTransform.BinaryDistr
-


# IMsBinaryRegressionTransform.BinaryDistr


## Синтаксис


		BinaryDistr: [BinaryDistrType](StatLib.chm::/Enums/BinaryDistrType.htm);


## Описание


Свойство BinaryDistr определяет
 модель бинарной регрессии.


## Комментарии


По умолчанию свойство принимает значение BinaryDistrType.Logit.
 Используется Logit-модель, то есть рассматривается логистическое
 нормальное распределение.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего модель бинарного выбора
 (оценка методом максимального правдоподобия) с идентификатором BCHOICE_MODEL.


Добавьте ссылки на системные сборки: Metabase, Ms, Stat.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    MsKey: Integer;

		    Model: IMsModel;

		    ModelTransform: IMsFormulaTransform;

		    ModelFormula: IMsFormula;

		    BinaryRegr: IMsBinaryRegressionTransform;

		    Explanatories: IMsCompositeFormulaTermSetList;

		    i: Integer;

		    Factor: IMsCompositeFormulaTermSet;

		Begin

		    Mb := MetabaseClass.Active;

		    // Получаем ключ контейнера моделирования

		    MsKey := Mb.ItemById("MS").Key;

		    // Получаем модель, рассчитываемую методом бинарной регрессии

		    Model := Mb.ItemByIdNamespace("BCHOICE_MODEL", MsKey).Edit As IMsModel;

		    // Получаем параметры расчёта модели

		    ModelTransform := Model.Transform;

		    ModelFormula := ModelTransform.FormulaItem(0);

		    // Получаем параметры расчёта бинарной регрессии

		    BinaryRegr := ModelFormula.Method As IMsBinaryRegressionTransform;

		    // Задаём модель бинарной регрессии

		    BinaryRegr.BinaryDistr := BinaryDistrType.Probit;

		    // Задаём пороговое значение вероятности для отнесения объектов к группе «0» или «1»

		    BinaryRegr.ClassificationCutOff := 0.7;

		    // Задаём точность оптимизации функции правдоподобия

		    BinaryRegr.Tolerance := 0.00001;

		    // Задаём начальные значения объясняющих переменных вручную

		    BinaryRegr.UseDefaultInitValues := False;

		    Explanatories := BinaryRegr.Explanatories;

		    For i := 0 To Explanatories.Count - 1 Do

		        Factor := Explanatories.Item(i);

		        Factor.InitValue := 0.1;

		    End For;

		    // Указываем, что значение константы будет оценено

		    BinaryRegr.ConstantMode := InterceptMode.AutoEstimate;

		    // Задаем начальное значение константы вручную

		    BinaryRegr.ConstantInitValue := 0.4;

		    BinaryRegr.ConstantValue := 0.4;

		    // Указываем тип значений, выгружаемых в модельные и прогнозные ряды

		    BinaryRegr.OutputType := MsBinaryRegressionOutputType.Probability;

		    // Сохраняем модель

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера будут изменены следующие параметры расчёта
 модели:


	- модель бинарной регрессии - Probit;


	- пороговое значение вероятности для деления на группы - «0,7»;


	- точность оптимизации функции правдоподобия - «0,00001»;


	- начальные значения всех объясняющих переменных - «0,1», начальное
	 значение оценённой константы - «0,4»;


	- в моделируемый и прогнозные ряды выгружаются вероятностные значения.


См. также:


[IMsBinaryRegressionTransform](IMsBinaryRegressionTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
