# GetIntelliSenseTooltip: Операция

GetIntelliSenseTooltip: Операция
-


**


# GetIntelliSenseTooltip


## Синтаксис


GetIntelliSenseTooltipResult GetIntelliSenseTooltip(OdId
 tObject, GetIntelliSenseArg tArg)


## Параметры


tObject. Моникёр
 модуля, с кодом которого осуществляется работа.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetIntelliSenseTooltip
 получает информацию, используемую при формировании всплывающей подсказки
 для типа/члена типа в коде модуля.


## Комментарии


Для выполнения операции укажите в поле tObject
 моникёр модуля, а в поле tArg.cursor
 координаты расположения курсора в коде. Если модуль был изменён, но еще
 не сохранялся, то его код может быть передан в поле tArg.meta.
 Результатом операции будет коллекция элементов кода, которые могут быть
 использованы в указанной координате в коде.


## Пример


Ниже приведён пример получения информации о члене типа, которая используется
 для формирования всплывающей подсказки. В запросе передаётся моникёр модуля
 и координата в коде. В ответе приходит информация о члене типа и его параметрах.
 В примере C# используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetIntelliSenseTooltip xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>EBNIJHOJBFHOFOAEMHDCCHPHGKHABKGEPKLBOEMGMNCFCAIK!M!172002</id>  </tObject>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<cursor>
  <col>48</col>  <row>26</row>  </cursor>
  </tArg>
  </GetIntelliSenseTooltip>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetIntelliSenseTooltipResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<tooltip xmlns="****">
  <type>Sub</type>  <name>CreateWithParams</name>  <access>Public</access>[![](../../minus.gif)](../../#)<blocks>
[![](../../minus.gif)](../../#)<it>
  <type>Var</type>  <name>Size</name>  <typeName>Integer</typeName>  <access>Public</access>  <imask>4</imask>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Var</type>  <name>DefaultValue</name>  <typeName>Double</typeName>  <Value>0</Value>  <access>Public</access>  <imask>4</imask>  </it>
  </blocks>
  <imask>2</imask>  </tooltip>
  <selectedChild xmlns="****">1</selectedChild>  </GetIntelliSenseTooltipResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetIntelliSenseTooltip" :
  {
   "tObject" :
    {
     "id" : "EBNIJHOJBFHOFOAEMHDCCHPHGKHABKGEPKLBOEMGMNCFCAIK!M!172002"
    },
   "tArg" :
    {
     "cursor" :
      {
       "col" : "48",
       "row" : "26"
      }
    }
  }
}

### JSON-ответ:


{
 "GetIntelliSenseTooltipResult" :
  {
   "tooltip" :
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
     "imask" : "2"
    },
   "selectedChild" : "1"
  }
}


public static GetIntelliSenseTooltipResult GetIntelliSenseTooltip(MbId mb, string moduleId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetIntelliSenseTooltip()
    {
        tArg = new GetIntelliSenseArg()
        {
            cursor = new CodePoint()
            {
                row = 26,
                col = 48
            }
        },
        // Моникёр модуля
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, moduleId).k }
    };
    // Получение информации
    var result = somClient.GetIntelliSenseTooltip(tGet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
