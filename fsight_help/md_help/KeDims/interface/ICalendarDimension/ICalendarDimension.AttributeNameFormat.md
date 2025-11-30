# ICalendarDimension.AttributeNameFormat

ICalendarDimension.AttributeNameFormat
-


# ICalendarDimension.AttributeNameFormat


## Синтаксис


AttributeNameFormat(AttrNumber: Integer; BlockIndex: Integer): Integer;


## Параметры


AttrNumber — номер атрибута. В качестве значения данного параметра должен передаваться номер атрибута с назначением "Имя элемента календаря".


BlockIndex — индекс блока, для которого необходимо изменить формат отображения наименования элементов.


		 Индекс блока
		 Наименование блока


		 0
		 Корень.


		 1
		 Год.


		 2
		 Полугодие.


		 3
		 Кварталы.


		 4
		 Месяцы.


		 5
		 Дни.


		 6
		 9 месяцев.


## Описание


Свойство AttributeNameFormat определяет формат отображения наименования элементов указанного блока календаря.


Свойство может принимать следующие значения:


		 Индекс формата
		 Краткое описание


		 0
		 Корень. (Наименование календарного справочника).


		 1
		 Год. (2000).


		 2
		 Полугодия. (I полугодие 2000).


		 3
		 Кварталы. (I квартал 2000).


		 4
		 Месяцы. (янв 2000).


		 5
		 Дни. (01 янв 2000).


		 6
		 9 месяцев. (9 месяцев 2000).


		 7
		 Краткий формат даты. (01.01.2000).


		 8
		 Неделя от 01 января


## Пример


Для выполнения примера предполагается наличие в репозитории календарного справочника с идентификатором "CALENDAR_DIM".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    CalDim: ICalendarDimension;

	    i, j: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("CALENDAR_DIM").Edit;

	    CalDim := MObj As ICalendarDimension;

	    For i := 0 To CalDim.AttributeCount - 1 Do

	        If CalDim.AttributeIndex(i) = 0 Then

	            j := i;

	        End If;

	    End For;

	    CalDim.AttributeNameFormat(j, 5) := 7;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера для изменения формата отображения будет определена позиция атрибута "Имя элемента календаря". Для блока дни будет установлен краткий формат даты.


См. также:


[ICalendarDimension](ICalendarDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
