# SemanticLayerCheckPattern: Операция

SemanticLayerCheckPattern: Операция
-


**


# SemanticLayerCheckPattern


## Синтаксис


bool SemanticLayerCheckPattern(string mon, SemanticLayerPatternArg
 tArg)


## Параметры


mon. Моникёр
 для работы с преднастроенными шаблонами подключения к СУБД.


tArg. Настройки проверяемого
 преднастроенного шаблона подключения к СУБД.


## Описание


Операция SemanticLayerCheckPattern
 проверяет подключение к СУБД, настройки которой хранятся в преднастроенном
 шаблоне.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра модели данных с постфиксом !Patterns,
 а в поле tArg.index ключ проверяемого
 шаблона. Моникёр может быть получен при выполнении операции [OpenSemanticLayer](OpenSemanticLayer.htm).
 Ключ шаблона будет доступен в результатах операции [SemanticLayerGetPatterns](SemanticLayerGetPatterns.htm).


Результатом операции будет логическое значение true,
 если проверка подключения к СУБД завершилась успешно. Если подключение
 недоступно, то будет сгенерирована исключительная ситуация, которая должна
 быть обработана в прикладном коде.


## Пример


Ниже приведён пример проверки подключения к СУБД, настройки которой
 сохранены в преднастроенном шаблоне. В запросе передаётся моникёр для
 работы с преднастроенными шаблонами и ключ шаблона. В ответе возвращается
 признак успешной проверки.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SemanticLayerCheckPattern xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">KPACNCCOCDBDGOAEFDJDAIBAMJFFBCDEDJLPICPCMCFDIKCG!M!S!PLDNOFGCOCDBDGOAEMEKOCGKLAEFDMALEOIGKKCECKAAGLFHC!Patterns</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <index>358187</index>  </tArg>
  </SemanticLayerCheckPattern>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SemanticLayerCheckPatternResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SemanticLayerCheckPatternResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SemanticLayerCheckPattern" :
  {
   "mon" : "KPACNCCOCDBDGOAEFDJDAIBAMJFFBCDEDJLPICPCMCFDIKCG!M!S!PLDNOFGCOCDBDGOAEMEKOCGKLAEFDMALEOIGKKCECKAAGLFHC!Patterns",
   "tArg" :
    {
     "index" : "358187"
    }
  }
}

### JSON-ответ:


{
 "SemanticLayerCheckPatternResult" : "1"
}


public static bool SemanticLayerCheckPattern(string moniker, int? patternIndex)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tCheck = new SemanticLayerCheckPattern()
    {
        tArg = new SemanticLayerPatternArg()
        {
            index = patternIndex
        },
        // Моникёр для работы с преднастроенными шаблонами
        mon = moniker + "!Patterns"
    };
    // Проверка подключения к СУБД
    var result = somClient.SemanticLayerCheckPattern(tCheck);
    return result;
}


См. также:


[Работа
 с моделями данных](SemanticLayerOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
