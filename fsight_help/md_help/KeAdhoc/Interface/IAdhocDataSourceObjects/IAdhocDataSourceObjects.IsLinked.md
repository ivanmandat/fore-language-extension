# IAdhocDataSourceObjects.IsLinked

IAdhocDataSourceObjects.IsLinked
-


# IAdhocDataSourceObjects.IsLinked


## Синтаксис


IsLinked: Boolean;


## Описание


Свойство IsLinked возвращает
 признак того, является ли источник связанным.


## Комментарии


К связанным источникам данных относятся источники данных для блоков типа
 «Экспресс-отчет», «Регламентный
 отчет» или «Аналитическая панель».


Допустимые значения:


	- True. Источник является
	 связанным;


	- False. Источник не является
	 связанным.


## Пример


Для выполнения примера в репозитории предполагается наличие аналитической
 панели с идентификатором «DASHBOARD_F»
 и экспресс-отчета с идентификатором «EXP_F».


Добавьте ссылки на системные сборки: Adhoc, Express, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj, Mbod: IMetabaseObject;

    Sourse: IEaxAnalyzer;

    Dashboard, Db: IAdhocReport;

    DbSources: IAdhocDataSourceObjects;

    DbSource: IAdhocDataSourceObject;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Получаем аналитическую панель

    MObj := MB.ItemById("DASHBOARD_F").Edit;

    Dashboard := MObj As IAdhocReport;

    // Получаем источники данных аналитической панели

    DbSources := Dashboard.DataSourceObjects;

    DbSources.RemoveById("EXP_F");

    //Добавляем новый источник данных

    Mbod := MB.ItemById("EXP_F") As IMetabaseObject;

    Dashboard.AddDataSourceObject("EXP_F", Mbod.Edit);

    // Обновляем метаданные источника

    DbSource := DbSources.Item(0);

    Dashboard.RefreshDataSources(DbSource);

    // Выводим установлена ли связь

    Debug.WriteLine("Связан ли источник: " + DbSources.IsLinked.ToString);

    // Выводим имя источника

    Sourse := DbSource.GetSourceObject As IEaxAnalyzer;

    Debug.WriteLine("Название источника: " + Sourse.Name);

    // Выводим имя родительской

    Db := DbSources.Report;

    Debug.WriteLine("Идентификатор активного слайда отчета: " + Db.ActiveSlide.Id);

    // Сохраняем аналитическую панель

    MObj.Save;

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведено: является
 ли источник связанным, название источника и идентификатор активного слайда
 отчета. В аналитическую панель будет добавлен экспресс-отчет в качестве
 источника данных и будут обновлены метаданные источника.


См. также:


[IAdhocDataSourceObjects](IAdhocDataSourceObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
