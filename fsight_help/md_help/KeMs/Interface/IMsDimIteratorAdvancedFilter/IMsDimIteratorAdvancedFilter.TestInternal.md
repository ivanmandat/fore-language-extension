# IMsDimIteratorAdvancedFilter.TestInternal

IMsDimIteratorAdvancedFilter.TestInternal
-


# IMsDimIteratorAdvancedFilter.TestInternal


## Синтаксис


TestInternal(Element: Integer, ParamValues: [IMsModelParamValues](../IMsModelParamValues/IMsModelParamValues.htm)):
 Boolean;


## Параметры


Element.
 Тестируемый элемент справочника;


ParamValues. Параметры метамодели.


## Описание


Метод TestInternal проверяет
 элемент на соответствие расширенному фильтру с учётом заданных значений
 [параметров](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/Metamodel_params.htm)
 метамодели.


## Комментарии


Допустимые значения:


	- True. Элемент соответствует
	 фильтру;


	- False. Элемент не соответствует
	 фильтру.


Метод актуален, если условие расширенного фильтра зависит от параметров
 метамодели.


## Пример


Для выполнения примера в репозитории предполагается наличие [контейнера
 моделирования](UiModelling.chm::/2_Container_of_Modeling/2_1_Create_Cont_Modeling/UiModelling_Create_Container.htm) с идентификатором CONT_MODEL, в котором
 содержится [задача
 моделирования](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_4_Problem/uimodelling_problem.htm) с идентификатором PROBLEM и [метамодель](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel.htm).
 Для метамодели должен быть задан [параметр](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/Metamodel_params.htm),
 [многомерный
 цикл](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/MultiDimIterator.htm) в [цепочке
 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) и условие расширенной фильтрации при [настройке
 измерений](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/AdvDimFilter.htm) многомерного цикла.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms.


			Sub UserProc;

Var

    Mb: IMetabase;

    MsKey, i: Integer;

    MetaModel: IMsMetaModel;

    MParams: IMsModelParams;

    Chain: IMsCalculationChainEntries;

    Problem: IMsProblem;

    Iterator: IMsCalculationChainMultiDimIterator;

    IterDim: IMsDimIteratorDimension;

    AdvancedFilter: IMsDimIteratorAdvancedFilter;

    CalcSettings: IMsProblemCalculationSettings;

    ParamValues: IMsModelParamValues;

    Param: IMsModelParamValue;

    Dim: IDimInstance;

Begin

    // Получим текущий репозиторий

    Mb := MetabaseClass.Active;

    // Получим ключ контейнера моделирования

    MsKey := Mb.GetObjectKeyById("CONT_MODEL");

    // Получим задачу моделирования

    Problem := Mb.ItemByIdNamespace("PROBLEM", MsKey).Edit As IMsProblem;

    // Получим метамодель

    MetaModel := Problem.MetaModel;

    // Получим параметры метамодели

    MParams := MetaModel.Params;

    // Получим цепочку расчёта метамодели

    Chain := MetaModel.CalculationChain;

    // Получим многомерный цикл в цепочке расчёта

    Iterator := Chain.Item(0) As IMsCalculationChainMultiDimIterator;

    // Получим первое измерение

    IterDim := Iterator.Dimensions.Item(0);

    // Получим расширенный фильтр для измерения

    AdvancedFilter := IterDim.Filter.AdvancedFilter;

    // Получим параметры для расчёта задачи

    CalcSettings := Problem.CreateCalculationSettings;

    ParamValues := CalcSettings.ParamValues;

    // Получим данные справочника, используемого для определения значения первого параметра

    Param := ParamValues.Item(0);

    Dim := Param.LinkedObject.Open(Null) As IDimInstance;

    // Проверим, соответствуют ли элементы справочника условию расширенного фильтра

    For i := 0 To Dim.Elements.Count - 1 Do

        If AdvancedFilter.TestInternal(i, ParamValues) Then

            Debug.WriteLine(String.Format(

                "Элемент с индексом {0} измерения '{1}' соответствует условию расширенного фильтра", i, Dim.Name));

        Else

            Debug.WriteLine(String.Format(

                "Элемент с индексом {0} измерения '{1}' не соответствует условию расширенного фильтра", i, Dim.Name));

        End If;

    End For;

End Sub UserProc;


В результате выполнения примера в консоль будет выведен результат проверки
 элементов справочника, соответствующих и не соответствующих условию расширенного
 фильтра, например:


Элемент с индексом 0 измерения 'Справочник' не соответствует
 условию расширенного фильтра


Элемент с индексом 1 измерения 'Справочник' не соответствует
 условию расширенного фильтра


Элемент с индексом 2 измерения 'Справочник' соответствует
 условию расширенного фильтра


Элемент с индексом 3 измерения 'Справочник' соответствует
 условию расширенного фильтра


См. также:


[IMsDimIteratorAdvancedFilter](IMsDimIteratorAdvancedFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
