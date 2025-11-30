# ICalcObjectsList.FindByMetaModelKey

ICalcObjectsList.FindByMetaModelKey
-


# ICalcObjectsList.FindByMetaModelKey


## Синтаксис


FindByMetaModelKey(Key: Integer): [ICalcObject](../ICalcObject/ICalcObject.htm);


## Параметры


Key.
 Ключ метамодели.


## Описание


Метод FindByMetaModelKey осуществляет
 поиск объекта в коллекции по ключу метамодели.


## Пример


Для выполнения примера предполагается наличие в репозитории двух алгоритмов
 расчёта с идентификаторами ALGORITHM1 и ALGORITHM2. Алгоритмы построены
 на базе существующих в репозитории блоков.


Добавьте ссылки на системные сборки: Algo, Metabase, Ms. Также добавьте
 ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObjAlg1, MObjAlg2: IMetabaseObjectDescriptor;

	    Algo1, Algo2: ICalcObject;

	    FirstCalcAlgo, SecondCalcAlgo: ICalcAlgorithm;

	    ListAlg1, ListAlg2: ICalcObjectsList;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим первый алгоритм расчёта

	    MObjAlg1 := MB.ItemById("ALGORITHM1");

	    Algo1 := CalcObjectFactory.CreateCalcObject(MObjAlg1, True);

	    FirstCalcAlgo := Algo1 As ICalcAlgorithm;

	    // Получим второй алгоритм расчёта

	    MObjAlg2 := MB.ItemById("ALGORITHM2");

	    Algo2 := CalcObjectFactory.CreateCalcObject(MObjAlg2, True);

	    SecondCalcAlgo := Algo2 As ICalcAlgorithm;

	    // Списки объектов первого и второго алгоритмов

	    ListAlg1 := FirstCalcAlgo.Items;

	    ListAlg2 := SecondCalcAlgo.Items;

	    // Проверим, совпадают ли цепочки расчёта у алгоритмов

	    If CalculationChainSeqCompare(ListAlg1, ListAlg2) Then

	        Debug.WriteLine("Последовательность цепочек расчёта равна");

	    Else

	        // Если не совпадает, то перенесём недостающие блоки из первого алгоритма во второй и обратно

	        Debug.WriteLine("Последовательность цепочек расчёта не равна");

	        AddBlocks(ListAlg1, ListAlg2);

	        FirstCalcAlgo.SaveObject;

	        SecondCalcAlgo.SaveObject;

	    End If;

	End Sub UserProc;


	Private Function CalculationChainSeqCompare(ListAlg1: ICalcObjectsList; ListAlg2: ICalcObjectsList): Boolean;

	Var

	    IndexCalcAlg1, IndexCalcAlg2: Integer;

	    CalcBlock, FindedCalcBlock: ICalcObject;

	    i: Integer;

	Begin

	    For i := 0 To ListAlg1.Count - 1 Do

	        CalcBlock := ListAlg1.Item(i);

	        // Поиск блока по ключу метамодели

	        FindedCalcBlock := ListAlg2.FindByMetaModelKey(CalcBlock.MetaModel.Key);

	        // Если блок по ключу метамодели не найден, то возвращаем False

	        If FindedCalcBlock = Null Then

	            Return False;

	        Else

	            // Если блок найден, то сравниваем настройки

	            If Not IsSameCalcBlocks(CalcBlock, FindedCalcBlock) Then

	                Return False;

	            Else

	                // Проверяем порядок вставки блоков

	                IndexCalcAlg1 := ListAlg1.IndexOf(CalcBlock);

	                IndexCalcAlg2 := ListAlg2.IndexOf(FindedCalcBlock);

	                If IndexCalcAlg1 <> IndexCalcAlg2 Then

	                    Return False;

	                End If;

	            End If;

	        End If;

	    End For;

	    // Если все параметры блоков совпадают, то возвращаем True

	    Return True;

	End Function CalculationChainSeqCompare;


	Private Function IsSameCalcBlocks(block1: ICalcOBject; block2: ICalcObject): Boolean;

	Begin

	    If (block1.Key = block2.Key) And (block1.Id = block2.Id) Then

	        Return True;

	    Else

	        Return False;

	    End If;

	End Function IsSameCalcBlocks;


	Private Sub AddBlocks(ListAlg1: ICalcObjectsList; ListAlg2: ICalcObjectsList);

	Var

	    CalcBlock: ICalcObject;

	    i: Integer;

	Begin

	    // Синхронизация блоков во втором алгоритме относительно первого

	    For i := 0 To ListAlg1.Count - 1 Do

	        CalcBlock := ListAlg1.Item(i);

	        // Если блок отсутствует, то добавляем его

	        If Not ListAlg2.IsContain(CalcBlock) Then

	            ListAlg2.Add(CalcBlock);

	        End If;

	    End For;

	    // Синхронизация блоков в первом алгоритме относительно второго

	    For i := 0 To ListAlg2.Count - 1 Do

	        CalcBlock := ListAlg2.Item(i);

	        // Если блок отсутствует, то добавляем его

	        If Not ListAlg1.IsContain(CalcBlock) Then

	            ListAlg1.Add(CalcBlock);

	        End If;

	    End For;

	End Sub AddBlocks;


При выполнении примера будет осуществлено сравнение цепочек объектов
 у двух алгоритмов расчёта. Если цепочки отличаются, то соответствующие
 объекты будут добавлены в соответствующий алгоритм расчёта.


См. также:


[ICalcObjectsList](ICalcObjectsList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
