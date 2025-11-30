# IDefTableArea.ShowName

IDefTableArea.ShowName
-


# IDefTableArea.ShowName


## Синтаксис


		ShowName: Boolean;


## Описание


Свойство ShowName определяет
 состояние флажка «Отображать наименование».


## Комментарии


Допустимые значения:


	- True. Значение по умолчанию.
	 Флажок установлен;


	- False. Флажок снят.


## Пример


Для выполнения примера предполагается наличие в репозитории формы ввода,
 для которой указанный макрос назначен в качестве исполняемого метода для
 пользовательской кнопки. В форме ввода создана табличная область.


Добавьте ссылки на системные сборки: Metabase, Report. Также добавьте
 ссылки на сборки, которые [необходимы](../../Intro/DataEntryFormsCore_Intro.htm#link_assembly)
 для работы с формами ввода.


					Public Sub HideNameAndTitles(Report: IPrxReport);

		Var

		    Mb: IMetabase;

		    DEForm: IDataEntryForm;

		    TArea: IDefTableArea;

		Begin

		    Mb := MetabaseClass.Active;

		    // Экземпляр текущей формы ввода

		    DEForm := New DataEntryForm.CreateByReport(Report);

		    // Получить табличную
		 область

		    TArea := DEForm.InputAreas.Item(0) As IDefTableArea;

		    TArea.ShowName := False;

		    TArea.ShowTitles := False;

		End Sub HideNameAndTitles;


При выполнении макроса для табличной области будет отключено отображение
 наименования и шапки/боковика при отсутствии отметки по измерениям боковика/шапки
 соответственно.


См. также:


[IDefTableArea](IDefTableArea.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
