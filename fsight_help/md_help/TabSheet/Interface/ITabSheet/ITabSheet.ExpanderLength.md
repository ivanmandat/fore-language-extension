# ITabSheet.ExpanderLength

ITabSheet.ExpanderLength
-


# ITabSheet.ExpanderLength


## Синтаксис


ExpanderLength(Row: Integer; Column: Integer): Integer;


## Параметры


Row. Индекс строки, в которой
 располагается экспандер. Допустимое значение параметра находится в диапазоне
 [0, [ITabSheet.RowsCount](ITabSheet.RowsCount.htm)).


Column. Индекс столбца, в котором
 располагается экспандер. Допустимое значение параметра находится
 в диапазоне [0, [ITabSheet.ColumnsCount](ITabSheet.ColumnsCount.htm)).


## Описание


Свойство ExpanderLength возвращает
 количество строк/столбцов, попадающих под действие экспандера.


## Комментарии


Если свойство ExpanderLength принимает положительное значение, то экспандер раскрывается
 вниз и вправо, если отрицательное значение - то вверх и влево.


Для создания экспандера используйте метод [ITabSheet.CreateExpander](ITabSheet.CreateExpander.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие
 регламентного отчета с идентификатором «REP_TABSHEET».


Добавьте ссылки на системные сборки: Drawing, Metabase, Report, Tab.


			Sub UserExp;

Var

    MB: IMetabase;

    Rep: IPrxReport;

    SheetT: IPrxTable;

    Tab: ITabSheet;

    Exp: Integer;

Begin

    MB := MetabaseClass.Active;

    Rep := MB.ItemById("REP_TABSHEET").Bind As IPrxReport;

    SheetT := Rep.Sheets.Item(0) As IPrxTable;

    Tab := SheetT.TabSheet;

    Exp := Tab.ExpanderLength(0, 0);

    If Exp <> 0

        Then Debug.WriteLine("Размер экспандера: " + Exp.ToString + " (столбцов/строк)");

        Else Debug.WriteLine("В указанной ячейке экспандер отсутствует");

    End If;

End Sub UserExp;


Результат выполнения примера: в окно консоли будет выведен размер экспандера,
 расположенного в указанной ячейке.


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
