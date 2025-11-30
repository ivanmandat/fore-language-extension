# ICalendarSetup.LoadFromXml

ICalendarSetup.LoadFromXml
-


# ICalendarSetup.LoadFromXml


## Синтаксис


LoadFromXml(Element: Variant);


## Параметры


Element. Объект, из которого
 будут загружены параметры календаря.


## Описание


Метод LoadFromXml выполняет
 загрузку параметров календаря из XML-кода.


## Комментарии


Для выгрузки параметров в XML-код используйте метод [ICalendarSetup.SaveToXml](ICalendarSetup.SaveToXml.htm).


## Пример


Для выполнения примера предполагается наличие календарного справочника
 с идентификатором «CALENDARSETUP». В файле «C:\CalendarSetup.xml» должны
 содержаться параметры календаря, элементы которого строятся динамически. Добавьте
 ссылки на системные сборки «Dimensions», «Metabase», «Xml».


			Sub UserProc;

Var

    mb: IMetabase;

    CalendarObj: IMetabaseObject;

    Calendar: ICalendarDimension;

    CalendDimInst: IDimInstance;

    DynamicCalendInst: IDynamicCalendarInstance;

    Setup: ICalendarSetup;

    Node: IXmlDomElement;

    DestXML: FreeThreadedDOMDocument60;

Begin

    mb := MetabaseClass.Active;

    CalendarObj := mb.ItemById("CALENDARSETUP").Edit;

    Calendar := CalendarObj.Edit As ICalendarDimension;

    CalendDimInst := Calendar.OpenAs(CalendarOpenType.Flat);

    DynamicCalendInst := CalendDimInst As IDynamicCalendarInstance;

    Setup := Calendar.Setup;

    DestXML := New FreeThreadedDOMDocument60.Create;

    DestXML.load("C:\CalendarSetup.xml");

    Node := DestXML.documentElement;

    Setup.LoadFromXml(Node);

    CalendarObj.Save;

End Sub UserProc;


После выполнения примера параметры календаря «CALENDARSETUP» будут загружены
 из файла «C:\CalendarSetup.xml».


См. также:


[ICalendarSetup](ICalendarSetup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
