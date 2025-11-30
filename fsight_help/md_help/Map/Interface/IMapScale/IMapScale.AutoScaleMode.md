# IMapScale.AutoScaleMode

IMapScale.AutoScaleMode
-


# IMapScale.AutoScaleMode


## Синтаксис


AutoScaleMode: [MapAutoScaleMode](../../Enums/MapAutoScaleMode.htm);


## Описание


Свойство AutoScaleMode определяет
 тип автоматического расчета шкалы отчета.


## Комментарий


Перед определением типа расчета необходимо свойство [IMapScale.AutoCalculable](IMapScale.AutoCalculable.htm)
 установить в True.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT, в который добавлена [цветовая
 шкала](UIReport.chm::/Desktop/Reports/OperationReport/Scale/UiReport_Reports_Operation_Scale_Colorful.htm).


Добавьте ссылки на системные сборки: Map, Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    MapScale: IMapColorScale;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчёт

	    Report := MB.ItemById("REPORT").Edit As IPrxReport;

	    // Получим цветовую шкалу

	    MapScale := Report.Scales.Item(0).MapScale As IMapColorScale;

	    // Установим автоматический расчёт значений шкалы

	    MapScale.AutoCalculable := True;

	    // Зададим метод расчёта шкалы

	    MapScale.AutoScaleMode := MapAutoScaleMode.Uniform;

	    //Сохраним изменения

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


Для шкалы регламентного отчета будет установлен автоматический расчет
 значений типа «Относительное разбиение».


См. также:


[IMapScale](IMapScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
