# ITabSheet.CreateExpander

ITabSheet.CreateExpander
-


# ITabSheet.CreateExpander


## Синтаксис


CreateExpander(Row: Integer; Column: Integer; Length;
 Integer; ExpanderKind: [TabExpanderKind](../../Enums/TabExpanderKind.htm));


## Параметры


Row. Индекс строки, в которой
 располагается ячейка с экспандером. Допустимое значение параметра находится
 в диапазоне [0, [ITabSheet.RowsCount](ITabSheet.RowsCount.htm)).


Column. Индекс столбца, в котором
 располагается ячейка с экспандером. Допустимое значение параметра находится
 в диапазоне [0, [ITabSheet.ColumnsCount](ITabSheet.ColumnsCount.htm));


Length. Количество строк/столбцов,
 попадающих под действие экспандера. Параметр может принимать и отрицательные
 значения;


ExpanderKind. Область действия
 экспандера.


## Описание


Метод CreateExpander позволяет
 создать экспандер в ячейке, координаты которой передаются в качестве входных
 параметров Row и Column.


## Комментарии


Если параметр Length
 принимает положительное значение, то экспандер раскрывается вниз и вправо,
 если отрицательное значение - то вверх и влево.


Для изменения пиктограммы, отражающих состояние экспандера, используйте
 свойства [ITabSheet.ExpanderOnPicture](ITabSheet.ExpanderOnPicture.htm)
 и [ITabSheet.ExpanderOffPicture](ITabSheet.ExpanderOffPicture.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REP_TABSHEET. В файловой системе должны присутствовать
 два изображения: «C:\On.gif» и «C:\Off.gif».


Добавьте ссылки на системные сборки: Drawing, Metabase, Report, Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rep: IPrxReport;

	    SheetT: IPrxTable;

	    Tab: ITabSheet;

	    TImg: ITabImages;

	    ExpOn, ExpOff: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Rep := MB.ItemById("REP_TABSHEET").Edit As IPrxReport;

	    SheetT := Rep.ActiveSheet As IPrxTable;

	    Tab := SheetT.TabSheet;

	    Tab.CreateExpander(0, 0, 4, TabExpanderKind.Rows);

	    Tab.ExpanderState(0, 0) := TriState.OffOption;

	    TImg := Tab.Images;

	    ExpOn := TImg.Add(GxImage.FromFile("C:\On.gif"));

	    ExpOff := TImg.Add(GxImage.FromFile("C:\Off.gif"));

	    Tab.ExpanderOnPicture := ExpOn;

	    Tab.ExpanderOffPicture := ExpOff;

	    (Rep As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера на активном листе регламентного отчёта в ячейке
 A0 будет создан экспандер. Действие экспандера будет распространяться
 на четыре строки, для экспандера будет установлено свёрнутое состояние.
 Также в регламентном отчёте будут изменены изображения, отражающие состояния
 экспандеров.


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
