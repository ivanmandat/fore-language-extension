# IMsCrossDimensionAggregationOptions.LevelValue

IMsCrossDimensionAggregationOptions.LevelValue
-


# IMsCrossDimensionAggregationOptions.LevelValue


## Синтаксис


		LevelValue: Double;


## Описание


Свойство LevelValue определяет
 начальное значение, которое будет использоваться при расчёте функции [Level](IMsCrossDimensionAggregationOptions.Level.htm).


## Комментарии


Значение по умолчанию - 100.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего модель с идентификатором
 MODEL_AGGR. Данная модель должна рассчитываться методом расширенной агрегации.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    MsKey: Integer;

		    Model: IMsModel;

		    Transform: IMsFormulaTransform;

		    Formula: IMsFormula;

		    Aggr: IMsCrossDimensionAggregationTransform;

		    strsGen: IMsFormulaStringGenerator;

		    Options: IMsCrossDimensionAggregationOptions;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем ключ контейнера моделирования

		    MsKey := mb.GetObjectKeyById("MS");

		    // Получаем модель

		    Model := mb.ItemByIdNamespace("MODEL_AGGR", MsKey).Edit As IMsModel;

		    // Получаем параметры модели

		    Transform := Model.Transform;

		    // Получаем метод расчета модели

		    Formula := Transform.FormulaItem(0);

		    Aggr := Formula.Method As IMsCrossDimensionAggregationTransform;

		    // Задаем метод расчета агрегации

		    Aggr.AgregationMethod := MsAgregationMethodType.Sum;

		    // Получаем дополнительные параметры расчета агрегации

		    Options := Aggr.Options;

		    // Задаем пороговое
		 значение для расчета релевантности агрегации

		    Options.Threshold := 0;

		    // Указываем, что используем функцию Level

		    Options.Level := True;

		    // Задаем базовое значение для расчета функции Level

		    Options.LevelValue := 90;

		    // Указываем, что используем функцию Rebase

		    Options.Rebase := True;

		    // Задаем базовый период для расчета функции Rebase

		    Options.RebaseDate := "2001A";

		    // Указываем, что агрегация рассчитывается с учетом иерархии данных

		    Options.FollowHierarchy := True;

		    // Указываем, что агрегация рассчитывается только на один уровень вниз по иерархии

		    Options.IncludeOnlyChild := True;

		    // Указываем, что исходный элемент учитывается в агрегации

		    Options.IncludeParent := True;

		    // Создаем объект для генерации строкового представления метода расчета модели

		    strsGen := Formula.CreateStringGenerator;

		    // Указываем, что в наименованиях переменных используются полные имена

		    strsGen.ShowFullVariableNames := True;

		    // Генерируем строковое представление метода и выводим его в окно консоли

		    Debug.WriteLine("Выражение агрегации: " + strsGen.Execute);

		    // Сохраняем изменения в модели

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера будут изменены следующие параметры модели:


	- будет использоваться функция [Level](IMsCrossDimensionAggregationOptions.Level.htm);


	- будет использоваться функция [Rebase](IMsCrossDimensionAggregationOptions.Percentile.htm)
	 с базовым периодом - 2001 год, шаг расчёта - годы;


	- задан порог для определения релевантности агрегации;


	- агрегация будет рассчитываться без метода обработки пропусков;


	- агрегация будет рассчитываться с учётом иерархии на один уровень
	 вниз с учетом исходного элемента.


В окно консоли будет выведено выражение, по которому рассчитывается
 агрегация. Например:


Выражение агрегации: World for publication|BCA[t]
 = Rebase(Level(Сумма((BCA[t]) * (BCI[t])) / Сумма(BCI[t])), 2001A)


См. также:


[IMsCrossDimensionAggregationOptions](IMsCrossDimensionAggregationOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
