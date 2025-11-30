# MsProblem

MsProblem
-


# MsProblem


Сборка: Ms;


## Описание


Класс MsProblem предназначен
 для работы с задачей моделирования.


## Комментарии


Задача моделирования - объект, выполняющий последовательный расчёт моделей
 из цепочки расчета с целью получения выходных данных в результирующих
 переменных. По окончании расчета результаты расчета моделей выгружаются
 в переменные.


## Свойства, унаследованные от [IMsProblem](../../Interface/IMsProblem/IMsProblem.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AdditionalDetails](../../Interface/IMsProblem/IMsProblem.AdditionalDetails.htm)
		 Свойство AdditionalDetails
		 возвращает коллекцию дополнительных параметров расчета задачи.


		 ![](../../Property_Image.gif)
		 [Details](../../Interface/IMsProblem/IMsProblem.Details.htm)
		 Свойство Details определяет
		 базовые параметры расчета задачи.


		 ![](../../Property_Image.gif)
		 [DimensionFix](../../Interface/IMsProblem/IMsProblem.DimensionFix.htm)
		 Свойство DimensionFix
		 возвращает коллекцию всех фиксированных измерений, входящих в
		 переменные, данные которых будут использоваться при расчете задачи.


		 ![](../../Property_Image.gif)
		 [EditMetaModel](../../Interface/IMsProblem/IMsProblem.EditMetaModel.htm)
		 Свойство EditMetaModel
		 возвращает внутреннюю метамодель.


		 ![](../../Property_Image.gif)
		 [MetaModel](../../Interface/IMsProblem/IMsProblem.MetaModel.htm)
		 Свойство MetaModel
		 определяет метамодель, содержащую цепочку расчета для задачи.


		 ![](../../Property_Image.gif)
		 [PointwiseSettings](../../Interface/IMsProblem/IMsProblem.PointwiseSettings.htm)
		 Свойство PointwiseSettings
		 возвращает параметры поточечного расчёта задачи.


		 ![](../../Property_Image.gif)
		 [Scenarios](../../Interface/IMsProblem/IMsProblem.Scenarios.htm)
		 Свойство Scenarios
		 возвращает коллекцию сценариев, по которым будет производиться
		 расчет данной задачи.


		 ![](../../Property_Image.gif)
		 [UseCubes](../../Interface/IMsProblem/IMsProblem.UseCubes.htm)
		 Свойство UseCubes определяет,
		 использовать ли кубы для отчётов по переменным.


		 ![](../../Property_Image.gif)
		 [UseSavedCoefficients](../../Interface/IMsProblem/IMsProblem.UseSavedCoefficients.htm)
		 Свойство UseSavedCoefficients
		 определяет, будут ли использоваться сохраненные коэффициенты моделей
		 при расчете задачи.


		 ![](../../Property_Image.gif)
		 [ValueFlag](../../Interface/IMsProblem/IMsProblem.ValueFlag.htm)
		 Свойство ValueFlag
		 определяет значение флага, используемого для отметки изменившихся
		 значений.


		 ![](../../Property_Image.gif)
		 [VariableStubs](../../Interface/IMsProblem/IMsProblem.VariableStubs.htm)
		 Свойство VariableStubs
		 возвращает коллекцию переменных, данные которых используются при
		 расчете данной задачи.


		 ![](../../Property_Image.gif)
		 [Workspace](../../Interface/IMsProblem/IMsProblem.Workspace.htm)
		 Свойство Workspace
		 определяет рабочее пространство задачи.


		 ![](../../Property_Image.gif)
		 [WorkspaceDescriptor](../../Interface/IMsProblem/IMsProblem.WorkspaceDescriptor.htm)
		 Свойство WorkspaceDescriptor
		 определяет объект, содержащий описание рабочего пространства задачи.


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


## Методы, унаследованные от [IMsProblem](../../Interface/IMsProblem/IMsProblem.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Calculate](../../Interface/IMsProblem/IMsProblem.Calculate.htm)


		 Метод Calculate создает
		 объект, осуществляющий расчет задачи.


		 ![](../../Sub_Image.gif)
		 [Convert](../../Interface/IMsProblem/IMsProblem.Convert.htm)


		 Метод Convert
		 преобразует метамодель, рассчитываемую задачей, во внутреннюю
		 без использования объектов и обратно.


		 ![](../../Sub_Image.gif)
		 [CreateCalculationSettings](../../Interface/IMsProblem/IMsProblem.CreateCalculationSettings.htm)


		 Метод CreateCalculationSettings
		 создает объект, содержащий настройки используемые при расчете
		 задачи.


		 ![](../../Sub_Image.gif)
		 [CreateMetaModel](../../Interface/IMsProblem/IMsProblem.CreateMetaModel.htm)


		 Метод CreateMetaModel
		 создает внутреннюю метамодель.


		 ![](../../Sub_Image.gif)
		 [CreateVariablesReport](../../Interface/IMsProblem/IMsProblem.CreateVariablesReport.htm)


		 Метод CreateVariablesReport
		 создает отчет по переменным для задачи моделирования.


		 ![](../../Sub_Image.gif)
		 [RestoreLaner](../../Interface/IMsProblem/IMsProblem.RestoreLaner.htm)


		 Метод RestoreLaner
		 восстанавливает рабочую область базы данных временных рядов из
		 задачи.


См. также:


[Классы
 сборки Ms](../KeMs_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
