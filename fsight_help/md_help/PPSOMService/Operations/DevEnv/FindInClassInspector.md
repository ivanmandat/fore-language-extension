# FindInClassInspector: Операция

FindInClassInspector: Операция
-


**


# FindInClassInspector


## Синтаксис


FindInClassInspectorResult FindInClassInspector(MbId
 tMb, FindInClassInspectorArg tArg)


## Параметры


tMb. Моникёр
 соединения с репозиторием.


tArg.
 Параметры выполнения операции.


## Описание


Операция FindInClassInspector
 осуществляет поиск в инспекторе классов.


## Комментарии


Для выполнения операции укажите в поле tMb
 моникёр соединения с репозиторием, а в поле tArg
 задайте параметры поиска элементов кода. Моникёр может быть получен при
 выполнении операции [OpenMetabase](../Repository/OpenMetabase.htm).


Результатом операции будет список найденных элементов инспектора классов.


## Пример


Ниже приведён пример поиска по инспектору классов. В запросе передаётся
 искомая строка. В ответе возвращается список элементов с результатами
 поиска.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<FindInClassInspector xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMb xsi:type="**q1:OpenMetabaseResult**" xmlns="****" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**">
  <id>COAALKJJBFIOFOAEOHJHMAKDHKFCMMDEEKIEPDMEAHENJCAH!M</id>  <sessKey>272175</sessKey>  <sessCookie>C1</sessCookie>  <version>163</version>  <defLocale>1049</defLocale>  <driver>2</driver>  </tMb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<currentLine>
  <Assembly />
  </currentLine>
  <findString>CalendarLevelSet</findString>  </tArg>
  </FindInClassInspector>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<FindInClassInspectorResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<result xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <Assembly>Cubes</Assembly>  <Element>CubeMetaCopierClass.ICubeMetaCopier</Element>[![](../../minus.gif)](../../#)<Member>
  <type>Property</type>  <name>CalendarLevelSet</name>  <typeName>DimCalendarLevelSet</typeName>  <access>Public</access>  <imask>0</imask>  </Member>
  </it>
[![](../../minus.gif)](../../#)<it>
  <Assembly>Cubes</Assembly>  <Element>CubeMetaExporterClass.ICubeMetaExporter</Element>[![](../../minus.gif)](../../#)<Member>
  <type>Property</type>  <name>CalendarLevelSet</name>  <typeName>DimCalendarLevelSet</typeName>  <access>Public</access>  <imask>0</imask>  </Member>
  </it>
[![](../../minus.gif)](../../#)<it>
  <Assembly>Cubes</Assembly>  <Element>ICubeMetaCopier</Element>[![](../../minus.gif)](../../#)<Member>
  <type>Property</type>  <name>CalendarLevelSet</name>  <typeName>DimCalendarLevelSet</typeName>  <access>Public</access>  <imask>0</imask>  </Member>
  </it>
[![](../../minus.gif)](../../#)<it>
  <Assembly>Cubes</Assembly>  <Element>ICubeMetaExporter</Element>[![](../../minus.gif)](../../#)<Member>
  <type>Property</type>  <name>CalendarLevelSet</name>  <typeName>DimCalendarLevelSet</typeName>  <access>Public</access>  <imask>0</imask>  </Member>
  </it>
[![](../../minus.gif)](../../#)<it>
  <Assembly>Cubes</Assembly>  <Element>IExportRequestParams</Element>[![](../../minus.gif)](../../#)<Member>
  <type>Property</type>  <name>CalendarLevelSet</name>  <typeName>DimCalendarLevelSet</typeName>  <access>Public</access>  <imask>0</imask>  </Member>
  </it>
[![](../../minus.gif)](../../#)<it>
  <Assembly>Cubes</Assembly>  <Element>IImportRequestRubricatorParams</Element>[![](../../minus.gif)](../../#)<Member>
  <type>Property</type>  <name>CalendarLevelSet</name>  <typeName>DimCalendarLevelSet</typeName>  <access>Public</access>  <imask>0</imask>  </Member>
  </it>
[![](../../minus.gif)](../../#)<it>
  <Assembly>Dimensions</Assembly>  <Element>DimCalendarLevelSet</Element>  </it>
  </result>
  <posAtResult xmlns="****">0</posAtResult>  </FindInClassInspectorResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "FindInClassInspector" :
  {
   "tMb" :
    {
     "@type" : "q1:OpenMetabaseResult",
     "id" : "COAALKJJBFIOFOAEOHJHMAKDHKFCMMDEEKIEPDMEAHENJCAH!M",
     "sessKey" : "272175",
     "sessCookie" : "C1",
     "version" : "163",
     "defLocale" : "1049",
     "driver" : "2"
    },
   "tArg" :
    {
     "currentLine" :
      {
       "Assembly" : ""
      },
     "findString" : "CalendarLevelSet"
    }
  }
}

### JSON-ответ:


{
 "FindInClassInspectorResult" :
  {
   "result" :
    {
     "it" :
      [
        {
         "Assembly" : "Cubes",
         "Element" : "CubeMetaCopierClass.ICubeMetaCopier",
         "Member" :
          {
           "type" : "Property",
           "name" : "CalendarLevelSet",
           "typeName" : "DimCalendarLevelSet",
           "access" : "Public",
           "imask" : "0"
          }
        },
        {
         "Assembly" : "Cubes",
         "Element" : "CubeMetaExporterClass.ICubeMetaExporter",
         "Member" :
          {
           "type" : "Property",
           "name" : "CalendarLevelSet",
           "typeName" : "DimCalendarLevelSet",
           "access" : "Public",
           "imask" : "0"
          }
        },
        {
         "Assembly" : "Cubes",
         "Element" : "ICubeMetaCopier",
         "Member" :
          {
           "type" : "Property",
           "name" : "CalendarLevelSet",
           "typeName" : "DimCalendarLevelSet",
           "access" : "Public",
           "imask" : "0"
          }
        },
        {
         "Assembly" : "Cubes",
         "Element" : "ICubeMetaExporter",
         "Member" :
          {
           "type" : "Property",
           "name" : "CalendarLevelSet",
           "typeName" : "DimCalendarLevelSet",
           "access" : "Public",
           "imask" : "0"
          }
        },
        {
         "Assembly" : "Cubes",
         "Element" : "IExportRequestParams",
         "Member" :
          {
           "type" : "Property",
           "name" : "CalendarLevelSet",
           "typeName" : "DimCalendarLevelSet",
           "access" : "Public",
           "imask" : "0"
          }
        },
        {
         "Assembly" : "Cubes",
         "Element" : "IImportRequestRubricatorParams",
         "Member" :
          {
           "type" : "Property",
           "name" : "CalendarLevelSet",
           "typeName" : "DimCalendarLevelSet",
           "access" : "Public",
           "imask" : "0"
          }
        },
        {
         "Assembly" : "Dimensions",
         "Element" : "DimCalendarLevelSet"
        }
      ]
    },
   "posAtResult" : "0"
  }
}


public static FindInClassInspectorResult FindInClassInspector(MbId mb, string find)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tFind = new FindInClassInspector()
    {
        tMb = mb,
        tArg = new FindInClassInspectorArg()
        {
            findString = find,
            currentLine = new ClassInspectorLine()
            {
                Assembly = ""
            }
        }
    };
    // Поиск в инспекторе классов
    var result = somClient.FindInClassInspector(tFind);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
