# ShowDataMiningWizard

ShowDataMiningWizard
-


# Команда ShowDataMiningWizard


## Назначение


Открытие инструмента «[Интеллектуальный анализ данных](DataMining.chm::/DataMining_Title.htm)».


## Параметры использования


Параметры команды передаются в свойстве [IUiCommandExecutionContext.Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm)
 в виде массива типа Variant, элементы которого содержат значения:


		 Тип значения
		 Описание


		 Элемент 1: [IDmTableDataSource](KeMs.chm::/Interface/IDmTableDataSource/IDmTableDataSource.htm)
		 Табличный источник данных для интеллектуального анализа.


		 Элемент 2: [DmMethodKind](StatLib.chm::/Enums/DmMethodKind.htm)
		 Метод интеллектуального анализа данных.


## Особенности применения


Отображаемый диалог зависит от того, заданы параметры или нет:


	- параметры заданы. Отображается
	 диалог указанного метода интеллектуального анализа данных;


	- параметры не заданы.
	 Отображается диалог выбора данных для анализа.


## Пример


Для выполнения примера предполагается наличие формы, содержащей кнопку
 с идентификатором Button1.


В репозитории предполагается наличие таблицы с идентификатором TABLE,
 содержащую данные для анализа.


Добавьте ссылки на системные сборки: Db, Fore, Metabase, Ms, Stat, UI.


Пример является обработчиком события OnClick для кнопки Button1.


					Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    Mb: IMetabase;

		    Table: ITable;

		    DataSource: IDmTableDataSource;

		    Target: IUiCommandTarget;

		    Context: IUiCommandExecutionContext;

		    Arg: array Of Variant;

		Begin

		    // Получаем текущий репозиторий

		    Mb := MetabaseClass.Active;

		    // Получаем таблицу

		    Table := Mb.ItemById("TABLE").Bind As ITable;

		    // Создаем источник данных, являющийся таблицей

		    DataSource := (New TableDataSource.Create) As IDmTableDataSource;

		    DataSource.Table := Table As IMetabaseObjectDescriptor;

		    // Получаем плагин Ms

		    Target := WinApplication.Instance.GetPluginTarget("Ms");

		    // Создаём контекст для выполнения команды

		    Context := Target.CreateExecutionContext;

		    // Создаём массив параметров команды

		    Arg := New Variant[2];

		    Arg[0] := DataSource;

		    Arg[1] := DmMethodKind.DecisionTree;

		    // Передаём массив параметров команды

		    Context.Data := Arg;

		    // Выполняем команду

		    Target.Execute("ShowDataMiningWizard", Context);

		End Sub Button1OnClick;


В результате выполнения примера при нажатии на кнопку Button1 отобразится
 диалог «Интеллектуальный анализ данных»,
 вид анализа «Заполнение по шаблону»,
 метод «Дерево решений».


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
