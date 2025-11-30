# IMsMetaModelVisualController.FillChain

IMsMetaModelVisualController.FillChain
-


# IMsMetaModelVisualController.FillChain


## Синтаксис


FillChain(ScenarioKeys: Array;

          Period: [IMsModelPeriod](../IMsModelPeriod/IMsModelPeriod.htm)

          Problem: [IMsProblem](../IMsProblem/IMsProblem.htm);

          [Workbook:
 [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm)
 = Null]);


## Параметры


ScenarioKeys. Массив ключей
 сценариев;


Period. Период загрузки данных;


Problem. Задача моделирования,
 для которой выполняется загрузка;


Workbook. Внешняя рабочая книга,
 в которую требуется выгрузить результаты. Необязательный параметр.


## Описание


Метод FillChain заполняет внутреннюю
 рабочую книгу данными цепочки расчета метамодели по заданным сценариям.


## Комментарии


Для фильтрации данных по сценарному справочнику используйте параметр
 Problem. Он позволяет загружать
 данные только по указанной задаче, а не по всем сценариям в контейнере
 моделирования. Также используется для определения, применяется ли сценарное
 моделирование.


Если Workbook = Null,
 то внутреннюю рабочую книгу с загруженными данными возвращает свойство
 [IMsMetaModelVisualController.ChainWorkbook](IMsMetaModelVisualController.ChainWorkbook.htm)
 или свойство [IMsMetaModelVisualController.Workbook](IMsMetaModelVisualController.Workbook.htm),
 если в качестве значения параметра WorkbookType необходимо
 указывать значение [MsWorkbookType.Chain](../../Enums/MsWorkbookType.htm).


## Пример


Для выполнения примера в репозитории должен присутствовать контейнер
 моделирования с идентификатором «MS», содержащий задачу моделирования
 с идентификатором «FILLMODEL». Данная задача должна содержать внутреннюю
 метамодель, содержащую внутреннюю БД временных рядов и модель.


Добавьте ссылки на системные сборки «Metabase», «Ms», «Ui».


			Sub FillChain;

Var

    mb: IMetabase;

    MsObj: IMetabaseObjectDescriptor;

    Meta: IMsMetaModel;

    MetaVisual: IMsMetaModelVisualController;

    ScArr: Array Of Integer;

    Target: IUiCommandTarget;

    pr: IMsProblem;

    ProblDet: IMsProblemDetails;

Begin

    mb := MetabaseClass.Active;

    // Получаем контейнер моделирования

    MsObj := mb.ItemById("MS");

    // Получаем задачу моделирования

    pr := mb.ItemByIdNamespace("FILLMODEL", MsObj.Key).Bind As IMsProblem;

    // Получаем метамодель

    Meta := pr.MetaModel;

    MetaVisual := Meta.VisualController;

    // Создаем массив ключей сценариев

    ScArr := New Integer[1];

    // Добавляем ключ сценария «Факт»

    ScArr[0] := -1;

    // Задаем период получения данных

    ProblDet := pr.Details As IMsProblemDetails;

    // Заполняем рабочую книгу по данным из модели

    MetaVisual.FillChain(ScArr, ProblDet.Period, pr);

    // Открываем рабочую книгу

    Target := WinApplication.Instance.GetObjectTarget(MetaVisual.ChainWorkbook);

    Target.Execute("Object.Edit", Null);

End Sub FillChain;


После выполнения примера будет открыта рабочая книга, заполненная по
 данным цепочки расчёта метамодели.


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
