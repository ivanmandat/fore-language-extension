# ICalcObject.FillSelSetFromParams

ICalcObject.FillSelSetFromParams
-


# ICalcObject.FillSelSetFromParams


## Синтаксис


FillSelSetFromParams(SelSet: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm),
 StubKey: Integer): [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Параметры


SelSet. Отметка измерения;


StubKey. Ключ источника данных.


## Описание


Метод FillSelSetFromParams передает
 отметку измерения, которое используется в качестве параметра алгоритма
 расчёта, на панель параметров.


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM. В списке параметров алгоритма создан
 минимум один параметр. Также в алгоритме имеется блок расчёта.


Добавьте ссылки на системные сборки: Algo, Cubes, Dimensions, Metabase,
 Ms, Transform. Также добавьте ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo: ICalcObject;

	    CalcAlgo: ICalcAlgorithm;

	    CalcBlock: ICalcBlock;

	    Stub: IVariableStub;

	    SelSet: IDimSelectionSet;

	    Param: IMsModelParam;

	    CalcBlockParam: IMsModelParam;

	    AlgParamTxt: String;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Получим блок расчёта

	    CalcBlock := CalcAlgo.Items.Item(0) As ICalcBlock;

	    // Получим параметр и источник

	    Param := CalcAlgo.Params.Item(0);

	    Stub := Param.LinkedStub;

	    SelSet := CalcAlgo.SelControl.GetStubSel(Stub);

	    // Установим значение по умолчанию на панель параметров

	    CalcAlgo.FillSelSetFromParams(SelSet, Stub.Key);

	    CalcAlgo.SaveObject;

	    // Проверим, используется ли параметр алгоритма в блоке расчета

	    AlgParamTxt := CalcBlock.FindParamUses(Param);

	    If AlgParamTxt.IsEmpty Then

	        Debug.WriteLine("Параметр алгоритма не используется в блоке расчета и будет создан");

	        CalcBlockParam := CalcBlock.Params.Add;

	        CalcBlockParam.Name := "Параметр из алгоритма";

	        CalcBlockParam.ParamType := TsParamType.Selection;

	        CalcBlockParam.LinkedObject := Param.LinkedObject;

	        CalcBlockParam.LinkedStub := Param.LinkedStub;

	        CalcBlock.SaveObject;

	    Else

	        Debug.WriteLine(AlgParamTxt);

	    End If;

	End Sub UserProc;


При выполнении примера отметка измерения источника у параметра будет
 установлена на панель параметров. Если параметр алгоритма не используется
 в блоке расчёта, то будет создан новый параметр с настройками из параметра
 алгоритма. Если используется, то будет выведена информация о месте использования.


См. также:


[ICalcObject](ICalcObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
