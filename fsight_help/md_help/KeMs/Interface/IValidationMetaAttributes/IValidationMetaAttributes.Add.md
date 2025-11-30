# IValidationMetaAttributes.Add

IValidationMetaAttributes.Add
-


# IValidationMetaAttributes.Add


## Синтаксис


Add(Attribute: [IMetaAttribute](KeRds.chm::/Interface/IMetaAttribute/IMetaAttribute.htm));


## Параметры


Attribute. Добавляемый атрибут.


## Описание


Метод Add осуществляет добавление
 атрибута в коллекцию.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов OBJ_FC. В данной базе должен присутствовать фильтр валидации
 с идентификатором OBJ_VALID_FILTER.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms,
 Rds.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubrKey: Integer;

    ValidObj: IMetabaseObject;

    ValidFilter: IValidationFilter;

    MissingMetaData: IValidationMissingMetaData;

    ValidExecSett: IValidationExecuteSettings;

    ValidExecRun: IValidationExecRun;

    SelValList: IValidationSelectionValueList;

    SelectionFilter: IValidationSelectionFilter;

    Rub: IRubricator;

    MetaAttr: IMetaAttribute;

    ValidMetaAttrs: IValidationMetaAttributes;

Begin

    Mb := MetabaseClass.Active;

    // Получаем базу данных временных рядов

    RubrKey := Mb.GetObjectKeyById("OBJ_FC");

    // Получаем правило валидации

    ValidObj := Mb.ItemByIdNamespace("OBJ_VALID_FILTER", RubrKey).Edit;

    ValidFilter := ValidObj As IValidationFilter;

    ValidFilter.Level := DimCalendarLevel.None;

    ValidFilter.Kind := ValidationDetailsKind.MissingMetaData;

    MissingMetaData := ValidFilter.Details As IValidationMissingMetaData;

    Rub := Mb.ItemById("OBJ_FC").Bind As IRubricator;

    MetaAttr := Rub.Facts.Attributes.FindById("OBT");

    ValidMetaAttrs := MissingMetaData.Attributes;

    ValidMetaAttrs.Add(MetaAttr);

    // Задаем сравниваемые данные

    SelValList := MissingMetaData.SelectionTargetData;

    SelValList.Clear;

    // Получаем параметры фильтрации данных, по которым выполняется валидация

    SelectionFilter := MissingMetaData.SelectionFilter;

    // Очищаем текущий фильтр

    SelectionFilter.Clear;

    // Сохраняем изменения правила валидации

    ValidObj.Save;

    // Выполняем правило

    ValidExecSett := New ValidationExecuteSettings.Create;

    ValidExecRun := ValidFilter.Execute(ValidExecSett);

End Sub UserProc;


После выполнения примера будет настроен фильтр валидации «Пропуски в
 метаданных»: при его выполнении будет проверяться наличие значения атрибута
 OBT у показателя. Данный фильтр будет выполнен, результаты выполнения
 сохранены в БД.


См. также:


[IValidationMetaAttributes](IValidationMetaAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
