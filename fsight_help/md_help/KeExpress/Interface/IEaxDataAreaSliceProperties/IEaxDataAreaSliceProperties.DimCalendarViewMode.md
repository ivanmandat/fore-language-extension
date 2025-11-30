# IEaxDataAreaSliceProperties.DimCalendarViewMode

IEaxDataAreaSliceProperties.DimCalendarViewMode
-


# IEaxDataAreaSliceProperties.DimCalendarViewMode


## Синтаксис


DimCalendarViewMode(Dimkey: Integer): [EaxCalendarViewMode](../../Enums/EaxCalendarViewMode.htm);


## Описание


Свойство DimCalendarViewMode
 определяет настройку режима отображения календарных измерений.


## Пример


Для выполнения примера предполагается наличие экспресс-отчета с идентификатором
 EXPRESS. В экспресс-отчете имеется источник данных, содержащий измерение
 с индексом «0». На форме предполагается наличие компонента Button с наименованием
 «Button1».


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Eax: IEaxAnalyzer;

	    dimI: IDimInstance;

	Begin

	    //Получаем экспресс-отчет

	    Eax := MetabaseClass.Active.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    //Получаем данные календарного измерения

	    dimI := Eax.Pivot.Dimensions.Item(0).DimInstance;

	    //Задаем режим отображения календарного измерения

	    Eax.DataArea.Slices.Item(0).Properties.DimCalendarViewMode(dimI.Key) := EaxCalendarViewMode.Levels;

	    (Eax As IMetabaseObject).Save;

	End Sub Button1OnClick;


В результате выполнения примера после нажатия
 кнопки для календарного измерения будет установлен режим отображения только
 по уровням.


См. также:


[IEaxDataAreaSliceProperties](IEaxDataAreaSliceProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
