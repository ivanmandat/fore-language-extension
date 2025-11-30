# ILaner.ValidationExecKey

ILaner.ValidationExecKey
-


# ILaner.ValidationExecKey


## Синтаксис


ValidationExecKey: Integer;


## Описание


Свойство ValidationExecKey определяет
 ключ запуска правила валидации.


## Комментарии


Значение свойства влияет на содержимое рабочей книги при её открытии
 в системном интерфейсе.


Если ValidationExecKey = -1,
 то отображается стандартная рабочая книга.


Если указан ключ запуска валидации, то в дереве рядов отображаются ряды,
 содержащиеся в результатах валидации; правило валидации выполняется на
 листе рабочей книги.


Если указан ключ запуска валидации, а сам запуск уже удален, то отображается
 чистый лист с информацией о том, что запуск удален.


## Пример


Для выполнения примера в репозитории предполагается наличие БД временных
 рядов с идентификатором «TSDB», содержащей правило валидации с идентификатором
 «VALID». Также должна существовать рабочая книга с идентификатором «WORK_BOOK».


			Sub UserProc;

Var

    Mb: IMetabase;

    RubyObj: IMetabaseObjectDescriptor;

    ValiObj: IMetabaseObject;

    ValidFilter: IValidationFilter;

    ValidExecSett: IValidationExecuteSettings;

    ValidExecRun: IValidationExecRun;

    ci: IMetabaseObjectCopyInfo;

    wb: IEaxAnalyzer;

Begin

    // Получаем правило валидации

    Mb := MetabaseClass.Active;

    RubyObj := Mb.ItemById("TSDB");

    ValiObj := Mb.ItemByIdNamespace("VALID", RubyObj.Key).Edit;

    ValidFilter := ValiObj As IValidationFilter;

    // Выполняем правило для всей БД временных рядов

    ValidExecSett := New ValidationExecuteSettings.Create;

    ValidExecRun := ValidFilter.Execute(ValidExecSett);

    // Создаем копию рабочей книги

    ci := mb.CreateCopyInfo;

    ci.Source := Mb.ItemById("WORK_BOOK");

    ci.Destination := ci.Source.Parent;

    ci.Id := mb.GenerateId("WB");

    mb.CopyObject(ci);

    wb := mb.ItemById(ci.Id).Edit As IEaxAnalyzer;

    // Указываем, что рабочая книга содержит результаты валидации

    wb.Laner.ValidationExecKey := ValidExecRun.Data.Key;

    (wb As IMetabaseObject).Save;

End Sub UserProc;


Результат выполнения примера: для БД временных рядов «TSDB» выполнено
 правило валидации «VALID»; результаты выполнения выгружены в копию рабочей
 книги «WORK_BOOK».


См. также:


[ILaner](ILaner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
