# IDefTableArea.ShowAccessCells

IDefTableArea.ShowAccessCells
-


# IDefTableArea.ShowAccessCells


## Синтаксис


ShowAccessCells: Boolean;


## Описание


Свойство ShowAccessCells определяет,
 будут ли в ячейках отображаться пиктограммы прав доступа.


## Комментарии


По умолчанию свойству установлено значение True,
 при этом для ячеек будет использоваться пиктограмма, отражающая права
 доступа пользователя к данным:


	- Если имеются права только на чтение, то в ячейке будет отображаться
	 пиктограмма ![](../../cellLocked.png) и значение;


	- Если нет права на чтение, то в ячейке будет отображаться только
	 пиктограмма ![](../../cellLocked.png);


	- При наличии ограничения прав на вычисляемые ячейки будут отображаться
	 две пиктограммы: ![](../../cellLocked.png) и ![](../../cellCountable.png).


Если свойству ShowAccessCells
 установить значение False, то
 пиктограмма для отображения прав доступа не будет использоваться.


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

    TArea.ShowAccessCells := False;

    TArea.ShowEvalCells := False;

End Sub HideNameAndTitles;


При выполнении макроса для табличной области будет отключено отображение
 пиктограмм прав доступа и вычисляемых ячеек.


См. также:


[IDefTableArea](IDefTableArea.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
