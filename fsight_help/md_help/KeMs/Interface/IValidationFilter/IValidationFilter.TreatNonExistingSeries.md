# IValidationFilter.TreatNonExistingSeries

IValidationFilter.TreatNonExistingSeries
-


# IValidationFilter.TreatNonExistingSeries


## Синтаксис


TreatNonExistingSeries: Boolean;


## Описание


Свойство TreatNonExistingSeries
 определяет, выполнять ли фильтр валидации для несуществующих, но возможных
 рядов.


## Комментарии


Несуществующие, но возможные ряды - это ряды, получаемые разницей между
 декартовым произведением всех атрибутов базы данных временных рядов и
 существующими рядами.


Допустимые значения:


	- True. Валидация выполняется
	 и для несуществующих рядов. При сохранении исключений для рядов, которых
	 нет в БД, будут создаваться ряды, отмеченные как удаленные. Также
	 упадет скорость расчета валидации;


	- False. Значение по умолчанию.
	 Валидация выполняется только для существующих рядов.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором «OBJ_RUBRICATOR», содержащий правило
 валидации «VALID_FILTER».


Также необходимо добавить ссылки на системные сборки «Metabase», «Ms».


			    Sub UserProc;

    Var

        Mb: IMetabase;

        RubrDescr: IMetabaseObjectDescriptor;

        Valid: IValidationFilter;

    Begin

        Mb := MetabaseClass.Active;

        RubrDescr := Mb.ItemById("OBJ_RUBRICATOR");

        Valid := Mb.ItemByIdNamespace("VALID_FILTER", RubrDescr.Key).Edit As IValidationFilter;

        Valid.TreatNonExistingSeries
 := True;

       (Valid As
 IMetabaseObject).Save;

    End Sub UserProc;


После выполнения примера фильтр валидации будет рассчитываться и для
 несуществующих, но возможных рядов.


См. также:


[IValidationFilter](IValidationFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
