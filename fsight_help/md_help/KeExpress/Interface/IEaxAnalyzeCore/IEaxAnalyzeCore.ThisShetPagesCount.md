# IEaxAnalyzeCore.ThisSheetPagesCount

IEaxAnalyzeCore.ThisSheetPagesCount
-


# IEaxAnalyzeCore.ThisSheetPagesCount


## Синтаксис


ThisSheetPagesCount: Integer;


## Описание


Свойство ThisSheetPagesCount
 возвращает количество страниц на указанном листе экспресс-отчета.


## Пример


Для выполнения примера понадобится экспресс-отчет с идентификатором
 EXPRESS_REPORT.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Eax1, Eax2: IEaxAnalyzer;

	Begin

	    MB := MetabaseClass.Active;

	    Eax1 := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    Eax2 := Eax1.ActiveSheet.Analyzer;

	    Debug.WriteLine(Eax2.ThisSheetPagesCount);

	End Sub UserProc;


После выполнения примера количество страниц на указанном листе экспресс-отчета
 будет выведено в консоль.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
