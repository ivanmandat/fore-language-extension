# IVZMapChart.UseZoomOnWheel

IVZMapChart.UseZoomOnWheel
-


# IVZMapChart.UseZoomOnWheel


## Синтаксис


UseZoomOnWheel: Boolean;


## Описание


Свойство UseZoomOnWheel определяет,
 будет ли масштабироваться карта с помощью колесика мыши.


## Комментарии


Если свойству установлено значение True,
 то будет возможность изменять масштаб карты с помощью колесика мыши. При
 значении False такой возможности
 не будет.


## Пример


Для выполнения примера в репозитории предполагается наличие аналитической
 панели с идентификатором ADHOC_REPORT. В активном слайде используется
 карта, отображающая данные какого-либо куба репозитория.


Добавьте ссылки на системные сборки: Adhoc, Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Adhoc: IAdhocReport;

	    Slide: IEaxAnalyzer;

	Begin

	    Mb := MetabaseClass.Active;

	    Adhoc := Mb.ItemById("ADHOC_REPORT").Edit As IAdhocReport;

	    Slide := Adhoc.ActiveSlide.DataSourceObjects.Item(0).GetSourceObject As IEaxAnalyzer;

	    Slide.MapChart.MapChart.UseZoomOnWheel := False;

	    (Adhoc As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера будет запрещено масштабирование карты в активном
 слайде аналитической панели.


См. также:


[IVZMapChart](IVZMapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
