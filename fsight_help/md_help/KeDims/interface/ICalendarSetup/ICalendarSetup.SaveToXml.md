# ICalendarSetup.SaveToXml

ICalendarSetup.SaveToXml
-


# ICalendarSetup.SaveToXml


## Синтаксис


SaveToXml(Element: Variant);


## Параметры


Element. Объект, в который
 будут сохранены параметры календаря в виде XML-кода.


## Описание


Метод SaveToXml выполняет выгрузку
 параметров календаря в XML-код.


## Комментарии


Для загрузки параметров из XML-кода используйте метод [ICalendarSetup.LoadFromXml](ICalendarSetup.LoadFromXml.htm).


## Пример


Для выполнения примера предполагается наличие календарного справочника
 с идентификатором «CALENDARSETUP». Добавьте ссылки на системные сборки
 «Dimensions», «Metabase», «Xml».


			Sub UserProc;

Var

    mb: IMetabase;

    Calendar: ICalendarDimension;

    CalendDimInst: IDimInstance;

    DynamicCalendInst: IDynamicCalendarInstance;

    Setup: ICalendarSetup;

    Node: IXmlDomElement;

    DestXML: FreeThreadedDOMDocument60;

Begin

    mb := MetabaseClass.Active;

    Calendar := mb.ItemById("CALENDARSETUP").Bind As ICalendarDimension;

    CalendDimInst := Calendar.OpenAs(CalendarOpenType.Flat);

    DynamicCalendInst := CalendDimInst As IDynamicCalendarInstance;

    Setup := DynamicCalendInst.NewSetup;

    DestXML := New FreeThreadedDOMDocument60.Create;

    Node := DestXML.createElement("Root");

    DestXML.appendChild(Node);

    Setup.SaveToXml(Node);

    DestXML.save("C:\CalendarSetup.xml");

End Sub UserProc;


После выполнения примера настройки по умолчанию для календарного справочника «CALENDARSETUP»
 будут сохранены в XML-документ «C:\CalendarSetup.xml».


См. также:


[ICalendarSetup](ICalendarSetup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
