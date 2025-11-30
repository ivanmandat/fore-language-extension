# ICubeInstanceDestinationExecutor.DimensionsIntegrityCheck

ICubeInstanceDestinationExecutor.DimensionsIntegrityCheck
-


# ICubeInstanceDestinationExecutor.DimensionsIntegrityCheck


## Синтаксис


DimensionsIntegrityCheck: Boolean;


## Описание


Свойство DimensionsIntegrityCheck
 определяет, будет ли перед расчетом производиться проверка построения
 справочников, входящих в отметку.


## Комментарии


Если свойству установлено значение True,
 то при [подготовке
 к расчету](ICubeInstanceDestinationExecutor.PrepareExecute.htm) результирующей матрицы предварительно будет осуществлена
 проверка построения всех справочников, входящих в отметку. Если при построении
 какого-либо справочника возникнет ошибка, то ошибка будет проброшена на
 уровень платформы.


По умолчанию свойству установлено значение False,
 при этом проверка справочников не осуществляется. Если при построении
 возникают ошибки, то справочники не будут отстроены. Отметка по таким
 справочникам будет недоступна.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 Cube_1.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Cub: ICubeInstance;

	    Dest: ICubeInstanceDestination;

	    Exec: ICubeInstanceDestinationExecutor;

	    Mat: IMatrix;

	    Iter: IMatrixIterator;

	Begin

	    MB := MetabaseClass.Active;

	    Cub := MB.ItemById("Cube_1").Open(Null) As ICubeInstance;

	    Dest := Cub.Destinations.DefaultDestination;

	    Exec := Dest.CreateExecutor;

	    Exec.DimensionsIntegrityCheck := True;

	    Try

	        Exec.PrepareExecute(Null);

	        Exec.PerformExecute;

	    Except On e: Exception Do

	        Debug.WriteLine(e.Message);

	    Finally

	    End Try;

	    Mat := Exec.Matrix;

	    If Not IsNull(Mat) Then

	        Iter := Mat.CreateIterator;

	        Iter.Move(IteratorDirection.First);

	        While Iter.Valid Do

	            Debug.WriteLine(Iter.Value);

	            Iter.Move(IteratorDirection.Next);

	        End While;

	    End If;

	End Sub UserProc;


При выполнении примера будет осуществлена подготовка и расчет результирующей
 матрицы куба. Перед расчетом будет проведена проверка построения всех
 справочников, на основе которых создан куб. Если при построении справочников
 возникнет ошибка, то текст ошибки будет выведен в консоль среды разработки.
 Если ошибок не возникнет и матрица рассчитается корректно, то данные матрицы
 также будут выведены в консоль среды разработки.


См. также:


[ICubeInstanceDestinationExecutor](ICubeInstanceDestinationExecutor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
