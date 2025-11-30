# IMatrixIterator.Values

IMatrixIterator.Values
-


# IMatrixIterator.Values


## Синтаксис


Values(Index: Integer): Variant;


## Параметры


Index. Индекс получаемого значения.


## Описание


Свойство Values определяет значение
 указанного индекса.


## Комментарии


Свойство используется:


	- при работе с матрицей показателей ([IRubricatorExecuteResult.Factors](KeCubes.chm::/Interface/IRubricatorExecuteResult/IRubricatorExecuteResult.Factors.htm))
	 или значений ([IRubricatorExecuteResult.Values](KeCubes.chm::/Interface/IRubricatorExecuteResult/IRubricatorExecuteResult.Values.htm)),
	 которые могут быть получены в результате расчёта базы данных временных
	 рядов.


В качестве параметра используется атрибут,
 по которому хранится значение элемента матрицы. Свойство Values
 определяет значение атрибута для элемента матрицы, на котором в данный
 момент находится курсор итератора.


Если при расчёте не заданы свойства [IRubricatorFactorIO.FactDataId](KeCubes.chm::/Interface/IRubricatorFactorIO/IRubricatorFactorIO.FactDataId.htm)/[IRubricatorFactorIO.ValueId](KeCubes.chm::/Interface/IRubricatorFactorIO/IRubricatorFactorIO.ValueId.htm),
 то результирующая матрица показателей [IRubricatorExecuteResult.Factors](KeCubes.chm::/Interface/IRubricatorExecuteResult/IRubricatorExecuteResult.Factors.htm)
 будет иметь пустые значения, а результирующая матрица значений [IRubricatorExecuteResult.Values](KeCubes.chm::/Interface/IRubricatorExecuteResult/IRubricatorExecuteResult.Values.htm)
 будет содержать значения показателей (значения атрибута VL). Сами значения
 можно будет определить с помощью свойства [IMatrixModelIterator.Value](ForeSys.chm::/Interface/IMatrixModelIterator/IMatrixModelIterator.Value.htm).


Если заданы свойства [IRubricatorFactorIO.FactDataId](KeCubes.chm::/Interface/IRubricatorFactorIO/IRubricatorFactorIO.FactDataId.htm)/[IRubricatorFactorIO.ValueId](KeCubes.chm::/Interface/IRubricatorFactorIO/IRubricatorFactorIO.ValueId.htm),
 то после расчёта в каждой ячейке результирующих матриц будет доступен
 набор значений указываемых атрибутов. Свойство [IMatrix.ValueCount](../IMatrix/IMatrix.ValueCount.htm)
 вернёт количество значений атрибутов в каждой ячейке матрицы (соответствует
 количеству атрибутов, указываемых в свойствах [IRubricatorFactorIO.FactDataId](KeCubes.chm::/Interface/IRubricatorFactorIO/IRubricatorFactorIO.FactDataId.htm)/[IRubricatorFactorIO.ValueId](KeCubes.chm::/Interface/IRubricatorFactorIO/IRubricatorFactorIO.ValueId.htm)).
 Значение каждого атрибута можно будет получить с помощью свойства Values.


	- при работе с расширенными параметрами матрицы данных. Возможные
	 варианты использования:


		- в качестве параметра используется
		 [IMatrixEx.AttachmentValueIndex](../IMatrixEx/IMatrixEx.AttachmentValueIndex.htm).
		 Свойство Values определяет
		 значение ключа элемента справочника, в котором хранятся вложения;


		- в качестве параметра используется
		 [IMatrixEx.ScaleValueIndex](../IMatrixEx/IMatrixEx.ScaleValueIndex.htm).
		 Свойство Values определяет
		 значение величины коэффициента масштаба матрицы.


## Пример 1


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором TSDB.


Добавьте ссылки на системные сборки Metabase, Matrix, Cubes.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubInst: IRubricatorInstance;

	    Cube: ICubeInstance;

	    Dest: ICubeInstanceDestination;

	    Exec: ICubeInstanceDestinationExecutor;

	    Matr, DataMatr: IMatrix;

	    Iterator: IMatrixIterator;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    RubInst := MB.ItemById("TSDB").Open(Null) As IRubricatorInstance;

	    Cube := RubInst As ICubeInstance;

	    Dest := Cube.Destinations.DefaultDestination;

	    Exec := Dest.CreateExecutor;

	    //Атрибуты показателей

	    (Exec As IRubricatorFactorIO).FactDataId := "FACTOR;MNEMO";

	    //Атрибуты наблюдения

	    (Exec As IRubricatorFactorIO).ValueId := "FACTOR;VL";

	    Exec.PrepareExecute(Null);

	    Exec.PerformExecute;

	    Matr := Exec.Matrix;

	    //Матрица показателей

	    Debug.WriteLine("Информация о показателях:");

	    DataMatr := (CubeClass.ExecuteResult(Matr) As IRubricatorExecuteResult).Factors;

	    Iterator := DataMatr.CreateIterator;

	    Iterator.Move(IteratorDirection.First);

	    While Iterator.Valid Do

	        For i := 0 To Matr.ValueCount - 1 Do

	            Select Case i

	                Case 0: Debug.Write("Показатель: ");

	                Case 1: Debug.Write(" Мнемоника: ");

	            End Select;

	            Debug.Write(Iterator.Values(i) + ".");

	        End For;

	        Debug.WriteLine("");

	        Iterator.Move(IteratorDirection.Next);

	    End While;

	    //Матрица значений

	    Debug.WriteLine("Информация о значениях показателей:");

	    DataMatr := (CubeClass.ExecuteResult(Matr) As IRubricatorExecuteResult).Values;

	    Iterator := DataMatr.CreateIterator;

	    Iterator.Move(IteratorDirection.First);

	    While Iterator.Valid Do

	            For i := 0 To Matr.ValueCount - 1 Do

	            Select Case i

	                Case 0: Debug.Write("Показатель: ");

	                Case 1: Debug.Write(" Значение: ");

	            End Select;

	            Debug.Write(Iterator.Values(i) + ".");

	        End For;

	        Debug.WriteLine("");

	        Iterator.Move(IteratorDirection.Next);

	    End While;

	End Sub UserProc;


При выполнении примера будет осуществлён расчет базы данных временных
 рядов. После расчета будут получены матрица показателей и матрица значений.
 Для каждого показателя при расчёте извлекается ключ (значения атрибута
 FACTOR) и мнемоника (значение атрибута MNEMO). В каждой ячейке матрицы
 значений будет доступен ключ показателя (значения атрибута FACTOR) и само
 значение (значения атрибута VL). Все значения будут выведены в консоль
 среды разработки.


## Пример 2


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором STD_CUBE. В кубе настроена привязка фактов для
 хранения вложений, по каким-либо координатам куба сохранены вложения.


Добавьте ссылки на системные сборки: Cubes, Dal, Dimensions, Matrix,
 Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CubeInst: ICubeInstance;

	    Dest: ICubeInstanceDestination;

	    Sels: IDimSelectionSet;

	    Sel: IDimSelection;

	    Exec: ICubeInstanceDestinationExecutor;

	    Mat: IMatrix;

	    MatEx: IMatrixEx;

	    Ite: IMatrixIterator;

	    ExecResult: ICubeExecuteResult;

	    Manager: ICubeAttachmentManager;

	    Ats: ICubeAttachments;

	    Attrs: ICubeAttachmentAttributes;

	    Attr: ICubeAttachmentAttribute;

	    i, c: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    CubeInst := MB.ItemById("STD_CUBE").Open(Null) As ICubeInstance;

	    Dest := CubeInst.Destinations.DefaultDestination;

	    //Отметка куба

	    Sels := Dest.CreateDimSelectionSet;

	    For Each Sel In Sels Do

	        Sel.SelectAll;

	    End For;

	    Exec := Dest.CreateExecutor;

	    Exec.IncludeAttachments := True;

	    Exec.PrepareExecute(Sels);

	    Exec.PerformExecute;

	    Mat := Exec.Matrix;

	    //Результирующая матрица куба

	    MatEx := Mat As IMatrixEx;

	    If MatEx.AttachmentValueIndex < 0 Then

	        Debug.WriteLine("AttachmentValueIndex <0");

	        Return;

	    End If;

	    ExecResult := CubeClass.ExecuteResult(Mat);

	    //Менеджер для работы с вложениями куба

	    Manager := ExecResult.CreateAttachmentManager;

	    //Итератор матрицы

	    Ite := Mat.CreateIterator;

	    Ite.Move(IteratorDirection.First);

	    //Ключ справочника НСИ

	    Debug.WriteLine(Ite.Values(MatEx.AttachmentValueIndex));

	End Sub UserProc;


При выполнении примера будет вычислена результирующая матрица куба и
 получен менеджер для работы с вложениями. В консоль среды разработки будет
 выведена информация о ключе элемента справочника, в котором хранятся вложения.


См. также:


[IMatrixIterator](IMatrixIterator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
