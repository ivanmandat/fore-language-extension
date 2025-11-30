# IEaxDataAreaSlice.ResetTopobase

IEaxDataAreaSlice.ResetTopobase
-


# IEaxDataAreaSlice.ResetTopobase


## Синтаксис


ResetTopobase;


## Описание


Метод ResetTopobase заменяет
 текущую карту на заданную в репозитории [по умолчанию](UiNav.chm::/02_Navigator/Repo_Default.htm).


## Комментарии


Если карта в репозитории по умолчанию не выбрана, то при вызове метода
 ничего не произойдет.


Для задания топоосновы для отчета используйте свойство [IEaxDataAreaSlice.Topobase](IEaxDataAreaSlice.Topobase.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS_TOPOBASE. Отчет содержит карту, которая не используется
 в качестве заданной по умолчанию.


Добавьте ссылки на системные сборки: Express, Metabase, Topobase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Analyzer: IEaxAnalyzer;

	    DataArea: IEaxDataArea;

	    Slice: IEaxDataAreaSlice;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Analyzer := MB.ItemById("EXPRESS_TOPOBASE").Edit As IEaxAnalyzer;

	    // Получим область данных

	    DataArea := Analyzer.DataArea;

	    // Получим срез данных

	    Slice := DataArea.Slices.Item(0);

	    // Сбросим топооснову

	    Slice.ResetTopobase;

	    // Сохраним изменения

	    (Analyzer As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера карта сменится на .


См. также:


[IEaxDataAreaSlice](IEaxDataAreaSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
