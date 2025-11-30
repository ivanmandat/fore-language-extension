# ICalendarDimension.AddAttribute

ICalendarDimension.AddAttribute
-


# ICalendarDimension.AddAttribute


## Синтаксис


AddAttribute(AttrIndex: Integer);


## Параметры


AttrIndex. Зарезервированный
 индекс стандартного атрибута.


## Описание


Метод AddAttribute осуществляет
 добавление стандартного атрибута в список атрибутов, присутствующих при
 построении календарного справочника.


## Комментарии


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
 индекс, который используется для добавления атрибута в список атрибутов,
 значения которых вычисляются при построении справочника. По умолчанию
 в данный список входит определенный набор атрибутов. Список зависит от
 выбранной [иерархии](ICalendarDimension.Hierarchy.htm) календаря.


## Пример


Для выполнения примера предполагается наличие в репозитории календарного
 справочника с идентификатором "CALENDAR_DIM".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    CalDim: ICalendarDimension;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("CALENDAR_DIM").Edit;

	    CalDim:=MObj As ICalendarDimension;

	    CalDim.AddAttribute(2);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в календарный справочник будет добавлен атрибут
 «Дата окончания периода».


См. также:


[ICalendarDimension](ICalendarDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
