# IValidationFilters.Add

IValidationFilters.Add
-


# IValidationFilters.Add


## Синтаксис


Add(Filter: Object);


## Параметры


Filter. Фильтр валидации.


## Описание


Метод Add осуществляет добавление
 фильтра в коллекцию.


## Пример


Для выполнения примера в репозитории предполагается наличие базы
 данных временных рядов с идентификатором «TSDB», содержащей правила валидации
 с идентификаторами «VALID_MISSING_DATA» и «VALID_GROWTH_RATE».


Добавьте ссылки на системные сборки: Cubes, Metabase, Ms


			Sub UserProc;

Var

    Mb: IMetabase;

    RubDescr: IMetabaseObjectDescriptor;

    CreateInfo: IMetabaseObjectCreateInfo;

    ValidGroupObj: IMetabaseObject;

    ValidGroup: IValidationGroup;

    ValidFilters: IValidationFilters;

    FilterDescr: IMetabaseObjectDescriptor;

    ValidExecSett: IValidationExecuteSettings;

    ValidExecRun: IValidationExecRun;

Begin

    // Получаем репозиторий

    Mb := MetabaseClass.Active;

    // Получаем базу данных временных рядов

    RubDescr := Mb.ItemById("TSDB");

    // Создаем группу валидаций

    CreateInfo := Mb.CreateCreateInfo;

    CreateInfo.ClassId := MetabaseObjectClass.KE_CLASS_VALIDATIONGROUP;

    CreateInfo.Parent := RubDescr;

    CreateInfo.Permanent := True;

    // Настраиваем группу валидаций

    ValidGroupObj := Mb.CreateObject(CreateInfo).Edit;

    ValidGroup := ValidGroupObj As IValidationGroup;

    // Добавляем в группу правила валидации

    ValidFilters := ValidGroup.ValidationFilters;

    FilterDescr := Mb.ItemByIdNamespace("VALID_MISSING_DATA", RubDescr.Key);

    ValidFilters.Add(FilterDescr);

    FilterDescr := Mb.ItemByIdNamespace("VALID_GROWTH_RATE", RubDescr.Key);

    ValidFilters.Add(FilterDescr);

    // Сохраняем изменения

    ValidGroupObj.Save;

    // Выполняем группу валидаций

    ValidExecSett := New ValidationExecuteSettings.Create;

    ValidExecRun := ValidGroup.Execute(ValidExecSett);

End Sub UserProc;


После выполнения примера будет создана группа фильтров валидации, состоящая
 из двух фильтров. Данная группа будет выполнена, результаты выполнения
 сохранены.


См. также:


[IValidationFilters](IValidationFilters.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
