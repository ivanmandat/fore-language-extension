# Структура календарного справочника

Структура календарного справочника
-


# Структура календарного справочника


При работе с календарным справочником необходимо учитывать следующие
 моменты:


	- класс объекта «Календарный справочник» - [MetabaseObjectClass.KE_CLASS_CLNDIM](KeSom.chm::/Enums/MetabaseObjectClass.htm);


	- структура календарного справочника всегда фиксирована и формируется
	 на основе параметров, указанных пользователем.


Полный пример по созданию календарного справочника с использованием
 языка Fore представлен в разделе
 [Примеры: Создание календарного
 справочника](../../Samples/KeDims_Sample1.htm). Рассмотрим основные этапы по работе с календарным справочником
 более детально.


Структура календарного справочника (набор и параметры атрибутов, блоков,
 индексов справочника) всегда фиксированная и определяется параметрами,
 которые устанавливает пользователь.


Интерфейс [IDimensionModel](../../interface/IDimensionModel/IDimensionModel.htm)
 используется только для просмотра информации о структуре справочника.
 Для настройки параметров нового или существующего календарного справочника
 необходимо соответствующий объект репозитория привести к интерфейсу [ICalendarDimension](../../interface/ICalendarDimension/ICalendarDimension.htm).
 Для изменения параметров объект должен быть открыт на редактирование.


Пример создания нового календарного справочника с идентификатором «NewClnDim»:


	Var

	    //…

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    CDim: ICalendarDimension;

	    //…

	Begin

	    //…

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_CLNDIM;

	    CrInfo.Id := "NewClnDim";

	    CrInfo.Name := "Новый календарный справочник";

	    CrInfo.Parent := MB.Root;

	    //Создание нового календарного справочника и открытие его структуры на редактирование

	    CDim := MB.CreateObject(CrInfo).Edit As ICalendarDimension;

	    //…


Пример доступа к структуре существующего календарного справочника с
 идентификатором «ClnDim»:


	Var

	    //…

	    MB: IMetabase;

	    CDim: ICalendarDimension;

	    //…

	Begin

	    //…

	    MB := MetabaseClass.Active;

	    //Открытие структуры справочника на редактирование

    CDim := MB.ItemById("ClnDim").Edit As ICalendarDimension;

	    //…


## Тип и период актуальности календаря


В свойстве [Hierarchy](../../interface/ICalendarDimension/ICalendarDimension.Hierarchy.htm)
 задается тип иерархии календаря.


Примечание.
 Значения, используемые для указания типа календаря, смотрите в описании
 свойства [Hierarchy](../../interface/ICalendarDimension/ICalendarDimension.Hierarchy.htm).


В соответствии с указанным типом будет сформирована структура блоков
 календарного справочника. Для указания периода действия календаря используются
 два свойства: [StartYear](../../interface/ICalendarDimension/ICalendarDimension.StartYear.htm)
 и [EndYear](../../interface/ICalendarDimension/ICalendarDimension.EndYear.htm).
 Если начальная либо конечная дата периода календаря не известна заранее,
 то для ее указания можно использовать параметры справочника. Для использования
 параметра необходимо в соответствующем свойстве установить значение True: [StartYearAsParam](../../interface/ICalendarDimension/ICalendarDimension.StartYearAsParam.htm)
 или [EndYearAsParam](../../interface/ICalendarDimension/ICalendarDimension.EndYearAsParam.htm).


	Var

	    //…

	    CDim: ICalendarDimension;

	    //…

	Begin

	    //…

	    //Установка типа календаря - "Годы-(Полугодия-Кварталы-9 месяцев)-Месяцы-Дни"

	    CDim.Hierarchy := 2;

	    //Начало периода действия календаря

	    CDim.StartYear := 2000;

	    //Окончание периода действия календаря будет вводиться через параметр при открытии справочника

    CDim.EndYearAsParam := True;

	    //…


## Уровни календаря


Для указания уровней, которые будут доступны в календаре, используется
 ряд свойств: [IncludeDays](../../interface/ICalendarDimension/ICalendarDimension.IncludeDays.htm),
 [IncludeMonths](../../interface/ICalendarDimension/ICalendarDimension.IncludeMonths.htm)
 ... [IncludeYears](../../interface/ICalendarDimension/ICalendarDimension.IncludeYears.htm).
 Для того чтобы определенный уровень был доступен в справочнике, необходимо
 соответствующему свойству установить значение True.


	Var

	    //…

	    CDim: ICalendarDimension;

	    //…

	Begin

	    //…

	    //Включение в структуру справочника уровней Месяцы, Кварталы и Годы

    CDim.IncludeMonths := True;

	    CDim.IncludeQuarters := True;

	    CDim.IncludeYears := True;

	    //…


Если в календарном справочнике необходимо использовать уровень «Корень», то для его включения в
 структуру необходимо использовать свойство [LevelInUse](../../interface/ICalendarDimension/ICalendarDimension.LevelInUse.htm).
 Данное свойство также используется при работе с составными блоками уровней
 «Полугодия - 9 месяцев» и «Полугодия - Кварталы - 9 месяцев».


Примечание.
 При работе с составными блоками уровней также необходимо использовать
 свойство [BlockInUse](../../interface/ICalendarDimension/ICalendarDimension.BlockInUse.htm).


Рассмотрим пример для иерархии календаря "Годы-(Полугодия-Кварталы-9
 месяцев)-Месяцы-Дни":


	Var

	    //…

	    CDim: ICalendarDimension;

	    //…

	Begin

	    //…

	    //Установка типа календаря - Годы-(Полугодия-Кварталы-9 месяцев)-Месяцы-Дни

	    CDim.Hierarchy := 1;

	    //Включение в структуру справочника уровня Корень

	    //Получение индекса уровня Корень осуществляется по его номеру в иерархии

    CDim.LevelInUse(CDim.LevelIndex(0)) := True;

	    //Включение в структуру справочника составного уровня (Полугодия-Кварталы-9 месяцев)

	    CDim.LevelInUse(7) := True;

	    //В составном уровне включение уровня Кварталы

	    CDim.BlockInUse(7, 3) := True;

	    //В составном уровне включение уровня 9 месяцев

	    CDim.BlockInUse(7, 6) := True;

	    //…


Рассмотрим пример для иерархии календаря "Годы-(Полугодия- 9 месяцев)-Кварталы-Месяцы-Дни":


	Var

	    //…

	    CDim: ICalendarDimension;

	    //…

	Begin

	    //…

	    //Установка типа календаря - Годы-(Полугодия-9 месяцев)-Кварталы-Месяцы-Дни

	    CDim.Hierarchy := 2;

	    //Включение в структуру справочника уровня Корень

	    //Получение индекса уровня Корень осуществляется по его номеру в иерархии

    CDim.LevelInUse(CDim.LevelIndex(0)) := True;

	    //Включение в структуру справочника составного уровня (Полугодия-9 месяцев)

	    CDim.LevelInUse(6) := True;

	    //В составном уровне включение уровня Полугодия

	    CDim.BlockInUse(6, 2) := True;

	    //В составном уровне включение уровня 9 месяцев

	    CDim.BlockInUse(6, 6) := True;

	    //…


Уровень «Недели» доступен, если
 используется тип иерархии календаря - Годы-Полугодия-Кварталы-Месяцы-Недели-Дни.
 Для определения параметров представления уровня «Недели»
 используется свойство [WeekLevel](../../interface/ICalendarDimension/ICalendarDimension.WeekLevel.htm).


	Var

	    //…

	    CDim: ICalendarDimension;

	    WeekLvl: ICalendarWeekLevel;

	    //…

	Begin

	    //…

	    //Установка типа календаря - Годы-Полугодия-Кварталы-Месяцы-Недели-Дни

	    CDim.Hierarchy := 3;

	    //Включение в структуру справочника уровней Дни, Недели, Месяцы, Годы

    CDim.IncludeDays := True;

	    CDim.IncludeWeek := True;

	    CDim.IncludeMonths := True;

	    CDim.IncludeYears := True;

	    //Настройка уровня Недели

	    WeekLvl := CDim.WeekLevel;

	    //Установка 5-дневной недели

	    WeekLvl.RestDays := DayOfWeekSet.Saturday Or DayOfWeekSet.Sunday;

	    //…


## Атрибуты календарного справочника


Структура календарного справочника включает в себя два вида атрибутов:


	- Стандартные атрибуты.
	 Атрибуты, определенные ядром платформы для календарных справочников.
	 Список стандартных атрибутов фиксирован и представлен ниже.


	- Пользовательские атрибуты.
	 Атрибуты, значения которых будут формироваться по заданному выражению.


### Стандартные атрибуты


Для календарного справочника определен ряд стандартных атрибутов, которые
 могут быть использованы при работе:


		 Зарезервированный индекс атрибута
		 Идентификатор атрибута
		 Наименование атрибута


		 0
		 NAME
		 Имя элемента календаря.


		 1
		 START_DATE
		 Дата начала периода.


		 2
		 FINISH_DATE
		 Дата окончания периода.


		 3
		 BLOCK_TYPE
		 Тип блока календаря.


		 4
		 LEVEL_TYPE
		 Тип уровня календаря.


		 5
		 BLOCK_NAME
		 Имя блока календаря.


		 6
		 LEVEL_NAME
		 Имя уровня календаря.


		 7
		 ORDER
		 Порядок.


		 8
		 ID
		 Идентификатор.


		 9
		 PERIOD
		 Период.


		 10
		 YEAR
		 Номер года.


		 11
		 HALF_OF_YEAR
		 Номер полугодия.


		 12
		 QUARTER
		 Номер квартала.


		 13
		 MONTH
		 Номер месяца.


		 14
		 WEEK_OF_YEAR
		 Номер недели в году.


		 15
		 DAY_OF_WEEK
		 Номер дня в неделе.


		 16
		 DAY_OF_MONTH
		 Номер дня в месяце.


		 17
		 DAY_OF_YEAR
		 Номер дня в году.


Каждый атрибут имеет зарезервированный
 индекс, который используется для добавления атрибута в список
 построения. Список построения
 - это список атрибутов, значения которых вычисляются при построении справочника.
 По умолчанию в данный список входят определенный набор атрибутов. Список
 зависит от выбранной в свойстве [Hierarchy](../../interface/ICalendarDimension/ICalendarDimension.Hierarchy.htm)
 иерархии календаря.


Для работы со списком построения предназначены следующие методы: [AddAttribute](../../interface/ICalendarDimension/ICalendarDimension.AddAttribute.htm),
 [RemoveAttribute](../../interface/ICalendarDimension/ICalendarDimension.RemoveAttribute.htm).
 Метод [AddAttribute](../../interface/ICalendarDimension/ICalendarDimension.AddAttribute.htm)
 добавляет атрибуты в список по зарезервированным индексам атрибутов. Метод
 [RemoveAttribute](../../interface/ICalendarDimension/ICalendarDimension.RemoveAttribute.htm)
 удаляет атрибут из списка построения по номеру. В списке построения атрибуты
 имеют сквозную нумерацию, зависящую только от порядка добавления атрибутов.
 Для сопоставления номера атрибута в списке с его зарезервированным индексом
 используйте свойство [AttributeIndex](../../interface/ICalendarDimension/ICalendarDimension.AttributeIndex.htm).


Примечание.
 При открытии справочника из навигатора объектов атрибут «Имя
 элемента календаря» всегда указывается первым. Из значений данного
 атрибута будет составлено дерево элементов справочника.


### Пользовательские атрибуты


Для работы с коллекцией пользовательских атрибутов предназначен интерфейс
 [ICalendarDimAttributes](../../interface/ICalendarDimAttributes/ICalendarDimAttributes.htm).
 Получить коллекцию пользовательских атрибутов можно используя свойство
 [Attributes](../../interface/ICalendarDimension/ICalendarDimension.Attributes.htm).
 Для пользовательских атрибутов необходимо задать одно из двух свойств:
 [Expression](../../interface/ICalendarDimAttribute/ICalendarDimAttribute.Expression.htm)
 либо [Format](../../interface/ICalendarDimAttribute/ICalendarDimAttribute.Format.htm):


	- в свойстве [Expression](../../interface/ICalendarDimAttribute/ICalendarDimAttribute.Expression.htm)
	 задается выражение, в соответствии с которым будет формироваться значение
	 атрибута;


	- в свойстве [Format](../../interface/ICalendarDimAttribute/ICalendarDimAttribute.Format.htm)
	 определяется формат, в соответствии с которым будет формироваться
	 значение атрибута. Для составления формата используются зарезервированные
	 коды, представленные в описании свойства.


В списке построения пользовательские атрибуты следуют после стандартных
 атрибутов.


Var

    //…

    CDim: ICalendarDimension;

    UserAttrs: ICalendarDimAttributes;

    UserAttr: ICalendarDimAttribute;

    //…

Begin

    //…

    UserAttrs := CDim.Attributes;

    //Создание первого пользовательского атрибута

    UserAttr := UserAttrs.Add;

    //Задание выражения для всех уровней

    UserAttr.Expression(-1).AsString := "@[d MMMM yyyy]+"" г. (""+@[ddd]+"")""";

    //Создание пользовательского атрибута, который будет использоваться в качестве наименования элементов

    UserAttr := UserAttrs.Add;

    //Наименование атрибута

    UserAttr.Name := "Наименование элементов";

    //Установка форматов, в соответствии с которыми будут формироваться значения

    //на указанных уровнях

    UserAttr.Format(CDim.CalendarLevelIndex(DimCalendarLevel.Root)) := "Календарь";

    UserAttr.Format(CDim.CalendarLevelIndex(DimCalendarLevel.Year)) := "Год/YY";

    UserAttr.Format(CDim.CalendarLevelIndex(DimCalendarLevel.HalfYear)) := "SA-е полугодие";

    UserAttr.Format(CDim.CalendarLevelIndex(DimCalendarLevel.Quarter)) := "QA-й квартал";

    UserAttr.Format(CDim.CalendarLevelIndex(DimCalendarLevel.Month)) := "ML-й месяц";

    UserAttr.Format(CDim.CalendarLevelIndex(DimCalendarLevel.Day)) := "DD/MM/YYYY";

    //Установка атрибута в качестве атрибута Наименование

    UserAttrs.Name := UserAttr;

    //…


### Значения атрибутов календарного справочника


При [работе с данными](../Instance/KeDims_Instance.htm) календарного
 справочника значения всех атрибутов (стандартных и пользовательских) будут
 доступны в [одной
 коллекции](../../interface/IDimInstance/IDimInstance.Attributes.htm). Для получения значений определенного атрибута используйте
 метод [FindById](../../interface/IDimAttributesInstance/IDimAttributesInstance.FindById.htm)
 или [FindByKey](../../interface/IDimAttributesInstance/IDimAttributesInstance.FindByKey.htm).
 Среди полученных значений атрибута можно произвести [поиск](../Instance/KeDims_FindElement.htm#find_attribute)
 необходимых данных.


## Скрытая структура календарного справочника


Как и у всех справочников, в основе структуры календарного справочника
 лежат блоки и индексы,
 но их набор и структура фиксированы и скрыты из мастера. Информация о
 блоках и индексах может потребоваться, если через ядро производится настройка
 каких-либо объектов репозитория, которые используют в своей структуре
 календарные справочники.


Примечание.
 Набор блоков и индексов, доступных для использования в конкретном календарного
 справочнике, зависит от выбранной [иерархии](#hierarchy) и
 [уровней](#levels) справочника.


Блоки календарного справочника:


		 Наименование блока
		 Идентификатор блока


		 Корень
		 ROOT


		 Годы
		 YEARS


		 Полугодия
		 HALF_YEARS


		 9 месяцев
		 NINE_MONTHS


		 Кварталы
		 QUARTERS


		 Месяцы
		 MONTHS


		 Недели
		 WEEKS


		 Дни
		 DAYS


Каждый блок включает в себя первичный индекс с идентификатором «INDEX_BLOCK».
 Индекс создан на атрибуте «Дата начала периода (START_DATE)».


Индексы календарного справочника:


		 Наименование индекса
		 Идентификатор индекса
		 Описание


		 Первичный ключ
		 INDEX_MAIN
		 Индекс включает атрибуты: Тип блока календаря (BLOCK_TYPE)
		 и Дата начала периода(START_DATE).


		 Имя элемента календаря
		 INDEX_NAME
		 Индекс включает атрибут «Имя элемента календаря(NAME)».


		 Порядок элементов
		 INDEX_ORDER
		 Индекс включает атрибут «Порядок(ORDER)».


		 Индекс Номер года
		 INDEX_ATTR_YEAR
		 Индекс включает атрибут «Номер года(YEAR)».


		 Индекс Номер полугодия
		 INDEX_ATTR_HALF_OF_YEAR
		 Индекс включает атрибут «Номер полугодия(HALF_OF_YEAR)».


		 Индекс Номер квартала
		 INDEX_ATTR_QUARTER
		 Индекс включает атрибут «Номер квартала(QUARTER)».


		 Индекс Номер месяца
		 INDEX_ATTR_MONTH
		 Индекс включает атрибут «Номер месяца(MONTH)».


		 Индекс Номер дня в неделе
		 INDEX_ATTR_DAY_OF_WEEK
		 Индекс включает атрибут «Номер дня в неделе(DAY_OF_WEEK)».


		 Номер дня в месяце
		 INDEX_ATTR_DAY_OF_MONTH
		 Индекс включает атрибут «Номер дня в месяце(DAY_OF_MONTH)».


		 Номер дня в году
		 INDEX_ATTR_DAY_OF_YEAR
		 Индекс включает атрибут «Номер дня в году(DAY_OF_YEAR)».


Индекс INDEX_MAIN является [первичным](../../interface/IDimIndex/IDimIndex.Primary.htm),
 индекс INDEX_ORDER - [уникальным](../../interface/IDimIndex/IDimIndex.Unique.htm).
 Для всех остальных индексов признаки первичного или уникального индекса
 не установлены. Индексы INDEX_MAIN,
 INDEX_NAME и INDEX_ORDER
 присутствуют в структуре всех календарных справочников. Наличие других
 индексов, также как и наличие блоков, зависит от выбранной [иерархии](#hierarchy)
 и [уровней](#levels) справочника.


См. также:


[Работа
 со структурой справочников](KeDims_StructureDimensions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
