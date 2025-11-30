# IRdsBaseBinding.InUniqueKey

IRdsBaseBinding.InUniqueKey
-


# IRdsBaseBinding.InUniqueKey


## Синтаксис


InUniqueKey: Boolean;


## Описание


Свойство InUniqueKey определяет
 признак использования привязки ключа.


## Комментарии


Допустимые значения:


	- True. При импорте справочника
	 НСИ используется привязка ключа. Задавать привязку атрибута «[Ключ](../IRdsLoaderBindings/IRdsLoaderBindings.KeyBinding.htm)»
	 не требуется;


	- False. При импорте справочника
	 НСИ не используется привязка ключа.


Свойство используется для настройки [импорта](UiNavObj.chm::/reference_book/Master_RDS_reference_book/Import.htm)
 справочников НСИ.


## Пример


Для выполнения примера в репозитории предполагается наличие таблицы
 с идентификатором T_BINDING и папки с идентификатором F_RDS_BINDING. Таблица
 должна содержать строковые поля NAME и EDUCATION.


Добавьте ссылки на системные сборки: Dal, Db, Metabase, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    RdsLoader: IMetaRdsLoader;

    Bindings: IRdsLoaderBindings;

    PredBinding: IRdsPredefinedBinding;

    Binding: IRdsUserAttributeBinding;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Создаем объект для создания справочника НСИ и загрузки в него данных

    RdsLoader := New MetaRdsLoader.Create;

    // Указываем таблицу, являющуюся источником данных

    RdsLoader.TableSource := MB.ItemById("T_BINDING").Bind As ITable;

    // Задаем привязки полей таблицы и создаваемого справочника

    Bindings := RdsLoader.Bindings;

    // Задаем привязку атрибута «Наименование»

    PredBinding := Bindings.NameBinding;

    PredBinding.Field := "NAME";

    // Указываем, что используется привязка ключа

    PredBinding.InUniqueKey := True;

    // Добавляем привязку для пользовательского атрибута

    Binding := Bindings.Add(RdsLoaderBindingType.UserAttribute) As IRdsUserAttributeBinding;

    Binding.Field := "EDUCATION";

    // Указываем, что атрибут, создаваемый в справочнике НСИ, будет иметь тип «Длинный текст»

    Binding.DataDomain := DbDataDomain.Memo;

    // Задаем информацию о создаваемом справочнике

    CrInfo := MB.CreateCreateInfo;

    CrInfo.Parent := MB.ItemById("F_RDS_BINDING");

    CrInfo.Id := MB.GenerateId("DICT", 0);

    // Указываем базу данных, используемую для создания справочника НСИ

    RdsLoader.Database := RdsLoader.TableSource.Database;

    // Создаем справочник

    (RdsLoader.CreateObject(CrInfo) As IMetabaseObject).Save;

    // Выполняем загрузку данных

    RdsLoader.Load(UpdateLoadMode.Insert);

End Sub UserProc;


В результате выполнения примера в указанной папке будет создан справочник
 с идентификатором DICT, используемый для загрузки данных из таблицы T_BINDING.


См. также:


[IRdsBaseBinding](IRdsBaseBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
