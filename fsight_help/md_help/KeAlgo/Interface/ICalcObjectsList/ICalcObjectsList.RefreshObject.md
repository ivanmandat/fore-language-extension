# ICalcObjectsList.RefreshObject

ICalcObjectsList.RefreshObject
-


# ICalcObjectsList.RefreshObject


## Синтаксис


RefreshObject(CalcObject: [ICalcObject](../ICalcObject/ICalcObject.htm));


## Параметры


CalcObject.
 Объект алгоритма расчёта.


## Описание


Метод RefreshObject обновляет
 указанный объект в коллекции.


## Комментарии


Обновление объекта в коллекции может потребоваться, если в алгоритме
 используется существующий блок из репозитория и происходит изменение настроек
 этого блока вне алгоритма расчёта.


## Пример


Для выполнения примера предполагается наличие в репозитории двух алгоритмов
 расчёта с идентификаторами ALGORITHM1 и ALGORITHM2. Также в репозитории
 создан блок расчёта с идентификатором CALC_BLOCK. Данный блок используется
 в алгоритмах.


Добавьте ссылки на системные сборки: Algo, Metabase, Ms. Также добавьте
 ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObjAlg1, MObjAlg2, MObjCalcBlock: IMetabaseObjectDescriptor;

	    Algo1, Algo2, CalcObj: ICalcObject;

	    FirstCalcAlgo, SecondCalcAlgo: ICalcAlgorithm;

	    ListAlg1, ListAlg2: ICalcObjectsList;

	    CalcBlock: ICalcBlock;

	    Index: Integer;

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

	    // Отредактируем один общий блок и обновим его в алгоритмах, чтобы изменения применились

	    MObjCalcBlock := MB.ItemById("CALC_BLOCK");

	    CalcObj := CalcObjectFactory.CreateCalcObject(MObjCalcBlock, True);

	    CalcBlock := CalcObj As ICalcBlock;

	    // Меняем наименование

	    CalcBlock.Name := "Блок расчёта (обновлён)";

	    // Обновляем блок внутри алгоритмов расчёта

	    RefreshCalcObjInAlg(FirstCalcAlgo, CalcBlock);

	    RefreshCalcObjInAlg(SecondCalcAlgo, CalcBlock);

	    // Проверяем применились ли изменения

	    ListAlg1 := FirstCalcAlgo.Items;

	    ListAlg2 := SecondCalcAlgo.Items;

	    Index := ListAlg1.IndexOf(CalcBlock);

	    Debug.WriteLine("Наименование блока расчета в первом алгоритме: " + ListAlg1.Item(Index).Name);

	    Index := ListAlg2.IndexOf(CalcBlock);

	    Debug.WriteLine("Наименование блока расчета во втором алгоритме: " + ListAlg2.Item(Index).Name);

	    // Сохраним алгоритмы

	    FirstCalcAlgo.SaveObject;

	    SecondCalcAlgo.SaveObject;

	End Sub UserProc;


	Private Sub RefreshCalcObjInAlg(Algo: ICalcAlgorithm; CalcObj: ICalcObject);

	Var

	    ListAlg: ICalcObjectsList;

	Begin

	    ListAlg := Algo.Items;

	    // Если блок имеется среди объектов алгоритма, то обновляем его

	    If ListAlg.IsContain(CalcObj) Then

	        ListAlg.RefreshObject(CalcObj);

	    End If;

	End Sub RefreshCalcObjInAlg;


При выполнении примера будет осуществлено сравнение цепочек объектов
 у двух алгоритмов расчёта. Если цепочки отличаются, то необходимые объекты
 будут добавлены в соответствующие алгоритмы расчёта.


См. также:


[ICalcObjectsList](ICalcObjectsList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
