# IMsMetaModel.GenerateChain

IMsMetaModel.GenerateChain
-


# IMsMetaModel.GenerateChain


## Синтаксис


GenerateChain(Serie: [ILanerCalculateSerie](Laner.chm::/Interface/ILanerCalculateSerie/ILanerCalculateSerie.htm));


## Параметры


Serie. Вычислимый ряд рабочей
 книги.


## Описание


Метод GenerateChain генерирует
 цепочку расчета для метамодели.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента TabSheetBox, компонента
 Memo с наименованием Memo1 и компонента UiErAnalyzer с наименованием UiErAnalyzer1,
 являющегося источником данных для TabSheetBox. В UiErAnalyzer1 должна
 быть загружена рабочая книга базы данных временных рядов, в которой содержится
 более одного ряда данных с годовой динамикой. В данной базе должны присутствовать
 обязательные атрибуты COUNTRY и INDICATOR, являющиеся ссылками на справочник.


Пример будет выполняться при нажатии на кнопку.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Laner: ILaner;

    UsingSerie, UsingSerie2: ILanerSerie;

    NewSerie: ILanerCalculateSerie;

    Str: String;

    Trasss: IFormulaTransformModel;

    ms: IMsFormulaTransform;

    TransformVar: IMsFormulaTransformVariable;

    Coord: IMsFormulaTransformCoord;

    Slice: IMsFormulaTransformSlice;

    selector: IMsFormulaTransformSelector;

    Formula: IMsFormula;

    Det: IMsDeterministicTransform;

    Term1, Term2: IMsFormulaTerm;

    ActiveMetabase: IMetabase;

    ci: IMetabaseObjectCreateInfo;

    DescTrans, Obj: IMetabaseObjectDescriptor;

    Ruby: IRubricator;

    MetaModel: IMsMetaModel;

    ModelMBObj: IMetabaseObject;

    MetaAt: ILanerMetaAttributeValueList;

Begin

    Laner := UiErAnalyzer1.ErAnalyzer.Laner;

    Laner.BeginUpdate;

    UsingSerie := Laner.Series.Item(0) As ILanerSerie;

    UsingSerie2 := Laner.Series.Item(1) As ILanerSerie;

    Str := "Summ_(" + UsingSerie.Name + " , " + UsingSerie2.Name + ")";

    NewSerie := Laner.Series.AddCalculateSerie(Str);

    Trasss := NewSerie.Transform;

    Trasss.AddInputVariable(UsingSerie.Stub);

    Trasss.AddInputVariable(UsingSerie2.Stub);

    ms := Trasss.Transform As IMsFormulaTransform;

    TransformVar := ms.Outputs.Item(0);

    Coord := ms.CreateCoord(TransformVar);

    Slice := TransformVar.Slices.Add(Null);

    Selector := ms.CreateSelector;

    Selector.Slice := Slice;

    Formula := ms.Transform(Selector);

    Formula.Kind := MsFormulaKind.Deterministic;

    Formula.Level := DimCalendarLevel.Year;

    Det := Formula.Method As IMsDeterministicTransform;

    TransformVar := ms.Inputs.Add(UsingSerie.Stub);

    Slice := TransformVar.Slices.Add(Null);

    TransformVar := ms.Inputs.Add(UsingSerie.Stub);

    Slice := TransformVar.Slices.Add(Null);

    Term1 := Det.Operands.Add(Slice);

    TransformVar := ms.Inputs.Add(UsingSerie2.Stub);

    Slice := TransformVar.Slices.Add(Null);

    Term2 := Det.Operands.Add(Slice);

    Det.Expression.AsString := Term1.TermToInnerText + " + " + Term2.TermToInnerText;

    NewSerie.Calculate;

    MetaAt := NewSerie.MetaAttributeValueList;

    MetaAt.FindById("COUNTRY").Value := 512;

    MetaAt.FindById("INDICATOR").Value := 1009;

    Laner.EndUpdate;

    ActiveMetabase := MetabaseClass.Active;

    Ruby := Laner.RubricatorInstance.Rubricator;

    DescTrans := Ruby.ModelSpace;

    ci := ActiveMetabase.CreateCreateInfo;

    ci.ClassId := MetabaseObjectClass.KE_CLASS_MSMETAMODEL;

    ci.Parent := DescTrans;

    ci.Name := NewSerie.Name;

    Obj := ActiveMetabase.CreateObject(ci);

    ModelMBObj := Obj.Edit;

    MetaModel := ModelMBObj As IMsMetaModel;

    MetaModel.GenerateChain(NewSerie);

    ModelMBObj.Save;

    Memo1.Lines.Add("Идентификатор метамодели: " + ModelMBObj.Id);

End Sub Button1OnClick;


После выполнения примера, будет добавлен новый вычисляемый ряд, представляющий
 собой сумму данных первых двух рядов. Будет создана метамодель, цепочка
 расчета которой будет сгенерирована на основе данного вычисляемого ряда.
 Идентификатор метамодели будет выведен в компонент Memo1.


См. также:


[IMsMetaModel](IMsMetaModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
