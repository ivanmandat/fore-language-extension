# IEaxObjectSelectionManager.Selection

IEaxObjectSelectionManager.Selection
-


# IEaxObjectSelectionManager.Selection


## Синтаксис


Selection([Update: Boolean = True]): [IEaxObjectSelection](../IEaxObjectSelection/IEaxObjectSelection.htm);


## Параметры


Update. Признак того, что отметка
 будет изменена.


## Описание


Свойство Selection возвращает
 отметку объекта.


## Комментарии


Отметка объекта предназначена для получения отметки измерений, соответствующей
 выделению областей в объекте.


Допустимые значения параметра Update:


	- True. Отметка будет
	 изменена;


	- False. Отметка не будет
	 изменена.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчета
 с идентификатором EAX_SEL_MANAGER. Данный отчет должен содержать таблицу,
 в которой выделено несколько областей.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    Report: IEaxAnalyzer;

	    SelManager: IEaxObjectSelectionManager;

	    ObjSel: IEaxObjectSelection;

	    i, j: Integer;

	    SelSet: IDimSelectionSet;

	    Sel: IDimSelection;

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

	        // Выводим отметку, соответствующую областям, выделенным в таблице

	        For i := 0 To ObjSel.Count - 1 Do

	            Debug.WriteLine("Набор отметок " + (i + 1).ToString);

	            Debug.Indent;

	            SelSet := ObjSel.Item(i);

	            For j := 0 To SelSet.Count - 1 Do

	                Sel := SelSet.Item(j);

	                Debug.WriteLine("Отметка измерения '" + Sel.Dimension.Name + "'");

	                Debug.Indent;

	                Debug.WriteLine(Sel.ToString);

	                Debug.Unindent;

	            End For;

	            Debug.Unindent;

	            Debug.WriteLine("");

	        End For;

	        // Выводим совмещенную отметку, соответствующую всем областям, выделенным в таблице

	        Debug.WriteLine("Совмещенный набор отметок");

	        Debug.Indent;

	        SelSet := ObjSel.Combined;

	        For j := 0 To SelSet.Count - 1 Do

	            Sel := SelSet.Item(j);

	            Debug.WriteLine("Отметка измерения '" + Sel.Dimension.Name + "'");

	            Debug.Indent;

	            Debug.WriteLine(Sel.ToString);

	            Debug.Unindent;

	        End For;

	        Debug.Unindent;

	    End If;

	End Sub UserProc;


В результате выполнения примера в окно консоли будет выведена отметка,
 соответствующая каждой выделенной области в таблице и отметка, соответствующая
 всем выделенным областям в таблице.


См. также:


[IEaxObjectSelectionManager](IEaxObjectSelectionManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
