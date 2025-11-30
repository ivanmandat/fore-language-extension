# IMsMetaModelVisualController.FillWithTargetConstraints

IMsMetaModelVisualController.FillWithTargetConstraints
-


# IMsMetaModelVisualController.FillWithTargetConstraints


## Синтаксис


FillWithTargetConstraints(TargetEntryKey: Integer;

                          EntryKeys:
 Array;

                          Calculation:
 [IMsMethodCalculation](../IMsMethodCalculation/IMsMethodCalculation.htm);

                          [Workbook:
 [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm)
 = Null]);


## Параметры


TargetEntryKey. Ключ целевой
 функции;


EntryKeys. Массив ключей ограничений
 целевой функции;


Calculation. Параметры расчета
 модели, содержащей целевую функцию;


Workbook. Внешняя рабочая книга,
 в которую требуется выгрузить результаты.


## Описание


Метод FillWithTargetConstraints
 заполняет рабочую книгу данными ограничений целевой функции.


## Комментарии


Если Workbook = Null,
 то внутреннюю рабочую книгу с загруженными данными возвращает свойство
 [IMsMetaModelVisualController.Workbook](IMsMetaModelVisualController.Workbook.htm).
 В качестве значения параметра WorkbookType необходимо
 указывать значение [MsWorkbookType.TargetConstraints](../../Enums/MsWorkbookType.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащим целевую задачу с идентификатором
 «FILLMODEL». Для задачи обязательно должен быть задан [оптимизационный
 сценарий](../IMsTargetProblem/IMsTargetProblem.OptimisticScenario.htm) и одно или несколько ограничений целевой функции. Также в
 репозитории предполагается наличие рабочей книги с идентификатором «WBK_TARGET».


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    MsObj: IMetabaseObjectDescriptor;

    Meta: IMsMetaModel;

    MetaVisual: IMsMetaModelVisualController;

    ScArr, ConstrArr: Array Of Integer;

    pr: IMsProblem;

    i, j, TarjetKey: Integer;

    ChainEn: IMsCalculationChainEntries;

    Model: IMsModel;

    Transform: IMsFormulaTransform;

    Calc: IMsMethodCalculation;

    Wbk: IMetabaseObject;

    ScenTree: IMsScenarioTreeEntries;

    Target: IMsTargetProblem;

    Constraints: IMsTargetConstraints;

    Constr: IMsTargetConstraint;

Begin

    mb := MetabaseClass.Active;

    // Получаем контейнер моделирования

    MsObj := mb.ItemById("MS");

    // Получаем задачу моделирования

    pr := mb.ItemByIdNamespace("FILLMODEL", MsObj.Key).Bind As IMsProblem;

    // Получаем метамодель

    Meta := pr.MetaModel;

    MetaVisual := Meta.VisualController;

    ChainEn := Meta.CalculationChain;

    // Получаем ключ целевой функции

    TarjetKey := -1;

    For i := 0 To ChainEn.Count - 1 Do

        If ChainEn.Item(i).Type = MsCalculationChainEntryType.Target Then

            TarjetKey := ChainEn.Item(i).Key;

        End If;

    End For;

    // Создаем массив ключей сценариев

    ScArr := New Integer[2];

    // Добавляем ключ сценария «Факт»

    ScArr[0] := -1;

    // Добавляем ключ сценария целевой задачи

    ScenTree := (MsObj.Bind As IMsModelSpace).ScenarioTree;

    Target := pr.AdditionalDetails.Item(0) As IMsTargetProblem;

    j := Target.OptimisticScenario.InternalKey;

    ScArr[1] := ScenTree.FindByInternalKey(j).Key;

    Target := pr.AdditionalDetails.Item(0) As IMsTargetProblem;

    Constraints := Target.Constraints;

    ConstrArr := New Integer[Constraints.Count];

    For i := 0 To Constraints.Count - 1 Do

        Constr := Constraints.Item(i);

        ConstrArr[i] := Constr.Key;

    End For;

    // Получаем модель, содержащую параметры целевой функции

    Model := Target.Model;

    // Создаем параметры расчета модели

    Transform := Model.Transform;

    Calc := Transform.CreateCalculation;

    // Получаем рабочую книгу

    Wbk := mb.ItemById("WBK_TARGET").Edit;

    // Заполняем рабочую книгу данными целевой функции

    MetaVisual.FillWithTargetConstraints(TarjetKey, ConstrArr, Calc, ScArr, Wbk);

    // Сохраняем рабочую книгу

    Wbk.Save;

End Sub UserProc;


В результате выполнения примера в рабочую книгу «WBK_TARGET» будут выгружены
 данные ограничений целевой функции.


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
