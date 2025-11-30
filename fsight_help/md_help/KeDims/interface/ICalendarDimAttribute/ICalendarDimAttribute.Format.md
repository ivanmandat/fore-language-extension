# ICalendarDimAttribute.Format

ICalendarDimAttribute.Format
-


# ICalendarDimAttribute.Format


## Синтаксис


Format(LevelIndex: Integer): String;


## Параметры


LevelIndex
 - индекс уровня, для которого необходимо задать формат наименования элементов.


## Описание


Свойство Format определяет формат
 значений атрибута для указанного уровня справочника.


Примечание.
 Данное свойство игнорируется, если задано выражение, по которому будут
 формироваться наименования элементов уровня. Выражение определяется свойством
 [ICalendarDimAttribute.Expression](ICalendarDimAttribute.Expression.htm).


## Комментарии


Формат задается для определенного уровня справочника, индекс которого
 передается в параметре LevelIndex.
 Для получения индекса справочника используется свойство [CalendarLevelIndex](../ICalendarDimension/ICalendarDimension.CalendarLevelIndex.htm).


Строка формата состоит из элементов формата. Каждый элемент возвращает
 часть значения, например, это может быть месяц. Основные элементы формата,
 которые допустимы описаны в таблице:


		 Элемент формата
		 Краткое описание


		 DD
		 День месяца (01 - 31).


		 WW
		 Номер недели в арабских цифрах (1 - n).


		 ML
		 Номер месяца в римских цифрах (I - XII).


		 MM (MA)
		 Номер месяца в арабских цифрах (1 - 12).


		 Mon
		 Сокращенное наименование месяца (янв - дек).


		 QL
		 Номер квартала в римских цифрах (I - IV).


		 QA
		 Номер квартала в арабских цифрах (1 - 4).


		 SL
		 Номер полугодия в римских цифрах (1, 2).


		 SA
		 Номер полугодия в арабских цифрах (I, II).


		 YY
		 Две последние цифры года.


		 YYYY
		 Год в четырехзначном формате.


Кроме того в шаблоне можно использовать любые слова или символы. Например:
 «SA-е полугодие».


Примечание.
 Элементы форматов чувствительны к регистру. При формировании формата используйте
 коды, указанные в таблице.


## Пример


Для выполнения примера в репозитории предполагается наличие календарного
 справочника с идентификатором «D_CALENDAR».


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    CalDim: ICalendarDimension;

    UserAttrs: ICalendarDimAttributes;

    UserAttr: ICalendarDimAttribute;

    LevInd: Integer;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("D_CALENDAR").Edit;

    CalDim := MObj As ICalendarDimension;

    UserAttrs := CalDim.Attributes;

    UserAttrs.Clear;

    UserAttr := UserAttrs.Add;

    LevInd := CalDim.CalendarLevelIndex(DimCalendarLevel.Root);

    UserAttr.Format(LevInd) := "Календарь";

    LevInd := CalDim.CalendarLevelIndex(DimCalendarLevel.Year);

    UserAttr.Format(LevInd) := "Год/YY";

    LevInd := CalDim.CalendarLevelIndex(DimCalendarLevel.HalfYear);

    UserAttr.Format(LevInd) := "SA-е полугодие";

    LevInd := CalDim.CalendarLevelIndex(DimCalendarLevel.Quarter);

    UserAttr.Format(LevInd) := "QA-й квартал";

    LevInd := CalDim.CalendarLevelIndex(DimCalendarLevel.Month);

    UserAttr.Format(LevInd) := "ML-й месяц";

    LevInd := CalDim.CalendarLevelIndex(DimCalendarLevel.Day);

    UserAttr.Format(LevInd) := "День: DD";

    UserAttrs.Name := UserAttr;

    MObj.Save;

End Sub UserProc;


При выполнении примера в календарный справочник будет добавлен новый
 пользовательский атрибут. Данный атрибут будет назначен в качестве атрибута
 наименований элементов. Для всех уровней будут заданы различные форматы
 наименования элементов (изображение слева), которые отличаются от стандартных
 (изображение справа):


![](ICalendarDimAttribute_Format.gif)


См. также:


[ICalendarDimAttribute](ICalendarDimAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
