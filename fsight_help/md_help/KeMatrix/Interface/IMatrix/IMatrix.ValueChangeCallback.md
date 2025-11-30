# IMatrix.ValueChangeCallback

IMatrix.ValueChangeCallback
-


# IMatrix.ValueChangeCallback


## Синтаксис


ValueChangeCallback: [IValueChangeCallback](../IValueChangeCallback/IValueChangeCallback.htm);


## Описание


Свойство ValueChangeCallback
 определяет объект, который будет использоваться для отслеживания изменений
 значений в матрице.


## Комментарии


В качестве значения необходимо указать экземпляр пользовательского класса,
 который реализует методы интерфейса [IValueChangeCallback](../IValueChangeCallback/IValueChangeCallback.htm).


## Пример


Для выполнения примера предполагается наличие стандартного куба с идентификатором
 «STD_CUBE». В структуре куба имеются измерения с идентификаторами «FACTS»,
 «COUNTRY» и «CALENDAR».


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix и Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Cube: ICubeInstance;

		    Dest: ICubeInstanceDestination;

		    Exec: ICubeInstanceDestinationExecutor;

		    Sels: IDimSelectionSet;

		    Matrix: IMatrix;

		    Coord: IMatrixCoord;

		Begin

		    //Открываем куб

		    MB := MetabaseClass.Active;

		    Cube := MB.ItemById("STD_CUBE").Open(Null) As ICubeInstance;

		    Dest := Cube.Destinations.DefaultDestination;

		    //Создаём отметку

		    Sels := Dest.CreateDimSelectionSet;

		    Sels.FindById("FACTS").SelectAll;

		    Sels.FindById("COUNTRY").SelectElement(0, False);

		    Sels.FindById("CALENDAR").SelectElement(0, False);

		    //Выполняем

		    Exec := Dest.CreateExecutor;

		    Exec.PrepareExecute(Sels);

		    Exec.PerformExecute;

		    //Получаем матрицу со значениями

		    Matrix := Exec.Matrix;

		    //Устанавливаем обработчик изменений

		    Matrix.ValueChangeCallback := New ValueChangeCallback.Create;

		    //Меняем значение элемента матрицы, при этом будет сгенерировано событие OnValueChanged

		    Coord := Matrix.CreateCoord;

		    Coord.Item(0) := 0;

		    Coord.Item(1) := 0;

		    Coord.Item(1) := 0;

		    Matrix.Item(Coord) := 500;

		End Sub UserProc;


		Class ValueChangeCallback: Object, IValueChangeCallback

		    Sub OnValueChanged(Value: IMatrixCoord);

		    Var

		        M: IMatrix;

		    Begin

		        M := Value.Matrix;

		        Debug.WriteLine("Новое значение: " + M.Item(Value));

		    End Sub OnValueChanged;

		End Class ValueChangeCallback;


При выполнении примера будет получена матрица значений куба. Для матрицы
 будет задан объект, предназначенный для отслеживания изменений значений.
 После этого будет изменено значение по указанной координате.


См. также:


[IMatrix](IMatrix.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
