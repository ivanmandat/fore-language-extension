# GetCustomClassInspectorInfo: Операция

GetCustomClassInspectorInfo: Операция
-


**


# GetCustomClassInspectorInfo


## Синтаксис


GetClassInspectorInfoResult GetCustomClassInspectorInfo(MbId
 tMb, GetCustomClassInspectorInfoArg tArg)


## Параметры


tMb. Моникёр соединения с репозиторием.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetCustomClassInspectorInfo
 получает информацию об элементах кода из пользовательского инспектора
 классов среды разработки.


## Комментарии


Для выполнения операции укажите в поле tMb
 моникёр соединения с репозиторием, а в поле tArg
 укажите информацию о сборке, для которой будет получена информация из
 пользовательского инспектора классов. Моникёр может быть получен при выполнении
 операции [OpenMetabase](../Repository/OpenMetabase.htm).


Результатом операции будет список элементов инспектора классов и информация
 об элементах кода в соответствии с заданными параметрами получения информации.


## Пример


Ниже приведён пример получения информации из пользовательского инспектора
 классов о содержимом сборки с указанным ключом.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetCustomClassInspectorInfo xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMb xsi:type="**q1:OpenMetabaseResult**" xmlns="****" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**">
  <id>COAALKJJBFIOFOAEOHJHMAKDHKFCMMDEEKIEPDMEAHENJCAH!M</id>  <sessKey>272175</sessKey>  <sessCookie>C1</sessCookie>  <version>163</version>  <defLocale>1049</defLocale>  <driver>2</driver>  </tMb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <path>118309</path>  <member />
  </tArg>
  </GetCustomClassInspectorInfo>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetCustomClassInspectorInfoResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<subNodes xmlns="****">
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<info>
  <type>Interface</type>  <name>ITest</name>  <access>Private</access>  </info>
  <hasSubNodes>0</hasSubNodes>  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<info>
  <type>Enum</type>  <name>MyEnum</name>  <access>Private</access>  </info>
  <hasSubNodes>0</hasSubNodes>  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<info>
  <type>Class</type>  <name>Test</name>  <typeName>Object</typeName>  <access>Private</access>  </info>
  <hasSubNodes>1</hasSubNodes>  </it>
  </subNodes>
[![](../../minus.gif)](../../#)<info xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <type>Function</type>  <name>TestFunction</name>  <typeName>Integer</typeName>  <access>Private</access>  <blocks />
  <imask>0</imask>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Sub</type>  <name>TestSub</name>  <access>Private</access>  <blocks />
  <imask>0</imask>  </it>
  </info>
  <description xmlns="****">Сборка <b>OBJ118309</b></description>  </GetCustomClassInspectorInfoResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetCustomClassInspectorInfo" :
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
     "path" : "118309",
     "member" : ""
    }
  }
}

### JSON-ответ:


{
 "GetCustomClassInspectorInfoResult" :
  {
   "subNodes" :
    {
     "it" :
      [
        {
         "info" :
          {
           "type" : "Interface",
           "name" : "ITest",
           "access" : "Private"
          },
         "hasSubNodes" : "0"
        },
        {
         "info" :
          {
           "type" : "Enum",
           "name" : "MyEnum",
           "access" : "Private"
          },
         "hasSubNodes" : "0"
        },
        {
         "info" :
          {
           "type" : "Class",
           "name" : "Test",
           "typeName" : "Object",
           "access" : "Private"
          },
         "hasSubNodes" : "1"
        }
      ]
    },
   "info" :
    {
     "it" :
      [
        {
         "type" : "Function",
         "name" : "TestFunction",
         "typeName" : "Integer",
         "access" : "Private",
         "blocks" : "",
         "imask" : "0"
        },
        {
         "type" : "Sub",
         "name" : "TestSub",
         "access" : "Private",
         "blocks" : "",
         "imask" : "0"
        }
      ]
    },
   "description" : "Сборка <b>OBJ118309<\/b>"
  }
}


public static GetClassInspectorInfoResult GetCustomClassInspectorInfo(MbId mb, int modKey, string className = "", string classMember = "")
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetCustomClassInspectorInfo()
    {
        tMb = mb,
        tArg = new GetCustomClassInspectorInfoArg()
        {
            path = modKey.ToString() + (className == "" ? "" : '.' + className),
            member = classMember
        }
    };
    // Получение информации из пользовательского инспектора классов
    var result = somClient.GetCustomClassInspectorInfo(tGet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
