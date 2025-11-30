# IDataAreaCommentManager.DeleteComment

IDataAreaCommentManager.DeleteComment
-


# IDataAreaCommentManager.DeleteComment


## Синтаксис


DeleteComment(TabSheet: [ITabSheet](TabSheet.chm::/Interface/ITabSheet/ITabSheet.htm);
 Row: Integer; Column: Integer; Key: Integer): [IDataAreaComments](../IDataAreaComments/IDataAreaComments.htm);


## Параметры


TabSheet. Таблица листа, которой
 принадлежит ячейка с данными.


Row. Индекс строки ячейки с
 данными.


Column. Индекс столбца ячейки
 с данными.


Key. Ключ удаляемого комментария.


## Описание


Метод DeleteComment у указанной
 ячейки с данными удаляет комментарий с заданным ключом.


## Комментарии


Указываемые координаты должны соответствовать ячейке, относящейся к
 диапазону ячеек с данными какого-либо среза. Диапазон с данными можно
 получить, используя свойство [IEaxGrid.SpecificRange](../IEaxGrid/IEaxGrid.SpecificRange.htm)
 с параметром [EaxRangeType.Internal](../../Enums/EaxRangeType.htm).
 Для проверки наличия возможности работы с комментариями используйте свойство
 [IEaxDataAreaSource.HasCommentsSupport](../IEaxDataAreaSource/IEaxDataAreaSource.HasCommentsSupport.htm).


Результатом работы метода будет коллекция всех комментариев, которые
 остались у указанной ячейки.


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

	Begin

	    Mb := MetabaseClass.Active;

	    Report := Mb.ItemById("REPORT").Open(Null) As IPrxReport;

	    // Аналитическая область данных

	    DataArea := Report.DataArea;

	    Slice := DataArea.Slices.Item(0);

	    If Slice.Source.HasCommentsSupport Then

	        Grid := Slice.Views.Item(0) As IEaxGrid;

	        TSheet := Grid.TabSheet;

	        DataRange := Grid.SpecificRange(EaxRangeType.Internal);

	        // Менеджер комментариев

	        CommentManager := DataArea.CommentManager;

	        // Удаление комментария

	        Comments := CommentManager.Comments(TSheet, DataRange.Top, DataRange.Left);

	        CommentManager.DeleteComment(TSheet, DataRange.Top, DataRange.Left, Comments.Item(0).Key);

	    End If;

	End Sub UserProc;


При выполнении примера у первой ячейки с данными будет удалён комментарий,
 который был создан самым первым.


См. также:


[IDataAreaCommentManager](IDataAreaCommentManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
