# IMsMetaModelVisualController.FillWithTargetProblem

IMsMetaModelVisualController.FillWithTargetProblem
-


# IMsMetaModelVisualController.FillWithTargetProblem


## Синтаксис


FillWithTargetProblem(TargetEntryKey: Integer

                      Calculation:
 [IMsMethodCalculation](../IMsMethodCalculation/IMsMethodCalculation.htm);

                      ScenarioKeys:
 Array;

                      [Workbook:
 [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm)
 = Null]);


## Параметры


TargetEntryKey. Ключ целевой
 функции;


Calculation. Параметры расчета
 модели, содержащей целевую функцию;


ScenarioKeys. Массив ключей
 сценариев, по которым требуется получить данные;


Workbook. Внешняя рабочая книга,
 в которую требуется выгрузить результаты.


## Описание


Метод FillWithTargetProblem
 заполняет рабочую книгу данными целевой функции по заданным сценариям.


## Комментарии


Для получения данных по сценарию «Факт» добавьте в массив ScenarioKeys
 значение «-1».


Если Workbook = Null,
 то внутреннюю рабочую книгу с загруженными данными возвращает свойство
 [IMsMetaModelVisualController.Workbook](IMsMetaModelVisualController.Workbook.htm).
 В качестве значения параметра WorkbookType необходимо
 указывать значение [MsWorkbookType.TargetProblem](../../Enums/MsWorkbookType.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащим целевую задачу с идентификатором
 «FILLMODEL». Для задачи обязательно должен быть задан [оптимизационный
 сценарий](../IMsTargetProblem/IMsTargetProblem.OptimisticScenario.htm). Также в репозитории предполагается наличие рабочей книги
 с идентификатором «WBK_TARGET».


Добавьте ссылки на системные сборки: Metabase, Ms, Ui.


			Sub UserProc;

Var

    mb: IMetabase;

    MsObj: IMetabaseObjectDescriptor;

    Meta: IMsMetaModel;

    MetaVisual: IMsMetaModelVisualController;

    ScArr: Array Of Integer;

    pr: IMsProblem;

    i, j, TarjetKey: Integer;

    ChainEn: IMsCalculationChainEntries;

    Model: IMsModel;

    Transform: IMsFormulaTransform;

    Calc: IMsMethodCalculation;

    ScenTree: IMsScenarioTreeEntries;

    Target: IMsTargetProblem;

    Wbk: IMetabaseObject;

    UiTarget: IUiCommandTarget;

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

    // Получаем модель, содержащую параметры целевой функции

    Model := Target.Model;

    // Создаем параметры расчета модели

    Transform := Model.Transform;

    Calc := Transform.CreateCalculation;

    // Заполняем рабочую книгу данными целевой функции

    MetaVisual.FillWithTargetProblem(TarjetKey, Calc, ScArr, Wbk);

    // Получаем рабочую книгу

    Wbk := MetaVisual.Workbook(MsWorkbookType.TargetProblem);

    // Открываем рабочую книгу

    UiTarget := WinApplication.Instance.GetObjectTarget(Wbk);

    UiTarget.Execute("Object.Edit", Null);

End Sub UserProc;


В результате выполнения примера будет открыта рабочая книга, заполненная
 целевой функцией по заданным сценариям.


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
