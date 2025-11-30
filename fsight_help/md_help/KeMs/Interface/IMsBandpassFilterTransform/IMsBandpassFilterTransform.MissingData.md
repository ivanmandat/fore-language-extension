# IMsBandpassFilterTransform.MissingData

IMsBandpassFilterTransform.MissingData
-


# IMsBandpassFilterTransform.MissingData


## Синтаксис


		MissingData: [IMissingData](StatLib.chm::/Interface/IMissingData/IMissingData.htm);


## Описание


Свойство MissingData возвращает
 параметры обработки пропусков исходного ряда.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором KONT_MODEL. В контейнере имеется три переменных,
 которые в дальнейшем будут использоваться при расчёте модели.


Добавьте ссылки на системные сборки: Metabase, Ms, Stat.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    KM: IMetabaseObjectDescriptor;

		    CrInf: IMetabaseObjectCreateInfo;

		    MObj: IMetabaseObject;

		    Model: IMsModel;

		    Trans: IMsFormulaTransform;

		    Varr1, Varr2, Varr3: IVariableStub;

		    VarTrans: IMsFormulaTransformVariable;

		    Tree: IMsFormulaTransformSlicesTree;

		    Slice: IMsFormulaTransformSlice;

		    Selector: IMsFormulaTransformSelector;

		    Formula: IMsFormula;

		    BPFilter: IMsBandpassFilterTransform;

		    MData: IMissingData;

		    Info: IMsFormulaTermInfo;

		Begin

		    MB := MetabaseClass.Active;

		    KM := Mb.ItemById("KONT_MODEL");

		    CrInf := Mb.CreateCreateInfo;

		    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

		    CrInf.Id := "New_BPFilter";

		    CrInf.Name := "New_BPFilter";

		    CrInf.Parent := KM;

		    MObj := MB.CreateObject(CrInf).Edit;

		    Model := MObj As IMsModel;

		    Trans := Model.Transform;

		    //Моделируемая

		    Varr1 := MB.ItemByIdNamespace("Var_1", KM.Key).Bind As IVariableStub;

		    VarTrans := Trans.Outputs.Add(Varr1);

		    //Переменная для весов

		    Varr2 := MB.ItemByIdNamespace("temp_Var2", KM.Key).Bind As IVariableStub;

		    Trans.Series.Add(Varr2);

		    //Переменная для модельного ряда

		    Varr3 := MB.ItemByIdNamespace("temp_Var3", KM.Key).Bind As IVariableStub;

		    Trans.Series.Add(Varr3);

		    Tree := VarTrans.SlicesTree(VarTrans);

		    Slice := Tree.CreateSlice(1);

		    Selector := Model.Transform.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Model.Transform.Transform(Selector);

		    Formula.Kind := MsFormulaKind.BandpassFilter;

		    BPFilter := Formula.Method As IMsBandpassFilterTransform;

		    BPFilter.Width := 2;

		    BPFilter.FrequencyLow := 1;

		    BPFilter.FrequencyHigh := 10;

		    //Порядок обработки пропусков

		    MData := BPFilter.MissingData;

		    MData.Method := MissingDataMethod.NPointsAverage;

		    MData.MethodParameter := 7;

		    Info := Trans.CreateTermInfo;

		    //Веса

		    Info.Slice := Trans.Series.Item(0).Slices.Add(Null);

		    BPFilter.WeightsTerm := Info;

		    //Модельный ряд

		    Info.Slice := Trans.Series.Item(1).Slices.Add(Null);

		    BPFilter.FittedTerm := Info;

		    MObj.Save;

		End Sub UserProc;


В результате выполнения примера в контейнере моделирования будет создана
 модель, использующая для расчёта фильтр Бакстера-Кинга. В модель будет
 добавлена моделируемая переменная и переменные, в которые будут выгружаться
 значения весов и модельного ряда. Так же будут установлены значения частот
 отсечения и размер окна для модели. В качестве метода обработки пропусков
 будет выбран метод среднего по N
 соседним точкам. Значение будет рассчитываться по семи соседним точкам.


См. также:


[IMsBandpassFilterTransform](IMsBandpassFilterTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
