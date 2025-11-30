# IMsMetaModelVisualController.FillWithVariables

IMsMetaModelVisualController.FillWithVariables
-


# IMsMetaModelVisualController.FillWithVariables


## Синтаксис


FillWithVariables(EntryKeys: Array;

                  ScenarioKeys:
 Array;

                  Period:
 [IMsModelPeriod](../IMsModelPeriod/IMsModelPeriod.htm)

                  Problem:
 [IMsProblem](../IMsProblem/IMsProblem.htm);

                  [TargetEntryKey:
 Integer = 1;]

                  [SortByVariables:
 Boolean = False;]

                  [Workbook:
 [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm)
 = Null]);


## Параметры


EntryKeys. Массив ключей переменных;


ScenarioKeys. Массив ключей
 сценариев;


Period. Период загрузки данных;


Problem. Задача моделирования,
 для которой выполняется загрузка;


TargetEntryKey. Ключ целевой
 функции;


SortByVariables. Определяет,
 сортировать ли переменные;


Workbook. Внешняя рабочая книга,
 в которую требуется выгрузить результаты. Необязательный параметр.


## Описание


Метод FillWithVariables заполняет
 внутреннюю рабочую книгу данными указанных переменных по заданным сценариям.


## Комментарии


Для фильтрации данных по сценарному справочнику используйте параметр
 Problem. Он позволяет загружать
 данные только по указанной задаче, а не по всем сценариям в контейнере
 моделирования. Также используется для определения, применяется ли сценарное
 моделирование.


Параметр TargetEntryKey используется
 для получения данных управляющих переменных целевой функции. Если указано
 значение «-1», то выполняется получение данных обычных переменных.


Допустимые значения параметра SortByVariables:


	- True. Переменные сортируются;


	- False. Значение по умолчанию.
	 Переменные не сортируются.


Если Workbook = Null,
 то внутреннюю рабочую книгу с загруженными данными возвращает свойство
 [IMsMetaModelVisualController.VariableWorkbook](IMsMetaModelVisualController.VariableWorkbook.htm) или
 свойство [IMsMetaModelVisualController.Workbook](IMsMetaModelVisualController.Workbook.htm),
 если в качестве значения параметра WorkbookType необходимо
 указывать значение [MsWorkbookType.Variable](../../Enums/MsWorkbookType.htm).


## Пример


Для выполнения примера в репозитории должен присутствовать контейнер
 моделирования с идентификатором «MS», содержащий задачу моделирования
 с идентификатором «FILLMODEL». Данная задача должна содержать внутреннюю
 метамодель, содержащую внутреннюю БД временных рядов и модель.


Добавьте ссылки на системные сборки: Metabase, Ms, Ui.


			Sub FillWithVariables;

Var

    mb: IMetabase;

    MsObj: IMetabaseObjectDescriptor;

    Meta: IMsMetaModel;

    MetaVisual: IMsMetaModelVisualController;

    ScArr: Array Of Integer;

    Target: IUiCommandTarget;

    pr: IMsProblem;

    ProblDet: IMsProblemDetails;

    i, j: Integer;

    ChainEn: IMsCalculationChainEntries;

    Arr, VarArr: Array Of Integer;

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

    Arr := New Integer[ChainEn.Count];

    // Получаем ключи переменных

    j := 0;

    For i := 0 To ChainEn.Count - 1 Do

        If ChainEn.Item(i).Type = MsCalculationChainEntryType.Variable Then

            Arr[j] := ChainEn.Item(i).Key;

            j := j + 1;

        End If;

    End For;

    VarArr := New Integer[j];

    For i := 0 To VarArr.Length - 1 Do

        VarArr[i] := Arr[i];

    End For;

    // Создаем массив ключей сценариев

    ScArr := New Integer[1];

    // Добавляем ключ сценария «Факт»

    ScArr[0] := -1;

    // Задаем период получения данных

    ProblDet := pr.Details As IMsProblemDetails;

    // Заполняем рабочую книгу по данным из модели

    MetaVisual.FillWithVariables(VarArr, ScArr, ProblDet.Period, pr);

    // Открываем рабочую книгу

    Target := WinApplication.Instance.GetObjectTarget(MetaVisual.VariableWorkbook);

    Target.Execute("Object.Edit", Null);

End Sub FillWithVariables;


После выполнения примера будет открыта рабочая книга, заполненная по
 данным переменных из внутренней модели.


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
