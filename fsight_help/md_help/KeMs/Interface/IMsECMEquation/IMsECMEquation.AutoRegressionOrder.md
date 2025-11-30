# IMsECMEquation.AutoRegressionOrder

IMsECMEquation.AutoRegressionOrder
-


# IMsECMEquation.AutoRegressionOrder


## Синтаксис


		AutoRegressionOrder: Array;


## Описание


Свойство AutoRegressionOrder
 определяет признак использования коэффициентов авторегрессии в уравнении.


## Комментарии


Коэффициенты авторегрессии задаются в виде целочисленного массива. Количество
 элементов массива определяет порядок, а значения элементов определяют
 лаг для коэффициентов авторегрессии. Для отмены использования авторегрессии
 необходимо данному свойству установить значение Null.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего векторную модель коррекции
 ошибок с идентификатором MODEL_ECM.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MObj: IMetabaseObjectDescriptor;

		    Model: IMsModel;

		    ModelTrans: IMsFormulaTransform;

		    Formula: IMsFormula;

		    Eqution: IMsECMEquation;

		    Ar: Array[0..2] Of Integer;

		    Calc: IMsModelCalculation;

		    Arr: Array Of Double;

		    i: Integer;

		Begin

		    // Получаем текущий репозиторий

		    MB := MetabaseClass.Active;

		    // Получаем контейнер моделирования

		    MObj := MB.ItemById("MS");

		    // Получаем векторную модель коррекции ошибок

		    Model := MB.ItemByIdNamespace("MODEL_ECM", MObj.Key).Edit As IMsModel;

		    ModelTrans := Model.Transform;

		    Formula := ModelTrans.FormulaItem(0);

		    // Получаем параметры расчета модели

		    Eqution := Formula.Method As IMsECMEquation;

		    // Задаем порядок авторегрессии

		    Ar := New Integer[3];

		    Ar[0] := 1;

		    Ar[1] := 2;

		    Ar[2] := 3;

		    Eqution.AutoRegressionOrder := Ar;

		    // Задаем настройки для расчета модели

		    Calc := Model.CreateCalculation;

		    Calc.Period.IdentificationStartDate := DateTime.ComposeDay(1990, 01, 01);

		    Calc.Period.IdentificationEndDate := DateTime.ComposeDay(2016, 12, 31);

		    Calc.Period.ForecastStartDate := DateTime.ComposeDay(2017, 01, 01);

		    Calc.Period.ForecastEndDate := DateTime.ComposeDay(2025, 12, 31);

		    // Получаем данные моделируемой переменной и выводим их в окно консоли

		    Arr := Eqution.Result.Serie(Calc As IMsMethodCalculation);

		    For i := 0 To Arr.Length - 1 Do

		    Debug.WriteLine(Arr[i]);

		    End For;

		    // Сохраняем модель

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера для первого уравнения будет изменён
 порядок авторегрессии, в окно консоли будут выведены данные моделируемой
 переменной.


См. также:


[IMsECMEquation](IMsECMEquation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
