# ICalendarDimension

ICalendarDimension
-


# ICalendarDimension


Сборка: Dimensions;


## Описание


Интерфейс ICalendarDimension
 содержит свойства и методы календарного справочника.


## Иерархия наследования


ICalendarDimension


## Комментарии


При создании нового календарного справочника для его корректной работы
 необходимо произвести следующие минимальные настройки:


	- В свойствах [StartYear](ICalendarDimension.StartYear.htm)/[EndYear](ICalendarDimension.EndYear.htm) зафиксировать годы
	 начала/окончания календаря или в свойствах [StartYearAsParam](ICalendarDimension.StartYearAsParam.htm)/[EndYearAsParam](ICalendarDimension.EndYearAsParam.htm) указать
	 признак использования параметров для указания начала/окончания календаря.


	- Используя различные свойства Include*, задать список уровней,
	 которые будут присутствовать в календаре.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AllowedBlock](ICalendarDimension.AllowedBlock.htm)
		 Свойство AllowedBlock
		 возвращает True, если
		 уровень может использоваться в качестве блока в календарном справочнике.


		 ![](../../Property_Image.gif)
		 [AllowedHierarchy](ICalendarDimension.AllowedHierarchy.htm)
		 Свойство AllowedHierarchy
		 возвращает True, если
		 указанный тип иерархии может использоваться в календарном справочнике.


		 ![](../../Property_Image.gif)
		 [AllowedLevel](ICalendarDimension.AllowedLevel.htm)
		 Свойство AllowedLevel
		 возвращает True, если
		 указанный уровень может использоваться в календарном справочнике.


		 ![](../../Property_Image.gif)
		 [AllowedNameFormat](ICalendarDimension.AllowedNameFormat.htm)
		 Свойство AllowedNameFormat
		 возвращает True, если
		 формат наименования может использоваться при изменении формата
		 отображения элементов блока в календарном справочнике.


		 ![](../../Property_Image.gif)
		 [AllowedParam](ICalendarDimension.AllowedParam.htm)
		 Свойство AllowedParam
		 возвращает True, если
		 параметр может использоваться в календарном справочнике.


		 ![](../../Property_Image.gif)
		 [AttributeCount](ICalendarDimension.AttributeCount.htm)
		 Свойство AttributeCount
		 возвращает количество системных атрибутов справочника.


		 ![](../../Property_Image.gif)
		 [AttributeIndex](ICalendarDimension.AttributeIndex.htm)
		 Свойство AttributeIndex
		 возвращает индекс стандартного атрибута, отображаемого при построении
		 справочника.


		 ![](../../Property_Image.gif)
		 [AttributeNameFormat](ICalendarDimension.AttributeNameFormat.htm)
		 Свойство AttributeNameFormat
		 определяет формат отображения наименования элементов указанного
		 блока календаря.


		 ![](../../Property_Image.gif)
		 [Attributes](ICalendarDimension.Attributes.htm)
		 Свойство Attributes
		 возвращает коллекцию пользовательских атрибутов календарного справочника.


		 ![](../../Property_Image.gif)
		 [BlockInUse](ICalendarDimension.BlockInUse.htm)
		 Свойство BlockInUse
		 определяет, используется ли блок уровня при построении справочника.


		 ![](../../Property_Image.gif)
		 [CalendarLevelIndex](ICalendarDimension.CalendarLevelIndex.htm)
		 Свойство CalendarLevelIndex
		 возвращает индекс для указанного уровня календаря.


		 ![](../../Property_Image.gif)
		 [DefaultOpenType](ICalendarDimension.DefaultOpenType.htm)
		 Свойство DefaultOpenType
		 определяет вид элементов, который используется по умолчанию при
		 открытии календаря.


		 ![](../../Property_Image.gif)
		 [EndYear](ICalendarDimension.EndYear.htm)
		 Свойство EndYear определяет
		 фиксированный год окончания календарного справочника.


		 ![](../../Property_Image.gif)
		 [EndYearAsParam](ICalendarDimension.EndYearAsParam.htm)
		 Свойство EndYearAsParam
		 определяет состояние опции «Не фиксировать окончание (определить
		 как параметр справочника)».


		 ![](../../Property_Image.gif)
		 [Hierarchy](ICalendarDimension.Hierarchy.htm)
		 Свойство Hierarchy
		 определяет тип иерархии календаря.


		 ![](../../Property_Image.gif)
		 [HierarchyCorrection](ICalendarDimension.HierarchyCorrection.htm)
		 Свойство HierarchyCorrection
		 определяет состояние опции «Коррекция иерархии».


		 ![](../../Property_Image.gif)
		 [IncludeDays](ICalendarDimension.IncludeDays.htm)
		 Свойство IncludeDays
		 определяет, будет ли присутствовать уровень «Дни» в календарном
		 справочнике.


		 ![](../../Property_Image.gif)
		 [IncludeHalfYears](ICalendarDimension.IncludeHalfYears.htm)
		 Свойство IncludeHalfYears
		 определяет, будет ли присутствовать уровень «Полугодия» в календарном
		 справочнике.


		 ![](../../Property_Image.gif)
		 [IncludeMonths](ICalendarDimension.IncludeMonths.htm)
		 Свойство IncludeMonths
		 определяет, будет ли присутствовать уровень «Месяцы» в календарном
		 справочнике.


		 ![](../../Property_Image.gif)
		 [IncludeQuarters](ICalendarDimension.IncludeQuarters.htm)
		 Свойство IncludeQuarters
		 определяет, будет ли присутствовать уровень «Кварталы» в календарном
		 справочнике.


		 ![](../../Property_Image.gif)
		 [IncludeWeek](ICalendarDimension.IncludeWeek.htm)
		 Свойство IncludeWeek
		 определяет, будет ли присутствовать уровень «Недели» в календарном
		 справочнике.


		 ![](../../Property_Image.gif)
		 [IncludeYears](ICalendarDimension.IncludeYears.htm)
		 Свойство IncludeYears
		 определяет, будет ли присутствовать уровень «Годы» в календарном
		 справочнике.


		 ![](../../Property_Image.gif)
		 [IsDateEnd](ICalendarDimension.IsDateEnd.htm)
		 Свойство IsDateEnd
		 определяет, заменять ли дату начала периода датой конца периода
		 для указанного уровня календаря.


		 ![](../../Property_Image.gif)
		 [LastLevelNameAsDay](ICalendarDimension.LastLevelNameAsDay.htm)
		 Свойство LastLevelNameAsDay
		 определяет состояние опции «Замена наименования последнего уровня
		 на день».


		 ![](../../Property_Image.gif)
		 [LevelCount](ICalendarDimension.LevelCount.htm)
		 Свойство LevelCount
		 возвращает количество уровней в календарном справочнике.


		 ![](../../Property_Image.gif)
		 [LevelIndex](ICalendarDimension.LevelIndex.htm)
		 Свойство LevelIndex
		 возвращает индекс уровня по номеру в структуре календарного справочника.


		 ![](../../Property_Image.gif)
		 [LevelInUse](ICalendarDimension.LevelInUse.htm)
		 Свойство LevelInUse
		 определяет, используется ли уровень при построении справочника.


		 ![](../../Property_Image.gif)
		 [NameAttrFormat](ICalendarDimension.NameAttrFormat.htm)
		 Свойство NameAttrFormat
		 определяет формат представления наименования элементов указанного
		 уровня.


		 ![](../../Property_Image.gif)
		 [OffsetDate](ICalendarDimension.OffsetDate.htm)
		 Свойство OffsetDate
		 определяет число дней, на которые будет смещена дата начала
		 указанного уровня.


		 ![](../../Property_Image.gif)
		 [ParamInUse](ICalendarDimension.ParamInUse.htm)
		 Свойство ParamInUse
		 определяет, используется ли параметр справочника, индекс которого
		 передается посредством параметра ParamIndex,
		 для ввода начала или окончания периода календаря.


		 ![](../../Property_Image.gif)
		 [ReverseOrder](ICalendarDimension.ReverseOrder.htm)
		 Свойство ReverseOrder
		 определяет состояние опции «Обратный порядок элементов в справочнике».


		 ![](../../Property_Image.gif)
		 [Setup](ICalendarDimension.Setup.htm)
		 Свойство Setup параметры
		 календаря, элементы которого были построены динамически.


		 ![](../../Property_Image.gif)
		 [ShiftForward](ICalendarDimension.ShiftForward.htm)
		 Свойство ShiftForward
		 определяет состояние опции «Сдвиг последнего уровня на точку вперед».


		 ![](../../Property_Image.gif)
		 [StartYear](ICalendarDimension.StartYear.htm)
		 Свойство StartYear
		 определяет фиксированный год начала календарного справочника.


		 ![](../../Property_Image.gif)
		 [StartYearAsParam](ICalendarDimension.StartYearAsParam.htm)
		 Свойство StartYearAsParam
		 определяет состояние опции «Не фиксировать начало календаря (определить
		 как параметр справочника)».


		 ![](../../Property_Image.gif)
		 [WeekLevel](ICalendarDimension.WeekLevel.htm)
		 Свойство WeekLevel
		 определяет параметры уровня «Недели» в календарном справочнике.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddAttribute](ICalendarDimension.AddAttribute.htm)
		 Метод AddAttribute
		 осуществляет добавление стандартного атрибута в список атрибутов,
		 присутствующих при построении календарного справочника.


		 ![](../../Sub_Image.gif)
		 [AssignAttributesFormats](ICalendarDimension.AssignAttributesFormats.htm)
		 Метод AssignAttributesFormats
		 копирует форматы представления атрибутов из указанного календарного
		 справочника.


		 ![](../../Sub_Image.gif)
		 [CompareLevels](ICalendarDimension.CompareLevels.htm)
		 Метод CompareLevels
		 используется для определения результата сравнения уровней календаря.


		 ![](../../Sub_Image.gif)
		 [DateFromWeek](ICalendarDimension.DateFromWeek.htm)
		 Метод DateFromWeek
		 осуществляет расчет даты, соответствующей указанному дню.


		 ![](../../Sub_Image.gif)
		 [OpenAs](ICalendarDimension.OpenAs.htm)
		 Метод OpenAs открывает
		 календарь в указанном виде.


		 ![](../../Sub_Image.gif)
		 [RemoveAttribute](ICalendarDimension.RemoveAttribute.htm)
		 Метод RemoveAttribute
		 осуществляет удаление стандартного атрибута из списка атрибутов,
		 присутствующих при построении календарного справочника.


		 ![](../../Sub_Image.gif)
		 [WeekFromDate](ICalendarDimension.WeekFromDate.htm)
		 Метод WeekFromDate
		 осуществляет расчет параметров дня, соответствующего указанной
		 дате.


См. также:


[Интерфейсы сборки Dimensions](../KeDims_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
