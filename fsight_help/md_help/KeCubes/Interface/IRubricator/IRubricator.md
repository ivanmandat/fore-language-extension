# IRubricator

IRubricator
-


# IRubricator


Сборка: Cubes;


## Описание


Интерфейс IRubricator содержит
 свойства и методы объекта репозитория - База данных временных рядов.


## Иерархия наследования


           IRubricator


## Комментарии


База данных временны́х рядов - это объект, предназначенный для хранения
 временны́х рядов.


Временны́м рядом называется совокупность наблюдений ряда. Временной
 ряд характеризуется уникальным набором значений атрибутов. Каждое наблюдение,
 входящее в ряд, называется точкой ряда. Оно характеризуется временем наблюдения,
 его значением, а также рядом дополнительных характеристик.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AutoUnits](IRubricator.AutoUnits.htm)
		 Свойство AutoUnits
		 определяет наличие измерения единиц измерения в базе данных временных
		 рядов.


		 ![](../../Property_Image.gif)
		 [AutoUpdateStat](IRubricator.AutoUpdateStat.htm)
		 Свойство AutoUpdateStat
		 определяет, собирать ли статистики и оценивать ли фрагментацию
		 индексов при операциях с данными базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [CalendarLevels](IRubricator.CalendarLevels.htm)
		 Свойство CalendarLevels
		 определяет тип календарной динамики базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [CalendarLevelsDimension](IRubricator.CalendarLevelsDimension.htm)
		 Свойство CalendarLevelsDimension
		 возвращает внутреннее измерение календарных уровней базы данных
		 временных рядов.


		 ![](../../Property_Image.gif)
		 [CompoundFactorKey](IRubricator.CompoundFactorKey.htm)
		 Свойство CompoundFactorKey
		 определяет, будут ли временные ряды иметь составной ключ.


		 ![](../../Property_Image.gif)
		 [Container](IRubricator.Container.htm)
		 Свойство Container
		 определяет объекты репозитория, образующие базу данных временных
		 рядов.


		 ![](../../Property_Image.gif)
		 [Database](IRubricator.Database.htm)
		 Свойство Database определяет
		 репозиторий НСИ, в котором содержатся базовые справочники, необходимые
		 для работы с базой данных временных рядов.


		 ![](../../Property_Image.gif)
		 [DatabaseEx](IRubricator.DatabaseEx.htm)
		 Свойство DatabaseEx
		 определяет базу данных для базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [DefaultDwarf](IRubricator.DefaultDwarf.htm)
		 Свойство DefaultDwarf
		 определяет, использовать ли оптимизацию при загрузке данных
		 базы данных временных рядов в память.


		 ![](../../Property_Image.gif)
		 [Dimensions](IRubricator.Dimensions.htm)
		 Свойство Dimensions
		 позволяет работать с коллекцией сквозных измерений базы данных
		 временных рядов.


		 ![](../../Property_Image.gif)
		 [EditFacts](IRubricator.EditFacts.htm)
		 Свойство EditFacts
		 возвращает объект репозитория, содержащий справочник базы данных
		 временных рядов.


		 ![](../../Property_Image.gif)
		 [EditValues](IRubricator.EditValues.htm)
		 Свойство EditValues
		 возвращает объект репозитория, содержащий справочник значений
		 базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [EndYear](IRubricator.EndYear.htm)
		 Свойство EndYear возвращает
		 дату окончания для показателя.


		 ![](../../Property_Image.gif)
		 [FactAndValuesDimension](IRubricator.FactAndValuesDimension.htm)
		 Свойство FactAndValuesDimension
		 возвращает измерение атрибутов базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [Facts](IRubricator.Facts.htm)
		 Свойство Facts определяет
		 справочник репозитория НСИ, содержащий информацию о показателях
		 базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [FactsOnQuery](IRubricator.FactsOnQuery.htm)
		 Свойство FactsOnQuery
		 определяет, будет ли справочник фактов основан на запросе.


		 ![](../../Property_Image.gif)
		 [GetCommonCalendar](IRubricator.GetCommonCalendar.htm)
		 Свойство GetCommonCalendar
		 возвращает календарный справочник базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [HasEmptyAttribute](IRubricator.HasEmptyAttribute.htm)
		 Свойство HasEmptyAttribute
		 определяет, присутствует ли в базе данных временных рядов признак
		 пустоты показателей.


		 ![](../../Property_Image.gif)
		 [HasMnemonics](IRubricator.HasMnemonics.htm)
		 Свойство HasMnemonics
		 определяет, использовать ли мнемоники для идентификации показателей.


		 ![](../../Property_Image.gif)
		 [HasScenarioDimension](IRubricator.HasScenarioDimension.htm)
		 Свойство HasScenarioDimension
		 определяет, поддерживает ли база данных временных рядов сценарии.


		 ![](../../Property_Image.gif)
		 [KeepHistory](IRubricator.KeepHistory.htm)
		 Свойство KeepHistory
		 определяет, вести ли историю изменений показателей базы.


		 ![](../../Property_Image.gif)
		 [LightWeight](IRubricator.LightWeight.htm)
		 Свойство LightWeight
		 определяет, загружать ли показатели динамически.


		 ![](../../Property_Image.gif)
		 [Measures](IRubricator.Measures.htm)
		 Свойство Measures определяет
		 справочник репозитория НСИ, содержащий информацию о мерах.


		 ![](../../Property_Image.gif)
		 [ModelSpace](IRubricator.ModelSpace.htm)
		 Свойство ModelSpace
		 определяет контейнер моделирования для базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [Revisions](IRubricator.Revisions.htm)
		 Свойство Revisions
		 определяет справочник репозитория НСИ, содержащий информацию о
		 ревизиях.


		 ![](../../Property_Image.gif)
		 [RevisionsOnQuery](IRubricator.RevisionsOnQuery.htm)
		 Свойство RevisionsOnQuery
		 определяет, будет ли справочник ревизий основан на запросе.


		 ![](../../Property_Image.gif)
		 [SeparateTableForActualData](IRubricator.SeparateTableForActualData.htm)
		 Свойство SeparateTableForActualData
		 определяет, использовать ли отдельную таблицу для хранения актуальных
		 данных.


		 ![](../../Property_Image.gif)
		 [Sequence](IRubricator.Sequence.htm)
		 Свойство Sequence возвращает
		 объект, генерирующий ключи показателей для базы данных временных
		 рядов.


		 ![](../../Property_Image.gif)
		 [StartYear](IRubricator.StartYear.htm)
		 Свойство StartYear
		 возвращает дату начала для показателя.


		 ![](../../Property_Image.gif)
		 [TreatEmptyStringAsNull](IRubricator.TreatEmptyStringAsNull.htm)
		 Свойство TreatEmptyStringAsNull
		 определяет, хранить ли пустые строки как Null.


		 ![](../../Property_Image.gif)
		 [UnitIsRequired](IRubricator.UnitIsRequired.htm)
		 Свойство UnitIsRequired
		 определяет, входит ли справочник единиц измерений в состав уникального
		 ключа базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [Units](IRubricator.Units.htm)
		 Свойство Units определяет
		 справочник репозитория НСИ, содержащий информацию о единицах измерения.


		 ![](../../Property_Image.gif)
		 [UseDeduplication](IRubricator.UseDeduplication.htm)
		 Свойство UseDeduplication
		 определяет, поддерживает ли база данных временных рядов [дедупликацию](UiNav.chm::/Glossary.htm#deduplicatio).


		 ![](../../Property_Image.gif)
		 [UseDistinctSequence](IRubricator.UseDistinctSequence.htm)
		 Свойство UseDistinctSequence
		 определяет, генерировать ли ключи показателей для базы данных
		 временных рядов отдельно от остальных баз данных временных рядов
		 в репозитории.


		 ![](../../Property_Image.gif)
		 [UseDuplication](IRubricator.UseDuplication.htm)
		 Свойство UseDuplication
		 определяет, множить ли значения атрибута ряда на все точки, отмеченные
		 в выборке.


		 ![](../../Property_Image.gif)
		 [Values](IRubricator.Values.htm)
		 Свойство Values определяет
		 объект репозитория, содержащий справочник значений показателей
		 базы.


		 ![](../../Property_Image.gif)
		 [ValuesOnQuery](IRubricator.ValuesOnQuery.htm)
		 Свойство ValuesOnQuery
		 определяет, будет ли справочник значений основан на запросе.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AlterAndSave](IRubricator.AlterAndSave.htm)
		 Метод AlterAndSave
		 создает/обновляет системные таблицы базы данных временных рядов.


		 ![](../../Sub_Image.gif)
		 [CollectGarbage](IRubricator.CollectGarbage.htm)
		 Метод CollectGarbage
		 удаляет ряды, в которых значения идентифицирующих атрибутов были
		 удалены из справочника.


		 ![](../../Sub_Image.gif)
		 [CreateFacts](IRubricator.CreateFacts.htm)


		 Метод CreateFacts создает
		 составной справочник в репозитории НСИ, в котором будет храниться
		 информация о показателях базы данных временных рядов.


		 ![](../../Sub_Image.gif)
		 [CreateMeasures](IRubricator.CreateMeasures.htm)


		 Метод CreateMeasures
		 создает справочник мер в репозитории НСИ.


		 ![](../../Sub_Image.gif)
		 [CreateRevisions](IRubricator.CreateRevisions.htm)


		 Метод CreateRevisions
		 создает справочник ревизий в репозитории НСИ.


		 ![](../../Sub_Image.gif)
		 [CreateUnits](IRubricator.CreateUnits.htm)


		 Метод CreateUnits создает
		 справочник единиц измерения в репозитории НСИ.


		 ![](../../Sub_Image.gif)
		 [CreateValues](IRubricator.CreateValues.htm)


		 Метод CreateRevisions
		 создает справочник значений в репозитории НСИ.


		 ![](../../Sub_Image.gif)
		 [EditCalendar](IRubricator.EditCalendar.htm)


		 Метод EditCalendar
		 позволяет получить календарь базы данных временных рядов для редактирования.


		 ![](../../Sub_Image.gif)
		 [GetDictionary](IRubricator.GetDictionary.htm)


		 Метод GetDictionary
		 позволяет получить составной справочник базы данных временных
		 рядов.


		 ![](../../Sub_Image.gif)
		 [RunIndexDefrag](IRubricator.RunIndexDefrag.htm)


		 Метод RunIndexDefrag
		 осуществляет дефрагментацию индексов таблиц, на которых построена
		 база данных временных рядов.


		 ![](../../Sub_Image.gif)
		 [SetDictionary](IRubricator.SetDictionary.htm)


		 Метод SetDictionary
		 позволяет установить объект репозитория, в котором будет храниться
		 информация о справочнике базы данных временных рядов.


		 ![](../../Sub_Image.gif)
		 [SetPeriod](IRubricator.SetPeriod.htm)


		 Метод SetPeriod устанавливает
		 период для показателей.


		 ![](../../Sub_Image.gif)
		 [Truncate](IRubricator.Truncate.htm)


		 Метод Truncate осуществляет
		 очистку базы данных временных рядов.


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
