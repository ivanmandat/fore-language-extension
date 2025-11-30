# ITabSheet.PasteEx

ITabSheet.PasteEx
-


# ITabSheet.PasteEx


## Синтаксис


PasteEx(


PasteMode: [TabPasteMode](../../Enums/TabPasteMode.htm);


[SkipEmptyCells: Boolean
 = False];


[Transpose: Boolean =
 False]);


## Параметры


PasteMode. Режим вставки.


SkipEmptyCells. Признак пропуска
 ячеек с пустыми значениями.


Transpose. Признак необходимости
 транспонировать данные при вставке.


## Описание


Метод PasteEx осуществляет специальную
 вставку.


## Комментарии


Для вставки данных из буфера обмена в отмеченную область таблицы используйте
 метод [ITabSheet.Paste](ITabSheet.Paste.htm).


Специальная вставка из буфера обмена в отмеченную область не поддерживается,
 если данные скопированы из стороннего источника.


Если во вставляемом диапазоне имеются ячейки с пустым значением и параметру
 SkipEmptyCells установлено значение
 True, то для этих ячеек не будут
 вставлены формулы, оформление, комментарии.


Используется только в настольном приложении.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «Regl_rep».


Добавьте ссылки на системные сборки «Metabase», «Report» и «Tab».


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Rep: IPrxReport;

    Tab: ITabSheet;

    Sheet: IPrxTable;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("Regl_rep").Edit;

    Rep := MObj As IPrxReport;

    Sheet := Rep.Sheets.Item(0) As IPrxTable;

    Tab := Sheet.TabSheet;

    Tab.View.Selection.Range := Tab.Cells(0, 0, 7, 1);

    Tab.View.Selection.Copy;

    Tab.View.Selection.Range := Tab.Cell(5, 5);

    Tab.PasteEx(TabPasteMode.Values, True, True);

    MObj.Save;

End Sub UserProc;


После выполнения примера в регламентном отчете будут скопированы значения
 ячеек «A0:B7» и вставлены в строку, начиная с ячейки «E4».


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
