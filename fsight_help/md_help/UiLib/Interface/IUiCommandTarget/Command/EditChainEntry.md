# EditChainEntry

EditChainEntry
-


# Команда EditChainEntry


## Назначение


Открытие диалога для настройки [многомерного
 цикла](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/MultiDimIterator.htm) или диалога для настройки [измерения
 многомерного цикла](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/AdvDimFilter.htm).


## Параметры использования


Параметры команды передаются в свойстве [IUiCommandExecutionContext.Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm)
 в виде массива типа Variant, элементы которого содержат значения:


		 Тип значения
		 Описание


		 Элемент 1: [IMsMetaModel](KeMs.chm::/Interface/IMsMetaModel/IMsMetaModel.htm)
		 Метамодель, содержащая многомерный цикл.


		 Элемент 2: [IMsCalculationChainEntry](KeMs.chm::/Interface/IMsCalculationChainEntry/IMsCalculationChainEntry.htm)
		 Элемент цепочки расчёта, являющийся многомерным циклом.


		 Элемент 3: [IMsDimIteratorDimension](KeMs.chm::/Interface/IMsDimIteratorDimension/IMsDimIteratorDimension.htm)
		 Измерение многомерного цикла.


		 Элемент 4: String
		 Может принимать только значение compact. Признак того, что
		 должен отображаться сокращённый вид диалога для настройки фильтрации
		 измерения.


## Особенности применения


Отображаемый диалог зависит от того, какие элементы массива заданы.
 Если заданы:


	- первые два элемента.
	 Отображается диалог настройки многомерного цикла;


	- первые три элемента.
	 Отображается диалог настройки измерения многомерного цикла, указанного
	 в третьем элементе. Диалог полный и содержит вкладки: «Фильтр»,
	 «Связанные измерения», «Источники данных»;


	- все элементы. Отображается
	 диалог настройки измерения многомерного цикла, указанного в третьем
	 элементе. Диалог сокращённый и содержит только вкладку «Фильтр».


## Пример


Для выполнения примера предполагается наличие формы, содержащей кнопку
 с идентификатором Button1 и три компонента [RadioButton](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/RadioButton.htm) с
 идентификаторами RadioButton1, RadioButton2, RadioButton3. В компоненте
 RadioButton1 свойство [Checked](modforms.chm::/Interface/IRadioButton/IRadioButton.Checked.htm)
 имеет значение True. Свойство
 [Text](modforms.chm::/Interface/IControl/IControl.Text.htm)
 для компонентов [RadioButton](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/RadioButton.htm)
 имеет следующие значения:


	- RadioButton1. Многомерный
	 цикл;


	- RadioButton2. Настройка
	 измерения (полная);


	- RadioButton3. Настройка
	 измерения (сокращённая).


В репозитории предполагается наличие контейнера моделирования с идентификатором
 MS_PLUGIN, содержащего метамодель с идентификатором META_DIMITERATOR.
 Данная метамодель содержит только многомерный цикл, рассчитываемый по
 нескольким измерениям.


Добавьте ссылки на системные сборки: Fore, Metabase, Ms, UI.


Пример является обработчиком события OnClick для
 кнопки Button1.


					Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    mb: IMetabase;

		    msKey: Integer;

		    meta: IMsMetaModel;

		    chainEntry: IMsCalculationChainEntry;

		    dimIter: IMsCalculationChainMultiDimIterator;

		    target: IUiCommandTarget;

		    context: IUiCommandExecutionContext;

		    arg: array Of Variant;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем модель

		    msKey := mb.GetObjectKeyById("MS_PLUGIN");

		    meta := mb.ItemByIdNamespace("META_DIMITERATOR", msKey).Edit As IMsMetaModel;

		    // Получаем многомерный цикл

		    chainEntry := meta.CalculationChain.Item(0);

		    dimIter := chainEntry As IMsCalculationChainMultiDimIterator;

		    // Получаем плагин Ms

		    target := WinApplication.Instance.GetPluginTarget("Ms");

		    // Создаём контекст для выполнения команды

		    context := target.CreateExecutionContext;

		    // Создаём массив параметров команды

		    arg := New Variant[4];

		    arg[0] := meta;

		    arg[1] := chainEntry;

		    // Если установлен переключатель RadioButton2,

		    // то в массив добавляется элемент с измерением многомерного цикла

		    If RadioButton2.Checked Then

		        arg[2] := dimIter.Dimensions.Item(0);

		    End If;

		    // Если установлен переключатель RadioButton2,

		    // то в массив добавляется элемент с измерением многомерного цикла

		    // и элемент, указывающий на компактный вид диалога

		    If RadioButton3.Checked Then

		        arg[2] := dimIter.Dimensions.Item(0);

		        arg[3] := "compact";

		    End If;

		    // Передаём массив параметров команды

		    context.Data := arg;

		    // Выполняем команду

		    target.Execute("EditChainEntry", context);

		End Sub Button1OnClick


В результате выполнения примера при нажатии на кнопку Button1 поведение
 будет зависеть от того, какой из переключателей [RadioButton](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/RadioButton.htm)
 установлен:


	- RadioButton1. Отобразится
	 диалог настройки многомерного цикла;


	- RadioButton2. Отобразится
	 полный диалог настройки для первого измерения многомерного цикла;


	- RadioButton3. Отобразится
	 сокращённый диалог настройки для первого измерения многомерного цикла.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
