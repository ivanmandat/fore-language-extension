# Перемещение измерения из общих в частные

Перемещение измерения из общих в частные
-


# Перемещение измерения из общих в частные


При работе с экспресс-отчетом, который построен на нескольких источниках,
 общие для всех источников измерения отображаются как отдельные измерения.
 Уникальные для источников измерения объединяются в отдельное измерение
 и отображаются на вкладке «Частные измерения».
 Иногда может возникнуть необходимость переместить в «Частные
 измерения» одно из общих измерений. Рассмотрим пример такого перемещения
 с использованием языка Fore.


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонентов TabSheetBox, ErAnalyzerDimPanel
 и компонента UiErAnalyzer с наименованием «UiErAnalyzer1», который является
 источником данных для указанных визуальных компонентов. К «UiErAnalyzer1»
 подключен экспресс-отчет, построенный на нескольких источниках данных.
 Среди общих измерений имеется измерение с идентификатором Country.


Помимо тех сборок, которые будут подключены автоматически, также необходимо
 подключить следующие системные сборки репозитория: Cubes, Dimensions,
 Express, Metabase, Pivot.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Analyzer: IEaxAnalyzer;

	    Pivot: IPivot;

	    Selection, NewSel: IDimSelection;

	    DataSources: IEaxDataSources;

	    FixInfo: ICubeDimensionFixInfo;

	    VirtualCube: IVirtualCube;

	    CompoundSelection: ICompoundSelection;

	    SourcesSelection: IDimSelectionSet;

	    SourceSelection: ICompoundSelection;

	    DimFix: ICubeDimensionFix;

	    DimKey, CompoundDimKey, i: Integer;

	Begin

	    Analyzer := UiErAnalyzer1.ErAnalyzer;

	    Pivot := Analyzer.Pivot;

	    //Отметка измерения, которое будет перемещено в частные

	    //Данное измерение имеется во всех источниках экспресс-отчета

	    //Отметка необходима для ее дальнейшего восстановления в составной отметке частного измерения

	    Selection := Pivot.Selection.FindById("COUNTRY");

	    //Ключ перемещаемого измерения

	    DimKey := Selection.Dimension.Key;

	    //Фиксация измерения в виртуальном кубе, который создан под экспресс-отчетом

	    DataSources := Analyzer.DataSources;

	    For i := 0 To DataSources.Count - 1 Do

	        FixInfo := DataSources.Item(i).VirtualCubeSource.FixInfo;

	        DimFix := FixInfo.FindByKey(DimKey);

	        DimFix.Fixed := True;

	    End For;

	    //Получение составной отметки, которая включает в себя все отметки частных измерений

	    VirtualCube := (Pivot.DataSource As ICubeInstanceDestination).Cube.Cube As IVirtualCube;

	    CompoundDimKey := (VirtualCube.FactDimension As IMetabaseObjectDescriptor).Key;

	    CompoundSelection := Pivot.Selection.FindByKey(CompoundDimKey) As ICompoundSelection;

	    //Коллекция отметок частных измерений

	    //Каждая отметка частного измерения в свою очередь также является составной отметкой измерений, которые являются уникальными для

	    //конкретного источника данных

	    SourcesSelection := CompoundSelection.Selection;

	    Pivot.BeginSelectionUpdate;

	    For Each SourceSelection In SourcesSelection Do

	        //Добавление в отметку частного измерения отметки перемещенного измерения

	        NewSel := SourceSelection.Selection.Add(Selection.Dimension);

	        //Восстановление его отметки, в соответствии с той, которая была до перемещения

	        Selection.CopyTo(NewSel, True);

	    End For;

	    Pivot.EndSelectionUpdate;

	    //Обновление источников данных

	    DataSources.Refresh;

	End Sub Button1OnClick;


Список измерений выглядит следующим образом:


![](private_dim1.gif)


После нажатия на кнопку список измерений будет выглядеть следующим образом:


![](private_dim2.gif)


См. также:


[Примеры](Example_main.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
