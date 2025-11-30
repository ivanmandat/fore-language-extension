# IDataAreaOwner.OwnerInnerStyleSheet

IDataAreaOwner.OwnerInnerStyleSheet
-


# IDataAreaOwner.OwnerInnerStyleSheet


## Синтаксис


OwnerInnerStyleSheet: [IStyleSheet](ModDrawing.chm::/Interface/IStyleSheet/IStyleSheet.htm);


## Описание


Свойство OwnerInnerStyleSheet
 возвращает внутреннюю таблицу стилей объекта.


## Комментарии


Для работы с внешней таблицей стилей используйте свойство [IDataAreaOwner.OwnerStyleSheet](IDataAreaOwner.OwnerStyleSheet.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие аналитической
 панели с идентификатором DASHBOARD_STYLE. Данная панель должна содержать
 только диаграмму.


Добавьте ссылки на системные сборки: Adhoc, Drawing, Express, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    Report: IAdhocReport;

	    DsoObj: IAdhocDataSourceObject;

	    DaOwner: IDataAreaOwner;

	    Style: IStyleSheet;

	    StyleCont: IStyleContainer;

	    StEntity: IStyledEntity;

	Begin

	    // Получаем текущий репозиторий

	    mb := MetabaseClass.Active;

	    // Получаем аналитическую панель

	    Report := mb.ItemById("DASHBOARD_STYLE").Edit As IAdhocReport;

	    // Получаем источник данных визуализатора

	    DsoObj := Report.DataSourceObjects.Item(0);

	    // Получаем объект для работы с областью данных

	    DaOwner := DsoObj.GetSourceObject As IDataAreaOwner;

	    // Получаем внутреннюю таблицу стилей

	    Style := DaOwner.OwnerInnerStyleSheet;

	    // Добавляем контейнер стилей в таблицу стилей

	    StyleCont := Style.Add(0, "");

	    // Получаем стиль оформления визуализатора

	    StEntity := (DaOwner As IEaxAnalyzer).Chart.Chart As IStyledEntity;

	    // Сохраняем стиль оформления визуализатора в контейнер стилей

	    StEntity.SaveStyleToContainer(StyleCont);

	    // Сохраняем изменения

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера во внутренней таблице стилей аналитической
 панели будет сохранен стиль оформления диаграммы.


См. также:


[IDataAreaOwner](IDataAreaOwner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
