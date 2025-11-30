# IDataAreaHeaderStyleSettingsBase.Owner

IDataAreaHeaderStyleSettingsBase.Owner
-


# IDataAreaHeaderStyleSettingsBase.Owner


## Синтаксис


Owner: [IDataAreaHeaderStyleSettingsBase](IDataAreaHeaderStyleSettingsBase.htm);


## Описание


Свойство Owner возвращает объект-родитель
 настроек стиля оформления заголовка в области данных.


## Комментарии


Для определения ключа для связи с объектом-родителем используйте [IDataAreaHeaderSettingsBase.SettingKey](../IDataAreaHeaderSettingsBase/IDataAreaHeaderSettingsBase.SettingKey.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS_REPORT. Источником данных является куб. Куб
 содержит многоуровневые измерения.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Pivot: IPivot;

	    DimLevel: IDimLevel;

	    PivotDim: IPivotDimension;

	    DimModel: IDimensionModel;

	    PivotDimLevel: IPivotDimensionLevel;

	    StyleSettings: IDataAreaHeaderStyleSettingsBase;

	    DAHeaderSettings: IDataAreaHeaderSettingsBase;

	    Owner: IDataAreaHeaderSettingsBase;

	    StOwner: IDataAreaHeaderStyleSettingsBase;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS_HEADERSETTINGS").Bind As IEaxAnalyzer;

	    // Получим настройки отображения таблицы данных

	    Pivot := Express.Pivot;

	    // Получим первое измерение

	    PivotDim := Pivot.Dimensions.Item(0);

	    // Получим структуру измерения

	    DimModel := PivotDim.DimInstance.Dimension;

	    // Получим первый
	 уровень измерения

	    DimLevel := DimModel.Levels.Item(0);

	    // Получим уровень измерения таблицы

	    PivotDimLevel := PivotDim.Levels.Item(DimLevel);

	    // Получим настройки стиля для заголовка области данных

	    StyleSettings := PivotDimLevel As IDataAreaHeaderStyleSettingsBase;

	    If StyleSettings = Null Then

	        Debug.WriteLine("В заголовке отсутствуют настройки стиля");

	    Else

	    // Выведем в окно консоли ключ для связи

	    Debug.WriteLine

	    ("Ключ для связи настроек стиля заголовка с объектом-родителем - "

	        + StyleSettings.StyleSettingKey.ToString);

	    End If;

	    // Получим объект-родитель настроек стиля

	    StOwner := StyleSettings.Owner;

	    If StOwner = Null Then

	        Debug.WriteLine("У настроек стиля заголовка нет объекта-родителя");

	    Else

	    // Выведем в окно консоли ключ для связи

	    Debug.WriteLine

	    ("Ключ для связи объекта-родителя - " + StOwner.StyleSettingKey.ToString);

	    End If;

	    // Получим настройки заголовка области данных

	    DAHeaderSettings := PivotDim As IDataAreaHeaderSettingsBase;

	    If DAHeaderSettings = Null Then

	        Debug.WriteLine("В заголовке отсутствуют настройки");

	    Else

	    // Выведем в окно консоли ключ для связи

	    Debug.WriteLine

	    ("Ключ для связи настроек заголовка с объектом-родителем - "

	        + DAHeaderSettings.SettingKey.ToString);

	    End If;

	    // Получим объект-родитель настроек заголовка

	    Owner := DAHeaderSettings.Owner;

	    If Owner = Null Then

	        Debug.WriteLine("У настроек заголовка нет объекта-родителя");

	    Else

	    // Выведем в окно консоли ключ для связи

	    Debug.WriteLine

	    ("Ключ для связи объекта-родителя - " + Owner.SettingKey.ToString);

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли выведутся ключи для связи настроек
 заголовка, стиля заголовка в области данных.


См. также:


[IDataAreaHeaderStyleSettingsBase](IDataAreaHeaderStyleSettingsBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
