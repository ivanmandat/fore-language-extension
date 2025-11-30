# ICalendarDimension.RemoveAttribute

ICalendarDimension.RemoveAttribute
-


# ICalendarDimension.RemoveAttribute


## Синтаксис


RemoveAttribute(AttrNumber: Integer);


## Параметры


AttrNumber - номер
 атрибута при построении справочника.


## Описание


Метод RemoveAttribute осуществляет
 удаление стандартного атрибута из списка атрибутов, присутствующих при
 построении календарного справочника.


## Комментарии


В отличии от метода [AddAttribute](ICalendarDimension.AddAttribute.htm)
 данный метод работает со сквозным номером стандартного атрибута, присутствующего
 при построении календарного справочника.


## Пример


Для выполнения примера предполагается наличие в репозитории календарного
 справочника с идентификатором "CALENDAR_DIM".


Добавьте ссылки на системные сборки «Metabase» и «Dimensions».


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    CalDim: ICalendarDimension;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("CALENDAR_DIM").Edit;

    CalDim := MObj As ICalendarDimension;

    CalDim.RemoveAttribute(CalDim.AttributeCount - 1);

    MObj.Save;

End Sub UserProc;


После выполнения примера из календарного справочника будет удален последний
 атрибут, отображаемый при построении справочника.


См. также:


[ICalendarDimension](ICalendarDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
