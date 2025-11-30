# ShowDataMiningDialog

ShowDataMiningDialog
-


# Команда ShowDataMiningDialog


## Назначение


Вызов окна интеллектуального анализа данных.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать массив, содержащий
 следующие значения:


		 Тип значения
		 Описание


		 [ILaner](Laner.chm::/Interface/ILaner/ILaner.htm)
		 Рабочая книга.


		 [DmMethodKind](StatLib.chm::/Enums/DmMethodKind.htm)
		 Метод интеллектуального анализа данных.

Для использования доступны только следующие элементы
		 перечисления:


			- KmodesClusterAnalysis;


			- SelfOrganizingMap;


			- HighlightExceptions;


			- DecisionTree;


			- LogisticRegression;


			- BackPropagation;


			- KeyInfluences;


			- AssociationRules.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента UiErAnalyzer с наименованием
 «UiErAnalyzer1». «UiErAnalyzer1» настроен на экспресс-отчет, построенный
 на базе данных временных рядов. Добавьте ссылки на следующие системные
 сборки: Express, Metabase, Ui, Laner.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Mb: IMetabase;

    Analyzer: IEaxAnalyzer;

    Laner: ILaner;

    CommandTarget: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

    DataDM: Array;

Begin

    Mb := MetabaseClass.Active;

    Analyzer := UiErAnalyzer1.ErAnalyzer;

    Laner := Analyzer.Laner;

    CommandTarget := WinApplication.Instance.GetPluginTarget("FactRubricator");

    Context := CommandTarget.CreateExecutionContext;

    DataDM := New Variant[2];

    DataDM[0] := Laner;

    DataDM[1] := DmMethodKind.KmodesClusterAnalysis;

    Context.ParentWindow := Self As IWin32Window;

    Context.Modal := True;

    Context.Data := DataDM;

    CommandTarget.Execute("ShowDataMiningDialog", Context);

End Sub Button1OnClick;


При нажатии кнопки будет открыто окно настройки интеллектуального анализа
 данных. В окне будут доступны настройки для кластеризации методом К-мод.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
