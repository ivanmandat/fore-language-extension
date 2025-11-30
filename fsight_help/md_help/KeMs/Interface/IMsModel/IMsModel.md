# IMsModel

IMsModel
-


# IMsModel


Сборка: Ms;


## Описание


Интерфейс IMsModel содержит
 свойства и методы объекта контейнера моделирования - Модель.


## Иерархия наследования


           [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


           [IVirtualMetaObject](Laner.chm::/Interface/IVirtualMetaObject/IVirtualMetaObject.htm)


           [IValidationFilterModel](Laner.chm::/Interface/IValidationFilterModel/IValidationFilterModel.htm)


           IMsModel


## Комментарии


Модель предназначена для расчета результирующих переменных путем преобразования
 исходных переменных статистическими и математическими методами. Расчёты
 ведутся с учетом календарной динамики модели (годы, полугодия, кварталы,
 месяцы, дни).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AttributeFormulasList](IMsModel.AttributeFormulasList.htm)


		 Свойство AttributeFormulasList
		 возвращает коллекцию методов расчета дополнительных атрибутов
		 по формулам.


		 ![](../../Property_Image.gif)
		 [AutoName](IMsModel.AutoName.htm)


		 Свойство AutoName определяет,
		 генерировать ли наименование модели автоматически.


		 ![](../../Property_Image.gif)
		 [CalculationPeriod](IMsModel.CalculationPeriod.htm)


		 Свойство CalculationPeriod
		 определяет период действия формулы.


		 ![](../../Property_Image.gif)
		 [Chart](IMsModel.Chart.htm)


		 Свойство Chart
		 возвращает диаграмму модели.


		 ![](../../Property_Image.gif)
		 [IsExclusive](IMsModel.IsExclusive.htm)


		 Свойство IsExclusive
		 возвращает признак того, является ли модель внутренней для цепочки
		 расчета.


		 ![](../../Property_Image.gif)
		 [SaveZeros](IMsModel.SaveZeros.htm)


		 Свойство SaveZeros
		 определяет, сохранять ли нулевые значения, полученные при расчете
		 модели.


		 ![](../../Property_Image.gif)
		 [Stochastic](IMsModel.Stochastic.htm)


		 Свойство Stochastic
		 возвращает True, если
		 для расчета модели используются стохастические методы.


		 ![](../../Property_Image.gif)
		 [Transform](IMsModel.Transform.htm)


		 Свойство Transform
		 возвращает объект, позволяющий настроить параметры модели.


		 ![](../../Property_Image.gif)
		 [TreatNullsAsZeros](IMsModel.TreatNullsAsZeros.htm)


		 Свойство TreatNullsAsZeros
		 определяет, заменять ли при расчете модели пустые значения нулями.


		 ![](../../Property_Image.gif)
		 [UseAutoPeriod](IMsModel.UseAutoPeriod.htm)


		 Свойство UseAutoPeriod
		 возвращает признак того, что для расчета дат начала/окончания
		 периодов идентификации и прогнозирования используются условия.


		 ![](../../Property_Image.gif)
		 [UseExistingData](IMsModel.UseExistingData.htm)


		 Свойство UseExistingData
		 определяет, будут ли использоваться все фактические данные входных
		 переменных при расчете модели.


		 ![](../../Property_Image.gif)
		 [UseModelPeriod](IMsModel.UseModelPeriod.htm)


		 Свойство UseModelPeriod
		 определяет, будут ли при расчете задачи использоваться указанные
		 для модели периоды идентификации и прогнозирования.


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
		 [CreateCalculation](IMsModel.CreateCalculation.htm)


		 Метод CreateCalculation
		 создает объект, содержащий настройки, необходимые при расчете
		 модели.


		 ![](../../Sub_Image.gif)
		 [CreateStringGenerator](IMsModel.CreateStringGenerator.htm)


		 Метод CreateStringGenerator
		 создает генератор строкового представления модели.


		 ![](../../Sub_Image.gif)
		 [Execute](IMsModel.Execute.htm)


		 Метод Execute осуществляет
		 расчет модели.


		 ![](../../Sub_Image.gif)
		 [ReplaceOutputVariable](IMsModel.ReplaceOutputVariable.htm)


		 Метод ReplaceOutputVariable
		 осуществляет замену выходной переменной.


		 ![](../../Sub_Image.gif)
		 [RestoreLaner](IMsModel.RestoreLaner.htm)


		 Метод RestoreLaner
		 восстанавливает рабочую область базы данных временных рядов из
		 модели.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
