# IEaxSheet.Id

IEaxSheet.Id
-


# IEaxSheet.Id


## Синтаксис


Id: String;


## Описание


Свойство Id возвращает идентификатор
 листа.


## Комментарии


Для определения наименования листа используйте [IEaxSheet.Name](IEaxSheet.Name.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS_REPORT.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Eax: IEaxAnalyzer;

	    Sheet: IEaxSheet;

	Begin

	    MB := MetabaseClass.Active;

	    Eax := MB.ItemById("EXPRESS_SHEETID").Bind As IEaxAnalyzer;

	    Sheet := Eax.Sheets.Item(0);

	    Debug.WriteLine("Идентификатор листа отчета - " + Sheet.Id);

	End Sub UserProc;


После выполнения примера в окно консоли выведется идентификатор первого
 листа отчета.


См. также:


[IEaxSheet](IEaxSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
