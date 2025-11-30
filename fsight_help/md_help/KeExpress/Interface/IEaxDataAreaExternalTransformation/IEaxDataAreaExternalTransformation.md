# IEaxDataAreaExternalTransformation

IEaxDataAreaExternalTransformation
-


# IEaxDataAreaExternalTransformation


Сборка: Express;


## Описание


Интерфейс IEaxDataAreaExternalTransformation
 используется для настройки задачи моделирования, используемой для преобразования
 данных в регламентном отчёте.


## Иерархия наследования


           [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


           IEaxDataAreaExternalTransformation


## Комментарии


Для получения объекта данного типа используйте свойства и методы интерфейса
 [IEaxDataAreaExternalTransformations](../IEaxDataAreaExternalTransformations/IEaxDataAreaExternalTransformations.htm).


Через интерфейс аналогично осуществляется работа с [алгоритмами
 расчёта](DataEntryForms.chm::/Desktop/Table/Calculation_Practices.htm) в формах ввода.


При работе с задачей моделирования результат расчёта матрицы данных
 должен напрямую передаваться в аналитическую область данных. Для этого
 используйте свойство [IEaxGrid.FillTabSheet](KeExpress.chm::/Interface/IEaxGrid/IEaxGrid.FillTabSheet.htm)
 со значением False.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CalculationMode](IEaxDataAreaExternalTransformation.CalculationMode.htm)
		 Свойство CalculationMode
		 определяет режим срабатывания алгоритма расчёта.


		 ![](../../Property_Image.gif)
		 [CalculationPeriodMode](IEaxDataAreaExternalTransformation.CalculationPeriodMode.htm)
		 Свойство CalculationPeriodMode
		 определяет способ формирования отметки, которая будет использоваться
		 для расчёта алгоритма.


		 ![](../../Property_Image.gif)
		 [ControlInfo](IEaxDataAreaExternalTransformation.ControlInfo.htm)
		 Свойство ControlInfo
		 возвращает параметры задачи моделирования.


		 ![](../../Property_Image.gif)
		 [EnableArithmeticErrors](IEaxDataAreaExternalTransformation.EnableArithmeticErrors.htm)
		 Свойство EnableArithmeticErrors
		 определяет результат выполнения задачи моделирования при делении
		 на 0.


		 ![](../../Property_Image.gif)
		 [Enabled](IEaxDataAreaExternalTransformation.Enabled.htm)
		 Свойство Enabled определяет
		 доступность выполнения задачи моделирования.


		 ![](../../Property_Image.gif)
		 [ExtendLoadSelection](IEaxDataAreaExternalTransformation.ExtendLoadSelection.htm)
		 Свойство ExtendLoadSelection
		 определяет признак расширения отметки для увеличения диапазона
		 загружаемых данных.


		 ![](../../Property_Image.gif)
		 [Params](IEaxDataAreaExternalTransformation.Params.htm)


		 ![](../../Property_Image.gif)
		 [Problem](IEaxDataAreaExternalTransformation.Problem.htm)
		 Свойство Problem определяет
		 задачу моделирования при обновлении регламентного отчёта или изменении
		 данных.


		 ![](../../Property_Image.gif)
		 [SaveDataOption](IEaxDataAreaExternalTransformation.SaveDataOption.htm)
		 Свойство SaveDataOption
		 определят признак сохранения данных в источник при вычислении
		 значений [алгоритмом
		 расчёта на изменение](DataEntryForms.chm::/Desktop/Table/Calculation_Practices.htm#addalgorithm).


		 ![](../../Property_Image.gif)
		 [ValidationExceptions](IEaxDataAreaExternalTransformation.ValidationExceptions.htm)
		 Свойство ValidationExceptions
		 возвращает матрицу исключений валидации по заданному источнику
		 задачи моделирования.


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


См. также:


[Интерфейсы
 сборки Express](../KeExpress_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
