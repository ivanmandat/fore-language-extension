# IDataAreaCommentManager.Comments

IDataAreaCommentManager.Comments
-


# IDataAreaCommentManager.Comments


## Синтаксис


Comments(TabSheet: [ITabSheet](TabSheet.chm::/Interface/ITabSheet/ITabSheet.htm);
 Row: Integer; Column: Integer): [IDataAreaComments](../IDataAreaComments/IDataAreaComments.htm);


## Параметры


TabSheet. Таблица листа, которой
 принадлежит ячейка с данными.


Row. Индекс строки ячейки с
 данными.


Column. Индекс столбца ячейки
 с данными.


## Описание


Свойство Comments возвращает
 комментарии к ячейке с указанными координатами.


## Комментарии


Указываемые координаты должны соответствовать ячейке, относящейся к
 диапазону ячеек с данными какого-либо среза. Диапазон с данными можно
 получить, используя свойство [IEaxGrid.SpecificRange](../IEaxGrid/IEaxGrid.SpecificRange.htm)
 с параметром [EaxRangeType.Internal](../../Enums/EaxRangeType.htm).
 Для проверки наличия возможности работы с комментариями используйте свойство
 [IEaxDataAreaSource.HasCommentsSupport](../IEaxDataAreaSource/IEaxDataAreaSource.HasCommentsSupport.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT. В качестве источника в отчёт добавлен
 стандартный куб, в котором включена возможность сохранения комментариев
 к ячейкам с данными. На базе источника создан срез и визуализатор - таблица.


Добавьте ссылки на системные сборки: Express, Metabase, Report, Tab.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Report: IPrxReport;

	    DataArea: IEaxDataArea;

	    Slice: IEaxDataAreaSlice;

	    Grid: IEaxGrid;

	    TSheet: ITabSheet;

	    DataRange: ITabRange;

	    CommentManager: IDataAreaCommentManager;

	    Comments: IDataAreaComments;

	    Comment: IDataAreaComment;

	    i, j: Integer;

	Begin

	    Mb := MetabaseClass.Active;

	    Report := Mb.ItemById("REPORT").Open(Null) As IPrxReport;

	    // Аналитическая область данных

	    DataArea := Report.DataArea;

	    Slice := DataArea.Slices.Item(0);

	    If Slice.Source.HasCommentsSupport Then

	        Grid := Slice.Views.Item(0) as IEaxGrid;

	        TSheet := Grid.TabSheet;

	        DataRange := Grid.SpecificRange(EaxRangeType.Internal);

	        // Менеджер комментариев

	        CommentManager := DataArea.CommentManager;

	        Comments := CommentManager.Comments(TSheet, DataRange.Top, DataRange.Left);

	        For Each Comment In Comments Do

	            Debug.WriteLine(Comment.Text);

	            Debug.Indent;

	            Debug.WriteLine("Ключ: " + Comment.Key.ToString + ". Создан: " + Comment.TimeStamp.ToString + ' ' + Comment.User + ". Права: " + Comment.Rights);

	            Debug.Write("Coords: ");

	            j := Comment.Coords.Length;

	            For i := 0 To j - 1 Step 2 Do

	                Debug.Write("[Row: " + Comment.Coords[i].ToString + ", Column: " + Comment.Coords[i + 1].ToString + ']');

	            End For;

	            Debug.WriteLine("");

	            Debug.Unindent;

	            Debug.WriteLine("----------");

	        End For;

	    End If;

	End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведена информация
 о комментариях, созданных для первой ячейки с данными у среза аналитической
 области данных.


См. также:


[IDataAreaCommentManager](IDataAreaCommentManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
