# IStyleSheet.FindByTag

IStyleSheet.FindByTag
-


# IStyleSheet.FindByTag


## Синтаксис


FindByTag(Tag: String): [IStyleContainerCollection](../IStyleContainerCollection/IStyleContainerCollection.htm);


## Параметры


Tag. Текстовая метка.


## Описание


Метод FindByTag осуществляет
 поиск контейнера стиля по текстовой метке.


## Комментарии


Поиск является регистронезависимым.


Текстовая метка позволяет определить стиль какого визуализатора содержится
 в контейнере:


	- BubbleChart. Стиль пузырьковой
	 диаграммы;


	- BubbleTree. Стиль пузырькового
	 дерева;


	- CHART. Стиль диаграммы;


	- ExternLegend. Стиль
	 внешней легенды диаграмм;


	- MAP. Стиль карты (топооснова
	 в формате TBS);


	- MapChart. Стиль карты
	 (топооснова в формате SVG);


	- TAB. Стиль ячейки таблицы;


	- TreeMap. Стиль плоского
	 дерева.


## Пример


Рассмотрим пример подключения таблицы стилей к экспресс-отчёту.


Для выполнения примера в репозитории предполагается наличие таблицы
 стилей с идентификатором STYLE_TB и экспресс-отчёта с идентификатором
 EAX_STYLE_MAP. Отчёт должен содержать диаграмму.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    styleSheet: IStyleSheet;

	    contCollection: IStyleContainerCollection;

	    container: IStyleContainer;

	    report: IEaxAnalyzer;

	    entity: IStyledEntity;

	Begin

	    // Получаем текущий репозиторий

	    mb := MetabaseClass.Active;

	    // Получаем таблицу стилей

	    styleSheet := mb.ItemById("STYLE_TB").Bind As IStyleSheet;

	    // Выполняем поиск контейнеров, содержащих стили для диаграмм

	    contCollection := styleSheet.FindByTag("CHART");

	    // Если контейнер найден, то получаем первый контейнер из всех найденных

	    If contCollection.Count > 0 Then

	        container := contCollection.Item(0);

	        // Получаем экспресс-отчёт

	        report := mb.ItemById("EAX_STYLE_MAP").Edit As IEaxAnalyzer;

	        // Получаем стиль диаграммы

	        entity := report.Chart.Chart As IStyledEntity;

	        // Выполняем загрузку стиля для диаграммы из контейнера стиля

	        entity.LoadStyleFromContainer(container);

	        // Сохраняем отчёт

	        (report As IMetabaseObject).Save;

	    End If;

	End Sub UserProc;


В результате выполнения примера в таблице стилей будет выполнен поиск
 стилей, предназначенных для диаграммы. Если стили будут найдены, то первый
 найденный стиль будет применён для оформления диаграммы в экспресс-отчёте.


Рассмотрим пример применения стиля из таблицы стилей, уже подключённой
 к экспресс-отчёту. Для выполнения примера в репозитории предполагается
 наличие экспресс-отчёта с идентификатором EAX_STYLE_MAP с подключённой
 к нему таблицей стилей. Отчёт должен содержать диаграмму.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    ContainerCollection: IStyleContainerCollection;

	    StyleContainer: IStyleContainer;

	    StyleSheet: IStyleSheet;

	    StyledEntity: IStyledEntity;

	    Report: IEaxAnalyzer;

	Begin

	    // Получим текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Откроем экспресс-отчёт на редактирование

	    MObj := MB.ItemById("EAX_STYLE_MAP").Edit;

	    Report := MObj As IEaxAnalyzer;

	    // Получим таблицу стилей

	    StyleSheet := Report.StyleSheet;

	    // Выполним поиск контейнеров, содержащих стили для диаграмм

	    ContainerCollection := StyleSheet.FindByTag("CHART");

	    // Если контейнеры найдены, то получим первый контейнер

	    If ContainerCollection.Count > 0 Then

	        StyleContainer := ContainerCollection.Item(0);

	        // Получим стиль диаграммы

	        StyledEntity := Report.Chart.Chart As IStyledEntity;

	        // Подключим стиль для диаграммы из контейнера стиля

	        StyledEntity.LoadStyleFromContainer(StyleContainer);

	        // Сохраним отчёт

	        (Report As IMetabaseObject).Save;

	    End If;

	End Sub UserProc;


В результате выполнения примера в экспресс-отчёте будет выполнен поиск
 стилей, предназначенных для диаграммы. Если стили будут найдены, то первый
 найденный стиль будет применён для оформления диаграммы в отчёте.


См. также:


[IStyleSheet](IStyleSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
