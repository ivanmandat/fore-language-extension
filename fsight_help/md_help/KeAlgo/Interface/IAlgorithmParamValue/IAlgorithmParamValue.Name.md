# IAlgorithmParamValue.Name

IAlgorithmParamValue.Name
-


# IAlgorithmParamValue.Name


## Синтаксис


Name: String;


## Описание


Свойство Name определяет наименование
 параметра.


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM. В алгоритме расчёта должен содержаться
 хотя бы один [параметр](CalculationAlgorithm.chm::/Desktop/Work/Parameters_of_the_calculation_algorithm.htm).


Добавьте ссылки на системные сборки: Algo, Metabase, Transform. Также
 добавьте ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo: ICalcObject;

	    CalcAlgo: ICalcAlgorithm;

	    ParamValues: IAlgorithmParameterValues;

	    ValueList: IAlgorithmParamValueList;

	    Param: IAlgorithmParamValue;

	    ParamType: String;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Получим коллекцию параметров алгоритма расчёта

	    ParamValues := CalcAlgo.ParamValues;

	    ValueList := ParamValues.Values;

	    // Получим первый параметр и выведем в консоль его настройки

	    Param := ValueList.Item(0);

	    Debug.WriteLine("Наименование: " + Param.Name + '(' + Param.Id + ')');

	    Debug.Indent;

	    Select Case Param.ParamType As Integer

	        Case 5: ParamType := "Отметка элементов справочника";

	        Case 7: ParamType := "Альтернативная иерархия";

	    End Select;

	    Debug.WriteLine("Тип параметра: " + ParamType);

	    Debug.WriteLine("Справочник: " + Param.LinkedObject.Name);

	    If Param.ParamType = TsParamType.Selection Then

	        Debug.WriteLine("Количество элементов, отмеченных по умолчанию: " + (Param.Value As IDimSelection).SelectedCount.ToString);

	    Elseif Param.ParamType = TsParamType.Hierarchy Then

	        Debug.WriteLine("Ключ альтернативной иерархии: " + Param.Value);

	    End If;

	    Debug.Unindent;

	End Sub UserProc;


В результате выполнения примера в консоль будут выведены настройки первого
 параметра:


Наименование: Версия планирования


Идентификатор: PLANNING_VERSION


Тип параметра: Отметка
 элементов справочника


Справочник: Версии планирования


Количество элементов,
 отмеченных по умолчанию: 1


См. также:


[IAlgorithmParamValue](IAlgorithmParamValue.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
