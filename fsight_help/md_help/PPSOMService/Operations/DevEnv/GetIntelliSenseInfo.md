# GetIntelliSenseInfo: Операция

GetIntelliSenseInfo: Операция
-


**


# GetIntelliSenseInfo


## Синтаксис


GetIntelliSenseInfoResult GetIntelliSenseInfo(OdId
 tObject, GetIntelliSenseArg tArg)


## Параметры


tObject. Моникёр
 модуля, с кодом которого осуществляется работа.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetIntelliSenseInfo
 получает список типов и членов типов, доступных для использования в текущей
 точке кода.


## Комментарии


Операция позволяет получить тот список, который в дальнейшем отображается
 при использовании технологии IntelliSense во время разработки кода модуля.
 Для выполнения операции укажите в поле tObject
 моникёр модуля, а в поле tArg.cursor
 координаты расположения курсора в коде. Если модуль был изменён но еще
 не сохранялся, то его код может быть передан в поле tArg.meta.
 Результатом операции будет коллекция элементов кода, которые могут быть
 использованы в указанной координате в коде.


## Пример


Ниже приведён пример получения списка членов типов, доступных для использования
 в заданной координате кода. В запросе передаётся моникёр модуля и координата
 в коде. В ответе приходит список членов типов с их параметрами, доступных
 для использования в этом месте кода. В примере C# используется функция
 FindObjectById, код которой приведен
 в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetIntelliSenseInfo xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>EBNIJHOJBFHOFOAEMHDCCHPHGKHABKGEPKLBOEMGMNCFCAIK!M!172002</id>  </tObject>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<cursor>
  <col>30</col>  <row>26</row>  </cursor>
  </tArg>
  </GetIntelliSenseInfo>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetIntelliSenseInfoResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<items xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <type>Sub</type>  <name>Create</name>  <access>Public</access>  <blocks />
  <imask>2</imask>  <helpString />
  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Sub</type>  <name>CreateWithParams</name>  <access>Public</access>[![](../../minus.gif)](../../#)<blocks>
[![](../../minus.gif)](../../#)<it>
  <type>Var</type>  <name>Size</name>  <typeName>Integer</typeName>  <access>Public</access>  <imask>4</imask>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Var</type>  <name>DefaultValue</name>  <typeName>Double</typeName>  <Value>0</Value>  <access>Public</access>  <imask>4</imask>  </it>
  </blocks>
  <imask>2</imask>  <helpString />
  </it>
  </items>
  </GetIntelliSenseInfoResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetIntelliSenseInfo" :
  {
   "tObject" :
    {
     "id" : "EBNIJHOJBFHOFOAEMHDCCHPHGKHABKGEPKLBOEMGMNCFCAIK!M!172002"
    },
   "tArg" :
    {
     "cursor" :
      {
       "col" : "30",
       "row" : "26"
      }
    }
  }
}

### JSON-ответ:


{
 "GetIntelliSenseInfoResult" :
  {
   "items" :
    {
     "it" :
      [
        {
         "type" : "Sub",
         "name" : "Create",
         "access" : "Public",
         "blocks" : "",
         "imask" : "2",
         "helpString" : ""
        },
        {
         "type" : "Sub",
         "name" : "CreateWithParams",
         "access" : "Public",
         "blocks" :
          {
           "it" :
            [
              {
               "type" : "Var",
               "name" : "Size",
               "typeName" : "Integer",
               "access" : "Public",
               "imask" : "4"
              },
              {
               "type" : "Var",
               "name" : "DefaultValue",
               "typeName" : "Double",
               "Value" : "0",
               "access" : "Public",
               "imask" : "4"
              }
            ]
          },
         "imask" : "2",
         "helpString" : ""
        }
      ]
    }
  }
}


public static GetIntelliSenseInfoResult GetIntelliSenseInfo(MbId mb, string moduleId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetIntelliSenseInfo()
    {
        tArg = new GetIntelliSenseArg()
        {
            cursor = new CodePoint()
            {
                row = 26,
                col = 30
            }
        },
        // Моникёр модуля
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, moduleId).k }
    };
    // Получение информации
    var result = somClient.GetIntelliSenseInfo(tGet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
