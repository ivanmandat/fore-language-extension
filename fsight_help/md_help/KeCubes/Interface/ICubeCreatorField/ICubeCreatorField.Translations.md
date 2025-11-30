# ICubeCreatorField.Translations

ICubeCreatorField.Translations
-


# ICubeCreatorField.Translations


## Синтаксис


Translations: [ICubeCreatorFieldTranslations](../ICubeCreatorFieldTranslations/ICubeCreatorFieldTranslations.htm);


## Описание


Свойство Translations возвращает
 коллекцию привязок атрибутов с переводами к полям источника.


## Комментарии


Свойство используется при привязке атрибута с типом «Строковый» или
 «Длинный текст» в мультиязычном справочнике НСИ. При работе с мультиязычными
 справочниками можно выделить следующие варианты использования:


	- Если необходимо загрузить значения атрибута, являющиеся наименованиями
	 элементов:


		- Текущий язык репозитория
		 совпадает с языком создания справочника. [Создайте
		 привязку](../ICubeCreatorFields/ICubeCreatorFields.Add.htm) и укажите идентификатор атрибута в свойстве [AttributeId](ICubeCreatorField.AttributeId.htm);


		- Текущий язык репозитория
		 не совпадает с языком создания справочника. [Создайте
		 привязку](../ICubeCreatorFields/ICubeCreatorFields.Add.htm), укажите идентификатор атрибута в свойстве [AttributeId](ICubeCreatorField.AttributeId.htm)
		 и в коллекции Translations
		 создайте привязку для этого же поля и текущего языка репозитория.


	- Если необходимо загрузить значения атрибута, являющиеся переводами.
	 [Создайте
	 привязку](../ICubeCreatorFields/ICubeCreatorFields.Add.htm), укажите идентификатор атрибута в свойстве [AttributeId](ICubeCreatorField.AttributeId.htm)
	 и в коллекции Translations
	 создайте привязки для необходимых полей источника и языков, на которые
	 в этих полях хранятся переводы.


## Пример


Для выполнения примера предполагается наличие в репозитории папки с
 идентификатором «F_CUBES», в которой хранятся кубы. Также предполагается
 наличие файла «C:\Data.xls», в котором имеются столбцы со следующими наименованиями:


	- Value. Столбец со значениями;


	- Date. Столбец с датами;


	- Country Name. Столбец
	 с наименованиями стран на русском языке;


	- Country Name En.
	 Столбец с наименованиями стран на английском языке.


			Sub UserProc;

Var

    MB: IMetabase;

    Loader: ICubeLoaderFromSource;

    Provider: IDtExcelProvider;

    Bindings: ICubeLoaderDimensionBindings;

    Binding: ICubeLoaderDimensionBinding;

    Fields: ICubeCreatorFields;

    Field: ICubeCreatorField;

    FactBindings: ICubeLoaderFactBindings;

    FactBinding: ICubeLoaderFactBinding;

Begin

    MB := MetabaseClass.Active;

    //Источник данных для куба

    Provider := New DtExcelProvider.Create;

    Provider.DriverVersion := "Excel 8.0";

    Provider.File := "D:\Work\Data.xls";

    Provider.HasHeader := True;

    Provider.Query := "Select * From [Лист1$]";

    //Загрузчик данных в куб

    Loader := New CubeLoaderFromSource.Create;

    Loader.Parent := MB.ItemById("CUBE_FOLDER").Bind;

    //Настройка привязок измерений и фактов

    Bindings := Loader.DimensionBindings;

    Binding := Bindings.Add("Country Name");

    Binding.AttributeId := "NAME";

    Binding.NewDictionaryName := "Country";

    Fields := Binding.Fields;

    //Привязка атрибутов перевода

    Field := Fields.Item(0);

    Field.Translations.Add(LocaleCodeID.English_UnitedStates, "Country Name En");

    //Календарь

    Binding := Bindings.AddCalendar("Date", DimCalendarLevel.Month);

    //Привязка фактов

    FactBindings := Loader.FactBindings;

    FactBinding := FactBindings.Add("Value");

    //Создание куба и загрузка данных

    Loader.Load(Provider, Null);

End Sub UserProc;


При выполнении примера будут инициализированы объект импорта из Excel
 и загрузчик данных в куб. На основании информации о полях источника данных
 буду настроены привязки измерений и фактов создаваемого куба. Для стран
 будет создаваться мальтиязычный справочник. При выполнении метода Load
 будут созданы новый стандартный куб, необходимые справочники для измерений
 и таблица для хранения данных. Данные будут импортированы в созданную
 таблицу.


См. также:


[ICubeCreatorField](ICubeCreatorField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
