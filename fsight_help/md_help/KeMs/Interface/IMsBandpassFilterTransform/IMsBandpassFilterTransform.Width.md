# IMsBandpassFilterTransform.Width

IMsBandpassFilterTransform.Width
-


# IMsBandpassFilterTransform.Width


## Синтаксис


		Width: Integer;


## Описание


Свойство Width определяет размер
 опережения/лага для метода.


## Комментарии


Значение по умолчанию зависит от календарной динамики, которая применяется
 для расчёта метода:


		 Динамика
		 Опережение/лаг


		 Годовая
		 3


		 Полугодовая
		 6


		 Квартальная
		 12


		 Месячная
		 36


		 Недельная
		 156


		 5-дневная
		 783


		 7-дневная
		 1095


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором KONT_MODEL. В контейнере имеется три переменных,
 которые в дальнейшем будут использоваться при расчёте модели. Идентификаторы
 переменных: VAR_1, VAR_2, VAR_3.


Добавьте ссылки на системные сборки: Cubes, Metabase, Ms.


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

		    Varr2 := MB.ItemByIdNamespace("Var_2", KM.Key).Bind As IVariableStub;

		    Trans.Series.Add(Varr2);

		    //Переменная для модельного
		 ряда

		    Varr3 := MB.ItemByIdNamespace("Var_3", KM.Key).Bind As IVariableStub;

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

		    //Веса

		    BPFilter.Weights := Varr2 As IMsVariableStub;

		    //Модельный ряд

		    BPFilter.Fitted := Varr3 As IMsVariableStub;

		    MObj.Save;

		End Sub UserProc;


В результате выполнения примера в контейнере моделирования будет создана
 модель, использующая для расчета фильтр Бакстера-Кинга. В модель будет
 добавлена моделируемая переменная и переменные, в которые будут выгружаться
 значения весов и модельного ряда. Так же будут установлены значения границ
 периода сезонности и размер опережения/лага для модели.


См. также:


[IMsBandpassFilterTransform](IMsBandpassFilterTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
