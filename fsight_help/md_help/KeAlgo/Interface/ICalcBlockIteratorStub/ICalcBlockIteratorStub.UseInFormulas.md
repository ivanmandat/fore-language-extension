# ICalcBlockIteratorStub.UseInFormulas

ICalcBlockIteratorStub.UseInFormulas
-


# ICalcBlockIteratorStub.UseInFormulas


## Синтаксис


UseInFormulas: Boolean;


## Описание


Свойство UseInFormulas возвращает
 признак использования источника данных в формулах.


## Комментарии


Допустимые значения:


	- True. Источник данных
	 используется в формулах;


	- False. Источник данных
	 не используется в формулах.


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM. В алгоритме создан и настроен блок
 расчёта, в котором используется несколько источников данных.


Добавьте ссылки на системные сборки: Algo, Cubes, Metabase. Также добавьте
 ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo: ICalcObject;

	    CalcAlgo: ICalcAlgorithm;

	    Block: ICalcBlock;

	    IteratorModel: ICalcBlockIteratorModel;

	    IteratorStubDel: ICalcBlockIteratorStub;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Получим блок расчёта

	    Block := CalcAlgo.Items.Item(0) As ICalcBlock;

	    IteratorModel := Block.EditIteratorModel;

	    // Получим источник

	    IteratorStubDel := IteratorModel.Stubs.Item(0);

	    // Имя источника

	    Debug.WriteLine("Проверка на использование в формулах источника: " + IteratorStubDel.Stub.Name);

	    // Проверка используется ли куб в формулах расчета

	    If IteratorStubDel.UseInFormulas = False Then

	        // Если не используется - удаляем

	        Block.StubsIn.Remove(IteratorStubDel.Stub);

	    End If;

	    // Сохраним изменения в блоке расчёта

	    Block.SaveObject;

	End Sub UserProc;


При выполнении примера будет осуществлена проверка использования первого
 источника в формулах блока расчёта. Если источник не используется в формулах,
 то он будет удалён из блока расчёта.


См. также:


[ICalcBlockIteratorStub](ICalcBlockIteratorStub.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
