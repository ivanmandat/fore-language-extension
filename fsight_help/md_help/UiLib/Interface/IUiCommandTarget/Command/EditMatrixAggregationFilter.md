# EditMatrixAggregationFilter

EditMatrixAggregationFilter
-


# Команда EditMatrixAggregationFilter


## Назначение


Открытие диалога для настройки [фильтрации
 измерений](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/MatrixAggregation/MatrixAggregationParams.htm#filtersetup) при определении параметров расчёта [модели
 матричной агрегации](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/MatrixAggregation/MatrixAggregation.htm).


## Параметры использования


Параметры команды передаются в свойстве [IUiCommandExecutionContext.Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm)
 в виде массива типа Variant, элементы которого содержат значения:


		 Тип значения
		 Описание


		 Элемент 1: [IMsModel](KeMs.chm::/Interface/IMsModel/IMsModel.htm)
		 Модель матричной агрегации.


		 Элемент 2: [IMsAggregationFilter](KeMs.chm::/Interface/IMsAggregationFilter/IMsAggregationFilter.htm)
		 Фильтр агрегации.


## Особенности применения


Команда применяется только для модели матричной агрегации.


## Пример


Для выполнения примера в репозитории необходимо наличие контейнера моделирования
 с идентификатором CONT_MODEL, содержащего модель матричной агрегации с
 идентификатором MODEL_AGGR, и формы. Разместите на форме компонент [Button](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Button.htm)
 с наименованием «Button1».


Добавьте ссылки на системные сборки: Forms, Metabase, Ms, Ui.


Пример является обработчиком события OnClick
 для компонента Button.


					Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    MB: IMetabase;

		    Model: IMsModel;

		    Mt: IMsMatrixAggregationTransform;

		    Target: IUiCommandTarget;

		    Context: IUiCommandExecutionContext;

		    aArgs: array Of Variant;

		    Descr, RubrDescr: IMetabaseObjectDescriptor;

		    Param: IMsFormulaTransform;

		    Formula: IMsFormula;

		    Method: IMsMethod;

		Begin

		    MB := MetabaseClass.Active;

		    // Получим контейнер моделирования

		    RubrDescr := MB.ItemById("CONT_MODEL");

		    Descr:= RubrDescr.EditDescriptor;

		    // Получим модель матричной агрегации

		    Model := MB.ItemByIdNamespace("MODEL_AGGR", Descr.Key).Edit As IMsModel;

		    // Получим параметры модели

		    Param := Model.Transform;

		    // Получим метод расчёта модели

		    Formula := Param.FormulaItem(0);

		    // Получим параметры метода расчёта модели

		    Method := Formula.Method;

		    Mt := Method As IMsMatrixAggregationTransform;

		    // Получим плагин Ms

		    Target := WinApplication.Instance.GetPluginTarget("Ms");

		    // Создадим контекст для выполнения команды

		    Context := Target.CreateExecutionContext;

		    // Создадим массив параметров команды

		    aArgs := New Variant[2];

		    aArgs[0] := Model;

		    aArgs[1] := Mt.Filter.Item(0);

		    Context.ParentWindow := self As IWin32Window;

		    Context.Modal := True;

		    // Передадим массив параметров команды

		    Context.Data := aArgs;

		    // Выполним команду

		    Target.Execute("EditMatrixAggregationFilter", Context);

		    // Сохраним внесенные изменения

		    (Model As IMetabaseObject).Save;

		End Sub Button1OnClick;


В результате выполнения примера при нажатии на кнопку «Button1»
 отобразится диалог для настройки фильтрации измерений.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
