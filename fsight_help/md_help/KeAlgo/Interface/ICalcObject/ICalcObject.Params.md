# ICalcObject.Params

ICalcObject.Params
-


# ICalcObject.Params


## Синтаксис


Params: [IMsModelParams](KeMs.chm::/Interface/IMsModelParams/IMsModelParams.htm);


## Описание


Свойство Params возвращает коллекцию
 параметров объекта алгоритма расчёта.


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM. В алгоритме расчёта созданы и настроены
 блоки расчёта. Также в репозитории должен быть создан справочник с идентификатором
 CALENDAR, который используют приёмник/источники блока расчёта.


Добавьте ссылки на системные сборки: Algo, Metabase, Ms, Transform.
 Также добавьте ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo, CalcBlock: ICalcObject;

	    List: ICalcObjectsList;

	    CalcAlgo: ICalcAlgorithm;

	    Block: ICalcBlock;

	    i: integer;

	    Params: IMsModelParams;

	    Param: IMsModelParam;

	    Dict: IMetabaseObjectDescriptor;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("ALGORITHM");

	    // Получаем справочник

	    Dict := MB.ItemById("CALENDAR");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    // Изменим наименование алгоритма

	    Algo.Descriptor.Name := "Алгоритм (с параметрами)";

	    Params := Algo.Params;

	    // Добавим новый парамтер

	    Param := Params.Add;

	    Param.Name := "Параметр 1";

	    Param.ParamType := TsParamType.Selection;

	    // Задаем справочник, значения которого используются в качестве значений параметра

	    Param.LinkedObject := Dict;

	    Param.SelectionMode := SelectionModeEnum.SingleSelect;

	    // Сохраним метамодель

	    (Algo.MetaModel As IMetabaseObject).Save;

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Формирование списка объектов алгоритма

	    List := CalcAlgo.Items;

	    // Настройка списка объектов

	    For i := 0 To List.Count - 1 Do

	        CalcBlock := List.Item(i);

	        If CalcBlock.Type = CalcObjectType.CalcBlock Then

	            Debug.WriteLine(CalcBlock.Name);

	            Block := CalcBlock As ICalcBlock;

	            // Если алгоритм открыт на редактирование, то можем редактировать и объекты расчета

	            If CalcAlgo.IsEdited Then

	                // Добавим суффикс для всех блоков расчета алгоритма из цепочки расчета

	                Block.Name := Block.Name + "(с параметром)";

	                // Добавим по одному параметру в блок расчета

	                Param := Block.Params.Add;

	                Param.Name := "Параметр БР";

	                Param.ParamType := TsParamType.Selection;

	                Param.LinkedObject := Dict;

	                Param.SelectionMode := SelectionModeEnum.SingleSelect;

	                Block.SaveObject;

	            End If;

	        End If;

	    End For;

	    // Сохранение изменений

	    Algo.SaveObject;

	End Sub UserProc;


При выполнении примера будут изменены различные настройки алгоритма
 расчёта и блока расчёта:


	- будут изменены наименования объектов;


	- в структуру алгоритма расчёта и блоков расчёта будут добавлены
	 параметры.


См. также:


[ICalcObject](ICalcObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
