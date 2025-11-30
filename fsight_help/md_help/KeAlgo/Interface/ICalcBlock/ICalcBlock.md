# ICalcBlock

ICalcBlock
-


# ICalcBlock


Сборка: Algo;


## Описание


Интерфейс ICalcBlock предназначен
 для работы с [блоком
 расчёта](CalculationAlgorithm.chm::/Desktop/Calculation_block/Calculation_unit.htm).


## Иерархия наследования


           [ICalcObject](../ICalcObject/ICalcObject.htm)


           ICalcBlock


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Folder](ICalcBlock.Folder.htm)
		 Свойство Folder возвращает
		 папку в цепочке расчёта метамодели.


		 ![](../../Property_Image.gif)
		 [Iterator](ICalcBlock.Iterator.htm)
		 Свойство Iterator возвращает
		 многомерный итератор блока расчёта.


		 ![](../../Property_Image.gif)
		 [StubOut](ICalcBlock.StubOut.htm)
		 Свойство StubOut определяет
		 приёмник данных, в который будет записываться результат расчёта
		 формул.


		 ![](../../Property_Image.gif)
		 [StubsIn](ICalcBlock.StubsIn.htm)
		 Свойство StubsIn определяет
		 набор источников данных, которые участвуют в расчёте блока.


		 ![](../../Property_Image.gif)
		 [UseCalendarAsStubDimension](ICalcBlock.UseCalendarAsStubDimension.htm)
		 Свойство UseCalendarAsStubDimension
		 определяет признак использования календарного измерения в качестве
		 обычного измерения.


## Свойства, унаследованные от [ICalcObject](../ICalcObject/ICalcObject.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Descriptor](../ICalcObject/ICalcObject.Descriptor.htm)
		 Свойство Descriptor
		 возвращает объект алгоритма расчёта в качестве внутреннего объекта
		 репозитория.


		 ![](../../Property_Image.gif)
		 [Id](../ICalcObject/ICalcObject.Id.htm)
		 Свойство Id определяет
		 идентификатор объекта алгоритма расчёта.


		 ![](../../Property_Image.gif)
		 [IsEdited](../ICalcObject/ICalcObject.IsEdited.htm)
		 Свойство IsEdited возвращает
		 признак редактирования объекта алгоритма расчёта.


		 ![](../../Property_Image.gif)
		 [IsUseExtObject](../ICalcObject/ICalcObject.IsUseExtObject.htm)
		 Свойство IsUseExtObject
		 определяет признак использования объектов репозитория, расположенных
		 вне контейнера или бизнес-приложения.


		 ![](../../Property_Image.gif)
		 [Key](../ICalcObject/ICalcObject.Key.htm)
		 Свойство Key возвращает
		 ключ объекта алгоритма расчёта.


		 ![](../../Property_Image.gif)
		 [Name](../ICalcObject/ICalcObject.Name.htm)
		 Свойство Name определяет
		 наименование объекта алгоритма расчёта.


		 ![](../../Property_Image.gif)
		 [Params](../ICalcObject/ICalcObject.Params.htm)
		 Свойство Params возвращает
		 коллекцию параметров объекта алгоритма расчёта.


		 ![](../../Property_Image.gif)
		 [PrxReport](../ICalcObject/ICalcObject.PrxReport.htm)
		 Свойство PrxReport
		 создаёт [регламентный
		 отчёт](UIReport.chm::/UiReport_purpose.htm)
		 с данными, полученными после расчёта объекта из приёмника данных.


		 ![](../../Property_Image.gif)
		 [SelControl](../ICalcObject/ICalcObject.SelControl.htm)
		 Свойство SelControl
		 определяет настройки управления параметрами измерений источника
		 данных.


		 ![](../../Property_Image.gif)
		 [Type](../ICalcObject/ICalcObject.Type.htm)
		 Свойство Type определяет
		 тип объекта алгоритма расчёта.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddFolder](ICalcBlock.AddFolder.htm)
		 Метод AddFolder создает
		 новую папку в цепочке расчёта метамодели.


		 ![](../../Sub_Image.gif)
		 [AddModel](ICalcBlock.AddModel.htm)
		 Метод AddModel создает
		 новую модель в цепочке расчёта метамодели.


		 ![](../../Sub_Image.gif)
		 [CopyEntries](ICalcBlock.CopyEntries.htm)
		 Метод CopyEntries копирует
		 указанные элементы в заданную папку.


		 ![](../../Sub_Image.gif)
		 [EditIteratorModel](ICalcBlock.EditIteratorModel.htm)
		 Метод EditIteratorModel
		 возвращает параметры для проверки изменений [источников
		 данных](CalculationAlgorithm.chm::/Desktop/Calculation_block/Page_Sources.htm) и сохранения изменений в блоке расчёта.


## Методы, унаследованные от [ICalcObject](../ICalcObject/ICalcObject.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CopyTo](../ICalcObject/ICalcObject.CopyTo.htm)
		 Метод CopyTo копирует
		 настройки текущего объекта в объект, передаваемый во входном параметре.


		 ![](../../Sub_Image.gif)
		 [CreateCopy](../ICalcObject/ICalcObject.CreateCopy.htm)
		 Метод CreateCopy создаёт
		 копию объекта алгоритма расчёта.


		 ![](../../Sub_Image.gif)
		 [Delete](../ICalcObject/ICalcObject.Delete.htm)
		 Метод Delete удаляет
		 объект алгоритма расчёта.


		 ![](../../Sub_Image.gif)
		 [FillSelSetFromParams](../ICalcObject/ICalcObject.FillSelSetFromParams.htm)
		 Метод FillSelSetFromParams
		 передает отметку измерения, которое используется в качестве параметра
		 алгоритма расчёта, на панель параметров.


		 ![](../../Sub_Image.gif)
		 [FindParamUses](../ICalcObject/ICalcObject.FindParamUses.htm)
		 Метод FindParamUses
		 проверяет использование указанного параметра в объекте алгоритма
		 расчёта.


		 ![](../../Sub_Image.gif)
		 [RefreshMetaModel](../ICalcObject/ICalcObject.RefreshMetaModel.htm)
		 Метод RefreshMetaModel
		 обновляет метамодель.


		 ![](../../Sub_Image.gif)
		 [SaveObject](../ICalcObject/ICalcObject.SaveObject.htm)
		 Метод SaveObject сохраняет
		 объект алгоритма расчёта.


См. также:


[Интерфейсы
 сборки Algo](../KeAlgo_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
