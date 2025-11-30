# FindInCustomClassInspector: Операция

FindInCustomClassInspector: Операция
-


**


# FindInCustomClassInspector


## Синтаксис


FindInClassInspectorResult FindInCustomClassInspector(MbId
 tMb, FindInCustomClassInspectorArg tArg)


## Параметры


tMb. Моникёр соединения с репозиторием.


tArg. Параметры выполнения
 операции.


## Описание


Операция FindInCustomClassInspector
 осуществляет поиск в пользовательском инспекторе классов.


## Комментарии


Для выполнения операции укажите в поле tMb
 моникёр соединения с репозиторием, а в поле tArg
 задайте параметры поиска элементов кода. Моникёр может быть получен при
 выполнении операции [OpenMetabase](../Repository/OpenMetabase.htm).


Результатом операции будет список найденных элементов пользовательского
 инспектора классов.


## Пример


Ниже приведён пример поиска по пользовательскому инспектору классов.
 В запросе передаётся моникёр открытого соединения с репозиторием и информация
 для поиска. В ответе возвращается список элементов с результатами поиска.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<FindInCustomClassInspector xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMb xsi:type="**q1:OpenMetabaseResult**" xmlns="****" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**">
  <id>COAALKJJBFIOFOAEOHJHMAKDHKFCMMDEEKIEPDMEAHENJCAH!M</id>  <sessKey>272175</sessKey>  <sessCookie>C1</sessCookie>  <version>163</version>  <defLocale>1049</defLocale>  <driver>2</driver>  </tMb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<currentLine>
  <Assembly />
  </currentLine>
  <findString>test</findString>  <ids>OBJ118309</ids>  </tArg>
  </FindInCustomClassInspector>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<FindInCustomClassInspectorResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<result xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <Assembly>OBJ118309</Assembly>  <Element />
[![](../../minus.gif)](../../#)<Member>
  <type>Function</type>  <name>TestFunction</name>  <typeName>Integer</typeName>  <access>Private</access>  <blocks />
  <imask>0</imask>  </Member>
  </it>
[![](../../minus.gif)](../../#)<it>
  <Assembly>OBJ118309</Assembly>  <Element />
[![](../../minus.gif)](../../#)<Member>
  <type>Sub</type>  <name>TestSub</name>  <access>Private</access>  <blocks />
  <imask>0</imask>  </Member>
  </it>
[![](../../minus.gif)](../../#)<it>
  <Assembly>OBJ118309</Assembly>  <Element>ITest</Element>  </it>
[![](../../minus.gif)](../../#)<it>
  <Assembly>OBJ118309</Assembly>  <Element>ITest</Element>[![](../../minus.gif)](../../#)<Member>
  <type>Sub</type>  <name>Test</name>  <access>Private</access>  <imask>0</imask>  </Member>
  </it>
[![](../../minus.gif)](../../#)<it>
  <Assembly>OBJ118309</Assembly>  <Element>Test</Element>  </it>
[![](../../minus.gif)](../../#)<it>
  <Assembly>OBJ118309</Assembly>  <Element>Test</Element>[![](../../minus.gif)](../../#)<Member>
  <type>Sub</type>  <name>Test</name>  <access>Private</access>  <blocks />
  <imask>0</imask>  </Member>
  </it>
[![](../../minus.gif)](../../#)<it>
  <Assembly>OBJ118309</Assembly>  <Element>Test.ITest</Element>  </it>
[![](../../minus.gif)](../../#)<it>
  <Assembly>OBJ118309</Assembly>  <Element>Test.ITest</Element>[![](../../minus.gif)](../../#)<Member>
  <type>Sub</type>  <name>Test</name>  <access>Private</access>  <imask>0</imask>  </Member>
  </it>
  </result>
  <posAtResult xmlns="****">0</posAtResult>  </FindInCustomClassInspectorResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "FindInCustomClassInspector" :
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
     "findString" : "test",
     "ids" : "OBJ118309"
    }
  }
}

### JSON-ответ:


{
 "FindInCustomClassInspectorResult" :
  {
   "result" :
    {
     "it" :
      [
        {
         "Assembly" : "OBJ118309",
         "Element" : "",
         "Member" :
          {
           "type" : "Function",
           "name" : "TestFunction",
           "typeName" : "Integer",
           "access" : "Private",
           "blocks" : "",
           "imask" : "0"
          }
        },
        {
         "Assembly" : "OBJ118309",
         "Element" : "",
         "Member" :
          {
           "type" : "Sub",
           "name" : "TestSub",
           "access" : "Private",
           "blocks" : "",
           "imask" : "0"
          }
        },
        {
         "Assembly" : "OBJ118309",
         "Element" : "ITest"
        },
        {
         "Assembly" : "OBJ118309",
         "Element" : "ITest",
         "Member" :
          {
           "type" : "Sub",
           "name" : "Test",
           "access" : "Private",
           "imask" : "0"
          }
        },
        {
         "Assembly" : "OBJ118309",
         "Element" : "Test"
        },
        {
         "Assembly" : "OBJ118309",
         "Element" : "Test",
         "Member" :
          {
           "type" : "Sub",
           "name" : "Test",
           "access" : "Private",
           "blocks" : "",
           "imask" : "0"
          }
        },
        {
         "Assembly" : "OBJ118309",
         "Element" : "Test.ITest"
        },
        {
         "Assembly" : "OBJ118309",
         "Element" : "Test.ITest",
         "Member" :
          {
           "type" : "Sub",
           "name" : "Test",
           "access" : "Private",
           "imask" : "0"
          }
        }
      ]
    },
   "posAtResult" : "0"
  }
}


public static FindInClassInspectorResult FindInCustomClassInspector(MbId mb, string find, string objectsIds)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tFind = new FindInCustomClassInspector()
    {
        tMb = mb,
        tArg = new FindInCustomClassInspectorArg()
        {
            findString = find,
            ids = objectsIds,
            currentLine = new ClassInspectorLine()
            {
                Assembly = ""
            }
        }
    };
    // Поиск в пользовательском инспекторе классов
    var result = somClient.FindInCustomClassInspector(tFind);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
