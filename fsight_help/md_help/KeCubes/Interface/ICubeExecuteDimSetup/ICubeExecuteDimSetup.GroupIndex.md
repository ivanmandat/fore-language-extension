# ICubeExecuteDimSetup.GroupIndex

ICubeExecuteDimSetup.GroupIndex
-


# ICubeExecuteDimSetup.GroupIndex


## Синтаксис


GroupIndex: Integer;


## Описание


Свойство GroupIndex определяет
 индекс группы, в которую входит измерение.


## Комментарии


Предусмотрены следующие группы:


	- 0. Фиксированные
	 измерения;


	- 1. Измерения,
	 расположенные по столбцам;


	- 2. Измерения,
	 расположенные по строкам;


	- 3. Необязательные
	 измерения.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов FC_DEP.


			Sub UserProc;

Var

    Mb: IMetabase;

    CubeInst: ICubeInstance;

    Dest: ICubeInstanceDestination;

    Sels: IDimSelectionSet;

    CubeExSet: ICubeExecuteSetup;

    i: Integer;

    DimSetup: ICubeExecuteDimSetup;

    Exec: ICubeInstanceDestinationExecutor;

    Matr: IMatrix;

    b: Boolean;

Begin

    Mb := MetabaseClass.Active;

    CubeInst := Mb.ItemById("FC_DEP").Open(Null) As ICubeInstance;

    Dest := CubeInst.Destinations.DefaultDestination;

    Sels := Dest.CreateDimSelectionSet;

    CubeExSet := Sels As ICubeExecuteSetup;

    For i := 0 To CubeExSet.Count - 1 Do

        DimSetup := CubeExSet.Item(i);

        Debug.WriteLine("Идентификатор: " + DimSetup.Id);

        Debug.WriteLine("Индекс группы: " + DimSetup.GroupIndex.ToString);

        Debug.WriteLine("Позиция в группе: " + DimSetup.Position.ToString);

        b := DimSetup.Options.Required = CubeDimensionExecuteOptions.Required;

        Debug.WriteLine(b ? "Обязательное измерение" : "Необязательное измерение");

        b := DimSetup.Predefined = Null;

        Debug.WriteLine(b ? "Нет предопределенных опций" : "Есть предопределенные опции");

        Select Case DimSetup.Tag

            Case CubeDimensionTag.Calendar: Debug.WriteLine("Календарное измерение");

            Case CubeDimensionTag.Facts: Debug.WriteLine("Измерение фактов");

            Case CubeDimensionTag.None: Debug.WriteLine("Тип измерения не определен");

            Case CubeDimensionTag.Units: Debug.WriteLine("Единицы измерения");

        End Select;

        DimSetup.Selection.SelectAll;

        Debug.WriteLine("------");

    End For;

    Exec := Dest.CreateExecutor;

    Exec.PrepareExecute(Sels);

    Exec.PerformExecute;

    Matr := Exec.Matrix;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены индекс группы,
 позиция в ней и прочие параметры измерений, входящих в вариант отображения
 базы данных временных рядов, выбираемый по умолчанию. База данных временных
 рядов будет рассчитана с данными параметрами, результаты помещены в переменную
 Matr.


См. также:


[ICubeExecuteDimSetup](ICubeExecuteDimSetup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
