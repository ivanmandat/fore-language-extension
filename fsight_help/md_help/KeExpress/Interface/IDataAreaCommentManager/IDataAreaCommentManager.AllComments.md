# IDataAreaCommentManager.AllComments

IDataAreaCommentManager.AllComments
-


# IDataAreaCommentManager.AllComments


## Синтаксис


AllComments(TabSheet: [ITabSheet](TabSheet.chm::/Interface/ITabSheet/ITabSheet.htm)):
 [IDataAreaComments](../IDataAreaComments/IDataAreaComments.htm);


## Параметры


TabSheet. Таблица листа, в
 которой необходимо получить комментарии к ячейкам с данными.


## Описание


Свойство AllComments возвращает
 все комментарии к ячейкам с данными, имеющиеся в указанной таблице.


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

	        // Менеджер комментариев

	        CommentManager := DataArea.CommentManager;

	        Comments := CommentManager.AllComments(TSheet);

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
 обо всех комментариях, созданных для ячеек с данными.


См. также:


[IDataAreaCommentManager](IDataAreaCommentManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
