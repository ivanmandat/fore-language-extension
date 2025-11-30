# IValidationFilter

IValidationFilter
-


# IValidationFilter


Сборка: Ms;


## Описание


Интерфейс IValidationFilter
 содержит свойства и методы для работы с правилом валидации.


## Иерархия наследования


           [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


           [IVirtualMetaObject](Laner.chm::/Interface/IVirtualMetaObject/IVirtualMetaObject.htm)


           [IValidationFilterModel](Laner.chm::/Interface/IValidationFilterModel/IValidationFilterModel.htm)


           IValidationFilter


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Details](IValidationFilter.Details.htm)
		 Свойство Details возвращает
		 специфические настройки правила валидации.


		 ![](../../Property_Image.gif)
		 [EndDateSettings](IValidationFilter.EndDateSettings.htm)
		 Свойство EndDateSettings
		 определяет конечную дату расчета правила валидации.


		 ![](../../Property_Image.gif)
		 [ExceptionsLimit](IValidationFilter.ExceptionsLimit.htm)
		 Свойство ExceptionsLimit
		 определяет пороговое количество исключений, выгружаемых
		 правилом валидации.


		 ![](../../Property_Image.gif)
		 [Kind](IValidationFilter.Kind.htm)
		 Свойство Kind определяет
		 тип правила валидации.


		 ![](../../Property_Image.gif)
		 [Level](IValidationFilter.Level.htm)
		 Свойство Level определяет
		 календарный уровень для расчета правила.


		 ![](../../Property_Image.gif)
		 [ParamProvider](IValidationFilter.ParamProvider.htm)
		 Свойство ParamProvider
		 определяет объект, предназначенный для работы с параметрами правила
		 валидации и их значениями.


		 ![](../../Property_Image.gif)
		 [Params](IValidationFilter.Params.htm)
		 Свойство Params возвращает
		 набор параметров правила валидации.


		 ![](../../Property_Image.gif)
		 [StartDateSettings](IValidationFilter.StartDateSettings.htm)
		 Свойство StartDateSettings
		 определяет начальную дату расчета правила валидации.


		 ![](../../Property_Image.gif)
		 [TreatNonExistingSeries](IValidationFilter.TreatNonExistingSeries.htm)
		 Свойство TreatNonExistingSeries
		 определяет, выполнять ли фильтр валидации для несуществующих,
		 но возможных рядов.


		 ![](../../Property_Image.gif)
		 [UserComponents](IValidationFilter.UserComponents.htm)
		 Свойство UserComponents
		 возвращает коллекцию пользовательских компонентов валидации.


## Свойства, унаследованные от [IValidationFilterModel](Laner.chm::/Interface/IValidationFilterModel/IValidationFilterModel.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Settings](Laner.chm::/Interface/IValidationFilterModel/IValidationFilterModel.Settings.htm)


		 Свойство Settings возвращает
		 настройки валидации.


## Свойства, унаследованные от [IVirtualMetaObject](Laner.chm::/Interface/IVirtualMetaObject/IVirtualMetaObject.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Description](Laner.chm::/Interface/IVirtualMetaObject/IVirtualMetaObject.Description.htm)


		 Свойство Description
		 определяет описание объекта.


		 ![](../../Property_Image.gif)
		 [MetabaseObject](Laner.chm::/Interface/IVirtualMetaObject/IVirtualMetaObject.MetabaseObject.htm)


		 Свойство MetabaseObject
		 определяет объект репозитория, внутри которого хранится объект.


## Свойства, унаследованные от [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Id](KeSom.chm::/Interface/INamedEntity/INamedEntity.Id.htm)
		 Свойство Id определяет
		 идентификатор объекта.


		 ![](../../Property_Image.gif)
		 [Key](KeSom.chm::/Interface/INamedEntity/INamedEntity.Key.htm)
		 Свойство Key возвращает
		 ключ объекта.


		 ![](../../Property_Image.gif)
		 [Name](KeSom.chm::/Interface/INamedEntity/INamedEntity.Name.htm)
		 Свойство Name определяет
		 наименование объекта.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateExecuteSettings](IValidationFilter.CreateExecuteSettings.htm)
		 Метод CreateExecuteSettings
		 создаёт настройки для расчёта валидации.


		 ![](../../Sub_Image.gif)
		 [Execute](IValidationFilter.Execute.htm)
		 Метод Execute выполняет
		 расчёт правила валидации.


		 ![](../../Sub_Image.gif)
		 [GetComponentsByFactor](IValidationFilter.GetComponentsByFactor.htm)
		 Метод GetComponentsByFactor
		 возвращает массив рядов-компонентов, для которых был сделан расчет
		 валидации для указанного показателя.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
