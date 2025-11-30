# ICalcObject

ICalcObject
-


# ICalcObject


Сборка: Algo;


## Описание


Интерфейс ICalcObject предназначен
 для настройки объекта алгоритма расчёта.


## Иерархия наследования


           ICalcObject


## Комментарии


Интерфейс является базовым для следующих интерфейсов:


	- [ICalcAggr](../ICalcAggr/ICalcAggr.htm);


	- [ICalcAlgorithm](../ICalcAlgorithm/ICalcAlgorithm.htm);


	- [ICalcBlock](../ICalcBlock/ICalcBlock.htm);


	- [ICalcFunc](../ICalcFunc/ICalcFunc.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Descriptor](ICalcObject.Descriptor.htm)
		 Свойство Descriptor
		 возвращает объект алгоритма расчёта в качестве внутреннего объекта
		 репозитория.


		 ![](../../Property_Image.gif)
		 [Id](ICalcObject.Id.htm)
		 Свойство Id определяет
		 идентификатор объекта алгоритма расчёта.


		 ![](../../Property_Image.gif)
		 [IsEdited](ICalcObject.IsEdited.htm)
		 Свойство IsEdited возвращает
		 признак редактирования объекта алгоритма расчёта.


		 ![](../../Property_Image.gif)
		 [IsUseExtObject](ICalcObject.IsUseExtObject.htm)
		 Свойство IsUseExtObject
		 определяет признак использования объектов репозитория, расположенных
		 вне контейнера или бизнес-приложения.


		 ![](../../Property_Image.gif)
		 [Key](ICalcObject.Key.htm)
		 Свойство Key возвращает
		 ключ объекта алгоритма расчёта.


		 ![](../../Property_Image.gif)
		 [Name](ICalcObject.Name.htm)
		 Свойство Name определяет
		 наименование объекта алгоритма расчёта.


		 ![](../../Property_Image.gif)
		 [Params](ICalcObject.Params.htm)
		 Свойство Params возвращает
		 коллекцию параметров объекта алгоритма расчёта.


		 ![](../../Property_Image.gif)
		 [PrxReport](ICalcObject.PrxReport.htm)
		 Свойство PrxReport
		 создаёт [регламентный
		 отчёт](UIReport.chm::/UiReport_purpose.htm)
		 с данными, полученными после расчёта объекта из приёмника данных.


		 ![](../../Property_Image.gif)
		 [SelControl](ICalcObject.SelControl.htm)
		 Свойство SelControl
		 определяет настройки управления параметрами измерений источника
		 данных.


		 ![](../../Property_Image.gif)
		 [Type](ICalcObject.Type.htm)
		 Свойство Type определяет
		 тип объекта алгоритма расчёта.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CopyTo](ICalcObject.CopyTo.htm)
		 Метод CopyTo копирует
		 настройки текущего объекта в объект, передаваемый во входном параметре.


		 ![](../../Sub_Image.gif)
		 [CreateCopy](ICalcObject.CreateCopy.htm)
		 Метод CreateCopy создаёт
		 копию объекта алгоритма расчёта.


		 ![](../../Sub_Image.gif)
		 [Delete](ICalcObject.Delete.htm)
		 Метод Delete удаляет
		 объект алгоритма расчёта.


		 ![](../../Sub_Image.gif)
		 [FillSelSetFromParams](ICalcObject.FillSelSetFromParams.htm)
		 Метод FillSelSetFromParams
		 передает отметку измерения, которое используется в качестве параметра
		 алгоритма расчёта, на панель параметров.


		 ![](../../Sub_Image.gif)
		 [FindParamUses](ICalcObject.FindParamUses.htm)
		 Метод FindParamUses
		 проверяет использование указанного параметра в объекте алгоритма
		 расчёта.


		 ![](../../Sub_Image.gif)
		 [RefreshMetaModel](ICalcObject.RefreshMetaModel.htm)
		 Метод RefreshMetaModel
		 обновляет метамодель.


		 ![](../../Sub_Image.gif)
		 [SaveObject](ICalcObject.SaveObject.htm)
		 Метод SaveObject сохраняет
		 объект алгоритма расчёта.


См. также:


[Интерфейсы
 сборки Algo](../KeAlgo_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
