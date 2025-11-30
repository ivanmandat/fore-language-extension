# IPivot.BuildWithEmptyHeader

IPivot.BuildWithEmptyHeader
-


# IPivot.BuildWithEmptyHeader


## Синтаксис


BuildWithEmptyHeader: Boolean;


## Описание


Свойство BuildWithEmptyHeader
 определяет признак отстраивания шапки или боковика при пустой отметке.


## Комментарии


Допустимые значения:


	- True. Шапка/боковик
	 отстраивается при пустой отметке;


	- False. По умолчанию.
	 Шапка/боковик не отстраивается при пустой отметке.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXPRESS. Экспресс-отчёт содержит таблицу, источником
 данных которой является куб, содержащий справочник с идентификатором
 DIC_RF. Данный справочник установлен в качестве измерения боковика таблицы
 экспресс-отчёта. Элементы измерений шапки и боковика отмечены.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Pivot: IPivot;

	    Dim: IDimSelectionSet;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим настройки отображения таблицы данных отчета

	    Pivot := Express.Pivot;

	    // Установим отображение заголовков при пустой отметке

	    Pivot.BuildWithEmptyHeader := True;

	    // Получим отметку измерений источников данных
	 экспресс-отчета

	    Dim := Pivot.Selection;

	    // Удалим отметку измерения боковика

	    Dim.RemoveById("DIC_RF");

	    // Сохраним изменения

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера в таблице экспресс-отчёта будет удалена
 отметка измерения боковика, заголовки шапки будут отображаться, флажок
 «[Всегда
 отображать заголовки](UiAnalyticalArea.chm::/tableview/layout/layout.htm)»
 будет установлен.


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
