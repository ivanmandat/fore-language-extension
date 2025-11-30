# IEaxDataAreaSliceProperties.UseGridSelection

IEaxDataAreaSliceProperties.UseGridSelection
-


# IEaxDataAreaSliceProperties.UseGridSelection


## Синтаксис


UseGridSelection: Boolean;


## Описание


Свойство UseGridSelection
 определяет, будет ли выделенная область таблицы, построенная на срезе
 данных, использоваться для построения других визуализаторов (диаграмм,
 карт и прочих).


## Комментарии


Допустимые значения:


	- True. Только выделенная
	 часть таблицы, построенной на срезе данных, используется для построения
	 других визуализаторов;


	- False. Вся таблица,
	 построенная на срезе данных, используется для построения других визуализаторов.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчета
 с идентификатором EXPRESS_ATTRSEP.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    DataArea: IEaxDataArea;

	    AreaSlice: IEaxDataAreaSlice;

	    Properties: IEaxDataAreaSliceProperties;

	Begin

	    // Получаем текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получаем экспресс-отчет

	    Express := MB.ItemById("EXPRESS_ATTRSEP").Edit As IEaxAnalyzer;

	    // Получаем аналитическую область данных

	    DataArea := Express.DataArea;

	    // Получаем срез источника данных

	    AreaSlice := DataArea.Slices.Item(0);

	    // Получаем свойства среза источника данных

	    Properties := AreaSlice.Properties;

	    // Указываем, что визуализаторы строятся по всей таблице

	    Properties.UseGridSelection := False;

	    // Сохраняем отчет

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера визуализаторы в экспресс-отчете будут
 строиться по всей таблице данных.


См. также:


[IEaxDataAreaSliceProperties](IEaxDataAreaSliceProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
