# ITsModelParamValue.DataType

ITsModelParamValue.DataType
-


# ITsModelParamValue.DataType


## Синтаксис


DataType: [DbDataType](Dal.chm::/Enums/DbDataType.htm);


## Описание


Свойство DataType возвращает
 тип данных параметра.


## Комментарии


Для получения типа параметра используйте свойство [ITsModelParamValue.ParamType](ITsModelParamValue.ParamType.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MODEL_SPACE». Контейнер моделирования
 должен содержать задачу моделирования с идентификатором «PROBLEM», рассчитывающую
 метамодель с параметрами.


Добавьте ссылки на системные сборки «Metabase», «Ms», «Dal».


	Sub ParamVals;

	Var

	    mb: IMetabase;

	    Ms: IMetabaseObjectDescriptor;

	    Problem: IMsProblem;

	    CalcSett: IMsProblemCalculationSettings;

	    Calc: IMsProblemCalculation;

	    ParamsVals: ITsModelParamValues;

	    ParVal: ITsModelParamValue;

	    i: Integer;

	Begin

	    mb := MetabaseClass.Active;

	    // Получаем контейнер моделирования

	    Ms := mb.ItemById("MODEL_SPACE");

	    // Получаем задачу моделирования

	    Problem := mb.ItemByIdNamespace("PROBLEM", Ms.Key).Bind As IMsProblem;

	    // Создаем параметры расчёта задачи

	    CalcSett := Problem.CreateCalculationSettings;

	    CalcSett.FactIncluded := True;

	    // Получаем значения параметров

	    ParamsVals := CalcSett.ParamValues As ITsModelParamValues;

	    // Выводим информацию о параметрах в окно консоли

	    For i := 0 To ParamsVals.Count - 1 Do

	        ParVal := ParamsVals.Item(i);

	        Debug.WriteLine("Параметр " + i.ToString + ":");

	        Debug.WriteLine("  идентификатор параметра: " + ParVal.Id);

	        Debug.WriteLine("  ключ параметра: " + ParVal.Key.ToString);

	        Debug.WriteLine("  наименование параметра: " + ParVal.Name);

	        Debug.WriteLine("  значение по умолчанию: " + ParVal.DefaultValue);

	        Debug.WriteLine("  параметр скрытый: " + ParVal.Hidden.ToString);

	        Debug.WriteLine("  тип данных параметра (значение перечисления DbDataType): " + ParVal.DataType.ToString);

	        Debug.WriteLine("  тип параметра (значение перечисления TsParamType): " + ParVal.ParamType.ToString);

	        If ParVal.LinkedObject <> Null Then

	            Debug.WriteLine("  справочник, на который ссылается параметр: " + ParVal.LinkedObject.Name);

	        End If;

	    End For;

	    // Выполняем расчёт

	    Calc := Problem.Calculate(CalcSett);

	    Calc.Run;

	End Sub ParamVals;


Результат выполнения примера: рассчитана задача моделирования, в окно
 консоли выведены значения параметров метамодели, рассчитываемой задачей.


См. также:


[ITsModelParamValue](ITsModelParamValue.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
