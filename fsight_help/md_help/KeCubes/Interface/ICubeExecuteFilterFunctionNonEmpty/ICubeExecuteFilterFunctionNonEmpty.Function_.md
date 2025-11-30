# ICubeExecuteFilterFunctionNonEmpty.Function_

ICubeExecuteFilterFunctionNonEmpty.Function_
-


# ICubeExecuteFilterFunctionNonEmpty.Function_


## Синтаксис


Function_: String;


## Описание


Свойство Function_ определяет
 функцию, используемую для фильтрации пустых значений.


## Комментарии


По умолчанию свойство не задано, при этом в запросе используется ключевое
 слово «NON EMPTY».


Для использования функции «NonEmpty» необходимо:


	- В свойстве Function_
	 указать значение «NonEmpty».


	- В свойстве [NonEmpty](ICubeExecuteFilterFunctionNonEmpty.NonEmpty.htm) установить
	 значение True.


	- В свойстве [Set_](ICubeExecuteFilterFunctionNonEmpty.Set_.htm) в круглых
	 скобках указать отметку элементов измерений, для которых будет применяться
	 фильтрация пустых значений.


Описание ключевого слова «NON EMPTY», функции «NonEmpty» и различия
 в их работе доступны в документации по языку многомерных запросов MDX.


## Пример


Для выполнения примера предполагается наличие в репозитории каталога
 ADOMD с идентификатором «ADOMDTest», в этом каталоге имеется куб ADOMD
 - «SALES». В структуре куба должны присутствовать измерения на базе справочников
 ADOMD с идентификаторами «DATE» и «COUNTRY».


			Sub UserProc;

Var

    Mb: IMetabase;

    CubeInst: ICubeInstance;

    DestInst: ICubeInstanceDestination;

    Sels: IDimSelectionSet;

    CubeExecSet: ICubeExecuteSetup;

    FilterSetup: ICubeExecuteFilterSetup;

    DimSetup: ICubeExecuteDimSetup;

    FilterItem: ICubeExecuteFilterItem;

    NonEmptyFunction: ICubeExecuteFilterFunctionNonEmpty;

    Exec: ICubeInstanceDestinationExecutor;

    Matr: IMatrix;

Begin

    Mb := MetabaseClass.Active;

    CubeInst := MB.ItemByIdNamespace("SALES", MB.GetObjectKeyById("ADOMDTest")).Open(Null) As ICubeInstance;

    DestInst := CubeInst.Destinations.DefaultDestination;

    Sels := DestInst.CreateDimSelectionSet;

    CubeExecSet := Sels As ICubeExecuteSetup;

    //Получение объекта для настройки фильтрации по измерениям

    FilterSetup := CubeExecSet.Filter;

    //Распределение измерений по группам, задание отметки и установка фильтра измерения

    For Each DimSetup In CubeExecSet Do

        If DimSetup.Id = "DATE" Then

            DimSetup.Selection.SelectAll;

            DimSetup.GroupIndex := 2; //По строкам

            NonEmptyFunction := (FilterSetup As ICubeExecuteFilterFunctionFactory).CreatePredefined(CubeExecuteFilterFunctionPredefined.NonEmpty) As ICubeExecuteFilterFunctionNonEmpty;

            NonEmptyFunction.NonEmpty := True;

            NonEmptyFunction.Function_ := "NonEmpty";

            NonEmptyFunction.Set_ := "([Date].[Fiscal].AllMembers,[Country].Children)";

            FilterItem := FilterSetup.Add;

            FilterItem.Function_ := NonEmptyFunction As ICubeExecuteFilterFunction;

            FilterItem.Dimension := DimSetup;

        Elseif DimSetup.Id = "COUNTRY" Then

            DimSetup.Selection.SelectElement(1, False);

            DimSetup.GroupIndex := 1; //По столбцам

        Else

            DimSetup.Selection.SelectElement(0, False);

            DimSetup.GroupIndex := 0; //Остальные измерения в фиксированные

        End If;

    End For;

    //Подготовка к расчету

    Exec := DestInst.CreateExecutor;

    Exec.PrepareExecute(Sels);

    //Расчет

    Exec.PerformExecute;

    //Получение матрицы с результатами расчета

    Matr := Exec.Matrix;

End Sub UserProc;


При выполнении примера будет осуществлена подготовка и расчет указанного
 куба ADOMD. Из результирующего набора данных будут отфильтрованы пустые
 значения, которые будут найдены на пересечении осей на базе измерений
 «DATE» и «COUNTRY». Фильтрация будет осуществляться с использованием функции
 «NonEmpty».


См. также:


[ICubeExecuteFilterFunctionNonEmpty](ICubeExecuteFilterFunctionNonEmpty.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
