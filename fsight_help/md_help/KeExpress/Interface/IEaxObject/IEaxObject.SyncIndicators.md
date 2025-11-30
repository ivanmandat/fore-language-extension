# IEaxObject.SyncIndicators

IEaxObject.SyncIndicators
-


# IEaxObject.SyncIndicators


## Синтаксис


SyncIndicators: Boolean;


## Описание


Свойство SyncIndicators определяет,
 включена ли [синхронизация
 метрик](UiSelection.chm::/Selection/Dimension_type.htm#sync) для визуализаторов.


## Комментарии


Допустимые значения:


	- True. Синхронизация
	 включена;


	- False. По умолчанию.
	 Синхронизация выключена.


Список визуализаторов и правил синхронизации (•, ■):


		 Приоритет / визуализатор


		 Таблица


		 Диаграмма


		 Карта


		 Пузырьковая
		 диаграмма


		 Пузырьковое
		 дерево


		 Плоское
		 дерево


		 Значение
		 •


		 •


		 Цвет


		 •


		 •


		 •


		 •


		 Размер
		 ■


		 ■


		 ■


		 ■


		 ■


Для синхронизации метрик необходимых визуализаторов свойство SyncIndicators
 должно принимать значение True
 для каждого визуализатора отдельно.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчета
 с идентификатором EXPRESS, содержащего несколько типов визуализаторов.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    BC: IEaxObject;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим пузырьковую диаграмму

	    BC := Express.BubbleChart As IEaxObject;

	    // Синхронизируем метрики визуализаторов

	    BC.SyncIndicators := True;

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в синхронизацию метрик будет включена метрика
 пузырьковой диаграммы.


См. также:


[IEaxObject](IEaxObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
