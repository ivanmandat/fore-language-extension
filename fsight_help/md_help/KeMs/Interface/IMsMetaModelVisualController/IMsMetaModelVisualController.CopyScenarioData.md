# IMsMetaModelVisualController.CopyScenarioData

IMsMetaModelVisualController.CopyScenarioData
-


# IMsMetaModelVisualController.CopyScenarioData


## Синтаксис


CopyScenarioData(

                 DestScenarioKey:
 Array;

                 SourceScenarioKey:
 Integer;

                 EntryKeys:
 Array;

                 [CopyAll:
 Boolean = False]


                );


## Параметры


DestScenarioKey. Массив ключей
 сценариев-приёмников;


SourceScenarioKey. Ключ сценария-источника;


EntryKeys. Массив ключей копируемых
 переменных;


CopyAll. Признак того, копировать
 ли данные всех переменных модели.


## Описание


Метод CopyScenarioData копирует
 данные по сценариям моделирования.


## Комментарии


Для корректного копирования данных задайте значение свойства [IMsMetaModelVisualController.Problem](IMsMetaModelVisualController.Problem.htm).


Для копирования данных по сценарию «Факт» используйте ключ
 «-1».


Параметр EntryKeys должен содержать
 ключи элементов цепочки расчёта метамодели, которые являются переменными.


Допустимые значения параметра CopyAll:


	- True. Копировать данные
	 всех переменных;


	- False. По умолчанию.
	 Копировать данные переменных, заданных в параметре EntryKeys.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MODEL_SPACE», содержащего задачу моделирования
 с идентификатором «WEB_PROBLEM». Задача моделирования должна содержать
 несколько сценариев моделирования и внутреннюю метамодель.


Добавьте ссылки на системные сборки «Metabase», «Ms».


			Sub CopyScenarioData;

Var

    MB: IMetabase;

    MsObj: IMetabaseObject;

    Problem: IMsProblem;

    ProbScen: IMsProblemScenarios;

    Meta: IMsMetaModel;

    MetaVisual: IMsMetaModelVisualController;

    DestScen: IMsScenario;

    DestScenKeys, VarsKeys: Array[1] Of Integer;

    ChainEnts: IMsCalculationChainEntries;

    ChainEl: IMsCalculationChainEntry;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    // Получаем контейнер моделирования

    MsObj := MB.ItemById("MODEL_SPACE").Bind;

    // Получаем задачу моделирования

    Problem := MB.ItemByIdNamespace("WEB_PROBLEM", MsObj.Key).Bind As IMsProblem;

    // Получаем сценарии задачи моделирования

    ProbScen := Problem.Scenarios;

    // Получаем 1-й сценарий в задаче моделирования

    DestScen := ProbScen.Item(0);

    DestScenKeys[0] := (DestScen As IMetabaseObject).Key;

    // Получаем метамодель

    Meta := Problem.MetaModel;

    MetaVisual := Meta.VisualController;

    // Задаем задачу моделирования

    MetaVisual.Problem := Problem;

    // Получаем ключ 1-й переменной в цепочке расчёта

    ChainEnts := Meta.CalculationChain;

    For i := 0 To ChainEnts.Count - 1 Do

        ChainEl := ChainEnts.Item(i);

        If ChainEl.Type = MsCalculationChainEntryType.Variable Then

            VarsKeys[0] := ChainEl.Key;

            Break;

        End If;

    End For;

    // Копируем данные 1-й переменной по сценарию Факт на 1-й сценарий

    MetaVisual.CopyScenarioData(DestScenKeys, -1, VarsKeys);

End Sub CopyScenarioData;


Результат выполнения примера: данные первой входной переменной в цепочке
 расчёта метамодели будут скопированы по сценарию «Факт» на первый сценарий
 в задаче моделирования.


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
