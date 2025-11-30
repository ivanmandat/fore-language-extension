# IEaxObjectSelection.Matrix

IEaxObjectSelection.Matrix
-


# IEaxObjectSelection.Matrix


## Синтаксис


Matrix: [IMatrix](KeMatrix.chm::/Interface/IMatrix/IMatrix.htm);


## Описание


Свойство Matrix возвращает
 матрицу данных, соответствующую областям, которые выделены в объекте.


## Комментарии


Для получения отметки, соответствующей всем областям, выделенным в объекте,
 используйте свойство [IEaxObjectSelection.Combined](IEaxObjectSelection.Combined.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчета
 с идентификатором EAX_SEL_MANAGER. Данный отчет должен содержать таблицу,
 в которой выделено несколько областей.


Добавьте ссылки на системные сборки: Express, Matrix, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    Report: IEaxAnalyzer;

	    SelManager: IEaxObjectSelectionManager;

	    ObjSel: IEaxObjectSelection;

	    Matrix: IMatrix;

	    Iter: IMatrixIterator;

	Begin

	    // Получаем текущий репозиторий

	    mb := MetabaseClass.Active;

	    // Получаем экспресс-отчет

	    Report := mb.ItemById("EAX_SEL_MANAGER").Bind As IEaxAnalyzer;

	    // Получаем объект для работы с отметкой, по которой строится таблица данных

	    SelManager := Report.Grid.SelectionManager;

	    // Получаем отметку в таблице

	    ObjSel := SelManager.Selection;

	    If ObjSel.Count > 0 Then

	        // Выводим данные, соответствующие областям, выделенным в таблице

	        Matrix := ObjSel.Matrix(ObjSel.Item(0));

	        Iter := Matrix.CreateIterator;

	        Iter.Move(IteratorDirection.First);

	        While Iter.Valid Do

	            Debug.WriteLine(Iter.Value);

	            Iter.Move(IteratorDirection.Next);

	        End While;

	    End If;

	End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены данные,
 соответствующие областям, выделенным в таблице.


См. также:


[IEaxObjectSelection](IEaxObjectSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
