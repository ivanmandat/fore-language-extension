# IDescStatsBox.AddVariableStubFixedSlice

IDescStatsBox.AddVariableStubFixedSlice
-


# IDescStatsBox.AddVariableStubFixedSlice


## Синтаксис


		AddVariableStubFixedSlice(Stub: [IVariableStub](KeCubes.chm::/Interface/IVariableStub/IVariableStub.htm);
		 VarDims: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm));


## Параметры


Stub. Переменная, для которой
 требуется произвести расчёт описательных статистик;


VarDims. Отметка элементов
 по дополнительным измерениям.


## Описание


Метод AddVariableStubFixedSlice
 осуществляет добавление в компонент переменной с указанием отметки по
 её дополнительным измерениям.


## Комментарии


После добавления переменной в компонент для неё производится расчёт
 описательных статистик.


Данный метод актуально использовать, если переменная имеет дополнительные
 измерения. В параметре VarDims
 указывается отметка по этим измерениям. Если переменная не имеет дополнительных
 измерений, то в качестве значения параметра VarDims
 можно указать значение Null.


## Пример


Для выполнения примера в репозитории предполагается наличие формы с
 расположенными на ней:


	- кнопкой с наименованием «Button1»;


	- компонентом DescStatsBox с наименованием
	 «DescStatsBox1»;


	- контейнером моделирования с идентификатором CONT_MODEL, содержащим
	 переменную моделирования с идентификаторами X1. Данная переменная
	 имеет в своей структуре дополнительные измерения.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms.


					Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    MB: IMetabase;

		    MS, Var1: IMetabaseObject;

		    Dims: IMsVariableDimensions;

		    Dim: IMsVariableDimension;

		    DimInst: IDimInstance;

		    SelectionFact: IDimSelectionSetFactory;

		    DimSS: IDimSelectionSet;

		    DimSel: IDimSelection;

		Begin

		    MB := MetabaseClass.Active;

		    MS := MB.ItemById("CONT_MODEL").Bind;

		    Var1 := MB.ItemByIdNamespace("X1", MS.Key).Bind;

		    Dims := (Var1 As IMsVariable).Dimensions;

		    //Создание новой отметки

		    SelectionFact := New DimSelectionSetFactory.Create;

		    DimSS := SelectionFact.CreateDimSelectionSet;

		    For Each Dim In Dims Do

		        //Отметка первых элементов по всем дополнительным измерениям

		        DimInst := (Dim.Model As IMetabaseObject).Open(Null) As IDimInstance;

		        DimSel := DimSS.Add(DimInst);

		        DimSel.SelectElement(0, False);

		    End For;

		    //Подключение контейнера моделирования к компоненту DescStatsBox

		    //и загрузка переменной моделирования

		    DescStatsBox1.ModelSpace := MS As IMsModelSpace;

		    DescStatsBox1.AddVariableStubFixedSlice(Var1 As IVariableStub, DimSS);

		End Sub Button1OnClick;


В результате выполнения примера компонент «DescStatsBox1» будет подключён к контейнеру моделирования CONT_MODEL. В список переменных
 компонента будет загружена переменная моделирования X1. При загрузке в дополнительных измерениях переменной будут зафиксированы первые элементы.


См. также:


[IDescStatsBox](IDescStatsBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
