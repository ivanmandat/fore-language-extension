# IEaxGridViewSettings.CreateRegion

IEaxGridViewSettings.CreateRegion
-


# IEaxGridViewSettings.CreateRegion


## Синтаксис


CreateRegion: Boolean;


## Описание


Свойство CreateRegion определяет,
 будет ли создан регион таблицы в регламентном отчете.


## Комментарии


Допустимые значения:


	- True. По умолчанию.
	 Регион будет создан;


	- False. Регион создан
	 не будет.


Регион таблицы - это объект типа [ITabRegion](TabSheet.chm::/Interface/ITabRegion/ITabRegion.htm).
 Признаком наличия региона таблицы в регламентном отчете является синий
 треугольник в левом верхнем углу таблицы.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором REPORT. В отчете создана аналитическая область
 данных.


Добавьте ссылки на системные сборки: Express, Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    Grid: IEaxGrid;

	    ViewSets: IEaxGridViewSettings;

	Begin

	    // Получим таблицу

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("REPORT").Edit As IPrxReport;

	    Grid := Report.DataArea.Views.Item(0) As IEaxGrid;

	    // Получим настройки представления таблицы

	    ViewSets := Grid.ViewSettings;

	    // Не будем создавать регион

	    ViewSets.CreateRegion := False;

	    // Отображаться будут только данные

	    ViewSets.OutputPart := EaxGridOutputPart.Data;

	    ViewSets.OutputRange := "A7:G12";

	    // Отображать гиперссылки как текст

	    ViewSets.HyperlinkAsText := True;

	    // Сохраним изменения

	    Report.MetabaseObject.Save;

	End Sub UserProc;


После выполнения примера в таблице регламентного отчета будет отображаться
 область значений в указанном диапазоне. Регион для области значений создан
 не будет.


См. также:


[IEaxGridViewSettings](IEaxGridViewSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
