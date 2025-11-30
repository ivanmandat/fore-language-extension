# IRubricatorInstance

IRubricatorInstance
-


# IRubricatorInstance


Сборка: Cubes;


## Описание


Интерфейс IRubricatorInstance
 содержит свойства и методы для работы с открытым экземпляром базы данных
 временных рядов.


## Иерархия наследования


           IRubricatorInstance


## Комментарии


Для получения открытого экземпляра базы данных временных рядов выполните
 метод [IMetabaseObjectDescriptor.Open](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Open.htm).


## Свойства


		 Имя свойства


		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CalendarDimension](IRubricatorInstance.CalendarDimension.htm)


		 Свойство CalendarDimension
		 возвращает данные календарного справочника для показателя.


		 ![](../../Property_Image.gif)
		 [CalendarLevelsDimension](IRubricatorInstance.CalendarLevelsDimension.htm)


		 Свойство CalendarLevelsDimension
		 возвращает данные календарного измерения базы данных временных
		 рядов.


		 ![](../../Property_Image.gif)
		 [CurrentRevision](IRubricatorInstance.CurrentRevision.htm)


		 Свойство CurrentRevision
		 возвращает текущую ревизию базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [Facts](IRubricatorInstance.Facts.htm)


		 Свойство Facts возвращает
		 справочник репозитория НСИ, содержащий информацию о показателях.


		 ![](../../Property_Image.gif)
		 [Measures](IRubricatorInstance.Measures.htm)


		 Свойство Measures возвращает
		 справочник репозитория НСИ, содержащий информацию о мерах.


		 ![](../../Property_Image.gif)
		 [Revisions](IRubricatorInstance.Revisions.htm)


		 Свойство Revisions
		 возвращает справочник репозитория НСИ, содержащий информацию о
		 ревизиях.


		 ![](../../Property_Image.gif)
		 [RevisionsDimension](IRubricatorInstance.RevisionsDimension.htm)


		 Свойство RevisionsDimension
		 возвращает данные справочника ревизий для показателя.


		 ![](../../Property_Image.gif)
		 [RevisionsDimensionPoint](IRubricatorInstance.RevisionsDimensionPoint.htm)


		 Свойство RevisionsDimensionPoint
		 возвращает данные справочника ревизий показателя для определенной
		 даты.


		 ![](../../Property_Image.gif)
		 [Rubricator](IRubricatorInstance.Rubricator.htm)


		 Свойство Rubricator
		 возвращает базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [Segments](IRubricatorInstance.Segments.htm)


		 Свойство Segments возвращает
		 коллекцию сегментов данных базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [Units](IRubricatorInstance.Units.htm)


		 Свойство Units возвращает
		 справочник репозитория НСИ, содержащий информацию о единицах измерения.


		 ![](../../Property_Image.gif)
		 [UnitsDimension](IRubricatorInstance.UnitsDimension.htm)


		 Свойство UnitsDimension
		 возвращает данные справочника единиц измерения.


		 ![](../../Property_Image.gif)
		 [ValidationsDimension](IRubricatorInstance.ValidationsDimension.htm)


		 Свойство ValidationsDimension
		 возвращает данные справочника для валидации.


		 ![](../../Property_Image.gif)
		 [Values](IRubricatorInstance.Values.htm)


		 Свойство Values возвращает
		 справочник репозитория НСИ, содержащий информацию о значениях
		 показателей.


## Методы


		 Имя метода


		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Clear](IRubricatorInstance.Clear.htm)


		 Метод Clear осуществляет
		 очистку рядов в базе данных временных рядов в соответствии с указанными
		 параметрами.


		 ![](../../Sub_Image.gif)
		 [ClearEx](IRubricatorInstance.ClearEx.htm)


		 Метод ClearEx
		 очищает базу данных временных рядов в соответствии с указанными
		 расширенными параметрами.


		 ![](../../Sub_Image.gif)
		 [CreateCommonCalendar](IRubricatorInstance.CreateCommonCalendar.htm)


		 Метод CreateCommonCalendar
		 создает общий календарь для загруженных в базу данных временных
		 рядов показателей.


		 ![](../../Sub_Image.gif)
		 [CreateDependenciesLookup](IRubricatorInstance.CreateDependenciesLookup.htm)


		 Метод CreateDependenciesLookup
		 создает объект, осуществляющий поиск зависимостей показателей
		 в базе данных временных рядов.


		 ![](../../Sub_Image.gif)
		 [CreateFactsLookup](IRubricatorInstance.CreateFactsLookup.htm)


		 Метод CreateFactsLookup
		 создает объект, осуществляющий поиск показателей.


		 ![](../../Sub_Image.gif)
		 [CreateFactsLookupEx](IRubricatorInstance.CreateFactsLookupEx.htm)


		 Метод CreateFactsLookupEx
		 создает объект, осуществляющий поиск показателей с возможностью
		 исключения фиктивных показателей.


		 ![](../../Sub_Image.gif)
		 [CreateFiltrationMatrix](IRubricatorInstance.CreateFiltrationMatrix.htm)


		 Метод CreateFiltrationMatrix
		 создает матрицу отфильтрованных данных.


		 ![](../../Sub_Image.gif)
		 [CreateFormulasLookup](IRubricatorInstance.CreateFormulasLookup.htm)


		 Метод CreateFormulasLookup
		 создает объект, осуществляющий поиск формул.


		 ![](../../Sub_Image.gif)
		 [CreateObservationsLookup](IRubricatorInstance.CreateObservationsLookup.htm)


		 Метод CreateObservationsLookup
		 создает объект, осуществляющий поиск среди данных показателей.


		 ![](../../Sub_Image.gif)
		 [CreateValidationsLookup](IRubricatorInstance.CreateValidationsLookup.htm)


		 Метод CreateValidationsLookup
		 создает объект, осуществляющий поиск валидаций.


		 ![](../../Sub_Image.gif)
		 [CutRevisions](IRubricatorInstance.CutRevisions.htm)


		 Метод CutRevisions
		 сжимает указанный диапазон ревизий.


		 ![](../../Sub_Image.gif)
		 [DeleteFacts](IRubricatorInstance.DeleteFacts.htm)


		 Метод DeleteFacts удаляет
		 из базы данных временных рядов показатели с указанными ключами.


		 ![](../../Sub_Image.gif)
		 [DeleteMemberFacts](IRubricatorInstance.DeleteMemberFacts.htm)


		 Метод DeleteMemberFacts
		 осуществляет удаление показателя, соответствующего указанному
		 элементу.


		 ![](../../Sub_Image.gif)
		 [DeleteMembersFacts](IRubricatorInstance.DeleteMembersFacts.htm)


		 Метод DeleteMembersFacts
		 осуществляет удаление показателей, соответствующих указанному
		 набору элементов.


		 ![](../../Sub_Image.gif)
		 [GetCompoundFactData](IRubricatorInstance.GetCompoundFactData.htm)


		 Метод GetCompoundFactData
		 возвращает данные о временном ряде по значению его составного
		 ключа.


		 ![](../../Sub_Image.gif)
		 [GetDateInterval](IRubricatorInstance.GetDateInterval.htm)


		 Метод GetDateInterval
		 возвращает минимальную и максимальную даты, на которые присутствуют
		 данные в базе данных временных рядов.


		 ![](../../Sub_Image.gif)
		 [GetDictionary](IRubricatorInstance.GetDictionary.htm)


		 Метод GetDictionary
		 возвращает данные справочника, содержащего информацию базы данных
		 временных рядов.


		 ![](../../Sub_Image.gif)
		 [GetFactData](IRubricatorInstance.GetFactData.htm)


		 Метод GetFactData возвращает
		 данные из справочника показателей по ключу показателя.


		 ![](../../Sub_Image.gif)
		 [GetFactDataByMnemo](IRubricatorInstance.GetFactDataByMnemo.htm)


		 Метод GetFactDataByMnemo
		 возвращает данные из справочника показателей по мнемонике показателя.


		 ![](../../Sub_Image.gif)
		 [GetFormulaData](IRubricatorInstance.GetFormulaData.htm)


		 Метод GetFormulaData
		 возвращает данные формулы по указанному ключу.


		 ![](../../Sub_Image.gif)
		 [GetMemberFactData](IRubricatorInstance.GetMemberFactData.htm)


		 Метод GetMemberFactData
		 возвращает данные из справочника показателей по указанному элементу
		 иерархии.


		 ![](../../Sub_Image.gif)
		 [GetObservationValues](IRubricatorInstance.GetObservationValues.htm)


		 Метод GetObservationValues
		 возвращает значения показателя.


		 ![](../../Sub_Image.gif)
		 [GetRevision](IRubricatorInstance.GetRevision.htm)


		 Метод GetRevision возвращает
		 ревизию по ключу.


		 ![](../../Sub_Image.gif)
		 [GetScenarioExists](IRubricatorInstance.GetScenarioExists.htm)


		 Метод GetScenarioExists
		 возвращает признак того, применяются ли в базе данных временных
		 рядов сценарии моделирования.


		 ![](../../Sub_Image.gif)
		 [GetValidationExecData](IRubricatorInstance.GetValidationExecData.htm)


		 Метод GetValidationExecData
		 возвращает данные о расчете валидации по ключу.


		 ![](../../Sub_Image.gif)
		 [LabelRevisions](IRubricatorInstance.LabelRevisions.htm)


		 Метод LabelRevisions
		 позволяет установить метку ревизии базы данных временных рядов.


		 ![](../../Sub_Image.gif)
		 [LoadValidationRun](IRubricatorInstance.LoadValidationRun.htm)


		 Метод LoadValidationRun
		 извлекает данные расчета валидации по заданной отметке.


		 ![](../../Sub_Image.gif)
		 [LookupFactors](IRubricatorInstance.LookupFactors.htm)


		 Метод LookupFactors
		 осуществляет поиск показателей по заданным условиям.


		 ![](../../Sub_Image.gif)
		 [Open](IRubricatorInstance.Open.htm)


		 Метод Open помещает
		 данные базы данных временных рядов в кеш.


		 ![](../../Sub_Image.gif)
		 [OpenFactor](IRubricatorInstance.OpenFactor.htm)


		 Метод OpenFactor открывает
		 показатель. Данный метод не поддерживается.


		 ![](../../Sub_Image.gif)
		 [OpenRevision](IRubricatorInstance.OpenRevision.htm)


		 Метод OpenRevision
		 осуществляет создание новой ревизии.


		 ![](../../Sub_Image.gif)
		 [RefreshDimensions](IRubricatorInstance.RefreshDimensions.htm)


		 Метод RefreshDimensions
		 обновляет измерения открытого экземпляра базы данных временных
		 рядов.


		 ![](../../Sub_Image.gif)
		 [RegenerateEmpty](IRubricatorInstance.RegenerateEmpty.htm)


		 Метод RegenerateEmpty
		 обновляет признак пустоты для указанных показателей.


		 ![](../../Sub_Image.gif)
		 [RegenerateMnemo](IRubricatorInstance.RegenerateMnemo.htm)


		 Метод RegenerateMnemo
		 осуществляет регенерацию мнемоник показателей.


		 ![](../../Sub_Image.gif)
		 [RollbackData](IRubricatorInstance.RollbackData.htm)


		 Метод RollbackData
		 осуществляет откат на данные базы данных временных рядов в указанной
		 ревизии.


		 ![](../../Sub_Image.gif)
		 [SaveValidationRun](IRubricatorInstance.SaveValidationRun.htm)


		 Метод SaveValidationRun
		 производит сохранение данных расчета валидации.


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
