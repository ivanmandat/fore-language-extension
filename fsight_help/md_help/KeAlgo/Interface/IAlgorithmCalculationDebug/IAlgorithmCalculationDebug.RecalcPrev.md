# IAlgorithmCalculationDebug.RecalcPrev

IAlgorithmCalculationDebug.RecalcPrev
-


# IAlgorithmCalculationDebug.RecalcPrev


## Синтаксис


RecalcPrev;


## Описание


Метод RecalcPrev осуществляет
 повторный расчёт предыдущего рассчитанного объекта алгоритма расчёта.


## Комментарии


Для получения предыдущего рассчитанного объекта алгоритма расчёта используйте
 свойство [IAlgorithmCalculationDebug.PrevObject](IAlgorithmCalculationDebug.PrevObject.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM. В алгоритме расчёта должны содержаться
 хотя бы три объекта для расчёта.


Добавьте ссылки на системные сборки: Algo, Metabase. Также добавьте
 ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo, Obj: ICalcObject;

	    ObjList, CloneList: ICalcObjectsList;

	    CalcAlgo: ICalcAlgorithm;

	    CalcDebug: IAlgorithmCalculationDebug;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Получим список объектов алгоритма расчёта

	    ObjList := CalcAlgo.Items;

	    // Скопируем список объектов алгоритма расчёта

	    CloneList := ObjList.Clone;

	    // Удалим исключенные из расчёта объекты перед отладкой

	    For i := CloneList.Count - 1 To 0 Step - 1 Do

	        If Not CalcAlgo.Included(CloneList.Item(i)) Then

	            CloneList.Remove(CloneList.Item(i));

	        End If;

	    End For;

	    // Выведем в консоль количество включенных объектов в расчёт алгоритма и их наименование

	    Debug.WriteLine("Количество объектов: " + CloneList.Count.ToString);

	    For i := 0 To CloneList.Count - 1 Do

	        Obj := CloneList.Item(i);

	        Debug.WriteLine("- " + Obj.Name);

	    End For;

	    // Выполним отладку расчёта алгоритма

	    CalcDebug := CalcAlgo.Debug(CloneList);

	    i := 0;

	    While CloneList.Count > 0 Do

	        // Рассчитаем следующий объект

	        CalcDebug.NextStep;

	        // Выполним повторный расчёт второго объекта

	        If i = 1 Then

	            If CalcDebug.PrevObject <> Null Then

	                // Выведем в консоль наименование повторно рассчитанного объекта

	                Debug.WriteLine("Повторный расчёт: " + CalcDebug.PrevObject.Name);

	                CalcDebug.RecalcPrev;

	            End If;

	        End If;

	        i:=i+1;

	    End While;

	    // Завершим отладку расчёта алгоритма

	    CalcDebug.Stop;

	End Sub UserProc;


В результате выполнения примера будет произведена отладка расчёта алгоритма,
 в котором будет выполнен повторный расчёт второго объекта. В консоль будет
 выведено количество рассчитанных объектов и их наименование, а также наименование
 повторно рассчитанного объекта, например:


Количество объектов: 3


- Блок контроля


- Блок расчёта


- Блок агрегации


Повторный расчёт: Блок расчёта


См. также:


[IAlgorithmCalculationDebug](IAlgorithmCalculationDebug.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
