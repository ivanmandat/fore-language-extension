# IDefTableArea.ShowParams

IDefTableArea.ShowParams
-


# IDefTableArea.ShowParams


## Синтаксис


ShowParams: Boolean;


## Описание


Свойство ShowParams определяет,
 будут ли отображаться значения параметров над табличной областью.


## Комментарии


По умолчанию свойству установлено значение True,
 при этом над табличной областью будут отображаться параметры, которые
 связаны с измерениями, и отметка в них. При установку свойству значения
 False параметры не будут отображаться
 над табличной областью.


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

    TArea.ShowParams := True;

    TArea.ShowOnlyFixedParams := True;

End Sub HideNameAndTitles;


При выполнении макроса для табличной области будет включено отображение
 элементов только тех параметров, которые связаны с фиксированными измерениями.


См. также:


[IDefTableArea](IDefTableArea.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
