# IEaxAnalyzeCore.InnerStyleSheet

IEaxAnalyzeCore.InnerStyleSheet
-


# IEaxAnalyzeCore.InnerStyleSheet


## Синтаксис


InnerStyleSheet: [IStyleSheet](ModDrawing.chm::/Interface/IStyleSheet/IStyleSheet.htm);


## Описание


Свойство InnerStyleSheet
 определяет внутреннюю таблицу стилей экспресс-отчета.


## Комментарии


Для работы с внешней таблицей стилей используйте свойство [IEaxAnalyzeCore.StyleSheet](IEaxAnalyzeCore.StyleSheet.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчета
 с идентификатором EXPRESS_STYLE. Данный отчет должен содержать диаграмму.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    Report: IEaxAnalyzer;

	    Style: IStyleSheet;

	    StyleCont: IStyleContainer;

	    StEntity: IStyledEntity;

	Begin

	    // Получаем текущий репозиторий

	    mb := MetabaseClass.Active;

	    // Получаем экспресс-отчет

	    Report := mb.ItemById("EXPRESS_STYLE").Edit As IEaxAnalyzer;

	    // Получаем внутреннюю таблицу стилей

	    Style := Report.InnerStyleSheet;

	    // Добавляем контейнер стилей в таблицу стилей

	    StyleCont := Style.Add(0, "");

	    // Получаем стиль оформления диаграммы из отчета

	    StEntity := Report.Chart.Chart As IStyledEntity;

	    // Сохраняем стиль оформления диаграммы в контейнер стилей

	    StEntity.SaveStyleToContainer(StyleCont);

	    // Сохраняем изменения

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера во внутренней таблице стилей экспресс-отчета
 будет сохранен стиль оформления диаграммы.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
