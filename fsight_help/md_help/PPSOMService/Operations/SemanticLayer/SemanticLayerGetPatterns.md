# SemanticLayerGetPatterns: Операция

SemanticLayerGetPatterns: Операция
-


**


# SemanticLayerGetPatterns


## Синтаксис


SemanticLayerPatterns SemanticLayerGetPatterns(string
 mon, SemanticLayerPatterns tArg)


## Параметры


mon. Моникёр
 для работы с преднастроенными шаблонами подключения к СУБД.


tArg. Параметры выполнения
 операции.


## Описание


Операция SemanticLayerGetPatterns
 получает список преднастроенных шаблонов подключения к СУБД.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра модели данных с постфиксом !Patterns.
 Моникёр может быть получен при выполнении операции [OpenSemanticLayer](OpenSemanticLayer.htm).


Если в поле tArg.its указать
 пустую коллекцию, а поле tArg.admin
 не указывать, то для шаблонов будет получена только общая информация -
 ключи и наименования. Если добавить поле admin,
 то для шаблонов также будут получены настройки подключения к СУБД, которые
 в них хранятся.


Результатом выполнения операции будут полученные преднастроенные шаблоны
 подключения к СУБД.


## Пример


Ниже приведён пример получения общего списка преднастроенных шаблонов
 подключения к СУБД. В запросе передаётся моникёр для работы с преднастроенными
 шаблонами и пустая коллекция шаблонов. В ответе возвращаются ключи и наименования
 имеющихся преднастроенных шаблонов.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SemanticLayerGetPatterns xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">KPACNCCOCDBDGOAEFDJDAIBAMJFFBCDEDJLPICPCMCFDIKCG!M!S!PLDNOFGCOCDBDGOAEMEKOCGKLAEFDMALEOIGKKCECKAAGLFHC!Patterns</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<its>
  <it />
  </its>
  </tArg>
  </SemanticLayerGetPatterns>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SemanticLayerGetPatternsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<its xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <index>358187</index>  <name>Warehouse</name>  </it>
[![](../../minus.gif)](../../#)<it>
  <index>358291</index>  <name>Services</name>  </it>
[![](../../minus.gif)](../../#)<it>
  <index>358700</index>  <name>Подключение к DBServer</name>  </it>
  </its>
  </SemanticLayerGetPatternsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SemanticLayerGetPatterns" :
  {
   "mon" : "KPACNCCOCDBDGOAEFDJDAIBAMJFFBCDEDJLPICPCMCFDIKCG!M!S!PLDNOFGCOCDBDGOAEMEKOCGKLAEFDMALEOIGKKCECKAAGLFHC!Patterns",
   "tArg" :
    {
     "its" :
      {
       "it" :
        [
          ""
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "SemanticLayerGetPatternsResult" :
  {
   "its" :
    {
     "it" :
      [
        {
         "index" : "358187",
         "name" : "Warehouse"
        },
        {
         "index" : "358291",
         "name" : "Services"
        },
        {
         "index" : "358700",
         "name" : "Подключение к DBServer"
        }
      ]
    }
  }
}


public static SemanticLayerPatterns SemanticLayerGetPatterns(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new SemanticLayerGetPatterns()
    {
        tArg = new SemanticLayerPatterns()
        {
            its = new SemanticLayerPatternArg[]
            {
                new SemanticLayerPatternArg()
            }
        },
        // Моникёр для работы с преднастроенными шаблонами
        mon = moniker + "!Patterns"
    };
    // Получение списка преднастроенных шаблонов подключения к СУБД
    var result = somClient.SemanticLayerGetPatterns(tGet);
    return result;
}


См. также:


[Работа
 с моделями данных](SemanticLayerOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
