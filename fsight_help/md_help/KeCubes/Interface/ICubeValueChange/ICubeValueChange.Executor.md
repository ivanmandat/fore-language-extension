# ICubeValueChange.Executor

ICubeValueChange.Executor
-


# ICubeValueChange.Executor


## Синтаксис


		Executor: [ICubeInstanceDestinationExecutor](../ICubeInstanceDestinationExecutor/ICubeInstanceDestinationExecutor.htm);


## Описание


Свойство Executor задаёт объект,
 используемый для расчёта результирующей матрицы куба.


## Комментарии


Свойство доступно только на запись. Указываемый объект для расчёта куба
 будет использоваться для получения матрицы с данными. Для дальнейшей работы
 получите матрицу в свойстве [ICubeValueChange.Matrix](ICubeValueChange.Matrix.htm).
 Изменение значений в этой матрице будет приводить к автоматическому пересчёту
 значений, которые соответствуют вычисляемым фактам.


## Пример


Для выполнения примера предполагается наличие стандартного куба с идентификатором
 «CALC_FACTS_CUBE». В структуре куба имеются измерения с идентификаторами
 «FACTS», «COUNTRY» и «CALENDAR». В измерении фактов первый факт привязан
 к данным источника, второй факт является вычисляемым.


Добавьте
 ссылки на системные сборки: Cubes, Dimensions, Matrix и Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Cube: ICubeInstance;

		    Dest: ICubeInstanceDestination;

		    Exec: ICubeInstanceDestinationExecutor;

		    Sels: IDimSelectionSet;

		    VChange: ICubeValueChange;

		    Matr: IMatrix;

		    Coord1, Coord2: IMatrixCoord;

		Begin

		    //Открываем куб

		    MB := MetabaseClass.Active;

		    Cube := MB.ItemById("CALC_FACTS_CUBE").Open(Null) As ICubeInstance;

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

		    //Создаём объект для пересчёта вычисляемых
		 фактов

		    VChange := New CubeValueChangeCallback.Create;

		    VChange.Executor := Exec;

		    Matr := VChange.Matrix;

		    //Координата в кубе по обычному факту

		    Coord1 := Matr.CreateCoord;

		    Coord1.Item(0) := 0;

		    Coord1.Item(1) := 0;

		    Coord1.Item(2) := 0;

		    //Координата по вычисляемому
		 факту

		    Coord2 := Matr.CreateCoord;

		    Coord2.Item(0) := 1;

		    Coord2.Item(1) := 0;

		    Coord2.Item(2) := 0;

		    //Смотрим текущее значение по вычисляемому
		 факту

		    Debug.WriteLine(Matr.Item(Coord2));

		    //Меняем значение элемента матрицы, при этом автоматически пересчитываются вычисляемые
		 факты

		    Matr.Item(Coord1) := 500;

		    //Смотрим новое значение по вычисляемому
		 факту

		    Debug.WriteLine(Matr.Item(Coord2));

		End Sub UserProc;


При выполнении примера будет создан объект, предназначенный для пересчёта
 значений по вычисляемым фактам. Сначала будет получено текущее значение
 вычисляемого факта. Затем по заданной координате матрицы будет изменено
 значение. После этого будет получено новое значение вычисляемого факта.


См. также:


[ICubeValueChange](ICubeValueChange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
