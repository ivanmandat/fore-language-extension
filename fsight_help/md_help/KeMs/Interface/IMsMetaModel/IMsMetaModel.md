# IMsMetaModel

IMsMetaModel
-


# IMsMetaModel


Сборка: Ms;


## Описание


Интерфейс IMsMetaModel содержит
 свойства объекта контейнера моделирования - Метамодель.


## Иерархия наследования


           [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


           [IVirtualMetaObject](Laner.chm::/Interface/IVirtualMetaObject/IVirtualMetaObject.htm)


           [IValidationFilterModel](Laner.chm::/Interface/IValidationFilterModel/IValidationFilterModel.htm)


           IMsMetaModel


## Комментарии


Метамодель - объект, объединяющий модели в последовательность, предназначенную
 для расчета с помощью [задачи моделирования](../IMsProblem/IMsProblem.htm).
 Метамодель содержит иерархию элементов - моделей и папок. Папки необходимы
 для логического объединения групп моделей и удобного отображения последовательности.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CalculateIdentOnFact](IMsMetaModel.CalculateIdentOnFact.htm)


		 Свойство CalculateIdentOnFact
		 определяет, выгружать ли данные при расчете на сценарий «Факт».


		 ![](../../Property_Image.gif)
		 [CalculationChain](IMsMetaModel.CalculationChain.htm)


		 Свойство CalculationChain
		 возвращает коллекцию корневых элементов цепочки расчета метамодели.


		 ![](../../Property_Image.gif)
		 [CreateFormulaFindInfo](IMsMetaModel.CreateFormulaFindInfo.htm)


		 Свойство CreateFormulaFindInfo
		 возвращает объект, используемый для задания условий поиска формул.


		 ![](../../Property_Image.gif)
		 [ObjectParamValues](IMsMetaModel.ObjectParamValues.htm)


		 Свойство ObjectParamValues
		 возвращает коллекцию параметров открываемого объекта.


		 ![](../../Property_Image.gif)
		 [Params](IMsMetaModel.Params.htm)


		 Свойство Params возвращает
		 коллекцию параметров метамодели.


		 ![](../../Property_Image.gif)
		 [VisualController](IMsMetaModel.VisualController.htm)


		 Свойство VisualController
		 возвращает параметры визуального построения метамодели.


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


		 Имя свойства
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Convert](IMsMetaModel.Convert.htm)


		 Метод Convert преобразует
		 внутренние модели метамодели в сущности, не являющиеся объектами
		 репозитория, и обратно.


		 ![](../../Sub_Image.gif)
		 [FindFormulas](IMsMetaModel.FindFormulas.htm)


		 Метод FindFormulas
		 осуществляет поиск формул в соответствии с заданными параметрами.


		 ![](../../Sub_Image.gif)
		 [FindMetaModelByKey](IMsMetaModel.FindMetaModelByKey.htm)


		 Метод FindMetaModelByKey
		 осуществляет поиск метамодели в цепочке расчета по ключу.


		 ![](../../Sub_Image.gif)
		 [FindModelByKey](IMsMetaModel.FindModelByKey.htm)


		 Метод FindModelByKey
		 осуществляет поиск модели в цепочке расчета метамодели по ключу.


		 ![](../../Sub_Image.gif)
		 [GenerateChain](IMsMetaModel.GenerateChain.htm)


		 Метод GenerateChain
		 генерирует цепочку расчета для метамодели.


		 ![](../../Sub_Image.gif)
		 [GetDimInstance](IMsMetaModel.GetDimInstance.htm)


		 Метод GetDimInstance
		 возвращает данные справочника из абстрактного источника данных.


		 ![](../../Sub_Image.gif)
		 [RefreshObjects](IMsMetaModel.RefreshObjects.htm)


		 Метод RefreshObjects
		 обновляет объекты цепочки расчёта, переоткрывая измерения.


		 ![](../../Sub_Image.gif)
		 [RestoreLaner](IMsMetaModel.RestoreLaner.htm)


		 Метод RestoreLaner
		 восстанавливает рабочую область базы данных временных рядов из
		 метамодели.


		 ![](../../Sub_Image.gif)
		 [SaveLaner](IMsMetaModel.SaveLaner.htm)


		 Метод SaveLaner сохраняет
		 модели расчета рядов рабочей книги в цепочку метамодели.


См. также:


[Интерфейсы
 сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
