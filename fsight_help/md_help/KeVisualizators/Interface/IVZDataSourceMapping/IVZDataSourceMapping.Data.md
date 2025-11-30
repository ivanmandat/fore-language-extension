# IVZDataSourceMapping.Data

IVZDataSourceMapping.Data
-


# IVZDataSourceMapping.Data


## Синтаксис


Data(elId: String): Variant;


## Параметры


elId. Идентификатор элемента,
 значение которого требуется получить.


## Описание


Свойство Data возвращает значение
 указанного элемента.


## Комментарии


Для определения источника данных используйте свойство [IVZDataSourceMapping.DataSource](IVZDataSourceMapping.DataSource.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS, источник данных которого построен на справочнике
 с идентификатором TBL_DICTIONARY. В отчете для пузырькового дерева должна
 быть выбрана метрика «Цвет».


Добавьте ссылки на системные сборки: Drawing, Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    BubbleTree: IVZBubbleTree;

	    ColorVisual: IVZColorVisual;

	    DataSourceMapping: IVZDataSourceMapping;

	    DataSource: IVZMultiplyDataSource;

	    Element: IGxSolidBrush;

	Begin

	    Metabase := MetabaseClass.Active;

	    EaxAnalyzer := Metabase.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BubbleTree := EaxAnalyzer.BubbleTree.BubbleTree;

	    // Получим визуализатор цвета

	    ColorVisual := BubbleTree.ColorVisual;

	    // Получим настройки сопоставления данных

	    DataSourceMapping := ColorVisual.ColorMapping;

	    // Установим заголовок для источника данных, соответствующий идентификатору

	    DataSource := DataSourceMapping.DataSource;

	    DataSource.Title := DataSource.ID;

	    DataSourceMapping.DataSource := DataSource;

	    // Установим индекс, по которому возвращаются данные из каждого измерения

	    DataSourceMapping.Index := 1;

	    // Установим идентификатор измерения

	    DataSourceMapping.AttributeId := "TBL_DICTIONARY";

	    // Установим заливку для пузырька «нет данных»

	    Element := DataSourceMapping.Data("") As IGxSolidBrush;

	    Element.Color := New GxColor.CreateRGB(0, 255, 255);

	    // Инициализируем шкалу отображения данных

	    DataSourceMapping.Setup;

	    Debug.WriteLine("Наименование источника данных: " +

	        DataSourceMapping.DataSource.Title);

	    Debug.WriteLine("Наименование выбранной отметки измерения: " +

	        DataSourceMapping.Title);

	    Debug.WriteLine("Индекс, по которому возвращаются данные из каждого измерения: " +

	        DataSourceMapping.Index.ToString);

	    Debug.WriteLine("Идентификатор измерения, по которому выбираются данные: " +

	        DataSourceMapping.AttributeId);

	    // Сохраним изменения в экспресс-отчёте

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


До выполнения примера цветовая шкала пузырькового дерева выглядела так,
 как показано на странице описания интерфейса [IVZDataScale](../IVZDataScale/IVZDataScale.htm).


В результате выполнения примера будут установлены:


	- идентификатор для источника данных, идентификатор измерения,
	 по которому выбираются данные;


	- цвет заливки для пузырька «нет данных»:


![](IVZDataSourceMapping_Data.png)


После выполнения примера в окно консоли будут выведены наименование
 источника данных и идентификатор измерения, по которому выбираются данные.


См. также:


[IVZDataSourceMapping](IVZDataSourceMapping.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
