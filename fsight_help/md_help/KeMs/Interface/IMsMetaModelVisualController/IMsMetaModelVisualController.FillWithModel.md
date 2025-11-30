# IMsMetaModelVisualController.FillWithModel

IMsMetaModelVisualController.FillWithModel
-


# IMsMetaModelVisualController.FillWithModel


## Синтаксис


FillWithModel(Model: [IMsModel](../IMsModel/IMsModel.htm);

              ScenarioKeys:
 Array;

              Period:
 [IMsModelPeriod](../IMsModelPeriod/IMsModelPeriod.htm);

              LoadPeriod:
 [IMsModelPeriod](../IMsModelPeriod/IMsModelPeriod.htm);

              Problem:
 [IMsProblem](../IMsProblem/IMsProblem.htm);

              [Workbook:
 [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm)
 = Null;]

              [IncludeFact:
 Boolean = True]);


## Параметры


Model. Внутренняя модель;


ScenarioKeys. Массив ключей
 сценариев;


Period. Период загрузки данных;


LoadPeriod. Период отображения
 данных;


Problem. Задача моделирования,
 для которой выполняется загрузка;


Workbook. Внешняя рабочая книга,
 в которую требуется выгрузить результаты. Необязательный параметр;


IncludeFact. Определяет, включать
 ли данные модели по сценарию «Факт».


## Описание


Метод FillWithModel заполняет
 внутреннюю рабочую книгу данными модели по заданным сценариям.


## Комментарии


Для фильтрации данных по сценарному справочнику используйте параметр
 Problem. Он позволяет загружать
 данные только по указанной задаче, а не по всем сценариям в контейнере
 моделирования. Также используется для определения, применяется ли сценарное
 моделирование.


Если Workbook = Null,
 то внутреннюю рабочую книгу с загруженными данными возвращает свойство
 [IMsMetaModelVisualController.VariableWorkbook](IMsMetaModelVisualController.VariableWorkbook.htm)
 или свойство [IMsMetaModelVisualController.Workbook](IMsMetaModelVisualController.Workbook.htm),
 если в качестве значения параметра WorkbookType необходимо
 указывать значение [MsWorkbookType.Variable](../../Enums/MsWorkbookType.htm).


Параметр IncludeFact учитывается,
 если используется сценарное моделирование и ключ сценария «Факт»
 отсутствует в параметре ScenarioKeys.


## Пример


Для выполнения примера в репозитории должен присутствовать контейнер
 моделирования с идентификатором «MS», содержащий задачу моделирования
 с идентификатором «FILLMODEL», созданную в веб-приложении. Данная задача
 должна содержать уравнение. При расчете задачи должно использоваться несколько
 сценариев.


Добавьте ссылки на системные сборки: Metabase, Ms, Ui.


			Sub FillWithModel;

Var

    mb: IMetabase;

    MsObj: IMetabaseObjectDescriptor;

    Meta: IMsMetaModel;

    MetaVisual: IMsMetaModelVisualController;

    SimpleModel: IMsModel;

    ScArr: Array Of Integer;

    Target: IUiCommandTarget;

    pr: IMsProblem;

    Period: IMsModelPeriod;

    i: Integer;

    ChainEn: IMsCalculationChainEntries;

Begin

    mb := MetabaseClass.Active;

    // Получаем контейнер моделирования

    MsObj := mb.ItemById("MS");

    // Получаем задачу моделирования

    pr := mb.ItemByIdNamespace("FILLMODEL", MsObj.Key).Bind As IMsProblem;

    // Получаем метамодель

    Meta := pr.MetaModel;

    MetaVisual := Meta.VisualController;

    // Получаем модель

    ChainEn := Meta.CalculationChain;

    For i := 0 To ChainEn.Count - 1 Do

        If ChainEn.Item(i).Type = MsCalculationChainEntryType.Model Then

            SimpleModel := (ChainEn.Item(i) As IMsCalculationChainModel).Model;

        End If;

    End For;

    // Создаем массив ключей сценариев

    ScArr := New Integer[1];

    // Добавляем ключ первого сценария

    ScArr[0] := (MsObj.Bind As IMsModelSpace).ScenarioTree.Item(0).Key;

    Period := SimpleModel.Transform.Period;

    // Заполняем рабочую книгу по данным из модели

    MetaVisual.FillWithModel(SimpleModel, ScArr, Period, Period, pr, Null, False);

    // Открываем рабочую книгу

    Target := WinApplication.Instance.GetObjectTarget(MetaVisual.VariableWorkbook);

    Target.Execute("Object.Edit", Null);

End Sub FillWithModel;


После выполнения примера будет открыта рабочая книга, заполненная по
 данным внутренней модели без учета данных по сценарию «Факт».


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
