# IMapScale.Count

IMapScale.Count
-


# IMapScale.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count определяет количество
 значений в шкале (разбиений).


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT.


Добавьте ссылки на системные сборки: Drawing, Map, Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    MapScale : IMapColorScale;

	    i : Integer;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчёт

	    Report := MB.ItemById("REPORT").Edit As IPrxReport;

	    // Добавим цветовую шкалу

	    MapScale := Report.Scales.Add(PrxMapScale.Color).MapScale As IMapColorScale;

	    MapScale.Count := 7;

	    For i := 0 To MapScale.Count - 1 Do

	        MapScale.Value(i) := (i + 1) * 3000;

	        MapScale.Color(i, MapScaleSettingImpact.Less) := New GxColor.CreateRGB(120, 100 + (i*15), 225);

	        MapScale.Color(i, MapScaleSettingImpact.Exact) := New GxColor.CreateRGB(170, 100 + (i*15), 225);

	        MapScale.Color(i, MapScaleSettingImpact.Greater) := New GxColor.CreateRGB(220, 100 + (i*15), 225);

	    End For;

	End Sub UserProc;


Для регламентного отчета будет создана цветовая шкала.


См. также:


[IMapScale](IMapScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
