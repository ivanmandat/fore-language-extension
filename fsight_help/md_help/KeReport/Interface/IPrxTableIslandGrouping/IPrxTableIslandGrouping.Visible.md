# IPrxTableIslandGrouping.Visible

IPrxTableIslandGrouping.Visible
-


# IPrxTableIslandGrouping.Visible


## Синтаксис


Visible: Boolean;


## Описание


Свойство Visible определяет
 возможность расположения заголовков группируемых данных в отдельном столбце.


## Комментарии


Свойство принимает значения:


	- True. По умолчанию.
	 Доступно расположения заголовков группируемых данных в отдельном столбце.
	 Установлен флажок «[Отобразить
	 группу в отдельном столбце](UiReport.chm::/desktop/Relational_data_area/Parameter/UiReport_Relation_Grouping.htm#group_parameters)» и доступна установка
	 раскрывающейся иерархии. Раскрывающаяся иерархия определяется свойством
	 [IPrxTableIslandGrouping.Hierarchical](IPrxTableIslandGrouping.Hierarchical.htm);


	- False. Расположение
	 заголовков группируемых данных в отдельном столбце недоступно. Флажок
	 [Отобразить
	 группу в отдельном столбце](UiReport.chm::/desktop/Relational_data_area/Parameter/UiReport_Relation_Grouping.htm#group_parameters)» снят.


## Пример


Для выполнения примера убедитесь, что в репозитории содержится регламентный
 отчёт с идентификатором REGULAR_REPORT с настроенной [группировкой](UiReport.chm::/desktop/Relational_data_area/Parameter/UiReport_Relation_Grouping.htm)
 реляционной области данных.


Добавьте ссылки на системные сборки: Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Report: IPrxReport;

	    TabIs: IPrxTableIslands;

	    TI: IPrxTableIsland;

	    Grs: IPrxTableIslandGroupings;

	    Gr: IPrxTableIslandGrouping;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчёт на редактирование

	    MObj := MB.ItemById("REGULAR_REPORT").Edit;

	    Report := MObj As IPrxReport;

	    TabIs := Report.TableIslands;

	    TI := TabIs.Item(0);

	    TI := Ti.Edit;

	    // Получим настройки первой группы

	    Grs := TI.Groupings;

	    Gr := Grs.Item(0);

	    // Снимем флажки «Отобразить группу в отдельном столбце» и «Раскрывающаяся иерархия»

	    Gr.Visible := False;

	    If Gr.IsHierarchical Then

	        Gr.Hierarchical := TriState.OffOption;

	    End If;

	    // Сохраним изменения в отчете

	    TI.Save;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в регламентном отчёте с идентификатором REGULAR_REPORT
 будут сняты флажки «[Отобразить
 группу в отдельном столбце](UiReport.chm::/desktop/Relational_data_area/Parameter/UiReport_Relation_Grouping.htm#group_parameters)» и «[Раскрывающаяся
 иерархия](UiReport.chm::/desktop/Relational_data_area/Parameter/UiReport_Relation_Grouping.htm#group_parameters)» в настройке группировки реляционной
 области данных.


См. также:


[IPrxTableIslandGrouping](IPrxTableIslandGrouping.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
