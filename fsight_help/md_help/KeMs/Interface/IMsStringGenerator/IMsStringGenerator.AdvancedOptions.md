# IMsStringGenerator.AdvancedOptions

IMsStringGenerator.AdvancedOptions
-


# IMsStringGenerator.AdvancedOptions


## Синтаксис


AdvancedOptions: [MsStringGeneratorOptions](../../Enums/MsStringGeneratorOptions.htm);


## Описание


Свойство AdvancedOptions определяет
 дополнительные настройки, используемые для генерации наименований моделей.


## Комментарии


Если установить AdvancedOptions
 равным MsStringGeneratorOptions.ExpandArimaName
 и задать свойство [IMsStringGenerator.Coord](IMsStringGenerator.Coord.htm),
 то можно получить идентифицированное уравнение для модели ARIMA.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором «CONT_MODEL». В контейнере присутствует
 модель ARIMA с идентификатором «MODEL».


Также необходимо добавить ссылки на системные сборки «Metabase», «Ms».


			Sub UserProc;

Var

    MB: IMetabase;

    Model: IMsModel;

    Transform: IMsFormulaTransform;

    VarTrans: IMsFormulaTransformVariable;

    Tree: IMsFormulaTransformSlicesTree;

    Slice: IMsFormulaTransformSlice;

    Selector: IMsFormulaTransformSelector;

    Formula: IMsFormula;

    Arima: IMsArimaTransform;

    Coord: IMsFormulaTransformCoord;

    Calc: IMsModelCalculation;

    StrGen: IMsModelStringGenerator;

Begin

    MB := MetabaseClass.Active;

    Model := MB.ItemByIdNamespace("MODEL", MB.ItemById("CONT_MODEL").Key).Bind As IMsModel;

    Transform := Model.Transform;

    VarTrans := Transform.Outputs.Item(0);

    Tree := VarTrans.SlicesTree(VarTrans);

    Slice := Tree.CreateSlice(1);

    Selector := Transform.CreateSelector;

    Selector.Slice := Slice;

    Formula := Transform.Transform(Selector);

    Arima := Formula.Method As IMsArimaTransform;

    Coord := Transform.CreateCoord(VarTrans);

    Calc := Model.CreateCalculation;

    Calc.Period.IdentificationStartDate := DateTime.ComposeDay(2000, 01, 01);

    Calc.Period.IdentificationEndDate := DateTime.ComposeDay(2005, 12, 31);

    Calc.Period.ForecastStartDate := DateTime.ComposeDay(2006, 01, 01);

    Calc.Period.ForecastEndDate := DateTime.ComposeDay(2010, 12, 31);

    Arima.Execute(Calc As IMsMethodCalculation, Coord);

    StrGen := Model.CreateStringGenerator;

    StrGen.AdvancedOptions := MsStringGeneratorOptions.ExpandArimaName;

    StrGen.Coord := Coord;

    StrGen.ShowEstimatedCoeffs := True;

    Debug.WriteLine("Идентифицированное уравнение:" + StrGen.Execute);

End Sub UserProc;


После выполнения примера в окно консоли будет выведено идентифицированное
 уравнение модели ARIMA.


См. также:


[IMsStringGenerator](IMsStringGenerator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
